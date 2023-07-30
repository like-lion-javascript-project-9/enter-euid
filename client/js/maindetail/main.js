import {
  getNode,
  getRandom,
  insertAfter,
  insertLast,
  tiger,
} from "./../lib/index.js";

const URL = "http://localhost:3000/products";

const response = await tiger.get(URL);
const itemlist = response.data;
console.log(itemlist);

const randomIdx = getRandom(itemlist.length - 1);
const productWrapper = getNode(".productWrapper");
const productDetail__title = getNode(".productDetail__title");
const detailTemplate = `
        <h2 class="productDetail__title pb-1 text-lg font-bold">
        ${itemlist[randomIdx].name}
        </h2>
`;

const itemTemp = `
<img class="swiper-slide product__item1" src="/${itemlist[randomIdx].image.thumbnail_2}" alt=${itemlist[0].image.alt}></div>
`;

const render = () => {
  insertAfter(productDetail__title, detailTemplate);
  insertLast(productWrapper, itemTemp);
};
render();

// ${itemlist[rnadomIdx].name}

// ${itemlist[rnadomIdx].image.thumbnail_2}
