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
    template:`
    <div class="main">
        <nav class="sidebar">
            <div @click="toggle = 'home' " class="sidebar__home" :class="{ 'sidebar__active':toggle==='home' }">home</div>
            <div @click="toggle = 'menu2'" class="sidebar__menu2" :class="{ 'sidebar__active':toggle==='menu2' }">about</div>
            <div @click="toggle = 'menu3'" class="sidebar__menu3" :class="{ 'sidebar__active':toggle==='menu3' }">skills</div>
            <div @click="toggle = 'menu4'" class="sidebar__menu4" :class="{ 'sidebar__active':toggle==='menu4' }">works</div>
            <div @click="toggle = 'menu5'" class="sidebar__menu5" :class="{ 'sidebar__active':toggle==='menu5' }">contact</div>
        </nav>
        <section class="content" >
           <!-- {{ scrollY }} グローバルコンポーネントを呼び出す-->
            <nav-home @scroll="handleScroll;handleUp" v-show="toggle === 'home'" class="content__home" />
            <nav-about @scroll="handleScroll;handleUp" v-show="toggle === 'menu2'" class="content__menu2" />
            <nav-skills @scroll="handleScroll;handleUp" v-show="toggle === 'menu3'" class="" />
            <nav-works @scroll="handleScroll;handleUp" v-show="toggle === 'menu4'" class="" />
            <nav-contact @scroll="handleScroll;handleUp" v-show="toggle === 'menu5'" class="" />
        </section>
    </div>
    `,
    methods: {
        handleScroll() {
              this.scrollY = window.scrollY;
              if (this.toggle=='home' && this.scrollY>=60) {
                this.toggle='menu2'  
                //  alert(this.scrollY);
                 this.toTop();
              } else if(this.toggle == 'menu2' && this.scrollY >= 60){
                this.toggle='menu3'
                // alert('handled1');
                this.toTop();
              } else if(this.toggle == 'menu3' && this.scrollY >= 60){
                this.toggle='menu4'
                // alert('handled2');
                this.toTop();
              } else if(this.toggle == 'menu4' && this.scrollY >= 60){
                this.toggle='menu5'
                // alert('handled3');
                this.toTop();
              }
              return window.scrollY > 100
            },
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
             } else {
                return { x: 0, y: 25 }
            }
        },
        toTop:function () {
            scrollTo(0, 20);
        },
        handleUp() {
            this.scrollY = window.scrollY;
             if (this.toggle == 'menu2' && this.scrollY < 1){
                this.toggle='home'
                //   alert('handled1');
                this.toTop();
             } else if(this.toggle == 'menu3' && this.scrollY < 1){
                this.toggle='menu2'
                //   alert('handled2');
                this.toTop();
             } else if(this.toggle == 'menu4' && this.scrollY < 1){
               this.toggle='menu3'
               //   alert('handled3');
               this.toTop();
             } else if(this.toggle == 'menu5' && this.scrollY < 1){
                this.toggle='menu4'
                // alert('handled3');
                this.toTop();
             }
                return window.scrollY > 100
             },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleUp);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
      },
   
  })