function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    obj.style.width = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            lazyLoad: true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            lazyLoad: true
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
            lazyLoad: false
        }
    }
});
