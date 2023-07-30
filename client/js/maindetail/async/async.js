import { tiger } from "../../lib/index.js";

export const asyncDatas = async (url) => {
  response = await tiger.get(url);
  const datas = response.data;
  return datas;
};
