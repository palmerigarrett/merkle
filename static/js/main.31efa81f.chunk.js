(this.webpackJsonpmerkle=this.webpackJsonpmerkle||[]).push([[0],{21:function(e,t,a){},26:function(e,t){},34:function(e,t,a){},35:function(e,t){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(24),r=a.n(c),l=(a(34),a(13)),i=a(10),o=a(12),d=(a(21),a(35),a(18)),j=a.n(d),x=a(25);function u(){return(u=Object(x.a)(j.a.mark((function e(t){var a,n,s,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.reqBody,n=window.location.href,s=n.split("/").slice(0,3).join("/"),console.log("domain",s),"https://ql0ugv7001.execute-api.us-east-1.amazonaws.com/dev/register","POST",e.next=8,fetch("https://ql0ugv7001.execute-api.us-east-1.amazonaws.com/dev/register",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Credentials":!0},body:JSON.stringify(a)});case 8:return c=e.sent,e.next=11,c.json();case 11:(r=e.sent)&&c.ok?console.log("res",r):console.log("error",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(26);var b=a(14),h=a(9),O=a(27),m=a(6),p=a(11),g=a(2),N=s.a.useState;var f=function(){var e={firstName:"",lastName:"",addressOne:"",addressTwo:"",city:"",state:"",zip:"",country:""},t=N(e),a=Object(o.a)(t,2),n=a[0],s=a[1],c=N({firstName:!0,lastName:!0,addressOne:!0,addressTwo:!0,city:!0,state:!0,zip:!0,country:!0}),r=Object(o.a)(c,2),d=r[0],j=(r[1],N(e)),x=Object(o.a)(j,2),f=x[0],C=(x[1],N(!1)),y=Object(o.a)(C,2),T=y[0],v=y[1],w=function(e){e.preventDefault();var t=e.target.id,a=e.target.value;s(Object(i.a)(Object(i.a)({},n),{},Object(l.a)({},t,a)))};return T?Object(g.jsx)(b.a,{onClick:function(){window.location.reload()},children:"success"}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.a,{fluid:!0,children:[Object(g.jsx)(p.a,{className:"justify-content-md-center",children:Object(g.jsx)("h1",{children:"Submit User Info"})}),Object(g.jsxs)(m.a,{children:[Object(g.jsxs)(m.a.Group,{children:[Object(g.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(g.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(g.jsx)(m.a.Label,{children:"First Name: "}),Object(g.jsx)(m.a.Control,{id:"firstName",value:n.firstName,onChange:w,type:"text",placeholder:"example: John"}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.firstName?"":f.firstName})]}),Object(g.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(g.jsx)(m.a.Label,{children:"Last Name: "}),Object(g.jsx)(m.a.Control,{id:"lastName",value:n.lastName,onChange:w,type:"text",placeholder:"example: Smith"}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.lastName?"":f.lastName})]})]}),Object(g.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(g.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(g.jsx)(m.a.Label,{children:"Address 1: "}),Object(g.jsx)(m.a.Control,{id:"addressOne",value:n.address1,onChange:w,type:"text",placeholder:"example: 123 Washington Avenue"}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.address1?"":f.address1}),Object(g.jsx)(m.a.Label,{children:"Address 2: "}),Object(g.jsx)(m.a.Control,{id:"addressTwo",value:n.address2,onChange:w,type:"text",placeholder:"example: Apt 1"}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0}),Object(g.jsx)(m.a.Label,{children:"City: "}),Object(g.jsx)(m.a.Control,{id:"city",value:n.city,onChange:w,type:"text",placeholder:"example: New York City"}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.city?"":f.city})]}),Object(g.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(g.jsx)(m.a.Label,{children:"Zip: "}),Object(g.jsx)(m.a.Control,{id:"zip",value:n.zip,onChange:w,type:"text",placeholder:"example: 5 or 9 digits"}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.zip?"":f.zip}),Object(g.jsx)(m.a.Label,{children:"State: "}),Object(g.jsxs)(m.a.Control,{onChange:w,as:"select",children:[Object(g.jsx)("option",{id:"state",value:"default",children:"Please Select a State"}),["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"].map((function(e){return Object(g.jsx)("option",{id:"state",value:n.state,children:e},e)}))]}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.state?"":f.state}),Object(g.jsx)(m.a.Label,{children:"Country: "}),Object(g.jsx)(m.a.Control,{id:"country",value:n.country,onChange:w,type:"text",placeholder:'example: Please Enter "US"'}),Object(g.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.country?"":f.country})]})]})]}),Object(g.jsx)(p.a,{className:"buttons",children:Object(g.jsxs)(h.a,{xs:!0,lg:{span:4,offset:8},children:[Object(g.jsx)(b.a,{className:"button",variant:"secondary",onClick:function(){s(e)},children:"Clear Form"}),Object(g.jsx)(b.a,{className:"button",variant:"dark",onClick:function(){!function(e){u.apply(this,arguments)}(n),s(e),v(!0)},children:"Submit"})]})})]})]})})},C=a(29);var y=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(C.a,{exact:!0,path:"/",children:Object(g.jsx)(f,{})})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(44);r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),T()}},[[45,1,2]]]);
//# sourceMappingURL=main.31efa81f.chunk.js.map