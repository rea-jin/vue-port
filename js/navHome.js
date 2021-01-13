// グローバルコンポーネントの書き方

Vue.component('nav-home', {
    data() { //data()でdataを定義
        return {
            msg: 'Click!!',
           title :'small',
           modal:false
        }
    },

    template: `
    <div class="">
        <!-- モーダル -->
        <div class="modal-mask" v-if="modal" @close="modal = false">
            <div class="modal-container" @click="$emit('close')">
            Welcome to<br> my Portfolio Site
            </div>
        <span class="scroll">scroll<br>v</span>
        </div>

        <!-- 中心円 -->
        <div @click="title='big'" @click="modal = true" :class="{ 'expand':title === 'big' ,'content__hello':title==='small'}">
            <span class="title" >{{msg}}</span>
        </div>
        
        <!-- 背景四角 -->
        <!-- <div class="bar bar__circle"></div> -->
        <div class="bar bar__top"></div>
        <div class="bar bar__right"></div>
        <div class="bar bar__left"></div>
        <div class="bar bar__bottom"></div>
        <div class="bar bar__center"></div>
        
        <!-- ガジェット -->
        <div class="circle">
        <div class="circle-inner"></div>
        </div>
        <div class="circle2">
        <div class="circle-inner2"></div>
        </div>

        <div class="a animation-status-bar"></div>
        <div class="b animation-status-bar"></div>
        <div class="c animation-status-bar"></div>
       
        <div class="d animation-light"></div>
        <div class="e animation-light"></div>
        <div class="f animation-light"></div>
        <div class="g animation-light"></div>

        <svg class="editorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none">
        <defs>
        <path id="gentle-wave"
            d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z" />
        </defs>
        <g class="parallax1">
          <use xlink:href="#gentle-wave" x="50" y="3" fill="#39cbb6aa"/>
        </g>
         <g class="parallax2">
          <use xlink:href="#gentle-wave" x="50" y="0" fill="#e2d748a1"/>
        </g>
        <g class="parallax3">
        <use xlink:href="#gentle-wave" x="50" y="9" fill="#68c751bf"/>
        </g>
        <g class="parallax4">
        <use xlink:href="#gentle-wave" x="50" y="6" fill="#f8fed5c2"/>  
        </g>
        </svg>
     
    </div>
    `
 })
 