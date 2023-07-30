import { getNode, insertFirst, tiger } from "./lib/index.js";

console.log("home main js");

const list = getNode(".list");
const name = getNode(".list-name");
const location = getNode(".list-location");
const price = getNode(".list-price");

// tiger.js 유틸 함수로 localhost:3000 를 불러와서 insertadjacentHTML 하여 html 에 넣어준다. 이때 insertadjacentHTML 는 insertAfter insertLast 유틸 함수로 대체 사용 가능하다.
// response[0-9].name 으로 확인 가능하다.
// 불러온 data 는 수기로 삽입 후 추후 반복문으로 변경할 예정입니다.

const URL = " http://localhost:3000/products";

const response = await tiger.get(URL);
const itemlist = response.data;
console.log(itemlist);
console.log(itemlist[0].name);
console.log(itemlist[0].price);
console.log(itemlist[0].user.address);

const render = () => {
  insertFirst(name, itemlist[0].name);
  insertFirst(location, itemlist[0].user.address);
  insertFirst(price, `${itemlist[0].price}원`);
};

render();
