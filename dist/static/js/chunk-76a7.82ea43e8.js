(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-76a7"],{er4n:function(t,r,e){"use strict";e.r(r);var a=e("hZMg"),s={name:"home",data:function(){return{clusterNum:0,routingNum:0,apiNum:0,serverNum:0,appliedPlugin:0}},created:function(){this.init()},watch:{$route:function(t,r){"home"!==t.name&&this.$destroy()}},methods:{init:function(){var t=this;a.b().then(function(r){var e=(r=r||{}).count||{};t.apiNum=e.api||0,t.clusterNum=e.cluster||0,t.routingNum=e.Routing||0,t.serverNum=e.server||0,t.appliedPlugin=e.appliedPlugin||0})}}},i=(e("gkWo"),e("KHd+")),n=Object(i.a)(s,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"app-container"},[e("el-row",{attrs:{gutter:30}},[e("el-col",{attrs:{span:6}},[e("router-link",{attrs:{to:"/api"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"box-card-left"},[t._v("API")]),t._v(" "),e("div",{staticClass:"box-card-right"},[t._v("个数："+t._s(t.apiNum))])])],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("router-link",{attrs:{to:"/cluster"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"box-card-left"},[t._v("Cluster")]),t._v(" "),e("div",{staticClass:"box-card-right"},[t._v("个数："+t._s(t.clusterNum))])])],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("router-link",{attrs:{to:"/server"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"box-card-left"},[t._v("Server")]),t._v(" "),e("div",{staticClass:"box-card-right"},[t._v("个数："+t._s(t.serverNum))])])],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("router-link",{attrs:{to:"/routing"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"box-card-left"},[t._v("Routing")]),t._v(" "),e("div",{staticClass:"box-card-right"},[t._v("个数："+t._s(t.routingNum))])])],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("router-link",{attrs:{to:"/routing"}},[e("el-card",{staticClass:"box-card box-card2"},[e("div",{staticClass:"box-card-left"},[t._v("AppliedPlugin")]),t._v(" "),e("div",{staticClass:"box-card-right"},[t._v("个数："+t._s(t.appliedPlugin))])])],1)],1)],1)],1)},[],!1,null,"ad977180",null);n.options.__file="index.vue";r.default=n.exports},gkWo:function(t,r,e){"use strict";var a=e("tnfT");e.n(a).a},hZMg:function(t,r,e){"use strict";e.d(r,"a",function(){return i}),e.d(r,"b",function(){return n});var a=e("t3Un"),s="/system";function i(t){return Object(a.a)({url:s+"/backup",method:"POST",data:t})}function n(){return Object(a.a)({url:s,method:"GET"})}},t3Un:function(t,r,e){"use strict";var a=e("4d7F"),s=e.n(a),i=e("vDqi"),n=e.n(i),c=e("XJYT"),o=n.a.create({baseURL:"/v1",timeout:6e4});o.interceptors.request.use(function(t){return t},function(t){console.error(t),s.a.reject(t)}),o.interceptors.response.use(function(t){var r=t.data||{};t.headers;return 0===r.code?r.data:(Object(c.Message)({message:r.data,type:"error",duration:5e3}),s.a.reject("error"))},function(t){return Object(c.Message)({message:t.data||"网络异常",type:"error",duration:5e3}),s.a.reject(t)}),r.a=o},tnfT:function(t,r,e){}}]);