import { getNode, insertFirst } from "../lib/index.js";

const today = new Date();
const hours = today.getHours();
const minutes = ("0" + today.getMinutes()).slice(-2);

const createPhoneIndicator = () => {
  const template = /* html */ `
    <div aria-hidden class="indicator">
      <h2 class="sr-only">휴대폰 상단바</h2>
      <time datetime="${hours}:${minutes}" class="time">${hours}:${minutes}</time>
      <ul class="icon-container">
        <li class="signal"></li>
        <li class="lte"></li>
        <li class="battery"></li>
      </ul>
    </div>
  `;

  return template;
};

const createNavigator = () => {
  const template = /* html */ `
<nav class="navigator">
  <h2 class="sr-only">하단 네비게이션</h2>
  <ul class="menu-list">
    <li>
      <a href="/views/home.html" class="menu-wrapper">
        <div class="home"></div>
        <span class="menu-enabled">홈</span>
      </a>
    </li>
    <li class="menu-wrapper">
      <div class="board"></div>
      <div class="menu-disabled">게시판</div>
    </li>
    <li class="menu-wrapper">
        <div class="location"></div>
        <div class="menu-disabled">내 근처</div>
    </li>
    <li class="menu-wrapper">
      <div class="chat"></div>
      <div class="menu-disabled">채팅</div>
    </li>
    <li class="menu-wrapper">
      <a href="/views/mypage.html" class="menu-wrapper">
        <div class="my"></div>
        <div class="menu-disabled">나의 이듬</div>
      </a>
    </li>
  </ul>
</nav>
  `;

  return template;
};

export const renderPhoneIndicator = () => {
  insertFirst(getNode("#container"), createPhoneIndicator());
};

export const renderNavigator = () => {
  insertFirst(getNode("#container"), createNavigator());
};
