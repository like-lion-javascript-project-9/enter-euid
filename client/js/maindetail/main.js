import { getNode, insertLast, tiger } from "./../lib/index.js";

const URL = "http://localhost:3000/products";

const response = await tiger.get(URL);
const itemlist = response.data;
console.log(itemlist);
const productWrapper = getNode(".productWrapper");
const template = `
<img class="swiper-slide product__item1" src="${itemlist[0].image["thumbnai_l"]}"></img>
<img class="swiper-slide product__item2"></img>
`;

const render = () => {
  insertLast(productWrapper, template);
};
render();
