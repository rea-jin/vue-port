// グローバルコンポーネントの書き方

Vue.component('nav-contact', {
    data() { //data()でdataを定義
        return {
            msg: 'hello contact'
        }
    },
    template: `
    <div class="content__menu5">
        <form @submit.prevent="exec" class="contact"
        id="app"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
        >
        <!-- エラー表示 -->
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>


            問い合わせフォーム<br>
            <label for="name">お名前</label><br>
            <input id="name" v-model="name" type="text" name="name" placeholder="name" /><br>
            <label for="email" >メールアドレス</label><br>
            <input id="email" v-model="email" type="email" name="email" placeholder="email" /><br>
            <label for="title">件名</label><br>
            <input id="title" type="title" placeholder="title" /><br>
            <label for="text" >内容</label><br>
            <textarea cols="40" rows="10" maxlength="30" placeholder="まだ使えません"></textarea>
            <button type="submit" value="submit">submit</button>
        </form>

    </div>`
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
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.email) {
        this.errors.push('email required.');
      }

      e.preventDefault();
    }
  }
})