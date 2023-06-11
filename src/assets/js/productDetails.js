const nextThumbBtn = document.querySelector('.product__image-thumbs-next');
const prevThumbBtn = document.querySelector('.product__image-thumbs-prev');
const productImgThumbWrapper = document.querySelector('.product__image-thumbs');
const productThumbItems = document.querySelectorAll('.product__image-thumb');
const productSmallItems = document.querySelectorAll('.product__image-small');
const zoomImage = document.querySelector('.product__image-zoom');

let thumbWidth = productThumbItems[0].offsetWidth;
let currentImaIndex = 0;
let thumbSrc = productThumbItems[currentImaIndex].getAttribute('src');
zoomImage.style.backgroundImage = `url(${thumbSrc})`;

productSmallItems[currentImaIndex].classList.add('active');
window.addEventListener('resize', () => {
    thumbWidth = productThumbItems[0].offsetWidth;
});

nextThumbBtn.addEventListener('click', () => {
    if (currentImaIndex >= productThumbItems.length - 1) {
        productImgThumbWrapper.scrollLeft = 0;
        currentImaIndex = 0;
    } else {
        productImgThumbWrapper.scrollLeft += thumbWidth;
        currentImaIndex++;
    }
    productSmallItems.forEach((item) => item.classList.remove('active'));
    productSmallItems[currentImaIndex].classList.add('active');
    thumbSrc = productThumbItems[currentImaIndex].getAttribute('src');
    zoomImage.style.backgroundImage = `url(${thumbSrc})`;
});
prevThumbBtn.addEventListener('click', () => {
    if (currentImaIndex <= 0) {
        productImgThumbWrapper.scrollLeft = thumbWidth * (productThumbItems.length - 1);
        currentImaIndex = productThumbItems.length - 1;
    } else {
        productImgThumbWrapper.scrollLeft -= thumbWidth;
        currentImaIndex--;
    }
    productSmallItems.forEach((item) => item.classList.remove('active'));
    productSmallItems[currentImaIndex].classList.add('active');
    thumbSrc = productThumbItems[currentImaIndex].getAttribute('src');
    zoomImage.style.backgroundImage = `url(${thumbSrc})`;
});

productSmallItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImaIndex = index;
        productImgThumbWrapper.scrollLeft = thumbWidth * currentImaIndex;
        productSmallItems.forEach((item) => item.classList.remove('active'));
        productSmallItems[currentImaIndex].classList.add('active');
        thumbSrc = productThumbItems[currentImaIndex].getAttribute('src');
        zoomImage.style.backgroundImage = `url(${thumbSrc})`;
    });
});

///handle zoom image thumb

productImgThumbWrapper.addEventListener('mousemove', (e) => {
    let x = e.offsetX < 0 ? 0 : e.offsetX;
    let y = e.offsetY < 0 ? 0 : e.offsetY;
    let perCentX = (x / productImgThumbWrapper.offsetWidth) * 100;
    let perCentY = (y / productImgThumbWrapper.offsetHeight) * 100;
    zoomImage.style.left = `${x}px`;
    zoomImage.style.top = `${y}px`;
    zoomImage.style.backgroundPosition = `${perCentX}% ${perCentY}%`;
    zoomImage.classList.add('zooming');
});
productImgThumbWrapper.addEventListener('mouseleave', () => {
    zoomImage.classList.remove('zooming');
});
