import { getNode, goToBack } from '../../lib/index.js';

const menubarContainer = getNode('.menubar__left');

const handleBack = (e) => {
  const target = e.target.closest('.menubar__left');
  if (!target) return;
  goToBack(target);
};

const handleHome = (e) => {
  const target = e.target.closest('.menubar__home');
  if (!target) return;
  console.log(target);
  if (target) {
    window.location.href = '/index.html';
  }
};

export const handleLocation = (e) => {
  handleHome(e);
  handleBack(e);
};

menubarContainer.addEventListener('click', handleLocation);
