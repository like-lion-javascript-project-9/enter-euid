import { getNode, getNodes } from "./lib/dom/index.js";
import {} from "./layout/index.js";

//버튼 클릭 기능
const buttons = getNode(".buttons");

const handleClick = (event) => {
  const clicked = "is-active";
  const target = event.target.closest("button");

  if (!target) {
    return;
  }

  if (target.classList.contains(clicked)) {
    target.classList.remove(clicked);
    const image = target.querySelector("img");
    image.setAttribute("src", "../assets/icons/plus.svg");
  } else {
    target.classList.add(clicked);
    const image = target.querySelector("img");
    image.setAttribute("src", "../assets/images/check.png");
  }
};
buttons.addEventListener("click", handleClick);

// 뒤로가기 기능
const backButton = getNode(".backLink");

const handleBackClick = event => {
event.preventDefault();
window.location.href="http://localhost:5500/";
}
backButton.addEventListener("click", handleBackClick);
