new Vue({
    el: "#app",
    data: {
      msg: "Welcome",
     //  url:'https://google.com',
      menus:['home','about','works','links'],
      html:'<a href="contact">contact</a>',
      toggle:'home',
      isActive:false,
      scrollY:0,
      // menu:'port'
    },
    // components: {
    //   'carousel': VueCarousel.Carousel,
    //   'slide': VueCarousel.Slide
    // },
    // templateは１番上の階層は１つまで

  })