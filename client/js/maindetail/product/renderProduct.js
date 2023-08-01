import { getNode, insertFirst, insertLast } from '../../lib/index.js';
import {
  createProductInfomation,
  createProductPrice,
  createSwiperProduct,
  createProductTogether,
} from './createProduct.js';

export const renderProductSwiperImage = (src1, src2, alt) => {
  const productWrapper = getNode('.productWrapper');
  insertLast(productWrapper, createSwiperProduct(src1, src2, alt));
};

export const renderProductInforamtion = (name, category, summary) => {
  const infomationSection = getNode('.productInformation');
  infomationSection.insertAdjacentHTML(
    'beforeend',
    createProductInfomation(name, category, summary)
  );
};

export const renderProductPrice = (price) => {
  const productPrice = getNode('.productDetailPrice');
  insertLast(productPrice, createProductPrice(price));
};

export const rederTogetherProduct = async () => {
  const userTogether = getNode('.userTogether__list');
  const templatePromise = createProductTogether();
  const template = await templatePromise;
  template.forEach((item) => {
    insertFirst(userTogether, item);
  });
};
