
import { renderPhoneIndicator } from "./layout/index.js"; 
renderPhoneIndicator();

import { getNode } from "./lib/index.js";

const startButton = getNode(".startButton");

const handliClick = event => {
event.preventDefault();
window.location.href="http://localhost:5500/views/category.html";
}
startButton.addEventListener("click", handliClick);



