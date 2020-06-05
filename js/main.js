$(function(){
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/right.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
            breakpoint: 601,
            settings: {
                arrows: false
                }
            },
        ]
    });
});

// $(function(){
//     $('.our-trip__slider').slick({
//         prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/left.svg" alt=""></button>',
//         nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/right.svg" alt=""></button>',
//         autoplay: true,
//         fade: true,
//         responsive: [
//         {
//         breakpoint: 601,
//         settings: {
//             arrows: false
//                 }
//             }
//         ]    
//     });
// });

