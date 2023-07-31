export const createSwiperProduct = (src1, src2, alt) => {
  const template = `
        <div class="swiper-slide product__item1">
            <img src="/${src1}" alt=${alt} objcet-cover />
        </div>
        <div class="swiper-slide product__item2">
            <img src="/${src2}" alt =${alt} objcet-cover />
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
    <div class="productDetail__description h-[6.75rem] max-h-56 text-sm">
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
