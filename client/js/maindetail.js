import { getNode, getRandom, tiger } from "./lib/index.js";
import {
  renderProductInforamtion,
  renderProductPrice,
  renderProductSwiperImage,
} from "./maindetail/product/index.js";
import {
  renderUserManner,
  renderUserProfile,
} from "./maindetail/user/renderUser.js";

const URL = "http://localhost:3000/products";
const response = await tiger.get(URL);
const productList = response.data;
const randomIdx = getRandom(productList.length - 1);
const swiperProductSrc = productList[randomIdx].image;
const productName = productList[randomIdx].name;
const category = productList[randomIdx].category;
const price = productList[randomIdx].price;
const productDesctiption = productList[randomIdx].description;
console.log(swiperProductSrc);
console.log(productList);

//유저
const userList = productList[randomIdx].user;
console.log(userList);
const userName = userList.name;
const userSrc = userList.src;
const userAlt = userList.alt;
const userAddress = userList.address;
const userManner = productList[randomIdx].temperature;

const { thumbnail_l, thumbnail_2, alt } = swiperProductSrc;

//프로덕트 렌더링
renderProductSwiperImage(thumbnail_l, thumbnail_2, alt);
renderProductInforamtion(productName, category, productDesctiption);
renderProductPrice(price);

//유저 렌더링
renderUserProfile(userSrc, userAlt, userName, userAddress);
renderUserManner(userManner);
