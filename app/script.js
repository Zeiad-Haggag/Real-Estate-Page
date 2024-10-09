var swiper = new Swiper('#property-slider .swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides:true,
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  });
  
  var swiper = new Swiper('#testimonaial-slider .swiper', {
    // Optional parameters
    loop: true,
  
  });

  lightGallery(document.getElementById('video-gallery')); 
