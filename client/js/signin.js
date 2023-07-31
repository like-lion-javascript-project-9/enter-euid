import { renderPhoneIndicator } from "./layout/index.js";
import {
  addClass,
  clearContents,
  getNode,
  loadStorage,
  removeClass,
} from "./lib/index.js";

const phoneNumber = getNode("#phoneNumber");
const loginBtn = getNode("#loginBtn");
let inputValue = "";

const handleInput = (e) => {
  inputValue = e.target.value;
  if (/^[0-9]{10,11}$/g.test(inputValue)) {
    loginBtn.disabled = false;
    addClass(loginBtn, "is-active");
  } else {
    loginBtn.disabled = true;
    removeClass(loginBtn, "is-active");
  }
};

const handleLogin = async (e) => {
  e.preventDefault();

  for (const obj of await loadStorage("phoneArr")) {
    const id = obj.id;
    if (id === inputValue) {
      location.href = "http://localhost:5500/views/home.html";
      clearContents(phoneNumber);
      loginBtn.disabled = true;
      removeClass(loginBtn, "is-active");
      return;
    }
  }

  if (confirm("등록된 휴대폰 번호가 아닙니다. 회원가입 하시겠습니까?")) {
    location.href = "http://localhost:5500/views/signup.html";
  }
  clearContents(phoneNumber);
  loginBtn.disabled = true;
  removeClass(loginBtn, "is-active");
};

renderPhoneIndicator();

phoneNumber.addEventListener("input", handleInput);
loginBtn.addEventListener("click", handleLogin);
