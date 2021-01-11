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
                <img class="card_image" src="./img/clinic-lp.jpg" alt="クリニックサイト">
            </a>
            <div class="card-title">[クリニックのランディングページ]</div>
            <hr>
            <div class="card-body">
                テンプレートサイトを使って、作成したクリニックのランディングページです。
                主にBootstrap4を使って、スタイルを作っています。
           
            </div>
        </div>
        <div class="card"> 
            <a href="./img/restraunt.png" data-lightbox="group">
                <img class="card_image" src="./img/sake.jpg" alt="料亭サイト">
             </a>
            <div class="card-title">[架空の料亭のサイト]</div>
            <hr>
            <div class="card-body">
                html/cssを勉強したての頃に,
                テンプレートサイトを使って、作成しました。
                主にBootstrap4,sassを使って、スタイルを作っています。
            </div>
        </div>
    </div>
</div>
    `

 })
 