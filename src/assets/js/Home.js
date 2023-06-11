let timerId;
const prevBannerBtn = document.querySelector('.banner__prev');
const nextBannerBtn = document.querySelector('.banner__next');
const bannerWrapper = document.querySelector('.banner__wrapper');

prevBannerBtn.addEventListener('click', () => {
    stopAutoSlide();
    const bannerList = document.querySelectorAll('.banner__item');
    bannerWrapper.prepend(bannerList[bannerList.length - 1]);
});
nextBannerBtn.addEventListener('click', () => {
    const bannerList = document.querySelectorAll('.banner__item');
    bannerWrapper.appendChild(bannerList[0]);
});

function startAutoSlide() {
    timerId = setInterval(() => {
        nextBannerBtn.click();
    }, 5000);
}
startAutoSlide();
function stopAutoSlide() {
    clearInterval(timerId);
}
prevBannerBtn.addEventListener('mouseenter', () => {
    stopAutoSlide();
});
prevBannerBtn.addEventListener('mouseleave', () => {
    startAutoSlide();
});
nextBannerBtn.addEventListener('mouseenter', () => {
    stopAutoSlide();
});
nextBannerBtn.addEventListener('mouseleave', () => {
    startAutoSlide();
});
bannerWrapper.addEventListener('mouseenter', () => {
    stopAutoSlide();
});
bannerWrapper.addEventListener('mouseleave', () => {
    startAutoSlide();
});
window.addEventListener('beforeunload', () => {
    stopAutoSlide();
});
