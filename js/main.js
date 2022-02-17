$('.partners-slider').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: true,
    appendDots: $('.partners-slider-dots'),
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const overlayMobile = document.querySelector('.mobile-menu-overlay')

burgerMenu.addEventListener('click',() => {
    mobileMenu.classList.add('mobile-menu-active')
    overlayMobile.style.display = 'block'
})

overlayMobile.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-active')
    overlayMobile.style.display = 'none'
})