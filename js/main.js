new Glider(document.querySelector('.glider'), {
    
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 900px
      breakpoint: 600,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        
      }
    },
    {
        // screens greater than >= 1100px
        breakpoint: 900,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
    },
    {
      // screens greater than >= 1400px
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
  ]
});
 