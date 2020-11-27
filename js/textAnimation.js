Vue.component('textAnimation',{
    data(){
        return{
            text:'About me'
        }
    },
   template:`<div class="textAnime">
                <span
                v-for="(t,index) in text"
                :key="index"
                class="item"
                :style="{animationDelay: index*100+'ms'}"
                v-text="t"
                >
            </div>
                `,
 } )

