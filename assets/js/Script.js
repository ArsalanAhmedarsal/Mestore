const preIcon = '<img src="assets/Imgs/pre.png" alt="">';
const nextIcon = '<img src="assets/Imgs/next.png" alt="">';

$(document).ready(function(){
    $('.Product-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
            preIcon,
            nextIcon
            
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
    
    $('.owl-carousel-latest').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.owl-carousel-logo').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
  });



