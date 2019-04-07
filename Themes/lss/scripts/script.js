var swiper = new Swiper('.slider-partner', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        }
    }
});


function SignupNewsletterSuccess(data) {
    $('#singup-newsletter-area').html('<p>' + data.message + '</p>')
}

function ContactSuccess(data) {
    $('#contact-area').html('<p>' + data.msg + '</p>')
}

function ContactSuccess(result) {
    $('#alert-contact').text(result.msg);
}

$(function () {
    $('nav#menu').mmenu({
        extensions: ["position-right"]
    });
});