// グローバルコンポーネントの書き方

Vue.component('wordpress', {
  data() { //data()でdataを定義
      return {
          // menu: 'port'
      }
  },
  template: `
  <div class="card-slider">
      <div class="card">
          <a href="https://6340-touseki.com" target="_brank">
              <img class="card_image" src="./img/blogsite.jpg" alt="ポートフォリオサイト">
          </a>
          <div class="card-title">[自分のポートフォリオサイト]</div>
          <hr>
          <div class="card-body">
            wordpressのテーマを作成し、クリニックのブログ用サイトを作成しました。
            
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
      </div>
      -->
  </div>
      </div>
  </div>
  `

})
