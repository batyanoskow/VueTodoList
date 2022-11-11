(function(){"use strict";var e={8477:function(e,t,n){var o=n(9963),r=n(6252);const a={class:"wrapper"};function i(e,t,n,o,i,s){const c=(0,r.up)("HeaderVue"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(c),(0,r.Wm)(u)])}var s=n.p+"img/logo.760db6b7.jpeg";const c={class:"header"},u=(0,r.uE)('<nav class="navbar navbar-light bg-dark"><div class="container"><a class="navbar-brand" href="#"><img src="'+s+'" alt="" width="60" height="60"></a><ul class="nav justify-content-end"> --&gt; <li class="nav-item"><a class="nav-link text-light" href="/">Home</a></li><li class="nav-item"><a class="nav-link text-light" href="/create">CreateToDo</a></li></ul></div></nav>',1),l=[u];function d(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",c,l)}var f={name:"HeaderVue"},m=n(3744);const p=(0,m.Z)(f,[["render",d]]);var v=p,h={name:"MainApp",components:{HeaderVue:v}};const g=(0,m.Z)(h,[["render",i]]);var b=g,y=n(2201),k=n(3577);const T={class:"home"},w={class:"container"},O={class:"card-home__title"},_={class:"card-home__buttons"},C=["onClick"],S=["onClick"];function E(e,t,n,o,a,i){const s=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.$store.state.todoList,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"home__card card-home",key:e},[(0,r._)("div",O,(0,k.zw)(e.title),1),(0,r._)("div",_,[(0,r._)("button",{class:"card-home__done",onClick:e=>i.doneTodo(t)},[(0,r.Wm)(s,{icon:"fa-solid fa-check"})],8,C),(0,r._)("button",{class:"card-home__delete",onClick:e=>i.deleteTask(t)},[(0,r.Wm)(s,{icon:"fa-solid fa-xmark"})],8,S)])])))),128))])])}var L={name:"HomeVue",data(){return{}},methods:{doneTask(e){let t=this.$store.state.todoList;t[e].done=!t[e].done,t.splice(e,1)},deleteTask(e){this.$store.commit("deleteTodo",e)},doneTodo(e){this.$store.commit("doneTodo",e)}}};const j=(0,m.Z)(L,[["render",E]]);var N=j;const V=[{path:"/",name:"home",component:N},{path:"/create",name:"create",component:()=>n.e(443).then(n.bind(n,3242))}],A=(0,y.p7)({history:(0,y.PO)("/VueTodoList/"),routes:V});var x=A,D=(n(7658),n(3907)),P=(0,D.MT)({state:{todoList:JSON.parse(localStorage.getItem("VUE-Tasks"))||[]},mutations:{saveTodos(e){localStorage.setItem("VUE-Tasks",JSON.stringify(e.todoList))},addTodo(e,t){""!=t&&(e.todoList.push({title:t,done:!1,deleted:!1}),localStorage.setItem("VUE-Tasks",JSON.stringify(e.todoList)))},deleteTodo(e,t){e.todoList.splice(t,1),localStorage.setItem("VUE-Tasks",JSON.stringify(e.todoList))},doneTodo(e,t){e.todoList.splice(t,1),localStorage.setItem("VUE-Tasks",JSON.stringify(e.todoList))}},actions:{},getters:{},modules:{}}),H=n(3636),I=n(7810),U=n(9417);n(7024),n(8702);H.vI.add(U.BC0,U.LEp,U.g82,U.wp6),(0,o.ri)(b).use(P).use(x).component("font-awesome-icon",I.GN).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.e3a7f725.js"}}(),function(){n.miniCssF=function(e){return"css/about.e676c004.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/VueTodoList/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8477)}));o=n.O(o)})();
//# sourceMappingURL=app.dac9bbea.js.map