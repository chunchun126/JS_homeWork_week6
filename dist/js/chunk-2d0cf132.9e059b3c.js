(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf132"],{"61bc":function(t,c,o){"use strict";o.r(c);var n=function(){var t=this,c=t.$createElement,o=t._self._c||c;return o("div",[o("h2",[t._v("這裡是 後台 產品頁面")]),o("table",t._l(t.products,(function(c){return o("tr",{key:c.id},[o("td",[t._v(t._s(c.title))]),o("td",[t._v(t._s(c.price))]),o("td",[o("router-link",{attrs:{to:"/product/"+c.id}},[t._v("連結")])],1)])})),0)])},e=[],r=(o("99af"),{data:function(){return{products:[]}},props:["token"],created:function(){var t=this,c="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/products");this.$http.get(c).then((function(c){console.log("AJAX 回傳資料"),t.products=c.data.data})).catch((function(t){console.log("AJAX 失敗"),console.log(t.response)}))}}),a=r,s=o("2877"),u=Object(s["a"])(a,n,e,!1,null,null,null);c["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0cf132.9e059b3c.js.map