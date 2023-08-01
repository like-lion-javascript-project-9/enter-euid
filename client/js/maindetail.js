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
import {} from './maindetail/event/index.js';

const productList = await getProductList();

const productId = localStorage.getItem('id');
const productIndex = +productId.slice(9, -1) - 1;

const swiperProductSrc = productList[productIndex].image;
const { thumbnail_l, thumbnail_2, alt } = swiperProductSrc;

const productName = productList[productIndex].name;
const productCategory = productList[productIndex].category;
const productPrice = productList[productIndex].price;
const productDesctiption = productList[productIndex].description;

const userData = await getUserList();
const userList = userData[productIndex];
const userName = userList.name;
const userImage = userList.src;
const userAlt = userList.alt;
const userAddress = userList.address;
const userManner = productList[productIndex].temperature;

const hideBodyContent = () => {
  const container = getNode('#container');
  container.style.opacity = '0';
};

const renderList = async () => {
  hideBodyContent();

  try {
    renderSpinner('body');
    // await delayP({ timeout: 2000 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        getNode('.loadingSpinner').remove();
        gsap.to('#container', {
          opacity: '1',
        });
      },
    });

    renderProductSwiperImage(thumbnail_l, thumbnail_2, alt);
    renderProductInforamtion(productName, productCategory, productDesctiption);
    renderProductPrice(productPrice);
    rederTogetherProduct();
    renderUserProfile(userImage, userAlt, userName, userAddress);
    renderUserManner(userManner);
  } catch (error) {
    console.log(error);
  }
};

renderList();
handleHeart();
renderPhoneIndicator();
renderNavigator();
