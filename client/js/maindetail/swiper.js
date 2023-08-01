export const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function updateBulletColors() {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach((bullet) => {
    bullet.style.backgroundColor = '#4f4f4f';
  });
  const activeBullet = document.querySelector(
    '.swiper-pagination-bullet-active'
  );
  activeBullet.style.backgroundColor = '#373F67';
}

updateBulletColors();

swiper.on('slideChange', () => {
  updateBulletColors();
});
