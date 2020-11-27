// グローバルコンポーネントの書き方

Vue.component('nav-skills', {
    data() { //data()でdataを定義
        return {
            msg: '全て独学レベルで、webサイトやwebサービス作成時に使用した程度です。'
        }
    },
    computed: {
        // CSS変数を定義して、CSS側に渡したいVueコンポーネントの値を指定
        width() {
          return {
            width : 50,
          }
        }
    },
    template:`
    <div class="content__menu3">My Skills
        <br>{{ msg }}
        <li class="status-bar">HTML：1年</li>
        <li class="status-bar">CSS/SASS：1年/ ６ヶ月</li>
        <li class="status-bar" style="width:60%">PHP：６ヶ月</li>
        <li class="status-bar">Laravel：６ヶ月</li>
        <li class="status-bar">JavaScript/JQuery：1年</li>
        <li class="status-bar">Vue.js：６ヶ月</li>
        <li class="status-bar">GoogleAppScript：３ヶ月</li>
        <li class="status-bar">ExcelVBA：３ヶ月</li>
        <li class="status-bar">MySQL：６ヶ月</li>
        <li class="status-bar">GitHub：６ヶ月</li>
        <li class="status-bar">AWS(ALB/EC2/RDS)：１ヶ月</li>
    </div>
    `
})
 