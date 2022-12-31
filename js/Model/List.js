
export class List {

    #name;
    /**
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




}