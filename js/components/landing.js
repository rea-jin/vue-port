Vue.component('landing', {
    data() { //data()でdataを定義
        return {
            // menu: 'port'
        }
    },
    template: `
    <div class="card-slider">
        <div class="card">
            <a href="https://6340-touseki.xyz" target="_brank">
                <img class="card_image" src="./img/clinic-lp.jpg" alt="ポートフォリオサイト">
            </a>
            <div class="card-title">[自分のポートフォリオサイト]</div>
            <hr>
            <div class="card-body">
                テンプレートサイトを使って、作成したクリニックのランディングページです。
                主にBootstrap4を使って、スタイルを作っています。
           
            </div>
        </div>
        <div class="card">
        <!--  
        <a href="https://myportpholio.xyz" target="_brank">
                <img class="card_image" src="./img/portfolio.jpg" alt="ポートフォリオサイト">
            </a>
            <div class="card-title">[自分のポートフォリオサイト]</div>
            <hr>
            <div class="card-body">
                html/cssを勉強したての頃に,
                テンプレートサイトを使って、作成しました。
                主にBootstrap4を使って、スタイルを作っています。
                Bootstrapのどのクラスがどういったスタイルなのか、理解するのに苦労しました。
        -->
        </div>
    </div>
        </div>
    </div>
    `

 })
 