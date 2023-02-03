export class View {
  view;
  root = document.getElementById("root");
  #cardContent = document.querySelector(".main-content");
  listTitle = document.getElementById("taskTitle");

  /**
   * @author Alex Nieto
   */
  constructor() {}

  render(section, data = "") {
    this.view = "";
    switch (section) {
      case "task":
        // Creation of main Div

        let divMainCard = document.createElement("div");
        divMainCard.setAttribute("class", "row p-3 ms-5 me-5");
        divMainCard.setAttribute("id", `${data.id}`);

        //================================================================================================
        // Creation of svg (icons of the buttons)

        let svgIconTag = document.createElement("svg");
        svgIconTag.setAttribute("width", "18");
        svgIconTag.setAttribute("height", "18");
        svgIconTag.setAttribute("viewBox", "0 0 18 18");
        svgIconTag.setAttribute("fill", "none");
        svgIconTag.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        let pathIconSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        pathIconSvg.setAttribute(
          "d",
          "M6.33333 9.66667L8.33333 11.6667L11.6667 7M17 9C17 10.0506 16.7931 11.0909 16.391 12.0615C15.989 13.0321 15.3997 13.914 14.6569 14.6569C13.914 15.3997 13.0321 15.989 12.0615 16.391C11.0909 16.7931 10.0506 17 9 17C7.94943 17 6.90914 16.7931 5.93853 16.391C4.96793 15.989 4.08601 15.3997 3.34315 14.6569C2.60028 13.914 2.011 13.0321 1.60896 12.0615C1.20693 11.0909 1 10.0506 1 9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9Z"
        );
        pathIconSvg.setAttribute("stroke", "#F0F0F0");
        pathIconSvg.setAttribute("stroke-width", "1.5");
        pathIconSvg.setAttribute("stroke-linecap", "round");
        pathIconSvg.setAttribute("stroke-linejoin", "round");

        // -------------------------------------------------------------------

        let svgStateTag = document.createElement("svg");
        svgStateTag.setAttribute("width", "17");
        svgStateTag.setAttribute("height", "17");
        svgStateTag.setAttribute("viewBox", "0 0 17 17");
        svgStateTag.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        let pathStateSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        pathStateSvg.setAttribute(
          "d",
          "M2.68578 2.08109C4.6067 1.75598 6.55155 1.59297 8.49978 1.59375C10.481 1.59375 12.4239 1.76092 14.3145 2.08109C14.6207 2.13397 14.8984 2.29359 15.0982 2.53164C15.298 2.76969 15.407 3.0708 15.406 3.38159V4.12109C15.4059 4.68462 15.1819 5.22504 14.7834 5.62346L10.4045 10.0024C10.3058 10.1011 10.2276 10.2183 10.1743 10.3472C10.1209 10.4762 10.0935 10.6144 10.0935 10.7539V12.8272C10.0936 13.2219 9.98384 13.6088 9.77641 13.9446C9.56897 14.2804 9.27212 14.5518 8.91911 14.7284L7.67457 15.3503C7.59358 15.3907 7.5036 15.4098 7.41316 15.4057C7.32273 15.4016 7.23485 15.3744 7.15786 15.3268C7.08086 15.2792 7.01731 15.2127 6.97324 15.1336C6.92917 15.0546 6.90603 14.9655 6.90603 14.875V10.7539C6.90578 10.4722 6.79368 10.2022 6.59436 10.0031L2.21686 5.62275C1.81832 5.22433 1.59436 4.68392 1.59424 4.12038V3.38159C1.59424 2.74621 2.04757 2.18946 2.68649 2.08109H2.68578Z"
        );
        pathStateSvg.setAttribute("fill-rule", "evenodd");
        pathStateSvg.setAttribute("clip-rule", "evenodd");
        pathStateSvg.style.fill = "#373737";

        // -------------------------------------------------------------------
        //append svg
        svgIconTag.appendChild(pathIconSvg);
        svgStateTag.appendChild(pathStateSvg);

        //================================================================================================

        divMainCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="div-group-card-tittle">
                        <h5 class="myCard-tittle">${data.title}</h5>
                        <div class="deleteTask" data-id="${data.id}">&#215;</div>
                    </div>
                    <h6 class="myCard-date mb-2 text-muted">${data.date} - ${data.date}</h6>
                    <p class="card-text">${data.description}</p>
                    <div class="card-button-group">
                        <button class="card-button-succes btn text-light" type="button">${data.status} ${svgIconTag.outerHTML}</button>
                        <button class="btn" type="button">${svgStateTag.outerHTML}</button>
                    </div>
                </div>
            </div>
          </div>
        `;

        this.view = divMainCard;

        break;
      case "list":
        let listContainer = document.getElementById('list-container');
        let image = document.createElement("img");
        image.setAttribute("src", "img/edit.svg");
        image.setAttribute("class", "ms-3 edit-icon");
        let listElement = document.createElement("li");
        listElement.setAttribute("contenteditable", true);
        listElement.setAttribute("class", "mt-5 listElem");
        if (data == 'Taks List')  listElement.setAttribute("class", "mt-5 listElem list-background");
        let textNode = document.createTextNode(data);

        listElement.appendChild(textNode);
        // listElement.appendChild(image);


        listContainer.innerHTML += listElement.outerHTML

        this.view = listContainer;
        break;

      case "taskForm":
        let myFormTaskCreation = document.createElement("form");
        myFormTaskCreation.setAttribute(
          "class",
          "row ms-5 me-5 form-task-creat"
        );

        myFormTaskCreation.innerHTML = `
          <div class="imageBg title-form">
              <h1 class="p-3">Task creation</h1>
          </div>
          <div class="mb-3 px-5 pt-2 pb-3">
              <div class="myForm mt-4">
                  <div class="mb-3 me-2">
                      <label class="form-label">Title</label>
                      <input type="text" class="form-control" id="taskFormTitle">
                  </div>
                  <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input type="date" class="form-control" id="taskDate" min="2018-01-01" max="2018-12-31">
                  </div>
              </div>
              <div class="mt-2">
                  <label class="form-label">description</label>
                  <textarea class="form-control" id="taskTextarea" rows="3"></textarea>
              </div>
              <button type="button" class="btn btn-primary mt-3" id="createTask">Submit</button>
          </div>
        `;

        this.view = myFormTaskCreation;
        break;
      default:
        break;
    }

    this.#appendToHtml(section, data);
  }

  removeView(section) {
    switch (section) {
      case "taskForm":
        this.root.removeChild(document.querySelector(".form-task-creat"));
    }
  }

  #appendToHtml(section, value='') {
    switch (section) {
      case "list":

        this.listTitle.removeChild(this.listTitle.children[0])
        let titleNode = document.createElement('h1');
        titleNode.setAttribute('class', 'myFontClass-1');
        titleNode.innerHTML = value;
        this.listTitle.innerHTML = titleNode.outerHTML;
        break;
      case "task":
        // insertAjacentElement insert and html element
        this.#cardContent.insertAdjacentElement("beforeend", this.view);
        this.view.animate(
          [
            {transform:'scale(1)', opacity: '0'},
            {transform: 'scale(1)', opacity: '1'}
          ],
          {
            duration: 500,
            iterations: 1
          }
        )
        break;
      case "taskForm":
        // insertAdjacentHTML insert and string of html
        this.root.insertAdjacentElement("beforeend", this.view);
        this.view.animate(
          [
            {transform:'translateY(-500px)', opacity: '0'},
            {transform: 'transalteY(0)', opacity: '1'}
          ],
          {
            duration: 500,
            iterations: 1
          }
        )
    }
  }
}
