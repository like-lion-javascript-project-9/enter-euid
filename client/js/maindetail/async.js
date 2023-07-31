import { tiger } from "../lib/index.js";

export const getProductList = async () => {
  const URL = "http://localhost:3000/products";
  const response = await tiger.get(URL);
  const productList = response.data;
  return productList;
};

export const getUserList = async () => {
  const productList = await getProductList();
  const userlist = productList.map((product) => product.user);
  return userlist;
};
