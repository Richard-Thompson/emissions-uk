(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{314:function(a,t,e){},315:function(a,t,e){"use strict";e.r(t);var c=e(0),n=e.n(c),o=e(308),r=e.n(o),s=function(a){var t=a.map(function(a){return r()(a.lastUpdated)});return function(a){try{var t=r.a.duration(r()().diff(a)),e=t._data;return e.years?"Updated ".concat(e.years," years ago"):e.months?"Updated ".concat(e.months," months ago"):7===e.days?"Updated a week ago":e.days>7?"Updated ".concat(Math.floor(e.days/7)," weeks ago"):1===e.days?"Updated ".concat(e.days," day ago"):e.days<7&&0!==e.days?"Updated ".concat(e.days," days ago"):1===e.hours?"Updated ".concat(e.hours," hour ago"):e.hours?"Updated ".concat(e.hours," hours ago"):null}catch(c){return null}}(r.a.max(t))};var d=e(309),i=e(310);e(314),t.default=function(a){var t=a.city,e=a.onClick;return[n.a.createElement("button",{className:"city-card-cross",onClick:function(){console.log(t.city),e(t.city)}},n.a.createElement(i.a,{icon:d.a})),n.a.createElement("p",{className:"city-card-updated city-card-item"},s(t.measurements)),n.a.createElement("h2",{className:"city-card-location-title city-card-item"},t.location),n.a.createElement("p",{className:"city-card-location-city city-card-item"},"In ",t.city,", United Kingdom"),n.a.createElement("p",{className:"city-card-measurements city-card-item"},"Values: ",t.measurements.map(function(a,e){return"".concat(a.parameter,": ").concat(a.value).concat(t.measurements.length-1===e?"":","," ")}))]}}}]);
//# sourceMappingURL=4.bcddfd9e.chunk.js.map