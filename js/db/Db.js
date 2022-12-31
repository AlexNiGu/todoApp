export class DB {
  myStorage = window.localStorage;

  constructor() {}

  intiDB() {
    try {
      return JSON.parse(this.myStorage.getItem("taskDB"));
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param {Object} task  task object for our App
   */
  putIntoDB(newTask = null) {
    try {
      if (!this.myStorage.getItem("taskDB")) {
        this.myStorage.setItem("taskDB", JSON.stringify([newTask]));
      } else { 
        //update localStorage
        let tasks = JSON.parse(this.myStorage.getItem("taskDB"));
        tasks.push(newTask);
        this.myStorage.setItem("taskDB", JSON.stringify(tasks));
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  removeFromDB(index) {
    let allTasks = JSON.parse(this.myStorage.getItem("taskDB"));
    this.myStorage.clear();
    let updatedTasks = allTasks.filter(task => task.id !== index);
    this.myStorage.setItem('taskDB', JSON.stringify(updatedTasks));
  }
}
