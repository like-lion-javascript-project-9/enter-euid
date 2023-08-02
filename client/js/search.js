import { renderPhoneIndicator } from './layout/index.js';
import {
  debounce,
  getNode,
  goToBack,
  insertLast,
  saveStorage,
} from './lib/index.js';
import { getProductList } from './maindetail/async.js';

const searchInput = getNode('.search-form');
const productList = await getProductList();
const container = getNode('.productContainer');

const createItem = (obj) => {
  const template = `
    <li class="product-list p-4 border-t border-b" data-index="${obj.id}">
    <a href="/views/maindetail.html" class="list w-36">
      <figure class="figure flex">
        <img
        src="/${obj.image.thumbnail_l}.webp"
        alt="/${obj.image.alt}"
        class="image h-16 w-16 rounded object-cover mt-4"
        />
        <figcaption class="list inline-block ml-4 mt-2">
          <h1 class="list-name text-xs py-1 font-bold text-ellipsis whitespace-nowrap">${obj.name}</h1>
          <p class="list-location text-xs text-gray-500">${obj.user.address}</p>
          <strong class="list-price font-bold text-xs">${obj.price}원</strong>
        </figcaption>
      </figure>
     </a>
  </li>
`;
  return template;
};

const resetUL = (insertNode, template) => {
  const productItem = getNode('.productWrapper');
  productItem.remove();
  insertLast(insertNode, template);
};

const ulTemplate = `<ul class="productWrapper"></ul>`;

const handleInput = debounce(async (e) => {
  e.preventDefault();
  resetUL(container, ulTemplate);
  const inputText = e.target.value;
  const searchArr = productList.filter((el) => {
    if (el.name.includes(inputText)) {
      return el;
    }
  });
  if (inputText === '') {
    resetUL(container, ulTemplate);
    return;
  }
  searchArr.forEach((item, index) => {
    insertLast(getNode('.productWrapper'), createItem(item, index));
  });
});

const handlePage = (e) => {
  const target = e.target.closest('li');
  if (!target) return;

  const index = +target.dataset.index.slice(8) - 1;

  saveStorage('id', productList[index].id);
};

goToBack('#back');
searchInput.addEventListener('input', handleInput);
getNode('.productContainer').addEventListener('click', handlePage);
renderPhoneIndicator();
