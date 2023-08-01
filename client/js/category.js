
import { renderPhoneIndicator } from "./layout/index.js"; 
renderPhoneIndicator();

import { getNode, getNodes } from "./lib/dom/index.js";
//버튼 클릭 기능, 로컬 스토리지 값 저장하기 기능
const buttons = getNode(".buttons");

const handleClick = (event) => {

const target = event.target.closest("button");

if (!target) {
  return;
}

const image = target.querySelector("img");
const buttonTitle = target.querySelector(".category-button-title")
const clicked = "is-active";
const buttonValue = buttonTitle.innerText;
const buttonkey = target.id;

  if (target.classList.contains(clicked)) {
    target.classList.remove(clicked);
    localStorage.removeItem(buttonkey,JSON.stringify(buttonValue));
    image.setAttribute("src", "../assets/icons/plus.svg");

  } else {
    target.classList.add(clicked);
    localStorage.setItem(buttonkey,JSON.stringify(buttonValue));
    image.setAttribute("src", "../assets/images/check.png");
    
  }
};
buttons.addEventListener("click", handleClick);

// 뒤로 가기 기능
const backButton = getNode(".backLink");

const handleBackClick = event => {
event.preventDefault();
window.location.href="http://localhost:5500/";
}
backButton.addEventListener("click", handleBackClick);

//이대로 저장할래요 버튼 이동 기능

const savedButton = getNode(".saved-button");

const handleSavedClick = event => {
event.preventDefault();
window.location.href="http://localhost:5500/views/signUp.html";
}
savedButton.addEventListener("click", handleSavedClick);
