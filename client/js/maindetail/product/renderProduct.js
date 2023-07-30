import { insertLast, getNode } from "./../../lib/index.js";
import {
  createProductDescription,
  createProductName,
  createSwiperProduct,
} from "./createProduct.js";

export const render = (target, callback) => {
  insertLast(target, callback);
};
