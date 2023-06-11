// category action price

const rangeInput = document.querySelectorAll('.categories__price-range input');
const progressBar = document.querySelector('.categories__price-progress-bar');
const minPriceElms = document.querySelectorAll('.categories__price-min-val small');
const maxPriceElms = document.querySelectorAll('.categories__price-max-val small');
let priceGap = 100;

rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);
        if (maxVal - minVal < priceGap) {
            if (e.target.id === 'price-min') {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            minPriceElms.forEach((min) => {
                min.innerText = minVal;
            });
            maxPriceElms.forEach((max) => {
                max.innerText = maxVal;
            });
            progressBar.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            progressBar.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
    });
});

// hide show categories menu
const categoryTabs = document.querySelectorAll('.categories__action-tab');

categoryTabs.forEach((categoryTab) => {
    categoryTab.addEventListener('click', (e) => {
        let parent = getParent(categoryTab, '.categories__action');
        let categoryMenu = parent.querySelector('.categories__action-menu');
        let clearBtn = parent.querySelector('.categories__action-menu-clear');
        let applyBtn = parent.querySelector('.categories__action-menu-apply');
        document.querySelectorAll('.categories__action-menu').forEach((elm) => {
            elm.classList.remove('show-menu');
        });
        categoryMenu.classList.toggle('show-menu');
        applyBtn.addEventListener('click', () => {
            // logic
            //
            categoryMenu.classList.remove('show-menu');
        });
        clearBtn.addEventListener('click', () => {
            //logic clear
        });
    });
});

function getParent(elm, selector) {
    while (elm.parentElement) {
        if (elm.parentElement.matches(selector)) {
            return elm.parentElement;
        }
        elm = elm.parentElement;
    }
}

// next prev experts category
const nextExpertBtn = document.querySelector('.categories__experts-next');
const prevExpertBtn = document.querySelector('.categories__experts-prev');
const expertsCategoryWrapper = document.querySelector('.categories__experts-list');
const expertsCategoryItems = document.querySelectorAll('.categories__experts-item');
let expertsItemsWidth = expertsCategoryItems[0].offsetWidth;

window.addEventListener('resize', () => {
    expertsItemsWidth = expertsCategoryItems[0].offsetWidth;
});

nextExpertBtn.addEventListener('click', () => {
    expertsCategoryWrapper.scrollLeft += expertsItemsWidth;
});
prevExpertBtn.addEventListener('click', () => {
    expertsCategoryWrapper.scrollLeft -= expertsItemsWidth;
});
