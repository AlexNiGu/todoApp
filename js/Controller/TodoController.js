import { List } from "./List";
import { Task } from "./Task";
import { View } from "../View/view";


export class TodoController {

    #myTask;
    #myList;
    #myView;
    
    // This dictionary will append Tasks and lists objects
    #myJsonDB = {
        "tasks": [],
        "list": []
    };

    /**
     * @author Alex Nieto
     */
    constructor() {
        this.#myList = new List();
        this.#myTask = new Task();
        this.#myView = new View();
    }

    #addTask() {
        // code to add new task goes here
        let dataToRender = this.#dataManagement();
        let myNewTask = this.#drawView(dataToRender);
        this.#render(myNewTask);
    }

    #addList() {
        //code to add new list goes here
        let dataToRender = this.#dataManagement();
        let myNewList = this.#drawView(dataToRender);
        this.#render(myNewList);
    }

    deleteTask() {
        //code to add new list goes here
        let dataToRender = this.#dataManagement();
        let myNewTask = this.#drawView(dataToRender);
    }

    deleteList() {
        //code to add new list goes here
        let dataToRender = this.#dataManagement();
        let myNewList = this.#drawView(dataToRender); 

    }

    #dataManagement() {
        // Something that we will do with this.#myJsonDB
    }

    /**
     * 
     * @param {object} myData object with all the necessary data drawed to render 
     * @returns {object} return the object that has been drawed and that it's prepared to render
     */
    #drawView(myData) {
        // code to render goes here
        return view;
    }

    #render(view) {
        
    }
    



    //////////////////////////////////////////////////

    // Here there will be getters and setters

    
}