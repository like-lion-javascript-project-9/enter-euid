import { getNode, insertFirst, insertLast, tiger } from './lib/index.js';
import {} from './layout/index.js';

console.log('home main js');

const list = getNode('.list');
const figure = getNode('.figure');
const name = getNode('.list-name');
const location = getNode('.list-location');
const price = getNode('.list-price');

// tiger.js 유틸 함수로 localhost:3000 를 불러와서 insertadjacentHTML 하여 html 에 넣어준다. 이때 insertadjacentHTML 는 insertAfter insertLast 유틸 함수로 대체 사용 가능하다.
// response[0-9].name 으로 확인 가능하다.
// 불러온 data 는 수기로 삽입 후 추후 반복문으로 변경할 예정입니다.

const URL = ' http://localhost:3000/products';

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
const liElements = await itemlist.map(async (itemlist) => {
  // map 이 자동으로 순환하기 때문에 차례대로 데이터가 나옴
  const ul = getNode('.ul');

  // 빈 내용 map 함수로 넣기
  const divTemplate = `
    <li class="li">
      <a href="/" class="list w-36">
        <figure class="figure">
          <img
          src="../${itemlist.image.thumbnail_l}"
          alt="../${itemlist.image.alt}"
          class="image h-24 w-full rounded object-cover"
          />
          <figcaption class="list">
            <h1 class="list-name">${itemlist.name}</h1>
            <p class="list-location text-sm text-gray-500">${itemlist.user.address}</p>
            <strong class="list-price font-bold">${itemlist.price}</strong>
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
