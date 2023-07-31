import { getNode, getNodes } from "./lib/dom/getNode.js";

const buttons =getNode(".buttons")
const categoryButton = getNode(".category-button")
const buttonTitle =  getNode(".category-button-title")         
const buttonImage = getNode(".category-button-img")

let isClicked = false;

const handleClick = (event)=>{
 
 const target = event.target.closest("button")
const imgtarget = event.target.closest("button img")
const texttarget = event.target.closest(".category-button-title")

  if(!target)
  return 



if (isClicked){
    target.classList.remove("is-active")
    // imgtarget.setAttribute("src","../assets/icons/plus.svg");
  }
  else{
    target.classList.add("is-active")
   
    // imgtarget.setAttribute("src", "../assets/images/check.png");
  }

  isClicked = !isClicked
}

buttons.addEventListener("click", handleClick);









