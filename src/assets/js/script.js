'use strict';
document.addEventListener('DOMContentLoaded', () => {

    $('.header-bottom__catalog').click(function (e) {
        e.preventDefault();
        $('.header-catalog').slideToggle();
        $(this).toggleClass('active'); 
        $('body').toggleClass('hidd');
    });

    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".main-next",
            prevEl: ".main-prev",
        },
        pagination: {
            el: ".main-pagination",
            clickable: true,
        },
    });

    const promoSlider = new Swiper(".promo-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".promo-next",
            prevEl: ".promo-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".promo-pagination",
            clickable: true,
        },
    });

    const partnersSlider = new Swiper(".partners-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".partners-pagination",
            clickable: true,
        },
    });

    const newsSlider = new Swiper(".news-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".news-next",
            prevEl: ".news-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".news-pagination",
            clickable: true,
        },
    });

    if (document.querySelector('.price-slider')) {
        var stepsSlider = document.getElementById('steps-slider');
        var input0 = document.getElementById('input-with-keypress-0');
        var input1 = document.getElementById('input-with-keypress-1');
        var inputs = [input0, input1];

        noUiSlider.create(stepsSlider, {
            start: [20, 80],
            connect: true,
            step: 10,
            range: {
                'min': [0],
                '10%': [10, 10],
                '50%': [80, 50],
                '80%': 150,
                'max': 1200
            }
            
        });

        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
	    });
    }
    

    $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

    $('select').styler({
		selectSearch: true,
	});

    $('.filter-button').click(function (e) {
        $('.left-sidebar').slideToggle();
    });

    const clientscatalogSlider = new Swiper(".clients-catalog-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".clients-catalog-next",
            prevEl: ".clients-catalog-prev",
        },
        pagination: {
            el: ".clients-catalog-pagination",
            clickable: true,
        },
    });

    const clientspromoSlider = new Swiper(".clients-promo-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".clients-promo-next",
            prevEl: ".clients-promo-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".clients-promo-pagination",
            clickable: true,
        },
    });

    const clientsnewsSlider = new Swiper(".clients-news-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
            nextEl: ".clients-news-next",
            prevEl: ".clients-news-prev",
        },
        pagination: {
            el: ".clients-news-pagination",
            clickable: true,
        },
    });

    var swiper1 = new Swiper(".product1", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".product2", {
        loop: true,
        spaceBetween: 0,
        thumbs: {
          swiper: swiper1,
        },
        navigation: {
            nextEl: ".product-next",
            prevEl: ".product-prev",
        },
    });

    document.querySelector('body').addEventListener('click', (e) => {
        const coll = document.querySelectorAll('.product-content__count_item-text');
        coll.forEach(el => el.classList.remove('show'));

        const collLink = document.querySelectorAll('.button-count');
        console.log('collLink', collLink)
        collLink.forEach(elem => elem.classList.remove('active'));

        if (e.target.closest('.button-count')) {
            e.target.closest('.button-count').classList.add('active');
            e.target.parentNode.querySelector('.product-content__count_item-text').classList.add('show');
        }
    })

});