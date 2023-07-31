import { renderPhoneIndicator } from "./layout/index.js";
import {
  addClass,
  clearContents,
  getNode,
  randomNumber,
  removeClass,
  saveStorage,
} from "./lib/index.js";

renderPhoneIndicator();

const phoneNumber = getNode("#phoneNumber");
const authBtn = getNode("#authBtn");
const form = getNode("#form");
let inputValue = "";

const handleInput = (e) => {
  inputValue = e.target.value;
  if (/^[0-9]{10,11}$/g.test(inputValue)) {
    authBtn.disabled = false;
    addClass(authBtn, "is-active");
  } else {
    authBtn.disabled = true;
    removeClass(authBtn, "is-active");
  }
};

const handleAuth = (e) => {
  e.preventDefault();
  const btn = e.target.closest("button");
  if (!btn) return;

  saveStorage("0", inputValue);
  clearContents(phoneNumber);
  if (!alert(randomNumber()))
    location.href = "http://localhost:5500/views/certificate.html";
};

phoneNumber.addEventListener("input", handleInput);
form.addEventListener("click", handleAuth);
