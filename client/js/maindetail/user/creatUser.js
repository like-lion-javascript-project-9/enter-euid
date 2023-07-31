export const createUserProfile = (src, alt, name, address) => {
  const template = `
  <div class="userInfoProfile flex flex-grow">
  <div class="userInfoInner ml-3 aspect-square h-[40px] w-[40px]">
    <img
      src="/${src}"
      alt="${alt}"
      class="userInfo__thumbnail h-full w-full rounded-[50%] object-cover"
    />
  </div>
  <div class="userInfoProfileWrppaer flex flex-col pl-[0.375rem]">
    <span class="userInfoProfile__name text-sm font-bold">${name}</span>
    <span class="userInfoProfile__adreess text-[0.625rem]">${address}</span>
  </div>
</div>
    `;
  return template;
};

export const createUserMannerTemperature = (temerature) => {
  let emoji = temerature >= 50 ? "😀" : "🤔";

  return `
  <span
  class="userInfoManner__temperature text-sm font-bold text-secondary"
  >${temerature}</span>
<span class="userInfoManner__emoji">${emoji}</span>
<span
  class="userInfoManner__mannerTemperature ml-4 block text-xs text-[#919191]"
  >매너온도</span
>
    `;
};
