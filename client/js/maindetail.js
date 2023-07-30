import { getNode, tiger } from "./lib/index.js";
import { createSwiperProduct } from "./maindetail/product/createProduct.js";
import { render } from "./maindetail/product/renderProduct.js";
import { createUserProfile } from "./maindetail/user/index.js";

const URL = "http://localhost:3000/products";
const response = await tiger.get(URL);
const productList = response.data;
const swiperProductSrc = productList[0].image;
const productDesctiption = productList[0].description;
const productName = productList[0].name;
console.log(swiperProductSrc);
console.log(productList);

//유저
const userList = productList[0].user;
console.log(userList);
const name = userList.name;
const userSrc = userList.src;
const userAlt = userList.alt;
const userAddress = userList.alt;

const { thumbnail_l, thumbnail_2, alt } = swiperProductSrc;

const renderSwiperProduct = () => {
  const productWrppaer = getNode(".productWrapper");
  render(productWrppaer, createSwiperProduct(thumbnail_l, thumbnail_2, alt));
};

const renderUser = () => {
  const userInfoInner = getNode(".userInfoInner");
  render(userInfoInner, createUserProfile(userSrc));
};

renderSwiperProduct();
renderUser();
