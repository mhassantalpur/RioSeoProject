(this["webpackJsonprio-seo-proj"]=this["webpackJsonprio-seo-proj"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(8),a=n.n(s),i=(n(30),n(18)),o=n.n(i),j=n(23),d=n(5),l=n(17),u=n(10),b=n(1),O=function(e){var t=e.truck,n=Object(c.useState)(!1),r=Object(d.a)(n,2),s=r[0],a=r[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{variant:"primary",onClick:function(){return a(!0)},children:"More Info"}),Object(b.jsxs)(u.a,{show:s,onHide:function(){return a(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(u.a.Header,{closeButton:!0,children:Object(b.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",children:t.name})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)("span",{children:t.address}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:[t.city,", ",t.state," ",t.postal_code]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Monday ",t.monday_open," - ",t.monday_close]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Tuesday ",t.tuesday_open," - ",t.tuesday_close]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Wednesday ",t.wednesday_open," - ",t.wednesday_close]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Thursday ",t.thursday_open," - ",t.thursday_close]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Friday ",t.friday_open," - ",t.friday_close]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Saturday ",t.saturday_open," - ",t.saturday_close]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Sunday ",t.sunday_open," - ",t.sunday_close]})]}),Object(b.jsx)(u.a.Footer,{children:Object(b.jsx)(l.a,{onClick:function(){window.open("".concat(t.url))},children:"View Details"})})]})]})},x=function(e){var t=e.truck;return Object(b.jsx)("button",{onClick:function(){window.open("https://www.google.com/maps/@".concat(t.latitude,",").concat(t.longitude,",17.14z"))},style:{backgroundColor:"steelblue"},className:"btn",children:"Directions"})},p=n(39),h=n(42),y=n(40),f=n(41),m=function(e){var t=e.truck,n=Object(c.useState)(!1),r=Object(d.a)(n,2),s=r[0],a=r[1],i=[t.latitude,t.longitude];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{variant:"warning",onClick:function(){return a(!0)},children:"Show Map"}),Object(b.jsxs)(u.a,{show:s,onHide:function(){return a(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(u.a.Header,{closeButton:!0,children:Object(b.jsxs)(u.a.Title,{id:"contained-modal-title-vcenter",children:[t.name," Location"]})}),Object(b.jsx)(u.a.Body,{children:Object(b.jsxs)(p.a,{style:{height:"180px"},center:i,zoom:13,scrollWheelZoom:!1,children:[Object(b.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(b.jsx)(y.a,{position:i,children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)("span",{children:t.address}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:[t.city,", ",t.state]})]})})]})})]})]})},v=n(19),k=function(e){var t=e.truck;return Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsxs)(v.a,{border:"primary",style:{alignItems:"center",width:"27rem"},children:[Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)(v.a.Title,{children:t.name}),Object(b.jsxs)(v.a.Text,{children:[Object(b.jsx)("span",{children:t.address}),Object(b.jsxs)("p",{children:[t.city,", ",t.state," ",t.postal_code]}),Object(b.jsx)("p",{style:{color:"green"},children:"open until 9pm"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{truck:t}),Object(b.jsx)(O,{truck:t}),Object(b.jsx)(m,{truck:t})]})]})})},w=function(e){var t=e.trucks;return Object(b.jsx)("div",{className:"truckList",children:t.map((function(e){return Object(b.jsx)(k,{truck:e},e.id)}))})},g=(n(35),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my.api.mockaroo.com/locations.json?key=a45f1200");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(w,{trucks:n})})});a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f449994b.chunk.js.map