import { getNode } from "../../lib/index.js";

const heart = getNode(".heart");

export const handleHeart = (() => {
  let isCliked = false;

  return () => {
    if (!isCliked) {
      heart.textContent = "❤️";
    } else {
      heart.textContent = "🤍";
    }
    isCliked = !isCliked;
  };
})();

heart.addEventListener("click", handleHeart);
