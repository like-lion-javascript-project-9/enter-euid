

import { renderPhoneIndicator } from "./layout/index.js"; 
renderPhoneIndicator();

import { getNode } from "./lib/index.js";

const searchInput = getNode(".search-form")



const handleInputClick = () =>{





}



searchInput.addEventLIstner("click",handleInputClick);

// debounce-------------------------------------------------
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

//2. thorottle

function throttle(callback, limit = 100) {
  let waiting = false;

  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
// --------------------------------------------