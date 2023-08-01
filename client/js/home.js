import { getNode, insertLast, tiger, saveStorage } from './lib/index.js';
import { renderPhoneIndicator, renderNavigator } from './layout/index.js';
renderPhoneIndicator();
renderNavigator();

console.log('home main js');

const ul = getNode('.ul');
const li = getNode('.li');
const list = getNode('.list');
const figure = getNode('.figure');
const name = getNode('.list-name');
const location = getNode('.list-location');
const price = getNode('.list-price');

// tiger.js 유틸 함수로 localhost:3000 를 불러와서 insertadjacentHTML 하여 html 에 넣어준다. 이때 insertadjacentHTML 는 insertAfter insertLast 유틸 함수로 대체 사용 가능하다.
// response[0-9].name 으로 확인 가능하다.

const URL = ' http://localhost:3000/products';

const response = await tiger.get(URL);
const itemlist = response.data;

// console.log(itemlist);
// console.log(itemlist[0].name);
// console.log(itemlist[0].price);
// console.log(itemlist[0].user.address);
// console.log(itemlist[2].image.thumbnail_l);
// console.log(itemlist[2].image.alt);

/* for -> map 함수로 변경-------------------------------------------------------------------------- */
// const render = () => {
//   // 순환 돌면서 for each 한 리스트씩 ul 안에 li 로 넣기 map 뿌리고 map안에서 함수 돌리기 (나중에 분리)

//   for (let i = 0; i < itemlist.length; i++) {
//     // 이미지 src 와 alt 변경
//     const imgTemplate = `
//     <img
//     src="../${itemlist[i].image.thumbnail_l}"
//     alt="../${itemlist[i].image.alt}"
//     class="image rounded object-cover w-[8.625rem] h-[8.625rem]"
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
// map의 두번째 인수 index : 순서 생성 /  data-index=${index}
// map(첫번째, 두번째) 자체의 기능 : 두번째 인수에 순서 index 를 생성해줌
const liElements = await itemlist.map(async (itemlist, index) => {
  // map 이 자동으로 순환하기 때문에 차례대로 데이터가 나옴

  // 빈 내용 map 함수로 넣기
  // data-index= : 비표준 속성 data-* 속성 사용
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
            <h1 class="list-name text-xs py-1">${itemlist.name}</h1>
            <p class="list-location text-xs text-gray-500">${itemlist.user.address}</p>
            <strong class="list-price font-bold text-xs">${itemlist.price}원</strong>
          </figcaption>
        </figure>
      </a>
    </li>
    `;

  insertLast(ul, divTemplate);

  return;
});
/* -------------------------------------------------------------------------- */

// 클릭 이벤트 안에 window.unload()를 넣어서 set 으로 받아서 localstorage 에 id 값 index 로 넘겨주기
// storage 에 데이터 값을 set 으로 넘겨주면 id 값을 받아서 item-index : "id": "product-1" 번호로 받아갈 예정
// home 페이지에서 set 클릭한 target 을 index number 로 받아서 localstorage 에 저장한 후 detail 페이지에서 get 해서 사용
// localstorage != json : localstorage 는 window application 내장

const handleSetLocalstorage = (e) => {
  // home 페이지에서 클릭시 maindetail 으로 바로넘어가는것을 방지
  // e.preventDefault();

  // closest : 자기 자신 혹은 부모를 찾아줌.
  // target 으로 클릭되는 대상들은 모두 부모인 li 안에 들어있고 어느 요소를 눌러도 li 가 선택되도록 e.target.closest('li')
  // e.target : 누른 대상
  // target 이 필요한 이유 : 클릭한 정보에 맞는 itemlist 가져오도록

  const target = e.target.closest('li');

  // !target 을 하는 이유 : closest 로 li 를 크게 잡았을때 자식 요소들이 중복적으로 잡히지 않도록 방지
  if (!target) {
    return;
  }

  // 클릭했을때 나오는 target 확인
  // console.log(target);

  // .map(첫번째,index) 배열의 데이터를 index넘버로 넘겨받아서 dataset 으로 불러와 사용 (data-index = dataset.index)
  const index = target.dataset.index;
  // console.log(index);

  // saveStorage('id', itemlist[index].id) : 가져온 itemlist.id 를 localstorage에 set 으로 입력하기
  // window.unload() : 메인페이지에서 디테일로 이동할때 페이지가 바뀌면 로컬스토리가 리셋되기 때문에 localstorage key vlaue 값이 유지되도록 해줌
  window.unload(saveStorage('id', itemlist[index].id));
};

ul.addEventListener('click', handleSetLocalstorage);

/* -------------------------------------------------------------------------- */
