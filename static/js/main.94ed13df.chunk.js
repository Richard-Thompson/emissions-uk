(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(301)},159:function(e,t,n){},179:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),s=(n(159),n(87)),o=n(17),u=n.n(o),l=n(25),p=n(32),f=n(127),m=n(83),h=n.n(m),d=new function e(){Object(f.a)(this,e),this.getCities=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.openaq.org/v1/cities?country=GB&limit=112").then(function(e){return{result:e}}).catch(function(e){return{error:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),this.getCity=function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.openaq.org/v1/latest?city=".concat(t)).then(function(e){return{result:e}}).catch(function(e){return{error:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},b=n(307),v=(n(179),Object(a.lazy)(function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,315))})),w=function(e){var t=e.cities,n=e.fetchCityCallback,c=e.cityList,i=e.onClick,s=Object(a.useState)({}),o=Object(p.a)(s,2),f=o[0],m=o[1],h=Object(a.useState)(""),d=Object(p.a)(h,2),w=d[0],y=d[1];Object(a.useEffect)(function(){var e=t&&t.map(function(e,t){return{key:t,value:e.city,text:e.city}});m({dropdownOptions:e})},[t]);var O=function(){var e=Object(l.a)(u.a.mark(function e(t,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n(a.value);case 4:y(""),document.activeElement.blur();case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-page container"},r.a.createElement("h1",{className:"search-page-title"},"Compare your Air"),r.a.createElement("p",{className:"search-page-description"},"Compare the air quality between cities in the uk. ",r.a.createElement("br",null),"Select cities to compare using the search tool below."),r.a.createElement("div",{className:"search-page-dropdown"},r.a.createElement(b.a,{icon:"search",placeholder:"Enter city name...",fluid:!0,search:!0,inline:!0,autoComplete:"on",selectOnNavigation:!1,selectOnBlur:!1,upward:!1,options:f.dropdownOptions,onChange:O,value:w})),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"city-card-loading"},"Loading...")},r.a.createElement("div",{className:"city-card-list"},c&&c.results.map(function(e){return r.a.createElement("div",{className:"city-card-container",key:Math.random()},r.a.createElement(v,{city:e,onClick:i}))}))))},y=(n(299),function(){var e=Object(a.useState)({cities:[]}),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({results:[]}),o=Object(p.a)(i,2),f=o[0],m=o[1],h=Object(a.useState)(!1),b=Object(p.a)(h,2),v=b[0],y=b[1];Object(a.useEffect)(function(){function e(){return(e=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getCities();case 2:(t=e.sent).result||y(!0),c({cities:t.result.data.results});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var O=function(){var e=Object(l.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getCity(t);case 2:(n=e.sent).result||y(!0),m({results:[n.result.data.results[0]].concat(Object(s.a)(f.results))});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return v?r.a.createElement("p",{className:"search-container-error"},"Oops something went wrong! ",r.a.createElement("br",null)," please refresh the page."):r.a.createElement("div",{className:"search-page__container"},r.a.createElement(w,{cities:n.cities,fetchCityCallback:O,onClick:function(e){var t=f.results.filter(function(t){return t.city!==e});m({results:Object(s.a)(t)})},cityList:f}))});n(300);var O=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,1,2]]]);
//# sourceMappingURL=main.94ed13df.chunk.js.map