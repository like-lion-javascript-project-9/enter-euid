import { getRandom } from '../../lib/index.js';
import { getProductList } from '../async.js';

export const createSwiperProduct = (src1, src2, alt) => {
  const template = `
        <div class="swiper-slide product__item1 aspect-square w-[320px]">
            <img src="/${src1}.webp" alt=${alt} class="w-full swiper-img"/>
        </div>
        <div class="swiper-slide product__item2 h-[284px] aspect-square ">
            <img src="/${src2}.webp" alt=${alt} class="w-full object-contain swiper-img"  />
        </div>
        `;
  return template;
};

export const createProductInfomation = (name, category, minute, summary) => {
  const template = `
    <h2 class="productDetail__title pb-1 text-lg font-bold">
            ${name}
    </h2>
    <div class="productDetail__category pb-3 text-xs text-gray-500">
        ${category} • ${minute}분 전
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
    <div class="list__thumbnail object-cover aspect-square w-[8.625rem] h-[8.625rem]">
      <img
        src="/${item.image.thumbnail_2}.webp"
        class="w-full h-24 pb-3 thumbnail__image"
        loading="lazy"
      />
    </div>
      <h3 class="userTogetherItem__title text-xs font-normal truncate">
        ${item.name}
      </h3>
      <h3 class="userTogetherItem__price text-xs">${item.price}원</h3>
    </div>
  </li>
    `;
  });

  return template;
};
