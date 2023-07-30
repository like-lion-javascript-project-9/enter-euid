/**
 *
 * @param {object} thumbnail1의 주소값 alt값 thumbnail2의주소값 alt값 param0
 * @returns template
 */
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

export const createProductName = (name) => {
  const template = `
            ${name}
    `;
  return template;
};

export const createProductDescription = (summary) => {
  const template = `
              ${summary}
      `;

  return template;
};

export const createProductPrice = (price) => {
  const template = `
                ${price}
        `;

  return template;
};
