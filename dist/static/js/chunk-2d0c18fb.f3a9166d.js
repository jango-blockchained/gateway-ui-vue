(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c18fb"],{4724:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("routing-form",{attrs:{"show-type":"update",editItem:t.item},on:{"update:editItem":function(i){t.item=i},"update:edit-item":function(i){t.item=i}}})],1)},o=[],u=(e("7f7f"),e("13b7")),a=e("f042"),c="routingEdit",r={name:c,data:function(){return{item:{}}},components:{RoutingForm:u["a"]},created:function(){this.init()},watch:{$route:function(t,i){t.name!=c&&this.$destroy()}},methods:{init:function(){var t=this;this.id=this.$route.query.id;var i=this.id;i&&a["c"](i).then(function(i){i=i||{},t.item=i})}}},s=r,d=e("0c7c"),f=Object(d["a"])(s,n,o,!1,null,"0e7d4d3a",null);i["default"]=f.exports}}]);