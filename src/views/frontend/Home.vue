<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <!-- <router-link to="/admin">進入後台</router-link> | -->
      <router-link to="/login">登入</router-link>
    </div>
    <hr>
    <h2>這裡是前台</h2>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld,
  // },
};
</script>
