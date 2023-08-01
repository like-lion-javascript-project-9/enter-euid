import { renderPhoneIndicator } from "./layout/index.js";
import {
  addClass,
  clearContents,
  getNode,
  goToBack,
  loadStorage,
  removeClass,
} from "./lib/index.js";

const phoneNumber = getNode("#phoneNumber");
const loginBtn = getNode("#loginBtn");
let inputValue = "";

const changeDisabled = (boolean) => {
  loginBtn.disabled = boolean;
  boolean
    ? removeClass(loginBtn, "is-active")
    : addClass(loginBtn, "is-active");
};

const handleInput = (e) => {
  inputValue = e.target.value;
  if (/^[0-9]{10,11}$/g.test(inputValue)) {
    changeDisabled(false);
  } else {
    changeDisabled(true);
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  const phoneArr = await loadStorage("phoneArr");
  if (!phoneArr) {
    if (confirm("등록된 휴대폰 번호가 아닙니다. 회원가입 하시겠습니까?")) {
      location.href = "http://localhost:5500/views/signup.html";
    }
    clearContents(phoneNumber);
    changeDisabled(true);
    return;
  }

  for (const obj of phoneArr) {
    const id = obj.id;
    if (id === inputValue) {
      location.href = "http://localhost:5500/views/home.html";
      clearContents(phoneNumber);
      changeDisabled(true);
      return;
    }
  }

  if (confirm("등록된 휴대폰 번호가 아닙니다. 회원가입 하시겠습니까?")) {
    location.href = "http://localhost:5500/views/signup.html";
  }
  clearContents(phoneNumber);
  changeDisabled(true);
};

renderPhoneIndicator();
goToBack("#back");

phoneNumber.addEventListener("input", handleInput);
loginBtn.addEventListener("click", handleLogin);
