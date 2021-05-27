document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  // let btnText = document.createTextNode("Add Square");
  // button.appendChild(btnText);
  button.textContent = "Add Square";

  let squareContainer = document.createElement("div");
  squareContainer.id = "square-Container";

  let squareCounter = 0;
  const squareColors = [
    "red",
    "blue",
    "yellow",
    "orange",
    "brown",
    "purple",
    "green",
    "pink",
  ];

  button.addEventListener("click", function () {
    squareCounter++;

    let square = document.createElement("div");
    square.className = "square";
    square.id = squareCounter;

    square.style.border = "1px solid black";
    square.style.background = "black";
    square.style.width = "3em";
    square.style.height = "3em";

    square.addEventListener("mouseenter", function (e) {
      e.target.textContent = square.id;
    });

    square.addEventListener("mouseleave", function (e) {
      e.target.textContent = "";
    });

    square.addEventListener("click", function () {
      let randNum = Math.floor(Math.random() * squareColors.length);
      square.style.backgroundColor = squareColors[randNum];
    });


  square.addEventListener("dblclick", function () {
    if (square.id % 2 == 0) {
      if (square.nextSibling) {
        square.nextSibling.remove();
      } else {
        alert("No Square!!");
      }
    } else {
      if (square.previousSibling) {
        square.previousSibling.remove();
      } else {
        alert("No Square");
      }
    }
  });
  squareContainer.appendChild(square);
});
  document.body.appendChild(button);
  document.body.appendChild(squareContainer);
});
