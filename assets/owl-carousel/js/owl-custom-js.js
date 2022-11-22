// First Slider Our Fleet
$('.main-content .owl-carousel').owlCarousel({
    stagePadding: 30,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        "<img src='./assets/images/left-arrow.png' class='img-fluid w-75'/>",
        "<img src='./assets/images/right-arrow.png' class='img-fluid w-75'/>"
    ],
    navContainer: '.main-content .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

// First Slider Our Fleet
$('.main-content-two .owl-carousel').owlCarousel({
    stagePadding: 30,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        "<img src='./assets/images/left-arrow.png' class='img-fluid w-75'/>",
        "<img src='./assets/images/right-arrow.png' class='img-fluid w-75'/>"
    ],
    navContainer: '.main-content-two .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});

// What They Say
$('.main-content-three .owl-carousel').owlCarousel({
    stagePadding: 30,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        "<img src='./assets/images/left-arrow.png' class='img-fluid w-75'/>",
        "<img src='./assets/images/right-arrow.png' class='img-fluid w-75'/>"
    ],
    navContainer: '.main-content-three .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});