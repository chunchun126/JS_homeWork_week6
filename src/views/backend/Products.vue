<template>
  <div>
    <h2>這裡是 後台 產品頁面</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <!-- 動態路由 使用 動態屬性 :to -->
          <router-link :to="`/product/${item.id}`">連結</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      // token: '',
    };
  },
  props: ['token'],
  created() {
    // 取 token（因外層元件 Dashboard 已存取，所以內層元件不須再存一次）
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    // 取 後台 產品列表 API
    const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`;
    this.$http.get(api)
      .then((res) => {
        console.log('AJAX 回傳資料');
        // console.log(res);
        this.products = res.data.data;
      })
      .catch((error) => {
        console.log('AJAX 失敗');
        console.log(error.response);
      });
  },
};
</script>
