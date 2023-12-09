const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 800,
    autoplay: true,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
    }

});

const lightbox = GLightbox({
    moreLength: 200,
});

const tabs = document.querySelectorAll('.tabs-label');
const tabsContents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(item => {
            item.classList.remove('active')
        })
        this.classList.add('active');
        let id = this.dataset.tab;
        tabsContents.forEach(item => {
            item.classList.remove('active')
        });
        document.querySelector(`[data-item="item${id}"]`).classList.add('active');
    });
});