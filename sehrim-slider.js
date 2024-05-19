$(document).ready(function(){
        $('.sehrim-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.prev-button').click(function(){
            $('.sehrim-slider').slick('slickPrev');
          });
        
          $('.next-button').click(function(){
            $('.sehrim-slider').slick('slickNext');
          });
        
    });

