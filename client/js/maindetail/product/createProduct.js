import { getProductList } from '../async.js';

export const createSwiperProduct = (src1, src2, alt) => {
  const template = `
        <div class="swiper-slide product__item1">
            <img src="/${src1}.webp" alt=${alt} objcet-cover h-[284px] w-[320px] />
        </div>
        <div class="swiper-slide product__item2 w-full h-full">
            <img src="/${src2}.webp" alt =${alt} objcet-cover h-[284px] w-[320px] />
        </div>
        `;
  return template;
};

export const createProductInfomation = (name, category, summary) => {
  const template = `
    <h2 class="productDetail__title pb-1 text-lg font-bold">
            ${name}
    </h2>
    <div class="productDetail__category pb-3 text-sm text-gray4">
        ${category} • 17분전
    </div>
    <div class="productDetail__description max-h-56 text-sm overflow-scroll">
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
    <li class="userTogetherItem px-3 flex flex-row flex-wrap">
              <div class="userTogetherWrapper mb-5 aspect-square w-[150px]">
                <img
                  src="/${item.image.thumbnail_2}.webp"
                  class="h-full w-full rounded-lg object-cover pb-3"
                />
                <h3 class="userTogetherItem__title text-[10.503px] font-normal truncate">
                  ${item.name}
                </h3>
                <h3 class="userTogetherItem__price text-[10.503px]">${item.price}</h3>
              </div>
            </li>
    `;
  });

  return template;
};
