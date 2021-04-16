(this["webpackJsonpmy-blog-react"]=this["webpackJsonpmy-blog-react"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(16),i=c.n(s),j=(c(22),c(7)),l=c(0),a=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Durvesh Malpure"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(j.b,{to:"/",children:"Home"}),Object(l.jsx)(j.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Blog"})]})]})},o=function(e){var t=e.blogs,c=e.title;return Object(l.jsxs)("div",{className:"blog-list",children:[Object(l.jsx)("div",{className:"title",children:c}),t.map((function(e){return Object(l.jsx)("div",{className:"blog-preview",children:Object(l.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(l.jsx)("h2",{className:"previewTitle",children:e.title}),Object(l.jsxs)("p",{className:"previewAuthor",children:["Written by ",e.author]})]})},e.id)}))]})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),j=Object(b.a)(i,2),l=j[0],a=j[1],o=Object(n.useState)(null),d=Object(b.a)(o,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the resource");return e.json()})).then((function(e){return s(e)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(u(e.message),a(!1))})),a(!1)}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:l,error:h}},h=function(){var e=d("https://durvesh8.github.io/my-blog/data/db.json"),t=e.data,c=e.isPending,n=e.error;return Object(l.jsxs)("div",{className:"home",children:[n&&Object(l.jsx)("div",{children:n}),c&&Object(l.jsx)("div",{children:"Loading..."}),t&&Object(l.jsx)(o,{blogs:t,title:"All Blogs"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),j=i[0],a=i[1],o=Object(n.useState)(!1),d=Object(b.a)(o,2),h=d[0],O=d[1];Object(u.f)();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Add a new blog"})}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();O(!0)},children:[Object(l.jsx)("label",{children:"Blog Title"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Blog Body"}),Object(l.jsx)("textarea",{required:!0,value:j,onChange:function(e){return a(e.target.value)}}),!h&&Object(l.jsx)("button",{type:"submit",children:"Add Blog"}),h&&Object(l.jsx)("button",{type:"submit",disabled:!0,children:"Adding Blog..."})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://durvesh8.github.io/my-blog/data/db.json/"+e),c=t.data,n=t.error,r=t.isPending;Object(u.f)();return Object(l.jsxs)("div",{className:"blog-details",children:[r&&Object(l.jsx)("div",{children:"Loading the freshly fetched blog... \ud83d\ude0b"}),n&&Object(l.jsxs)("div",{children:[" Well somehow this error occured:- ",n.message," "]}),c&&Object(l.jsxs)("article",{children:[Object(l.jsx)("div",{className:"bloghead",children:Object(l.jsx)("h2",{children:c.title})}),Object(l.jsx)("div",{children:c.body}),Object(l.jsx)("button",{onClick:function(){},children:"delete"})]})]})},g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Uh oh"}),Object(l.jsx)("p",{children:"Whatever you were looking for doesn't exist :("}),Object(l.jsx)("p",{children:"\\{^_^}/"})]})};var v=function(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(a,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/create",children:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{path:"/blogs/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(g,{})})]})})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.e5a6737a.chunk.js.map