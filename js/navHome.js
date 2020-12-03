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
        <div class="modal-mask" v-if="modal" @close="modal = false">
            <div class="modal-container" @click="$emit('close')">
            Welcome to<br> my Portfolio Site
        </div>
        <span class="scroll">scroll<br>v</span>

        </div>
        <div @click="title='big'" @click="modal = true" :class="{ 'expand':title === 'big' ,'content__hello':title==='small'}">
            <span class="title" >{{msg}}</span>
            
        </div>
        <!-- <div class="bar bar__circle"></div> -->
        <div class="bar bar__top"></div>
        <div class="bar bar__right"></div>
        <div class="bar bar__left"></div>
        <div class="bar bar__bottom"></div>
        <div class="bar bar__center"></div>
        
        
    </div>
    `
 })
 