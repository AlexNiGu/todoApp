
export class Task {
    
    #name;
    #date;
    #description;
    #status = 'In progress';
    myElements = {
        name: this.#name,
        date: this.#date,
        description: this.#description,
        status: this.#status
    };
    /**
     * @author Alex Nieto
     */
    constructor() {
        
    }



    createTask(cardTitle,cardDate, cardDescription) {

        return this.myElements = {
            name: cardTitle,
            data: cardDate,
            description: cardDescription,
            status: this.#status
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
        this.#status = "In progress";
    }

    removeValues() {

    }


}