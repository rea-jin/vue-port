// グローバルコンポーネントの書き方

Vue.component('webservice', {
    data() { //data()でdataを定義
        return {
        
       }
    },
   
    template: `
    <hooper>
        <slide>
        <div class="card">
        <a href="https://oshicard.club" target="_brank">
        <img class="card_image" src="./img/Likerd.jpg" alt="カード作成サイト">
        </a>
        <div class="card-title">[カード作成アプリ]</div>
        <hr>
        <div class="card-body">
        PHPフルスクラッチで作成しました。機能的にはユーザー登録、ログイン、削除、ファイルアップロード、画像プレビュー、問い合わせフォームを実装しています。
        </div>
        </div>
        </slide> 

        <slide>
        <div class="card">
        <a href="https://weekend-v.work/elections/top" target="_brank">
        <img class="card_image" src="./img/Election.jpg" alt="投票サイト">
        </a>
        <div class="card-title">[みんなの選挙]</div>
        <hr>
        <div class="card-body">
        Laravel,sassで作りました。CRUD処理、ページング機能を実装、twitterAPI、ORマッパーを使用、RESTful APIで作成しました。
        
        </div>
        
        </div>
        
        </slide> 

        <slide>
        <div class="card">
        <a href="https://apply-3a4f5.web.app/" target="_brank">
        <img class="card_image" src="./img/apply.jpg" alt="管理アプリ">
        </a>
        <div class="card-title">[機器管理アプリ]</div>
        <hr>
        <div class="card-body">
        Vue.js,vuex,vuetify,firebaseで作成しました。CRUD処理、ページング機能を実装しました。firebaseからのデータ抽出がまだうまくできていません。
        </div>
        </div>
        </slide>
        
        </hooper>
        `
 
 })
 