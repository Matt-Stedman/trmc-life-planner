(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){t.exports=n(33)},29:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r),i=n(18),a=n.n(i),c=(n(29),n(11)),s=n(19),u=n(2),l=n(4),d=n(5),p=n(1),f=n(6),h=n(8),g=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(d.a)(this,Object(p.a)(e).call(this,t))).state={value:""},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleSubmit",value:function(t){alert("A name was submitted: "+this.state.value),t.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit})}}]),e}(o.a.Component),_=n(9),y=n(10),v=function(t){if(void 0!==t&&0!==t.airtableData.length){var e=t.airtableData;console.log(e);var n=["CONVICTION","LONG TERM / PROJECTS","SPRINTS / MILESTONES","TO-DO / TASKS"],r=o.a.useState(e.projects.map(function(t){return Object(_.a)({},t,{use_text:t.title,opacity:.5,sprints:t.sprints.map(function(t){return Object(_.a)({},t,{use_text:t.title,opacity:.5,todos:t.todos.map(function(t){return Object(_.a)({},t,{use_text:t.title,opacity:.5})})})})})})),i=Object(c.a)(r,2),a=i[0],s=i[1],u=o.a.useState({selected:null,scale:1,x:0,y:0}),l=Object(c.a)(u,2),d=l[0],p=l[1],f={core:{x_c:window.innerWidth/2,y_c:window.innerHeight/2},design:{spacing:200,projects_angle:6.283,sprints_angle:.785375,todos_angle:6.283/36,label_angle:.785375},colours:{background:"white",trace_unselected:"#8899dd",trace_selected:"#1122ff"}},h=function(t){t.target.id().includes("pr_node_")?s(a.map(function(e,n){return Object(_.a)({},e,{use_text:"pr_node_"+n===t.target.id()&&void 0!==e.description?e.title+"\n"+e.description:e.title,opacity:"pr_node_"+n===t.target.id()?1:.5})})):t.target.id().includes("sp_node_")?s(a.map(function(e,n){return Object(_.a)({},e,{sprints:e.sprints.map(function(e,r){return Object(_.a)({},e,{use_text:"sp_node_"+n+"_"+r===t.target.id()&&void 0!==e.description?e.title+"\n"+e.description:e.title,opacity:"sp_node_"+n+"_"+r===t.target.id()?1:.5})})})})):t.target.id().includes("td_node_")&&s(a.map(function(e,n){return Object(_.a)({},e,{sprints:e.sprints.map(function(e,r){return Object(_.a)({},e,{todos:e.todos.map(function(e,o){return Object(_.a)({},e,{use_text:"td_node_"+n+"_"+r+"_"+o===t.target.id()&&void 0!==e.description?e.title+"\n"+e.description:e.title,opacity:"td_node_"+n+"_"+r+"_"+o===t.target.id()?1:.5})})})})})}))},g=function(t){setTimeout(function(t){s(a.map(function(t,e){return Object(_.a)({},t,{use_text:t.title,opacity:.5,sprints:t.sprints.map(function(t,e){return Object(_.a)({},t,{use_text:t.title,opacity:.5,todos:t.todos.map(function(t,e){return Object(_.a)({},t,{use_text:t.title,opacity:.5})})})})})}))},3e3)};return o.a.createElement(y.d,{width:window.innerWidth,height:window.innerHeight-50,onWheel:function(t){t.evt.preventDefault();var e=t.target.getStage(),n=e.scaleX(),r=e.getPointerPosition().x/n-e.x()/n,o=e.getPointerPosition().y/n-e.y()/n,i=t.evt.deltaY<0?1.02*n:n/1.02;p(Object(_.a)({},d,{scale:i,x:(e.getPointerPosition().x/i-r)*i,y:(e.getPointerPosition().y/i-o)*i}))},draggable:!0,onDragStart:function(t){},onDragEnd:function(t){},scaleX:d.scale,scaleY:d.scale,x:d.x,y:d.y,style:{background:f.colours.background}},o.a.createElement(y.b,{id:"LAYOUT"},n.map(function(t,e){return o.a.createElement(y.a,{key:"lb_circle_"+e,id:"lb_circle_"+e,x:f.core.x_c,y:f.core.y_c,radius:f.design.spacing*(e+1),stroke:"black"})}),n.map(function(t,e){return o.a.createElement(y.e,{key:"lb_text_"+e,id:"lb_text_"+e,x:f.core.x_c+v(3+f.design.spacing*(e+1),f.design.label_angle)[0],y:f.core.y_c+v(3+f.design.spacing*(e+1),f.design.label_angle)[1],text:n[e],fontSize:10,fill:"#6666ff"})}),o.a.createElement(y.e,{x:f.core.x_c-3*f.design.spacing/4,y:f.core.y_c-3*f.design.spacing/4,verticalAlign:"middle",align:"center",width:3*f.design.spacing/2,height:3*f.design.spacing/2,text:e.conviction,fontSize:10,fill:"#6666ff"})),o.a.createElement(y.b,{id:"PROJECTS"},a.map(function(t,e){var n=f.design.sprints_angle,r=f.design.todos_angle,i=v(f.design.spacing,f.design.projects_angle*e/a.length);return[[o.a.createElement(y.c,{key:"pr_line_"+e,id:"pr_line_"+e,x:f.core.x_c+i[0],y:f.core.y_c+i[1],points:[0,0,i[0],i[1]],tension:.5,stroke:"black"}),o.a.createElement(y.a,{key:"pr_node_"+e,id:"pr_node_"+e,x:f.core.x_c+2*i[0],y:f.core.y_c+2*i[1],radius:4,fill:"#0",onmouseenter:h,onmouseleave:g}),o.a.createElement(y.e,{key:"pr_text_"+e,id:"pr_text_"+e,x:f.core.x_c+2*i[0],y:f.core.y_c+2*i[1],text:t.use_text,wrap:"word",width:300,fill:"#333388",opacity:t.opacity})],t.sprints.map(function(i,c){var s=f.design.projects_angle*e/a.length,u=n*(c-(t.sprints.length-1)/2)/t.sprints.length,l=v(2*f.design.spacing,s),d=v(3*f.design.spacing,s+u);return[[o.a.createElement(y.c,{key:"sp_line_"+e+"_"+c,id:"sp_line_"+e+"_"+c,x:f.core.x_c,y:f.core.y_c,points:[l[0],l[1],d[0],d[1]],tension:.5,stroke:"black"}),o.a.createElement(y.a,{key:"sp_node_"+e+"_"+c,id:"sp_node_"+e+"_"+c,x:f.core.x_c+d[0],y:f.core.y_c+d[1],radius:4,fill:"#0",onmouseenter:h,onmouseleave:g}),o.a.createElement(y.e,{key:"sp_text_"+e+"_"+c,id:"sp_text_"+e+"_"+c,x:f.core.x_c+d[0],y:f.core.y_c+d[1],radius:4,text:i.use_text,opacity:i.opacity,wrap:"word",width:300,fill:"#333388"})],i.todos.map(function(t,n){var a=r*(n-(i.todos.length-1)/2)/i.todos.length,l=v(3*f.design.spacing,s+u),d=v(4*f.design.spacing,s+u+a);return[o.a.createElement(y.c,{key:"td_line_"+e+"_"+c+"_"+n,id:"td_line_"+e+"_"+c+"_"+n,x:f.core.x_c,y:f.core.y_c,points:[l[0],l[1],d[0],d[1]],tension:.5,stroke:"black"}),o.a.createElement(y.a,{key:"td_node_"+e+"_"+c+"_"+n,id:"td_node_"+e+"_"+c+"_"+n,x:f.core.x_c+d[0],y:f.core.y_c+d[1],radius:4,fill:"#0",onmouseenter:h,onmouseleave:g}),o.a.createElement(y.e,{key:"td_text_"+e+"_"+c+"_"+n,id:"td_text_"+e+"_"+c+"_"+n,x:f.core.x_c+d[0],y:f.core.y_c+d[1],radius:4,text:t.use_text,opacity:t.opacity,wrap:"word",width:300,fill:"#333388"})]})]})]})))}function v(t,e){return[t*Math.cos(e),t*Math.sin(e)]}},m=n(17),b=n.n(m);function x(){x=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:w(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var d={};function p(){}function f(){}function h(){}var g={};s(g,i,function(){return this});var _=Object.getPrototypeOf,y=_&&_(_(S([])));y&&y!==e&&n.call(y,i)&&(g=y);var v=h.prototype=p.prototype=Object.create(g);function m(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;r(this,"_invoke",{value:function(r,i){function a(){return new e(function(o,a){!function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(d).then(function(t){u.value=t,a(u)},function(t){return r("throw",t,a,c)})}c(s.arg)}(r,i,o,a)})}return o=o?o.then(a,a):a()}})}function w(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,r(v,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=s(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(b.prototype),s(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(v),s(v,c,"Generator"),s(v,i,function(){return this}),s(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var w=function(){var t=Object(s.a)(x().mark(function t(e,n,r){var o;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={conviction:"",projects:[],unassigned:{projects:[],sprints:[],todos:[]}},t.next=3,e.select().all().then(function(t){for(var e=0;e<t.length;e++){var n=t[e],r=n._rawJson.fields,i={};i.id=n.id,i.title=r.Name,i.description=r.Description,i.sprints=[],o.projects.push(i)}}).catch(function(){console.log("Oh dear, Projects/Long-terms failed..")});case 3:return t.next=5,n.select().all().then(function(t){for(var e=function(){var e=t[n],r=e._rawJson.fields;if(0===Object.keys(r).length)return"continue";var i={};i.id=e.id,i.title=r.Name,i.description=r.Notes,i.todos=[],o.projects.find(function(t){return t.id===r["Projects/long term goals"][0]}).sprints.push(i)},n=0;n<t.length;n++)e()}).catch(function(){console.log("Oh dear, Sprints failed..")});case 5:return t.next=7,r.select().all().then(function(t){for(var e=function(){var e=t[n],r=e._rawJson.fields;if(0===Object.keys(r).length)return"continue";var i={};return i.id=e.id,i.title=r.Name,i.description=r.Notes,void 0===r["Projects/long term goals (from Sprints)"]?(o.unassigned.todos.push(i),"continue"):0===r["Projects/long term goals (from Sprints)"].length?(o.unassigned.todos.push(i),"continue"):void o.projects.find(function(t){return t.id===r["Projects/long term goals (from Sprints)"][0]}).sprints.find(function(t){return t.id===r.Sprints[0]}).todos.push(i)},n=0;n<t.length;n++)e()}).catch(function(){console.log("Oh dear, Sprints failed..")});case 7:return t.abrupt("return",o);case 8:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}(),j=function(){b.a.configure({endpointUrl:"https://api.airtable.com",apiKey:"patHyftuco0aidDpG.24a3420997d5fd4e2585495de7ed01dd8dcc8241b44cbe0ad2842ef462690427"});var t=b.a.base("appmuvlU8q5Y40LqG"),e=o.a.useState([]),n=Object(c.a)(e,2),r=n[0],i=n[1];return o.a.useEffect(function(){w(t.table("Projects/long term goals"),t.table("Sprints"),t.table("To-dos")).then(i)},[]),console.log(r),o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(v,{airtableData:r}))},O=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,34)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),i(t),a(t)})};a.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null))),O()}},[[21,3,2]]]);
//# sourceMappingURL=main.0d6d26c5.chunk.js.map