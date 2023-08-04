import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options = {}) {
  // defaultOptions

  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  // 객체 합성  mixin
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

// debounce-------------------------------------------------
export function debounce(callback, limit = 1000) {
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
