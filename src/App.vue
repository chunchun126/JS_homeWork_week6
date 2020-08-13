<template>
  <div id="app">
    <!-- Loading 套件 是使用全域註冊 所以任何頁面都可使用 -->
    <loading :active.sync="isLoading"></loading>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/admin">登入後台</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // 測試安裝 Loading 套件
    // 指向 data 的 isLoading 必須用 this
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    this.isLoading = true;
    // 測試安裝 Vue axios
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false;
        console.log(res);
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error.response);
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
