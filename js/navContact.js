// グローバルコンポーネントの書き方

Vue.component('nav-contact', {
    data() { //data()でdataを定義
        return {
            msg: 'hello contact',
            errors: [],
            name: null,
            email: null,
            title: null,

            //下記は「入力フォーム」と「確認用文字列」の表示項目を切り替えます。
            //trueとなっている項目は消えます。
            //v-bind:classでclassをつけたり消したりできます。
            //display:none;が設定されたclass(今回はdelatearea)がついたり消えたりします。
            //trueになった方が消えるのは、delateareaがtrueで付与されるためです。
            inputdata:false,
            makesure:true
        }
    },
    // @submit.prevent="exec" class="contact"
    // id="app"
    // @submit="checkForm" 
    // action="https://vuejs.org/"
    // method="post"
    template: `
    <div class="content__menu5">
        <form
        >
        <!-- エラー表示 -->
        <p v-if="errors.length">
            <b>エラーがあります</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>


            問い合わせフォーム<br>
            <label for="name">お名前</label><br>
            <input id="name" v-model="name" type="text" name="name" placeholder="お名前" /><br>
            <label for="email" >メールアドレス</label><br>
            <input id="email" v-model="email" type="email" name="email" placeholder="メールアドレス" /><br>
            <label for="title">件名</label><br>
            <input id="title" type="title" placeholder="件名" /><br>
            <label for="text" >内容</label><br>
            <textarea cols="40" rows="10" maxlength="30" placeholder="まだ使えません"></textarea>
            <button type="submit" 
                    value="submit"
                    @clickbtn 
                    >submit</button>
        </form>

    </div>`,

    methods:{
      clickbtn: function () {
        //dataのinputdataにtrueを代入します。
        //するとhtmlのv-bind:classが指定された箇所でdelateareaが付与されます。
        this.inputdata = true
        //dataのmakesureにfalseを代入します。
        //するとhtmlのv-bind:classが指定された箇所でdelateareaが解除されます。
        this.makesure = false
        //上記だと、該当箇所の入力フォームが消えて、確認項目が表示されます。
      },
      checkForm: function (e) {
        this.errors = [];
  
        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }
  
        if (!this.errors.length) {
          return true;
        }
  
        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }



 })
 const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    email: null,
    title: null
  },
  methods:{
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
})