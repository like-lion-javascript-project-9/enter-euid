import { delayP, getNode, getRandom, tiger } from './lib/index.js';
import {
  rederTogetherProduct,
  renderProductInforamtion,
  renderProductPrice,
  renderProductSwiperImage,
} from './maindetail/product/index.js';
import {
  renderUserManner,
  renderUserProfile,
} from './maindetail/user/renderUser.js';

import { swiper } from './maindetail/swiper.js';
import { getProductList, getUserList } from './maindetail/async.js';
import { renderSpinner } from './maindetail/spiner.js';
import { handleHeart } from './maindetail/event/heartico.js';

import { renderPhoneIndicator, renderNavigator } from './layout/index.js';

const productList = await getProductList();
const randomIdx = getRandom(productList.length - 1);
const swiperProductSrc = productList[randomIdx].image;
const productName = productList[randomIdx].name;
const category = productList[randomIdx].category;
const price = productList[randomIdx].price;
const productDesctiption = productList[randomIdx].description;

const userLists = await getUserList();
const userList = userLists[randomIdx];
const userName = userList.name;
const userSrc = userList.src;
const userAlt = userList.alt;
const userAddress = userList.address;
const userManner = productList[randomIdx].temperature;

const { thumbnail_l, thumbnail_2, alt } = swiperProductSrc;

const hideBodyContent = () => {
  document.body.style.opacity = '0';
};

const showBodyContent = () => {
  document.body.style.opacity = '1';
};

const spinerPosition = () => {
  const spinner = getNode('.loadingSpinner');
  spinner.style.position = 'fixed';
  spinner.style.top = '50%';
  spinner.style.left = '50%';
  spinner.style.transform = 'translate(-50%, -50%)';
};

const renderList = async () => {
  hideBodyContent();
  renderSpinner('#container');
  spinerPosition();
  await delayP({ timeout: 2000 });

  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        getNode('.loadingSpinner').remove();
        showBodyContent();
      },
    });

    renderProductSwiperImage(thumbnail_l, thumbnail_2, alt);
    renderProductInforamtion(productName, category, productDesctiption);
    renderProductPrice(price);
    rederTogetherProduct(thumbnail_2, productName, price);
    renderUserProfile(userSrc, userAlt, userName, userAddress);
    renderUserManner(userManner);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  await renderList();
  handleHeart();
  renderPhoneIndicator();
  renderNavigator();
});
