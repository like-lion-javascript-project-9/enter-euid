import { delayP, getNode, getRandom, tiger } from "./lib/index.js";
import {
  rederTogetherProduct,
  renderProductInforamtion,
  renderProductPrice,
  renderProductSwiperImage,
} from "./maindetail/product/index.js";
import {
  renderUserManner,
  renderUserProfile,
} from "./maindetail/user/renderUser.js";

import {} from "./layout/index.js";

import { swiper } from "./maindetail/swiper.js";
import { getProductList, getUserList } from "./maindetail/async.js";
import { renderSpinner } from "./maindetail/spiner.js";
import { handleHeart } from "./maindetail/event/heartico.js";

const productList = await getProductList();
console.log(productList);
const randomIdx = getRandom(productList.length - 1);
const swiperProductSrc = productList[2].image;
const productName = productList[randomIdx].name;
const category = productList[randomIdx].category;
const price = productList[randomIdx].price;
const productDesctiption = productList[3].description;

const userLists = await getUserList();
const userList = userLists[randomIdx];
console.log(userList);
const userName = userList.name;
const userSrc = userList.src;
console.log(userSrc);
const userAlt = userList.alt;
const userAddress = userList.address;
const userManner = productList[randomIdx].temperature;

const { thumbnail_l, thumbnail_2, alt } = swiperProductSrc;

const renderList = async () => {
  renderSpinner("#container");
  try {
    await delayP({ timeout: 2000 });

    gsap.to(".loadingSpinner", {
      opacity: 0,
      onComplete() {
        getNode(".loadingSpinner").remove();
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

renderList();
handleHeart();
