(this.webpackJsonpmerkle=this.webpackJsonpmerkle||[]).push([[0],{21:function(e,t,a){},26:function(e,t){},34:function(e,t,a){},35:function(e,t){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(24),r=a.n(c),l=(a(34),a(13)),i=a(10),o=a(12),d=(a(21),a(35),a(18)),j=a.n(d),x=a(25);function u(){return(u=Object(x.a)(j.a.mark((function e(t){var a,n,s,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.reqBody,n=window.location.href,s=n.split("/").slice(0,3).join("/"),console.log("domain",s),"https://5fl1m459i6.execute-api.us-east-1.amazonaws.com/dev/api/register","POST",e.next=8,fetch("https://5fl1m459i6.execute-api.us-east-1.amazonaws.com/dev/api/register",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Credentials":!0},body:JSON.stringify(a)});case 8:return c=e.sent,e.next=11,c.json();case 11:(r=e.sent)&&c.ok?console.log("res",r):console.log("error",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(26);var b=a(14),h=a(9),O=a(27),m=a(6),p=a(11),N=a(2),f=s.a.useState;var g=function(){var e={firstName:"",lastName:"",addressOne:"",addressTwo:"",city:"",state:"",zip:"",country:""},t=f(e),a=Object(o.a)(t,2),n=a[0],s=a[1],c=f({firstName:!0,lastName:!0,addressOne:!0,addressTwo:!0,city:!0,state:!0,zip:!0,country:!0}),r=Object(o.a)(c,2),d=r[0],j=(r[1],f(e)),x=Object(o.a)(j,2),g=x[0],C=(x[1],f(!1)),y=Object(o.a)(C,2),T=y[0],v=y[1],w=function(e){e.preventDefault();var t=e.target.id,a=e.target.value;s(Object(i.a)(Object(i.a)({},n),{},Object(l.a)({},t,a)))};return T?Object(N.jsx)(b.a,{onClick:function(){window.location.reload()},children:"success"}):Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(O.a,{fluid:!0,children:[Object(N.jsx)(p.a,{className:"justify-content-md-center",children:Object(N.jsx)("h1",{children:"Submit User Info"})}),Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(m.a.Group,{children:[Object(N.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(N.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(N.jsx)(m.a.Label,{children:"First Name: "}),Object(N.jsx)(m.a.Control,{id:"firstName",value:n.firstName,onChange:w,type:"text",placeholder:"example: John"}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.firstName?"":g.firstName})]}),Object(N.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(N.jsx)(m.a.Label,{children:"Last Name: "}),Object(N.jsx)(m.a.Control,{id:"lastName",value:n.lastName,onChange:w,type:"text",placeholder:"example: Smith"}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.lastName?"":g.lastName})]})]}),Object(N.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(N.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(N.jsx)(m.a.Label,{children:"Address 1: "}),Object(N.jsx)(m.a.Control,{id:"addressOne",value:n.address1,onChange:w,type:"text",placeholder:"example: 123 Washington Avenue"}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.address1?"":g.address1}),Object(N.jsx)(m.a.Label,{children:"Address 2: "}),Object(N.jsx)(m.a.Control,{id:"addressTwo",value:n.address2,onChange:w,type:"text",placeholder:"example: Apt 1"}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0}),Object(N.jsx)(m.a.Label,{children:"City: "}),Object(N.jsx)(m.a.Control,{id:"city",value:n.city,onChange:w,type:"text",placeholder:"example: New York City"}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.city?"":g.city})]}),Object(N.jsxs)(h.a,{xs:!0,lg:"4",children:[Object(N.jsx)(m.a.Label,{children:"Zip: "}),Object(N.jsx)(m.a.Control,{id:"zip",value:n.zip,onChange:w,type:"text",placeholder:"example: 5 or 9 digits"}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.zip?"":g.zip}),Object(N.jsx)(m.a.Label,{children:"State: "}),Object(N.jsxs)(m.a.Control,{onChange:w,as:"select",children:[Object(N.jsx)("option",{id:"state",value:"default",children:"Please Select a State"}),["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"].map((function(e){return Object(N.jsx)("option",{id:"state",value:n.state,children:e},e)}))]}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.state?"":g.state}),Object(N.jsx)(m.a.Label,{children:"Country: "}),Object(N.jsx)(m.a.Control,{id:"country",value:n.country,onChange:w,type:"text",placeholder:'example: Please Enter "US"'}),Object(N.jsx)(m.a.Text,{className:"warningText",muted:!0,children:d.country?"":g.country})]})]})]}),Object(N.jsx)(p.a,{className:"buttons",children:Object(N.jsxs)(h.a,{xs:!0,lg:{span:4,offset:8},children:[Object(N.jsx)(b.a,{className:"button",variant:"secondary",onClick:function(){s(e)},children:"Clear Form"}),Object(N.jsx)(b.a,{className:"button",variant:"dark",onClick:function(){!function(e){u.apply(this,arguments)}(n),s(e),v(!0)},children:"Submit"})]})})]})]})})},C=a(29);var y=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(C.a,{exact:!0,path:"/",children:Object(N.jsx)(g,{})})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(44);r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(y,{})}),document.getElementById("root")),T()}},[[45,1,2]]]);
//# sourceMappingURL=main.bc1196ce.chunk.js.map