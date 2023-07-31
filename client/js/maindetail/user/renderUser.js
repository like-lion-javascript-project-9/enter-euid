import {
  getNode,
  insertAfter,
  insertFirst,
  insertLast,
} from "../../lib/index.js";
import { createUserMannerTemperature, createUserProfile } from "./creatUser.js";

export const renderUserProfile = (src, alt, name, address) => {
  const userInfo = getNode(".userInfo");
  insertFirst(userInfo, createUserProfile(src, alt, name, address));
};

export const renderUserManner = (temerature) => {
  const userInfo = getNode(".userInfoManner");
  insertLast(userInfo, createUserMannerTemperature(temerature));
};
