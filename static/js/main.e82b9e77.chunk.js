(this.webpackJsonpdarkpatterns=this.webpackJsonpdarkpatterns||[]).push([[0],{132:function(t,e,n){},224:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(23),s=n.n(i),r=(n(132),n(96),n(95)),l=n(123),o=n(230),j=n(231),b=n(233),d=n(232),u=n(227),m=n(228),h=n(229),x=(n(133),new(n(134))({filename:"./rating.db",autoload:!0})),g=n(19),f=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){x.find({},(function(t,e){c(e)}))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("header",{className:"App-header",children:Object(g.jsx)("p",{children:"Rate some cats!"})}),Object(g.jsxs)(o.a,{name:"rating-cats",className:"rating-form",initialValues:{subscribe:!1},onFinish:function(t){console.log("Received values of form: ",t);var e=new Date;x.insert(Object(r.a)(Object(r.a)({},t),{},{timestamp:e.toLocaleString()}),(function(t,e){console.log("Inserted",e,"with ID",e._id)})),i()},children:[[1,2,3,4,5].map((function(t){var e="/darkpatterns"+"/Cat".concat(t,".jpg");return Object(g.jsxs)(o.a.Item,{style:{textAlign:"left"},children:[Object(g.jsx)("img",{src:e,alt:"Cat".concat(t),style:{width:"480px",marginBottom:"8px"}},t),Object(g.jsx)(o.a.Item,{name:"cat".concat(t),label:"Rating:",rules:[{required:!0,message:"Please rate this cat!"}],children:Object(g.jsx)(j.a,{})})]},t)})),Object(g.jsx)(o.a.Item,{style:{textAlign:"left"},children:Object(g.jsx)(o.a.Item,{name:"subscribe",valuePropName:"checked",noStyle:!0,children:Object(g.jsx)(b.a,{children:"Subscribe to our mailing list to get updates to your email inbox."})})}),Object(g.jsx)(o.a.Item,{style:{textAlign:"left"},children:Object(g.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}),Object(g.jsx)(u.a,{orientation:"left",children:"Historical Ratings:"}),Object(g.jsx)(m.b,{bordered:!0,style:{margin:"20px",width:"80%"},dataSource:n,renderItem:function(t){return Object(g.jsxs)(m.b.Item,{style:{textAlign:"left"},children:[Object(g.jsxs)(h.a.Text,{mark:!0,style:{marginRight:"10px"},children:["[",t.timestamp,"]"]}),"Cat1: ".concat(t.cat1,", Cat2: ").concat(t.cat2,", Cat3: ").concat(t.cat3,", Cat4: ").concat(t.cat4,", Cat5: ").concat(t.cat5)]})}}),Object(g.jsx)("div",{style:{height:"40px"}})]})};var p=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(f,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root")),O()},96:function(t,e,n){}},[[224,1,2]]]);
//# sourceMappingURL=main.e82b9e77.chunk.js.map