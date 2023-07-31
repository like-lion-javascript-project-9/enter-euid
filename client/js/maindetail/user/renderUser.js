import {
  getNode,
  insertAfter,
  insertFirst,
  insertLast,
} from "../../lib/index.js";
import { createUserMannerTemperature } from "./creatUser.js";

// export const renderUserProfile = (src, alt, name, address) => {
//   const userInfo = getNode(".userInfoInner");
//   insertFirst(userInfo, createUserProfile(src, alt, name, address));
// };

export const renderUserManner = (temerature) => {
  const userInfoManner = getNode(".userInfoManner");
  insertFirst(userInfoManner, createUserMannerTemperature(temerature));
};
