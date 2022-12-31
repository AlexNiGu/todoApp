export class Task 
{
  #status = "In progress";
  #title;
  #date;
  #description;
  #idTask;
  #list;
  myElements = {};
  lenghTasks;


  /**
   * @author Alex Nieto
   */
  constructor() {}

  getTask() 
  {
    return (
      this.myElements = {
        id: this.#idTask,
        title: this.#title,
        date: this.#date,
        description: this.#description,
        status: this.#status,
        list: this.#list,
      }
    );
  }


  setTitle(value) 
  {
    if (typeof value == 'string' ) this.#title = value;
  }

  setDate(value) 
  {
    if (typeof value == 'string' ) this.#date = value;
  }

  setList(value)
  {
    if (typeof value == 'string') this.#list = value;
  }

  setDescription(value) 
  {
    if (typeof value == 'string' ) this.#description = value;
  }

  setID()
  {
    // this.#idTask = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    this.#idTask = crypto.randomUUID(); // Crypto API give you unique id
  }
}