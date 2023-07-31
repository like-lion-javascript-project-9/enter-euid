import { renderPhoneIndicator } from "./layout/index.js";
import {
  addClass,
  getNode,
  loadStorage,
  randomNumber,
  removeClass,
  saveStorage,
} from "./lib/index.js";

renderPhoneIndicator();

const phoneNumber = getNode("#phoneNumber");
const againBtn = getNode("#againBtn");
const authNumber = getNode("#authNumber");
const authBtn = getNode("#authBtn");
let inputValue = "";
let timer;

const renderPhoneNumber = async () => {
  const value = await loadStorage("0");
  phoneNumber.value = value.replace(/^(\d{3})(\d{3,4})(\d{4})$/g, `$1 $2 $3`);
};

const handleGetRandom = (e) => {
  e.preventDefault();
  const number = phoneNumber.value.split(" ").join("");
  const random = randomNumber();

  if (!alert(random)) {
    clearInterval(timer);
    countTime(179, againBtn);
  }

  saveStorage(number, random);
};

const countTime = (count, node) => {
  let minutes;
  let seconds;
  timer = setInterval(() => {
    minutes = parseInt(count / 60, 10);
    seconds = parseInt(count % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    node.textContent = `인증문자 다시 받기(${minutes}분 ${seconds}초)`;

    if (--count < 0) {
      clearInterval(timer);
    }
  }, 1000);
};

const handleInput = async (e) => {
  inputValue = e.target.value;
  const number = phoneNumber.value.split(" ").join("");

  if (inputValue === (await loadStorage(number))) {
    authBtn.disabled = false;
    addClass(authBtn, "is-active");
  } else {
    authBtn.disabled = true;
    removeClass(authBtn, "is-active");
  }
};

const handleAuth = (e) => {
  e.preventDefault();
  location.href = "http://localhost:5500/views/home.html";
};

renderPhoneNumber();
countTime(179, againBtn);

againBtn.addEventListener("click", handleGetRandom);
authNumber.addEventListener("input", handleInput);
authBtn.addEventListener("click", handleAuth);
