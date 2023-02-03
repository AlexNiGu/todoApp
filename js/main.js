import { TodoController } from "./controller/TodoController.js";
var myController = new TodoController();


///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * First custom EVENT
 * it's a custom event to get the div element
*/

const myEvent = new Event("custom:getDOM");

document.addEventListener("custom:getDOM", e=> {
  console.log(e.target);
})

document.dispatchEvent(myEvent);


///////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Second custom EVENT
 * It's a double click event
*/
const myImg = document.getElementById('userImg');

let toggle = true;

const MAX_DOUBLI_CLICK_TIME = 500;
let lastClick = 0

// basically to make a double click event we need to compare the time between clicks
// if the time between clicks is less than 500ms then it's a double click

myImg.addEventListener("click", e => {
myImg.style.border = "2px solid white";
myImg.style.borderRadius = "25px";
  const timeBetweenClicks = e.timeStamp - lastClick;
  if (timeBetweenClicks > MAX_DOUBLI_CLICK_TIME) {
    lastClick = e.timeStamp;
    return
  }
  const doubleClickEvent = new CustomEvent("custom:doubleClick", {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail: {
      timeBetweenClicks
    }
  });
  e.target.dispatchEvent(doubleClickEvent); // we trigger the event
  lastClick = 0;
})

myImg.addEventListener("custom:doubleClick", e=> {
    if (toggle == true) {
        myImg.style.transform = "scale(1.5)";
        toggle = false;
    }else {
        myImg.style.transform = "scale(1)";
        toggle = true;
    }
    myImg.style.border = "none";
    myImg.style.borderRadius = "0px";
    console.log('double click');
})





