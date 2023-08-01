import { renderPhoneIndicator } from './layout/index.js';
import { debounce, getNode, insertLast } from './lib/index.js';
import { getProductList } from './maindetail/async.js';

const searchInput = getNode('.search-form');
const productList = await getProductList();
const container = getNode('#container');

const createItem = (obj) => {
  const template = `
    <li class="product__list">
    <a href="maindetail.html" class="list w-36">
      <figure class="figure">
        <img
        src="/${obj.image.thumbnail_l}.webp"
        alt="/${obj.image.alt}"
        class="image h-24 w-full rounded object-cover"
        />
        <figcaption class="list">
          <h1 class="list-name text-xs py-1">${obj.name}</h1>
          <p class="list-location text-xs text-gray-500">${obj.user.address}</p>
          <strong class="list-price font-bold text-xs">${obj.price}원</strong>
        </figcaption>
      </figure>
    </a>
  </li>
`;
  return template;
};

<<<<<<< HEAD
import { getNode } from "./lib/index.js";
// import { getProductList } from './maindetail/async';
=======
const resetUL = (insertNode, template) => {
  const productItem = getNode('.productWrapper');
  productItem.remove();
  insertLast(insertNode, template);
};
>>>>>>> develop

const ulTemplate = `<ul class="productWrapper"></ul>`;

<<<<<<< HEAD


const handleInputClick= () => {

  // const productList = await getProductList();
  // 필터로 데이더 이름

}

searchInput.addEventLIstner("input", handleInputClick);




// debounce-------------------------------------------------
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

//2. thorottle

function throttle(callback, limit = 100) {
  let waiting = false;

  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
=======
const handleInput = debounce(async (e) => {
  e.preventDefault();
  resetUL(container, ulTemplate);
  const inputText = e.target.value;
  const searchArr = productList.filter((el) => {
    if (el.name.includes(inputText)) {
      return el;
>>>>>>> develop
    }
  });
  if (inputText === '') {
    resetUL(container, ulTemplate);
    return;
  }
  searchArr.forEach((item) => {
    insertLast(getNode('.productWrapper'), createItem(item));
  });
});

searchInput.addEventListener('input', handleInput);
renderPhoneIndicator();
