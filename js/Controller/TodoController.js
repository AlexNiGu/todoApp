import { DB } from "../db/db.js";
import { List } from "../Model/List.js";
import { Task } from "../Model/Task.js";
import { View } from "../View/View.js";

export class TodoController {
  myTask;
  myList;
  myView;
  mydb;
  allTasks;

  // This dictionary will append Tasks and lists objects
  #myJsonDB = {
    tasks: [],
    list: [],
  };

  /**
   * @author Alex Nieto
   */
  constructor() {
    this.mydb = new DB();
    this.myView = new View();
    this.allTasks = this.mydb.intiDB();
    this.#init();
  }

  #init(listName='') {
    console.log(this.allTasks);
    let arrOfList = new Array();

    let list_aux = ''; // first list tasks is the first that will be rendered

    // This first conidition is for the start of the App
    if (this.allTasks) {
      this.allTasks.forEach(task =>  {

        // render all lists names
        if (task.list != list_aux && task.list != arrOfList.find(elem => elem == task.list)) {
          arrOfList.push(task.list);
          list_aux = task.list;
          this.myView.render("list", task.list);
        }
        // render all tasks of the first List
        if (task.list == this.allTasks[0].list) {
          this.myView.render("task", task);
        }

      })
      // document.getElementById("taskTitle").innerHTML = `<h1 class="myFontClass-1">${this.allTasks[0].list}</h1>`;
      if (document.querySelector('.listElem')) {
        document.querySelector('.listElem').classList.add('list-background');
      }
    }

    this.#listener('task');

  }

  changeList(listName='') {
    this.allTasks = this.mydb.intiDB();
    document.querySelector('.main-content').innerHTML = '';
      this.allTasks.forEach(task => {
        if (listName == task.list) {
          this.myView.render("task", task);
        }
      })
  }

  #listener(listener, taskChecker) {

    switch(listener) {
      case 'task':
        // if you don't use bind(this) there is not going to reference this Class
        document.getElementById("newTask").removeEventListener("click", this.newTaskForm.bind(this));
        document.getElementById("newTask").addEventListener("click", this.newTaskForm.bind(this));
        document.getElementById('listButton').removeEventListener("click", this.addList.bind(this));
        document.getElementById('listButton').addEventListener("click", this.addList.bind(this));


        // Delete Task
        document.querySelector('.main-content').addEventListener('click', (event)=> {
          if (event.target.classList[0] == 'deleteTask') {
            this.deleteTask(document.getElementById(`${event.target.dataset.id}`))
          }
        })


        // Edit list Name
        if (document.querySelector('.listElem')) {
        }
        
        
        
        // Selection of list of Tasks
        document.getElementById('list-container').addEventListener('click', (event)=> {
          if (event.target.classList[1] == 'listElem') {
            document.querySelectorAll('.listElem').forEach(value => {
              if (value.attributes.contentEditable.value == 'true') {
                value.addEventListener('input', (event)=> {
                  console.log(event.target.textContent)
                  document.querySelector('.myFontClass-1').textContent = event.target.textContent;
                });

              }
            })
            
            // TODOO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            // document.querySelectorAll('.edit-icon').forEach(icon => {
            //   icon.addEventListener('click', (event)=> {
            //     event.target.parentElement.attributes.contentEditable.value = true;
            //   })
            // })
            this.changeList(event.target.textContent);
            document.querySelectorAll('.listElem').forEach(task => {if (task.classList.length > 2) task.classList.remove('list-background')})
            event.target.classList.add('list-background');
            document.querySelector('.myFontClass-1').textContent = event.target.textContent;
          } 
        })

        break;
      default:
        break;
    }
  }

  newTaskForm() {
    this.myView.render("taskForm");
    document.getElementById("createTask").removeEventListener("click", this.addTask.bind(this));
    document.getElementById("createTask").addEventListener("click", this.addTask.bind(this));
  }

  addTask() {
    this.myTask = new Task();
    this.myTask.setTitle(document.querySelector("#taskFormTitle").value);
    this.myTask.setDate(document.querySelector("#taskDate").value);
    this.myTask.setDescription(document.querySelector("#taskTextarea").value);
    this.myTask.setList(document.querySelector(".myFontClass-1").textContent);
    this.myTask.setID();
    let myNewTask = this.myTask.getTask();
    this.myView.render("task", myNewTask);
    this.myView.removeView('taskForm');
    this.mydb.putIntoDB(myNewTask);
  }

  addList() {
    this.myList = new List();
    let value = document.getElementById("listInput").value
    if (value != '') {
      this.myList.setValue(value);
      let myNewList = this.myList.getValue();
      this.myView.render("list", myNewList);
      document.querySelectorAll('.listElem').forEach(list => {
        list.textContent == value ? list.classList.add('list-background'): list.classList.remove('list-background');
      })
      document.getElementById("listInput").value = '';
      document.querySelector('.main-content').innerHTML = '';
    }
  }

  deleteTask(task) {
    console.log(task)
    // let id_aux = task.id.split('_');
    // let id = Number(id_aux[1]);
    task.parentNode.removeChild(task);
    this.mydb.removeFromDB(task.id);
  }



  // deleteList() {
  //   //code to add new list goes here
  //   let dataToRender = this.#dataManagement();
  //   let myNewList = this.#drawView(dataToRender);
  // }

}
