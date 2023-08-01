import { getNode, insertLast, tiger, saveStorage } from "./lib/index.js";
import { renderPhoneIndicator, renderNavigator } from "./layout/index.js";
renderPhoneIndicator();
renderNavigator();

console.log("home main js");

const ul = getNode(".ul");
const li = getNode(".li");
const list = getNode(".list");
const figure = getNode(".figure");
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
console.log(itemlist[2].image.thumbnail_l);
console.log(itemlist[2].image.alt);

/* for -> map 함수로 변경-------------------------------------------------------------------------- */
// const render = () => {
//   // 순환 돌면서 for each 한 리스트씩 ul 안에 li 로 넣기 map 뿌리고 map안에서 함수 돌리기 (나중에 분리)

//   for (let i = 0; i < itemlist.length; i++) {
//     // 이미지 src 와 alt 변경
//     const imgTemplate = `
//     <img
//     src="../${itemlist[i].image.thumbnail_l}"
//     alt="../${itemlist[i].image.alt}"
//     class="image h-24 w-full rounded object-cover"
//     />
//     `;
//     console.log(imgTemplate);

//     insertFirst(list, imgTemplate);
//     console.log('imgTemplate 삽입');

//     insertFirst(name, itemlist[i].name);
//     insertFirst(location, itemlist[i].user.address);
//     insertFirst(price, `${itemlist[i].price}원`);
//     console.log('render');

//     // 한번 돌고 멈추고
//     return;
//   }
// };

// render();
/* -------------------------------------------------------------------------- */
// index : 순서 생성 /  data-index=${index}
const liElements = await itemlist.map(async (itemlist, index) => {
  // map 이 자동으로 순환하기 때문에 차례대로 데이터가 나옴

  // 빈 내용 map 함수로 넣기
  const divTemplate = `
    <li class="li" data-index=${index}>
      <a href="maindetail.html" class="list w-36">
        <figure class="figure">
          <img
          src="../${itemlist.image.thumbnail_l}.webp"
          alt="../${itemlist.image.alt}"
          class="image h-24 w-full rounded object-cover"
          />
          <figcaption class="list">
            <h1 class="list-name">${itemlist.name}</h1>
            <p class="list-location text-sm text-gray-500">${itemlist.user.address}</p>
            <strong class="list-price font-bold">${itemlist.price}원</strong>
          </figcaption>
        </figure>
      </a>
    </li>
    `;
  console.log(divTemplate);

  insertLast(ul, divTemplate);

  return;
});
console.log(liElements);
/* -------------------------------------------------------------------------- */

// 클릭 이벤트 안에 window.unload()를 넣어서 set 으로 받아서 localstorage 에  id 값 넘겨주기
// storage 에 데이터 값을 set 으로 넘겨주면 id 값을 받아서 item-index : "id": "product-2" 번호로
// 배열 아이디를 넘버로 사용
// set 으로 받아서 get 으로 사용

const handleSetLocalstorage = (e) => {
  // e.preventDefault();

  // closest
  const target = e.target.closest("li");
  if (!target) {
    return;
  }

  // 클릭에 맞는 정보 출력
  console.log(target);

  // index
  const index = target.dataset.index;
  console.log(index);

  // 클릭한 정보에 맞는 itemlist.id 가져오도록

  // 가져온 itemlist.id 를 localstorage에 set 으로 입력하기
  // unload 페이지 디테일로 이동할때 로컬 스토리저장이 안되기 떄문에 넘어갈때 같이 저장될수있도록
  window.unload(saveStorage("id", itemlist[index].id));
};

ul.addEventListener("click", handleSetLocalstorage);

/* -------------------------------------------------------------------------- */
