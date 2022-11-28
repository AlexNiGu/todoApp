export class View {
  view;

  /**
   * @author Alex Nieto
   */
  constructor() {}

  #render() {
    switch (
      this.var // This var is just a placeholder
    ) {
      case "task":
        // Creation of the Elements

        let divMainContent = document.createElement("div");
        divMainContent.setAttribute("class", "main-content");

        let divRow = document.createElement("div");
        divRow.setAttribute("class", "row p-3 ms-5 me-5");

        let cardRoot = document.createElement("div");
        cardRoot.setAttribute("class", "card");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let cardTitle = document.createElement("div");
        cardTitle.setAttribute("class", "div-group-card-tittle");

        let tagTitle = document.createElement("h5");
        tagTitle.setAttribute("class", "myCard-tittle");
        let cross = document.createElement("div");

        let tagDate = document.createElement("h6");
        tagDate.setAttribute("class", "class", "myCard-date mb-2 text-muted");

        let tagDescription = document.createElement("p");
        tagDescription.setAttribute("class", "card-text");

        let buttonContent = document.createElement("div");
        buttonContent.setAttribute("class", "card-button-group");

        let buttonTag = document.createElement("button");
        buttonTag.setAttribute("class", "card-button-succes btn text-light");
        buttonTag.setAttribute("type", "button");

        let svgIconTag = document.createElement("svg");
        let pathIconSvg = document.createElement("path");

        // append all atributtes
        Object.assign(svgIconTag, {
          width: 17,
          height: 17,
          viewBox: "0 0 17 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        });

        Object.assign(pathIconSvg, {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2.68578 2.08109C4.6067 1.75598 6.55155 1.59297 8.49978 1.59375C10.481 1.59375 12.4239 1.76092 14.3145 2.08109C14.6207 2.13397 14.8984 2.29359 15.0982 2.53164C15.298 2.76969 15.407 3.0708 15.406 3.38159V4.12109C15.4059 4.68462 15.1819 5.22504 14.7834 5.62346L10.4045 10.0024C10.3058 10.1011 10.2276 10.2183 10.1743 10.3472C10.1209 10.4762 10.0935 10.6144 10.0935 10.7539V12.8272C10.0936 13.2219 9.98384 13.6088 9.77641 13.9446C9.56897 14.2804 9.27212 14.5518 8.91911 14.7284L7.67457 15.3503C7.59358 15.3907 7.5036 15.4098 7.41316 15.4057C7.32273 15.4016 7.23485 15.3744 7.15786 15.3268C7.08086 15.2792 7.01731 15.2127 6.97324 15.1336C6.92917 15.0546 6.90603 14.9655 6.90603 14.875V10.7539C6.90578 10.4722 6.79368 10.2022 6.59436 10.0031L2.21686 5.62275C1.81832 5.22433 1.59436 4.68392 1.59424 4.12038V3.38159C1.59424 2.74621 2.04757 2.18946 2.68649 2.08109H2.68578Z",
          fill: "#373737",
        });

        let buttonStateTag = document.createElement("button");
        buttonStateTag.setAttribute("class", "btn");
        buttonStateTag.setAttribute("type", "button");
        let svgStateTag = document.createElement("svg");
        let pathStateSvg = document.createElement("path");

        Object.assign(svgStateTag, {
          width: 17,
          height: 17,
          viewBox: "0 0 17 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        });

        Object.assign(pathStateSvg, {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2.68578 2.08109C4.6067 1.75598 6.55155 1.59297 8.49978 1.59375C10.481 1.59375 12.4239 1.76092 14.3145 2.08109C14.6207 2.13397 14.8984 2.29359 15.0982 2.53164C15.298 2.76969 15.407 3.0708 15.406 3.38159V4.12109C15.4059 4.68462 15.1819 5.22504 14.7834 5.62346L10.4045 10.0024C10.3058 10.1011 10.2276 10.2183 10.1743 10.3472C10.1209 10.4762 10.0935 10.6144 10.0935 10.7539V12.8272C10.0936 13.2219 9.98384 13.6088 9.77641 13.9446C9.56897 14.2804 9.27212 14.5518 8.91911 14.7284L7.67457 15.3503C7.59358 15.3907 7.5036 15.4098 7.41316 15.4057C7.32273 15.4016 7.23485 15.3744 7.15786 15.3268C7.08086 15.2792 7.01731 15.2127 6.97324 15.1336C6.92917 15.0546 6.90603 14.9655 6.90603 14.875V10.7539C6.90578 10.4722 6.79368 10.2022 6.59436 10.0031L2.21686 5.62275C1.81832 5.22433 1.59436 4.68392 1.59424 4.12038V3.38159C1.59424 2.74621 2.04757 2.18946 2.68649 2.08109H2.68578Z",
          fill: "#373737",
        });

        // Creation of the textNodes

        let titleTextNode = document.createTextNode(cardTitle);
        let dateTextNode = document.createTextNode(cardDate);
        let descriptionTextNode = document.createTextNode(cardDescription);
        let crossTextNode = document.createTextNode("&#215;");

        tagTitle.appendChild(titleTextNode);
        tagDate.appendChild(dateTextNode);
        tagDescription.appendChild(descriptionTextNode);
        cross.appendChild(crossTextNode);

        // Construction of the html
        buttonStateTag.appendChild(svgStateTag);
        buttonStateTag.appendChild(pathStateSvg);

        buttonTag.appendChild(svgIconTag);
        buttonTag.appendChild(pathIconTag);

        buttonContent.appendChild(buttonTag);
        buttonContent.appendChild(buttonStateTag);

        cardTitle.appendChild(tagTitle);
        cardTitle.appendChild(cross);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(tagDate);
        cardBody.appendChild(tagDescription);
        cardBody.appendChild(buttonContent);

        cardRoot.appendChild(cardBody);
        divRow.appendChild(cardRoot);
        divMainContent.appendChild(divRow);

        this.view = divMainContent;

        break;
      case "list":
        let listElement = document.createElement("li");
        listElement.setAttribute("class", "mt-5");
        let textNode = document.createTextNode("myText");
        listElement.appendChild(textNode);

        this.view = listElement;
        break;
      case "taskCreation":
        break;
      default:
        break;
    }

    return view;
  }
}
