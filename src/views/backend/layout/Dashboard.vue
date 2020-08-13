<template>
  <div>
    <div id="nav">
      <router-link to="/admin">後台Home</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link> |
      <router-link to="/">回前台</router-link>
    </div>
    <hr>
    <h2>這裡是後台</h2>
    <!-- 在 router-view 上使用 props 將外層元件的資料 傳送到內層 -->
    <router-view :token="token" v-if="checkSuccesss"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkSuccesss: false,
    };
  },
  created() {
    // 執行登入驗證
    this.checkLogin();
  },
  methods: {
    // 確認登入狀態
    checkLogin() {
      // 從 cookie 取出 token 並存入 data 裡
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // 將 Token 加到 Headers（需要驗證的 api 需帶上這一串，預設代入 token）
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      console.log(`取出 token ${this.token}`);

      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;
      this.$http.post(api, { api_token: this.token })
        .then((res) => {
          this.checkSuccesss = true;
          console.log('驗證成功', res);
        })
        .catch((error) => {
          console.log(error.response);
          // 驗證失敗就切換到 login
          this.$router.push('/login');
        });
    },
  },
};
</script>
