import { renderNavigator, renderPhoneIndicator } from './layout/index.js';
import {
  deleteStorage,
  getNode,
  getRandom,
  insertFirst,
  loadStorage,
  saveStorage,
  tiger,
} from './lib/index.js';

const name = getNode('#name');
const address = getNode('#address');
const logout = getNode('#logout');
const resign = getNode('#resign');

const createProfile = (user) => {
  const template = /* html */ `
    <img src="/${user.src}.webp"
    alt="${user.alt}"
    class="w-16 h-16 object-cover rounded-full"/>
  `;
  return template;
};

const renderProfile = async () => {
  const response = await tiger.get('http://localhost:3000/products');
  const user = response.data.map((el) => el.user);
  const index = getRandom(9);

  insertFirst('#profileImg', createProfile(user[index]));
  name.textContent = user[index].name;
  address.textContent = user[index].address;
};

const handleLogout = () => {
  deleteStorage('login');
  location.href = '/views/signin.html';
};

const handleResign = async () => {
  if (!confirm('정말 탈퇴하시겠습니까?')) return;
  const currentLogin = await loadStorage('login');
  const phoneArr = await loadStorage('phoneArr');
  console.log(currentLogin);
  const filter = phoneArr.filter((el) => currentLogin !== el.id && el);
  saveStorage('phoneArr', filter);
  deleteStorage('login');
  location.href = '/';
};

renderPhoneIndicator();
renderNavigator();
renderProfile();

logout.addEventListener('click', handleLogout);
resign.addEventListener('click', handleResign);
