export const createUserProfile = (src) => {
  const template = `
    
     <img
    src="/${src}"
    alt="infoThumbnail"
    class="userInfo__thumbnail h-full w-full rounded-[50%] object-cover"
        />
    `;

  return template;
};
