// グローバルコンポーネントの書き方

Vue.component('nav-about', {
    data() { //data()でdataを定義
        return {
            msg: '',
            text1:'About me',
            text2:'About this Site',
        }
    },
  
    template: `
    <div class="">
        <div class="text">
                <span
                v-for="(t,index) in text1"
                :key="index"
                class="item"
                :style="{animationDelay: index*100+'ms'}"
                v-text="t"
                >
                </span>
        <br>
            独学で勉強をしており、ウェブエンジニアを目指しています。<br>
            勉強してから１年後、スタートアップの会社で３ヶ月ほど、<br>
            ExcelVBA,GoogleAppScriptを使った開発をしました。<br>
            現在はネットの教材を使って、Vue.js, docker, CI/CDを勉強しています。
        </div>
        <hr>

        <div class="text">
                <span
                v-for="(t,index) in text2"
                :key="index"
                class="item"
                :style="{animationDelay: index*100+'ms'}"
                v-text="t"
                >
                </span>
        <br>
            このサイトはvue.jsで作りました。cdnを使用しています。<br>
            シンプルなデザインでデジタルな感じに仕上げました。
        </div>
    </div>
    `
 })
 