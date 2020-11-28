// グローバルコンポーネントの書き方

Vue.component('webservice', {
    data() { //data()でdataを定義
        return {
        
       }
    },
    components: {
        Hooper: window.Hooper.Hooper,
        Slide: window.Hooper.Slide
      },
    template: `
    <hooper>
        <slide>
        slide1
        </slide> 

        <slide>
        slide2
        </slide> 

        <slide>
        slide3
        </slide>
        
    </hooper>
        `
 
 })
 