// swiper
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

// lightbox
const lightbox = GLightbox({
    moreLength: 200,
});


// tabs
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


// form
let btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let form = document.querySelector('.contact-form');

        // получить данные из формы
        // преобразовать в JSON
        // отправить асинхронный запрос с помощью fetch
        // вывести пользователю ответ - ok/error

        let span = document.querySelector('.res');
        setTimeout(() => {
            span.classList.add('visible')
        }, 500)
        setTimeout(() => {
            span.classList.remove('visible')
        }, 3000)

    })
}