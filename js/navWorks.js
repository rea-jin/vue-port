// グローバルコンポーネントの書き方

Vue.component('nav-works', {
    data() { //data()でdataを定義
        return {
            menu: 'port',
        }
    },
    template: `
    <div class="content__menu4">
        <ul class="menu__bar">
            <li class="menu-button" @click="menu='port'" :class="{ 'menu-button--active':menu === 'port'}">ポートフォリオサイト</li>
            <li class="menu-button" @click="menu='corp'" :class="{ 'menu-button--active':menu === 'corp'}">コーポレートサイト</li>
            <li class="menu-button" @click="menu='lp'" :class="{ 'menu-button--active':menu === 'lp'}">ランディングページ</li>
            <li class="menu-button" @click="menu='web'" :class="{ 'menu-button--active':menu === 'web'}">webサービス</li>
            <li class="menu-button" @click="menu='word'" :class="{ 'menu-button--active':menu === 'word'}">wordpressサイト</li>
        </ul>
        <hr>

        
            <portfolio v-show="menu === 'port'" class="" />
            <corporate v-show="menu === 'corp'" class="" />
            <landing v-show="menu === 'lp'" class="" />
            <webservice v-show="menu === 'web'" class="" />
            <wordpress v-show="menu === 'word'" class="" />
  
    </div>
    `

 })
 