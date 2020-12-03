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
                <img class="card_image" src="./img/blogsite.jpg" alt="ブログサイト">
            </a>
            <div class="card-title">[wordpressサイト]</div>
            <hr>
            <div class="card-body">
              wordpressのテーマを作成し、クリニックのブログサイトを作成しました。
                
            </div>
        </div> 
        
    </div>
    `

 })
 