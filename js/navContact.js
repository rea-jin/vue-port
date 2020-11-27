// グローバルコンポーネントの書き方

Vue.component('nav-contact', {
    data() { //data()でdataを定義
        return {
            msg: 'hello contact'
        }
    },
    template: '<div class="content__menu5">{{ msg }}</div>'
 })
 