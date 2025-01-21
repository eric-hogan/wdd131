// use the following line as a way to select a store a reference to the DOM

// const link = document.querySelector("a")

// link.textContent = "Mozzilla Developer Network";
// link.href = "https://developer.mozilla.org";

// const sect = document.querySelector("section")
// const para = document.createElement("p")

// para.textContent = "We hope you enjoyed the ride.";
// sect.appendChild(para);

// const text = document.createTextNode("-- the priemer source for web development technology.",);
// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);
// sect.appendChild(linkPara);

/* The following lines of code are commented out s that I may be able to keep all the elements that I have

sect.removeChild(linkPara)
linkPara.remove();
linkPara.parentNode.removeChild(linkPara)
*/

/* This is a way to style the the "para" element
para.style.color = "white"
para.style.backgroundColor = "black"
para.style.padding = "10px"
para.style.width = "250px"
para.style.textAlign = "center"
*/

// para.setAttribute("class", "highlight") //this is a second option that 

// const link = document.querySelector("a");
// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";
// const sect = document.querySelector("section");
// const para = document.createElement("p");
// para.textContent = "We hope you enjoyed the ride.";
// sect.appendChild(para);
// sect.appendChild(para);
// const text = document.createTextNode(
//   " — the premier source for web development knowledge.",
// );
// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);
// sect.appendChild(linkPara);


const buttonElement = document.getElementById("submitButton");

buttonElement.addEventListener("click", copyInput);


function copyInput(event) {
    // take a look at the event!
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
  }

  const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}