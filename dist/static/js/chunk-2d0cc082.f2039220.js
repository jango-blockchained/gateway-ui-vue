(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc082"],{"4bca":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("api-form",{attrs:{"show-type":"update",editItem:t.item},on:{"update:editItem":function(i){t.item=i},"update:edit-item":function(i){t.item=i}}})],1)},a=[],c=(e("7f7f"),e("4ec3")),s=e("5521"),o="apiEdit",u={name:o,watch:{$route:function(t,i){t.name!=o&&this.$destroy()}},data:function(){return{item:{}}},components:{ApiForm:s["a"]},created:function(){this.init()},methods:{init:function(){var t=this;this.id=this.$route.query.id;var i=this.id;i&&c["c"](i).then((function(i){i=i||{},i.status=1==i.status,t.item=i}))}}},d=u,r=e("2877"),p=Object(r["a"])(d,n,a,!1,null,"452dd7a6",null);i["default"]=p.exports}}]);