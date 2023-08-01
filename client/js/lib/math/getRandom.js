import { typeError } from "../error/typeError.js";

export function getRandom(n) {
  if (!n) typeError("getRandom 함수는 1개 이상의 매개변수를 받아야 합니다.");
  if (typeof n !== "number")
    typeError("getRandom함수의 매개변수는 숫자 타입 이어야 합니다.");
  return Math.round(Math.random() * n);
}

export const randomNumber = () => {
  let random = "" + Math.floor(Math.random() * 10e5);
  let length = random.length;

  if (random.length < 6) {
    for (let i = 0; i < 6 - length; i++) {
      random = "0" + random;
    }
    return random;
  }

  return random;
};
