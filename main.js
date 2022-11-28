/**
 * @class Task
 */
class Task {
    
    #name;
    #date;
    #description;
    #myElements;

    /**
     * @author Alex Nieto
     * @param {string} status determine the status of the task
     */
    constructor(status = "In progress") {
        this.#myElements = {
                name: this.#name,
                date: this.#date,
                description: this.#description,
                status: status
            }
    }

    // GETTER
    /**
     * 
     * @returns {dictionary} A dictionary of all tasks elements
     */
    getValues() {
        return this.#myElements;
    }

    // SET VALUES
    /**
     * 
     * @param {string} pName name of the task
     * @param {Date} pDate  date of the task (when it's started and then it's finished)
     * @param {string} pDescription description of the tasks
    */
    setValues(pName, pDate, pDescription) {
        this.#name = pName;
        this.#date = pDate;
        this.#description = pDescription;
    }

    removeValues() {

    }


}

/**
 * @class List
 */
class List {

    #name;
    /**
     * 
     * @author Alex Nieto
     */
    constructor() {

    }

    /**
     * 
     * @returns {string} return the value of the name of the list
     */
    getValue() {
        return this.#name;
    }

    /**
     * 
     * @param {string} value set the value of the name
     */
    setValue(value) {
        this.#name = value;
    }

    removeValue() {

    }


}

class View {

    /**
     * 
     * @author Alex Nieto
     */
    constructor() {

    }

    #render() {
        switch(this.var) { // This var is just a placeholder
            case "task":
                break;
            case "list":
                break;
            case "taskCreation":
                break;
            default:
                break;
        }
    }
}


class TodoController {

    #myTask;
    #myList;
    #myView;
    
    // This dictionary will append Tasks and lists objects
    #myJsonDB = {
        "tasks": [],
        "list": []
    };

    /**
     * 
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
        let myNewTask = this.drawView(dataToRender);
        this.#render(myNewTask);
    }

    #addList() {
        //code to add new list goes here
        let dataToRender = this.#dataManagement();
        let myNewList = this.drawView(dataToRender);
        this.#render(myNewList);
    }

    deleteTask() {
        //code to add new list goes here
        let dataToRender = this.#dataManagement();
        let myNewTask = this.drawView(dataToRender);
    }

    deleteList() {
        //code to add new list goes here
        let dataToRender = this.#dataManagement();
        let myNewList = this.drawView(dataToRender); 

    }

    #dataManagement() {
        // Something that we will do with this.#myJsonDB
    }

    /**
     * 
     * @param {object} myData object with all the necessary data drawed to render 
     * @returns {object} return the object that has been drawed and that it's prepared to render
     */
    drawView(myData) {
        // code to render goes here
        return view;
    }

    #render(view) {
        
    }
}