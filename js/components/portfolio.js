// グローバルコンポーネントの書き方

Vue.component('portfolio', {
    data() { //data()でdataを定義
        return {
            // menu: 'port'
        }
    },
    template: `
    <div class="card-slider">
        <div class="card">
            <a href="https://myportpholio.xyz" target="_brank">
                <img class="card_image" src="./img/portfolio.jpg" alt="ポートフォリオサイト">
            </a>
            <div class="card-title">[ポートフォリオサイト]</div>
            <hr>
            <div class="card-body">
                html/cssを勉強したての頃に,
                テンプレートサイトを使って、作成しました。
                主にBootstrap4を使って、スタイルを作っています。
                
            </div>
        </div> 
        <div class="card">
            <a href="https://weekend-v.work" target="_brank">
                <img class="card_image" src="./img/portfolio2.jpg" alt="ポートフォリオサイト">
            </a>
            <div class="card-title">[ポートフォリオサイト２]</div>
            <hr>
            <div class="card-body">
                シンプルかつcssで動きのあるサイトを作りたいと思い作りました。
                今までに作ったものやブログへのリンクもあります。
            
        </div>
    </div>
        </div>
    </div>
    `

 })
 