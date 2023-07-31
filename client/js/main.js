
import {} from "./layout/index.js";

import { getNode } from "./lib/index.js";

const startButton = getNode(".startButton");

const handliClick = event => {
event.preventDefault();
window.location.href="http://localhost:5500/views/category.html";
}
startButton.addEventListener("click", handliClick);



