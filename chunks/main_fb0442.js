(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[function(e,t,i){e.exports=i(10)(0)},function(e,t,i){e.exports=i(10)(427)},,,,function(e,t,i){e.exports=i(10)(429)},function(e,t,i){e.exports=i(10)(428)},,function(e,t,i){e.exports=i(10)(2)},,function(e,t){e.exports=dll_entry},,,,function(e,t,i){e.exports=i(10)(416)},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(11),a=i(156),r=i.n(a),o=n.a.getLogger("dev:amisSchema:utils"),s={selfLogin:{url:"POST login",actionDesc:"\u767b\u5f55\u7cfb\u7edf"},selfRegister:{url:"POST signup",actionDesc:"\u7528\u6237\u6ce8\u518c"},selfLogout:{url:"POST logout",actionDesc:"\u9000\u51fa\u767b\u5f55"},getSelfInfo:{url:"GET v1/user/info",actionDesc:"\u83b7\u53d6\u4e2a\u4eba\u4fe1\u606f",expired:1e3},editSelfInfo:{url:"PUT v1/user",actionDesc:"\u7f16\u8f91\u4e2a\u4eba\u4fe1\u606f"},changeSelfPwd:{url:"PUT v1/user/password",actionDesc:"\u4fee\u6539\u4e2a\u4eba\u5bc6\u7801"},uploadImg:{url:"POST file/image",actionDesc:"\u4e0a\u4f20\u56fe\u7247"},pageStat:{url:"POST /v1/user/stat/data",actionDesc:"\u9875\u9762\u6570\u636e\u7edf\u8ba1",mockSource:r.a},sysRoleId:{url:"GET v1/system/role/List",actionDesc:"\u67e5\u770b\u7cfb\u7edf\u89d2\u8272",onSuccess:function(e){o.warn("myAdmin(source):",e);var t=e.data.map((function(e){return{label:e.role_name+" ("+e.id+")",value:e.id}}));return e.data={options:t},e}},sysUserInfo:{url:"GET v1/user/$id",actionDesc:"\u67e5\u770b\u64cd\u4f5c\u4eba\u4fe1\u606f"}}},,,,,,,,,,function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return o}));var n={auth:"auth",authorization:"Authorizations",schemaEditor:"schemaEditor"},a={updateAuthLoginCode:"updateAuthLoginCode"},r={global:{sysRoleIdPicker:"/_global/system/sysRoleIdPicker",sysUserInfoModal:"/_global/system/sysUserInfoModal"}},o={loginRoute:"/login",enableBackTop:!0}},,,,function(e,t,i){e.exports=i(10)(408)},,,function(e,t,i){e.exports=i(10)(17)},,,,function(e,t,i){e.exports=i(10)(10)},function(e,t,i){e.exports=i(10)(42)},,,function(e,t,i){e.exports=i(10)(11)},,,,,,,,,function(e,t,i){e.exports=i(10)(423)},function(e,t,i){"use strict";i.d(t,"b",(function(){return b})),i.d(t,"a",(function(){return h}));var n=i(5),a=i(3),r=i(2),o=i(9),s=i(11),l=i(4),u=i(17),d=i(27),c=function(){return(c=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function o(e){try{l(n.next(e))}catch(t){r(t)}}function s(e){try{l(n.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))},p=function(e,t){var i,n,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(a=2&r[0]?n.return:r[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,n=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(s){r=[6,s],n=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},f=s.a.getLogger("dev:amisSchema:utils"),y={};function b(){return m(this,void 0,void 0,(function(){return p(this,(function(e){switch(e.label){case 0:a.a.request(c(c({},u.a.pageStat),{data:{code:100001}})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,v()];case 2:return e.sent(),[2,(t=y.limit,!t||t!==a.a.constants.rootLimitFlag&&-1===t.indexOf(r.j)?(n.toast.error("\u5f53\u524d\u7528\u6237\u6743\u9650\u5f02\u5e38","\u7cfb\u7edf\u63d0\u793a"),!1):(Object(o.e)(t),!0))];case 3:return e.sent(),[3,4];case 4:return[2,!1]}var t}))}))}function v(){return m(this,void 0,void 0,(function(){return p(this,(function(e){return[2,a.a.request(u.a.getSelfInfo).then((function(e){return y=e.data.data,f.warn("myAdmin(userInfo):",y),y}))]}))}))}function h(e){var t=e||{},i=t.tip,r=void 0===i?"\u60a8\u5df2\u7ecf\u6210\u529f\u9000\u51fa\u767b\u5f55":i,o=t.useApi,s=void 0!==o&&o;a.a.routerHistory.push("/login"),n.toast.info(r,"\u7cfb\u7edf\u63d0\u793a"),Object(l.a)(d.d.authorization),s&&a.a.request(u.a.selfLogout)}},,,,,,,,function(e,t,i){e.exports=i(10)(51)},,,,,,,,,,,,,function(e,t,i){e.exports=i(10)(6)},function(e,t,i){e.exports=i(10)(12)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){e.exports=i(10)(426)},function(e,t,i){e.exports=i(10)(39)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){var n={"./antd.css":251,"./cxd.css":252,"./dark.css":253,"./default.css":254};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=136},function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i(1),a=i(11),r=i(41),o=i(17),s=i(27),l=i(52),u=function(){return(u=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},d=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i},c=a.a.getLogger("app:request"),m=new r.a;m.onPreRequest=function(e){return e.mock=!0,e},m.onRequest=function(e){var t=e.actionAddr;e.fetchOptions.credentials="include";var i=localStorage.getItem(s.d.authorization);return i&&(e.headers.Authorization=i),t&&(e.headers["X-ACTION-ADDR"]=t),e.fetchOptions.mode="cors",e},m.onSuccess=function(e,t){var i=e.code,a=void 0===i?0:i,r=e.msg,s=e.message;t.api!==o.a.selfLogout.url&&(10023!==a&&10022!==a||Object(l.a)({tip:"\u5f53\u524d\u7528\u6237\u767b\u5f55\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"}));var c=u(u({},e),{status:a,msg:r||s});if(Object(n.get)(c,"data.list")){var m=c.data,p=m.list,f=m.count,y=d(m,["list","count"]);c.data=u(u({},y),{total:f||0,items:p})}return c},m.onError=function(e,t,i){c.warn("\u8bf7\u6c42\u53d1\u9001\u51fa\u73b0\u9519\u8bef",{response:e,option:t},i)}},,function(e,t,i){e.exports=i(10)(41)},function(e,t,i){e.exports=i(10)(422)},,,,function(e,t,i){e.exports=i(10)(494)},function(e,t,i){e.exports=i(10)(115)},,,,,,,,,,function(e,t,i){e.exports=i(10)(167)},function(e,t){},function(e,t,i){"use strict";var n=i(104),a=i(9),r=i(27),o=i(17),s=function(){return(s=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l={sysRoleIdPicker:{limits:r.b.global.sysRoleIdPicker,type:"select",name:"roleIds",clearable:!0,multiple:!1,searchable:!0,label:"\u89d2\u8272\u540d",placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272",searchPromptText:"\u8f93\u5165\u89d2\u8272ID/\u89d2\u8272\u540d",source:o.a.sysRoleId}};Object(n.a)("sysUserInfoModal",(function(e){var t=e.userIdKey,i=void 0===t?"id":t,n=e.data,l=(void 0===n?{}:n)[i];return/^\d*$/.test(l)?Object(a.b)(r.b.global.sysUserInfoModal)?{type:"action",level:"link",className:"no-shadow",label:""+l,actionType:"dialog",dialog:{title:"\u7cfb\u7edf\u7528\u6237\u4fe1\u606f",actions:[],closeOnEsc:!0,body:{type:"service",api:s(s({},o.a.sysUserInfo),{api:o.a.sysUserInfo.url,url:o.a.sysUserInfo.url.replace("$id",l)}),body:{type:"form",wrapWithPanel:!1,mode:"horizontal",controls:[{type:"static-image",label:"\u5934\u50cf",name:"avatar"},{type:"static",name:"username",label:"\u767b\u5f55\u8d26\u53f7"},{name:"nickname",label:"\u540d\u79f0",type:"html",html:"<span>${nickname} (${id})</span>"},{type:"static",name:"desc",label:"\u5907\u6ce8"},{type:"static-date",name:"updateTime",format:"YYYY-MM-DD HH:mm:ss",label:"\u521b\u5efa\u65f6\u95f4"}]}}}}:l:"--"}));var u,d,c={definitions:l},m=[{nodePath:"/_global",limitLabel:"\u5168\u5c40\u6743\u9650",limitOnly:!0,label:"",icon:"fa fa-cog",children:[{nodePath:"/system",label:"\u7cfb\u7edf\u4fe1\u606f",limits:{sysRoleIdPicker:{label:"\u7ba1\u7406\u5458\u89d2\u8272\u7b5b\u9009"},sysUserInfoModal:{label:"\u7ba1\u7406\u5458\u4fe1\u606f\u5f39\u7a97"}},apis:{roleId:{url:o.a.sysRoleId.url,limits:"sysRoleIdPicker"},userInfo:{url:o.a.sysUserInfo.url,limits:"sysUserInfoModal"}}}]},{nodePath:"/",limitLabel:"\u4fa7\u8fb9\u680f\u76ee\u5f55",label:"NAV",children:[{path:"/",label:"start",nodePath:"start",exact:!0,pathToComponent:"start",sideVisible:!1},{label:"\u9080\u8bf7\u7ba1\u7406",icon:"fa fa-paint-brush",nodePath:"yaoqing",children:[{label:"\u9080\u8bf7\u7edf\u8ba1",nodePath:"inviter"}]},{label:"\u798f\u5229\u7ba1\u7406",icon:"fa fa-paint-brush",nodePath:"fuli",children:[{label:"\u6dd8\u5b9d\u8054\u76df",nodePath:"alimama"},{label:"\u6dd8\u793c\u91d1",nodePath:"taolijin_list"},{label:"\u9632\u64b8\u4e2d\u95f4\u9875",nodePath:"safe"},{label:"\u9632\u64b8\u6dd8\u793c\u91d1",nodePath:"safe_taolijin"}]},{label:"\u7cfb\u7edf\u7ba1\u7406",icon:"fa fa-wrench",nodePath:"system",children:[{label:"\u7ba1\u7406\u5458\u7528\u6237",nodePath:"user_list"},{label:"\u7ba1\u7406\u5458\u89d2\u8272",nodePath:"user_role"}]}]}],p=i(6),f=i(76),y=i(52),b=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},v=[{type:"preset-route",path:"/login",pathToComponent:!0},{type:"preset-route",path:"/signup",pathToComponent:!0},{type:"private-route",path:"/",redirect:"/login",children:{routes:m,type:"aside-layout",routeTabs:{enable:!0},header:{brand:{logo:"/static/images/logo_line_white.png",title:"myAdmin(Nav.Xin)",link:{title:"dashboard",href:"/"}},items:[{type:"item-dev-code"},{type:"head-item",faIcon:"question-circle",tip:"\u67e5\u770b\u6587\u6863",href:"https://ovine.igroupes.com/org/"},{type:"item-search-menu"},{type:"head-item",align:"right",className:"p-none",body:{type:"lib-css",align:"right",body:{type:"service",name:"headItemUserInfo",api:o.a.getSelfInfo,body:{type:"lib-dropdown",className:"clickable",body:{type:"html",className:"item-user-content",html:'\n          <img\n            className="w-2x m-r-xs"\n            src="$avatar"\n            alt="avatar"\n          />\n          <div>$nickname</div>\n        '},items:[{type:"button",level:"link",icon:"fa fa-edit",label:"\u7f16\u8f91\u4fe1\u606f",actionType:"dialog",dialog:{title:"\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f",body:{type:"form",api:o.a.editSelfInfo,messages:{fetchSuccess:"\u4e2a\u4eba\u4fe1\u606f\u4fee\u6539\u6210\u529f"},reload:"headItemUserInfo",controls:[{type:"image",label:"\u5934\u50cf",name:"avatar",receiver:o.a.uploadImg,autoUpload:!1,maxLength:1,maxSize:307200,width:200,height:200,crop:{aspectRatio:1}},{type:"static",name:"nickname",label:"\u540d\u79f0",value:"\u6587\u672c",quickEdit:!0},{type:"static",name:"signature",label:"\u4e2a\u6027\u7b7e\u540d",quickEdit:!0},{name:"parentId",type:"tpl",label:"\u521b\u5efa\u8005",hiddenOn:"!data.parentId",tpl:'<%= data.parentNickname  + " (" + data.parentId + ")" %>'}]}}},{type:"button",level:"link",icon:"fa fa-key",label:"\u4fee\u6539\u5bc6\u7801",actionType:"dialog",dialog:{title:"\u4fee\u6539\u767b\u5f55\u5bc6\u7801",size:"sm",body:{type:"form",api:o.a.changeSelfPwd,messages:{saveSuccess:"[\u5bc6\u7801\u4fee\u6539\u6210\u529f] \u8bf7\u4f7f\u7528\u65b0\u5bc6\u7801\u91cd\u65b0\u767b\u5f55",saveFailed:"\u5bc6\u7801\u4fee\u6539\u5931\u8d25"},redirect:"/login",mode:"horizontal",horizontal:{left:"col-sm-3",right:"col-sm-9"},controls:[{type:"password",required:!0,name:"oldPassword",label:"\u65e7\u5bc6\u7801"},{type:"password",name:"password",required:!0,label:"\u65b0\u5bc6\u7801"},{type:"password",name:"confirmPassword",required:!0,label:"\u91cd\u590d\u5bc6\u7801",validationErrors:{equalsField:"\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4"},validations:{equalsField:"password"}}]}}},{type:"button",level:"link",icon:"fa fa-reply",label:"\u9000\u51fa\u767b\u5f55",onClick:function(){return Object(y.a)({useApi:!0})}}]}},css:function(e){return Object(p.css)(u||(u=b(["\n      .","Spinner {\n        width: 25px !important;\n        height: 25px !important;\n      }\n      .item-user-content {\n        display: inline-block;\n        min-width: 80px;\n        padding: 2px;\n        img {\n          width: 28px;\n          height: 28px;\n        }\n        div {\n          ",";\n          vertical-align: middle;\n        }\n      }\n    "],["\n      .","Spinner {\n        width: 25px !important;\n        height: 25px !important;\n      }\n      .item-user-content {\n        display: inline-block;\n        min-width: 80px;\n        padding: 2px;\n        img {\n          width: 28px;\n          height: 28px;\n        }\n        div {\n          ",";\n          vertical-align: middle;\n        }\n      }\n    "])),e.ns,Object(f.a)("100px"))}}},{type:"item-setting",align:"right"}]}},onAuth:y.b}],h=i(137),g=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},k={colors:{}},O={colors:{layoutHeaderBg:"#f5f5f5"}},x={colors:{layoutHeaderBg:"#191c22"}},w={colors:{layoutHeaderBg:"#fff"}},P=new(i(33).a)({default:w,cxd:O,dark:x,antd:k}),T={env:{default:{disableLimit:!1,domains:{api:"http://127.0.0.1:8080"}},localhost:{disableLimit:!1,domains:{api:"http://127.0.0.1:8080"},logger:{moduleName:".*"}},staging:{domains:{api:"http://127.0.0.1:8080"}},production:{isProd:!0,domains:{api:"http://127.0.0.1:8080"}}},entry:v,request:h.a,theme:P,constants:r.a,amis:c,styled:{globalStyle:function(e){return Object(p.css)(d||(d=g(["\n  .","Layout {\n    background-color: transparent;\n  }\n"],["\n  .","Layout {\n    background-color: transparent;\n  }\n"])),e.ns)}}};t.a=T},,function(e,t,i){e.exports=i(255)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){e.exports=i(10)(69)},,,function(e,t,i){e.exports=i(10)(922)},,,function(e,t,i){e.exports=i(10)(14)},,,function(e,t,i){var n={"./fuli/alimama/preset":225,"./fuli/safe/preset":226,"./fuli/safe_taolijin/preset":227,"./fuli/taolijin_list/preset":228,"./system/user_list/preset":229,"./system/user_log/preset":230,"./system/user_role/preset":231,"./yaoqing/inviter/preset":232};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=224},function(e,t,i){"use strict";i.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},add:{label:"\u6dfb\u52a0"},edit:{label:"\u7f16\u8f91"},del:{label:"\u5220\u9664"}},apis:{list:{mock:!1,url:"GET v1/system/alimama/appinfo/List",limits:"$page",onPreRequest:function(e){var t=e.data.dateRange;if(t){var i=t.split("%2C");e.data=n(n({},e.data),{startDate:i[0],endDate:i[1]})}return e}},add:{mock:!1,url:"POST v1/system/alimama/appinfo/item/add",limits:"add"},edit:{mock:!1,url:"PUT v1/system/alimama/appinfo/item/edit/$id",limits:"edit"},del:{mock:!1,url:"DELETE v1/system/alimama/appinfo/item/del/$id",limits:"del"}}}},function(e,t,i){"use strict";i.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},add:{label:"\u6dfb\u52a0"},edit:{label:"\u7f16\u8f91"},del:{label:"\u5220\u9664"},view:{label:"\u67e5\u770b\u8be6\u60c5"}},apis:{list:{mock:!1,url:"GET v1/system/fuli/List",limits:"$page",onPreRequest:function(e){var t=e.data.dateRange;if(t){var i=t.split("%2C");e.data=n(n({},e.data),{startDate:i[0],endDate:i[1]})}return e}},add:{mock:!1,url:"POST v1/system/fuli/item/add",limits:"add"},edit:{mock:!1,url:"PUT v1/system/fuli/item/edit/$id",limits:"edit"},del:{mock:!1,url:"DELETE v1/system/fuli/item/del/$id",limits:"del"},view:{mock:!1,url:"GET fuli/safe/item/$id",limits:"view"}}}},function(e,t,i){"use strict";i.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},add:{label:"\u6dfb\u52a0"},edit:{label:"\u7f16\u8f91"},del:{label:"\u5220\u9664"},view:{label:"\u67e5\u770b\u8be6\u60c5"}},apis:{list:{mock:!1,url:"GET v1/system/fuli/taolijin/List",limits:"$page",onPreRequest:function(e){var t=e.data.dateRange;if(t){var i=t.split("%2C");e.data=n(n({},e.data),{startDate:i[0],endDate:i[1]})}return e}},add:{mock:!1,url:"POST v1/system/fuli/taolijin/item/add",limits:"add"},edit:{mock:!1,url:"PUT v1/system/fuli/taolijin/item/edit/$id",limits:"edit"},del:{mock:!1,url:"DELETE v1/system/fuli/taolijin/item/del/$id",limits:"del"},view:{mock:!1,url:"GET fuli/safe/taolijin/item/$id",limits:"view"}}}},function(e,t,i){"use strict";i.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},add:{label:"\u6dfb\u52a0"},edit:{label:"\u7f16\u8f91"},del:{label:"\u5220\u9664"}},apis:{list:{mock:!1,url:"GET v1/system/taolijin/List",limits:"$page",onPreRequest:function(e){var t=e.data.dateRange;if(t){var i=t.split("%2C");e.data=n(n({},e.data),{startDate:i[0],endDate:i[1]})}return e}},add:{mock:!1,url:"POST v1/system/taolijin/item/add",limits:"add"},edit:{mock:!1,url:"PUT v1/system/taolijin/item/edit/$id",limits:"edit"},del:{mock:!1,url:"DELETE v1/system/taolijin/item/del/$id",limits:"del"}}}},function(e,t,i){"use strict";i.r(t),t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},viewTree:{label:"\u67e5\u770b\u5173\u7cfb\u56fe"},addItem:{label:"\u6dfb\u52a0"},editItem:{label:"\u7f16\u8f91"},delItem:{label:"\u5220\u9664",needs:["viewTree","addItem","editItem"]}},apis:{list:{mock:!1,url:"GET v1/system/user/List",limits:"$page"},add:{mock:!1,url:"POST v1/system/user/add",limits:"addItem"},edit:{mock:!1,url:"PUT v1/user/$id",limits:"editItem"},del:{mock:!1,url:"DELETE v1/user/$id",limits:"delItem"},treeChart:{url:"GET v1/system/user/tree",limits:"viewTree"}}}},function(e,t,i){"use strict";i.r(t),t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"}},apis:{list:{url:"GET ovapi/system/log/item",limits:"$page"}}}},function(e,t,i){"use strict";i.r(t),t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},editRole:{label:"\u7f16\u8f91\u89d2\u8272"},addRole:{label:"\u6dfb\u52a0\u89d2\u8272",needs:["editRole"]},editLimit:{label:"\u7f16\u8f91\u6743\u9650",needs:["editRole"]},listMember:{label:"\u89d2\u8272\u6210\u5458\u5217\u8868",needs:["editRole"]},editMember:{label:"\u4fee\u6539\u89d2\u8272\u6210\u5458",needs:["listMember"]},delRole:{label:"\u5220\u9664\u89d2\u8272",needs:["editRole"]}},apis:{list:{mock:!1,url:"GET v1/system/role/List",limits:"$page"},addRole:{mock:!1,url:"POST v1/system/role/item/add",limits:"addRole"},editRole:{mock:!1,url:"PUT v1/system/role/item/edit/$id",limits:"editRole"},delRole:{mock:!1,url:"DELETE v1/system/role/item/del/$id",limits:"delRole"},getLimit:{mock:!1,url:"GET v1/system/role/item/limit/$id",limits:"editLimit"},editLimit:{mock:!1,url:"PUT v1/system/role/item/limit/$id",limits:"editLimit",onPreRequest:function(e){var t=e.data,i=t.id,n=t.authApi,a=void 0===n?"":n,r=t.authLimit,o=void 0===r?"":r;return e.data={id:i,api:a,limit:o},e}},listMember:{mock:!1,url:"GET v1/system/user/List",limits:"listMember"},editMember:{mock:!1,url:"PUT v1/system/role/manger",limits:"editMember",onPreRequest:function(e){var t=e.data,i=t.ids,n=t.newRoleId;return e.data={userIds:i.split(",").map((function(e){return Number(e)})),roleId:n},e}}}}},function(e,t,i){"use strict";i.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default={limits:{$page:{label:"\u67e5\u770b\u5217\u8868"},add:{label:"\u6dfb\u52a0"},edit:{label:"\u7f16\u8f91"},del:{label:"\u5220\u9664"}},apis:{list:{mock:!1,url:"GET v1/system/inviter/List",limits:"$page",onPreRequest:function(e){var t=e.data.dateRange;if(t){var i=t.split("%2C");e.data=n(n({},e.data),{startDate:i[0],endDate:i[1]})}return e}},add:{mock:!1,url:"POST v1/system/inviter/item/add",limits:"add"},edit:{mock:!1,url:"PUT v1/system/inviter/item/edit/$id",limits:"edit"},del:{mock:!1,url:"DELETE v1/system/inviter/item/del/$id",limits:"del"}}}},function(e,t,i){var n={"./fuli/alimama/mock":234,"./fuli/safe/mock":235,"./fuli/safe_taolijin/mock":236,"./fuli/taolijin_list/mock":237,"./login/mock":238,"./signup/mock":239,"./system/user_list/mock":240,"./system/user_log/mock":241,"./system/user_role/mock":242,"./yaoqing/inviter/mock":243};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=233},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,i){var n={"./fuli/alimama/index":[256,0],"./fuli/safe/index":[257,0],"./fuli/safe_taolijin/index":[258,0],"./fuli/taolijin_list/index":[259,0],"./login/index":[264,1,0],"./signup/index":[260,1,0],"./start/index":[261,0],"./system/user_list/index":[262,0],"./system/user_log/index":[265,0],"./system/user_role/index":[266,0],"./yaoqing/inviter/index":[263,0]};function a(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i(a)}))}a.keys=function(){return Object.keys(n)},a.id=244,e.exports=a},,function(e,t,i){e.exports=i(10)(117)},function(e,t,i){e.exports=i(10)(71)},,function(e,t,i){e.exports=i(10)(228)},function(e,t,i){e.exports=i(10)(70)},function(e,t,i){e.exports=i.p+"static/ovine/styles/themes/antd_73c138.css"},function(e,t,i){e.exports=i.p+"static/ovine/styles/themes/cxd_81ce33.css"},function(e,t,i){e.exports=i.p+"static/ovine/styles/themes/dark_1eb10a.css"},function(e,t,i){e.exports=i.p+"static/ovine/styles/themes/default_009cdc.css"}],[[159,4,2]]]);
//# sourceMappingURL=main_fb0442.js.map