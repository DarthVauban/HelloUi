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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});