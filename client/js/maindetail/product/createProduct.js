import { getRandom } from '../../lib/index.js';
import { getProductList } from '../async.js';

export const createSwiperProduct = (src1, src2, alt) => {
  const template = `
        <div class="swiper-slide product__item1 aspect-square h-36 w-[320px]">
            <img src="/${src1}.webp" alt=${alt} class="h-auto w-full object-cover"/>
        </div>
        <div class="swiper-slide product__item2 h-[284px] aspect-square ">
            <img src="/${src2}.webp" alt=${alt} class="h-full w-full object-cover"  />
        </div>
        `;
  return template;
};

export const createProductInfomation = (name, category, summary) => {
  const template = `
    <h2 class="productDetail__title pb-1 text-lg font-bold">
            ${name}
    </h2>
    <div class="productDetail__category pb-3 text-[0.625rem] text-gray-500">
        ${category} • 17분전
    </div>
    <div class="productDetail__description max-h-56 text-sm">
          ${summary}
    </div>
  `;

  return template;
};

export const createProductPrice = (price) => {
  const template = `
        <span class="product__price font-bold">${price}원</span>
        `;

  return template;
};

export const createProductTogether = async () => {
  const productList = await getProductList();

  const template = productList.map((item) => {
    return ` 
    <li class="userTogetherItem px-3 cursor-pointer">
    <div class="mb-5">
    <div class="list__thumbnail object-cover aspect-square w-[8.625rem] h-[8.625rem] overflow-auto rounded-[8px]">
      <img
        src="/${item.image.thumbnail_2}.webp"
        class="w-full h-24 pb-3"
        loading="lazy"
      />
    </div>
      <h3 class="userTogetherItem__title text-[0.625rem] font-normal truncate">
        ${item.name}
      </h3>
      <h3 class="userTogetherItem__price text-[0.625rem]">${item.price}원</h3>
    </div>
  </li>
    `;
  });

  return template;
};
