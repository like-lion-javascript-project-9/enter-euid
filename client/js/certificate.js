import { renderPhoneIndicator } from "./layout/index.js";
import {
  addClass,
  clearContents,
  deleteStorage,
  getNode,
  loadStorage,
  randomNumber,
  removeClass,
  saveStorage,
} from "./lib/index.js";

const phoneNumber = getNode("#phoneNumber");
const againBtn = getNode("#againBtn");
const authNumber = getNode("#authNumber");
const authBtn = getNode("#authBtn");
let inputValue = "";
let timer;
let isRunning = false;
let storageObj = {};
let phoneArr = [];

const renderPhoneNumber = async () => {
  phoneArr = [...(await loadStorage("phoneArr"))];
  const obj = phoneArr[phoneArr.length - 1];
  phoneNumber.value = obj.phone.replace(
    /^(\d{3})(\d{3,4})(\d{4})$/g,
    `$1 $2 $3`,
  );
  return obj;
};

const handleGetRandom = (e) => {
  e.preventDefault();
  const random = randomNumber();

  if (!alert(`인증번호: ${random}`)) {
    clearInterval(timer);
    countTime(179, againBtn);
  }

  saveStorage(storageObj.phone, random);
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
      authBtn.disabled = true;
      removeClass(authBtn, "is-active");
      isRunning = false;
    }
  }, 1000);
  isRunning = true;
};

const handleInput = async (e) => {
  inputValue = e.target.value;

  if (inputValue === (await loadStorage(storageObj.phone)) && isRunning) {
    authBtn.disabled = false;
    addClass(authBtn, "is-active");
  } else {
    authBtn.disabled = true;
    removeClass(authBtn, "is-active");
  }
};

const handleAuth = (e) => {
  e.preventDefault();
  for (const obj of phoneArr) {
    const phone = obj.phone;
    if (storageObj.phone === phone && Object.hasOwnProperty.call(obj, "id")) {
      if (
        !alert("이미 존재하는 휴대폰 번호입니다. 로그인 페이지로 이동합니다.")
      ) {
        const last = phoneArr[phoneArr.length - 1];
        if (!Object.hasOwnProperty.call(last, "id")) {
          phoneArr.pop();
        }
        saveStorage("phoneArr", phoneArr);
        clearContents(authNumber);
        deleteStorage(storageObj.phone);
        location.href = "http://localhost:5500/views/signin.html";
        return;
      }
    }
  }
  storageObj.id = storageObj.phone;
  saveStorage("phoneArr", phoneArr);
  clearContents(authNumber);
  deleteStorage(storageObj.phone);
  location.href = "http://localhost:5500/views/home.html";
};

renderPhoneIndicator();
storageObj = await renderPhoneNumber();

countTime(179, againBtn);

againBtn.addEventListener("click", handleGetRandom);
authNumber.addEventListener("input", handleInput);
authBtn.addEventListener("click", handleAuth);
