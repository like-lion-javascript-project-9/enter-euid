import { renderPhoneIndicator } from "./layout/index.js";
import {
  addClass,
  clearContents,
  getNode,
  goToBack,
  loadStorage,
  randomNumber,
  removeClass,
  saveStorage,
} from "./lib/index.js";

const authBtn = getNode("#authBtn");
const form = getNode("#form");
let valueObj = {};
let phoneArr = [];
let inputValue = "";

const phoneArrPush = async () => {
  const value = await loadStorage("phoneArr");
  if (!value) return;
  phoneArr = [...value];
};

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

  const random = randomNumber();

  valueObj.phone = inputValue;
  phoneArr.push(valueObj);
  saveStorage("phoneArr", phoneArr);
  saveStorage(inputValue, random);
  clearContents(phoneNumber);
  if (!alert(`인증번호: ${random}`))
    location.href = "http://localhost:5500/views/certificate.html";
};

renderPhoneIndicator();
goToBack("#back");
phoneArrPush();

phoneNumber.addEventListener("input", handleInput);
form.addEventListener("click", handleAuth);
