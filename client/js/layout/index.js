import { getNode, insertFirst } from "../lib/index.js";

const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();

const createPhoneIndicator = () => {
  const template = /* html */ `
    <div aria-hidden class="flex h-9 items-center justify-between pl-6 pr-6">
      <h2 class="sr-only">휴대폰 상단바</h2>
      <time datetime="${hours}:${minutes}" class="text-sm">${hours}:${minutes}</time>
      <ul class="flex items-center">
        <li class="h-3 w-6 bg-signal bg-right-bottom bg-no-repeat"></li>
        <li class="h-3 w-5 bg-lte bg-right-bottom bg-no-repeat"></li>
        <li class="h-3 w-6 bg-battery bg-right-bottom bg-no-repeat"></li>
      </ul>
    </div>
  `;

  return template;
};

const createNavigator = () => {
  const template = /* html */ `
    <nav class="fixed bottom-0 h-[70px] w-full border-t pb-5 pl-3 pr-3 pt-3">
      <h2 class="sr-only">하단 네비게이션</h2>
      <ul class="flex justify-between">
        <li>
          <a href="/views/home.html" class="flex flex-col items-center gap-1">
            <div class="h-5 w-5 bg-home-fill bg-center bg-no-repeat"></div>
            <span class="text-xs">홈</span>
          </a>
        </li>
        <li class="flex flex-col items-center gap-1">
          <div class="h-5 w-5 bg-board bg-no-repeat"></div>
          <div class="text-xs text-gray-300">게시판</div>
        </li>
        <li class="flex flex-col items-center gap-1">
            <div class="h-5 w-5 bg-location-nofill bg-no-repeat"></div>
            <div class="text-xs text-gray-300">내 근처</div>
        </li>
        <li class="flex flex-col items-center gap-1">
          <div class="h-5 w-5 bg-chat bg-no-repeat"></div>
          <div class="text-xs text-gray-300">채팅</div>
        </li>
        <li class="flex flex-col items-center gap-1">
          <div class="h-5 w-5 bg-my bg-no-repeat"></div>
          <div class="text-xs text-gray-300">나의 이듬</div>
        </li>
      </ul>
    </nav>
  `;

  return template;
};

const renderPhoneIndicator = () => {
  insertFirst(getNode("#container"), createPhoneIndicator());
};

const renderNavigator = () => {
  insertFirst(getNode("#container"), createNavigator());
};

renderNavigator();
renderPhoneIndicator();
