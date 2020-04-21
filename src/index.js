require("../src/style.css");
import bodyContent from "../src/body-content.html";

document.getElementById("body").innerHTML += bodyContent;

//Append freeCodeCamp test utility (does not work when added directly to HTML)
localStorage.setItem("project_selector", "product-landing-page");
const fccScript = document.createElement("script");
fccScript.src =
  "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
document.head.appendChild(fccScript);
