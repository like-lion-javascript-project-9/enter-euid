import { insertLast } from "../lib/index.js";

const cretateSpinner = () => {
  const template = `
  <figure class="loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(55, 63, 103); display: block;" width="164px" height="164px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="translate(78,50)">
  <g transform="rotate(0)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="1">
    <animateTransform attributeName="transform" type="scale" begin="-2.0202020202020203s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-2.0202020202020203s"></animate>
  </circle>
  </g>
  </g><g transform="translate(71.44924440733138,67.9980530712231)">
  <g transform="rotate(40)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.8888888888888888">
    <animateTransform attributeName="transform" type="scale" begin="-1.7676767676767677s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-1.7676767676767677s"></animate>
  </circle>
  </g>
  </g><g transform="translate(54.86214897467405,77.57461708434182)">
  <g transform="rotate(80)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.7777777777777778">
    <animateTransform attributeName="transform" type="scale" begin="-1.5151515151515151s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-1.5151515151515151s"></animate>
  </circle>
  </g>
  </g><g transform="translate(36.00000000000001,74.24871130596429)">
  <g transform="rotate(119.99999999999999)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.6666666666666666">
    <animateTransform attributeName="transform" type="scale" begin="-1.2626262626262625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-1.2626262626262625s"></animate>
  </circle>
  </g>
  </g><g transform="translate(23.688606617994566,59.57656401311873)">
  <g transform="rotate(160)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.5555555555555556">
    <animateTransform attributeName="transform" type="scale" begin="-1.0101010101010102s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-1.0101010101010102s"></animate>
  </circle>
  </g>
  </g><g transform="translate(23.688606617994566,40.42343598688127)">
  <g transform="rotate(200)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.4444444444444444">
    <animateTransform attributeName="transform" type="scale" begin="-0.7575757575757576s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-0.7575757575757576s"></animate>
  </circle>
  </g>
  </g><g transform="translate(35.999999999999986,25.751288694035726)">
  <g transform="rotate(239.99999999999997)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.3333333333333333">
    <animateTransform attributeName="transform" type="scale" begin="-0.5050505050505051s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-0.5050505050505051s"></animate>
  </circle>
  </g>
  </g><g transform="translate(54.86214897467404,22.425382915658172)">
  <g transform="rotate(280)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.2222222222222222">
    <animateTransform attributeName="transform" type="scale" begin="-0.25252525252525254s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="-0.25252525252525254s"></animate>
  </circle>
  </g>
  </g><g transform="translate(71.44924440733138,32.00194692877689)">
  <g transform="rotate(320)">
  <circle cx="0" cy="0" r="4" fill="#5a85ee" fill-opacity="0.1111111111111111">
    <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite"></animateTransform>
    <animate attributeName="fill-opacity" keyTimes="0;1" dur="2.272727272727273s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
  </circle>
  </g>
  </g>
  </svg>
    </figure>
    `;

  return template;
};

export const renderSpinner = (target) => {
  insertLast(target, cretateSpinner());
};
