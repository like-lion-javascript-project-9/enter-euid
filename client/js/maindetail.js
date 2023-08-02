import { delayP, getNode } from './lib/index.js';
import {
  renderTogetherProduct,
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
const productDescription = productList[productIndex].description;

const userData = await getUserList();
const userList = userData[productIndex];
const userName = userList.name;
const userImage = userList.src;
const userAlt = userList.alt;
const userAddress = userList.address;
const userManner = productList[productIndex].temperature;

const updateDate = new Date(productList[productIndex].date);
const minute = updateDate.getMinutes();

const hideBodyContent = () => {
  const container = getNode('#container');
  container.style.opacity = '0';
};

const renderList = async () => {
  hideBodyContent();

  try {
    renderSpinner('body');
    await delayP({ timeout: 500 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        getNode('.loadingSpinner').remove();
        gsap.to('#container', {
          opacity: '1',
          duration: 1,
        });
      },
    });

    renderProductSwiperImage(thumbnail_l, thumbnail_2, alt);
    renderProductInforamtion(
      productName,
      productCategory,
      minute,
      productDescription
    );
    renderProductPrice(productPrice);
    renderTogetherProduct();
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
