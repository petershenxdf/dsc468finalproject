(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){e.exports=n(44)},40:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),o=(n(40),n(21)),i=n.n(o),s=(n(41),n(1)),u=function(){Object(a.useEffect)((function(){t([2,4,2,6,8,10,12])}));var e=Object(a.useRef)(),t=function(t){s.d(e.current).append("svg").attr("width",600).attr("height",400).style("border","1px solid black").selectAll("rect").data(t).enter().append("rect").attr("width",40).attr("height",(function(e){return 20*e})).attr("fill","orange").attr("x",(function(e,t){return 45*t})).attr("y",(function(e){return 400-20*e}))};return r.a.createElement("div",{ref:e})},d=n(7),p=n(8);function f(){var e=Object(d.a)(["    \n    polygon { \n<<<<<<< HEAD\n        fill: green \n=======\n        fill: Red \n>>>>>>> 7bae35d3044e5e9b647b5a760a842466cceb4ab3\n    }\n"]);return f=function(){return e},e}var m=p.a.div(f()),h=function(){Object(a.useEffect)((function(){t()}));var e=Object(a.useRef)(),t=function(t){var n=20,a=20,r=30,l=50,c=600-l-a,o=500-n-r,i=s.d(e.current).append("svg").attr("width",c+l+a).attr("height",o+n+r).append("g").attr("transform","translate("+l+","+n+")"),u=s.c().range([0,500]),d=s.c().range([500,0]);u.domain([0,50]),d.domain([0,50]);var p=24,f=31;i.selectAll("polygon").data([[{x:10,y:50},{x:20,y:20},{x:50,y:10},{x:30,y:30},{x:40,y:50}]]).enter().append("polygon").attr("points",(function(e){return e.map((function(e){return[u(e.x),d(e.y)].join(",")})).join(" ")})),i.append("circle").attr("r",4).attr("cx",u(p)).attr("cy",d(f)),i.append("g").attr("transform","translate(0,"+o+")").call(s.a(u)),i.append("g").call(s.b(d))};return r.a.createElement(m,{ref:e})},g=n(25);function b(){var e=Object(d.a)(["    \n    .blinking{\n        animation:blinkingText 1.2s infinite;\n    }\n    @keyframes blinkingText{\n        0%{     color: green;    }\n        49%{    color: red; }\n        60%{    color: transparent; }\n        99%{    color: transparent;  }\n        100%{   color: white;    }\n    }\n"]);return b=function(){return e},e}var v=p.a.div(b()),E=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){i()}));var c="https://32glz6r6nb.execute-api.us-east-2.amazonaws.com/dev/predictbreastcancer",o={data:"13.49,22.3,86.91,561.0,0.08752,0.07697999999999999,0.047510000000000004,0.033839999999999995,0.1809,0.057179999999999995,0.2338,1.3530000000000002,1.735,20.2,0.004455,0.013819999999999999,0.02095,0.01184,0.01641,0.001956,15.15,31.82,99.0,698.8,0.1162,0.1711,0.2282,0.1282,0.2871,0.06917000000000001"},i=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};fetch(c,e).then((function(e){return e.json()})).then((function(e){return l(e)}))};return r.a.createElement(v,null,r.a.createElement("h1",null,"Calling aws Sagemaker url ",c),r.a.createElement("div",null,"with data ",JSON.stringify(o)),r.a.createElement("div",{className:"blinking"},"SageMaker Result: ",n))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"this is third change"),r.a.createElement("h1",null,"this is new change to demo how to do it"),r.a.createElement("h1",null,"Here's a newbie D3 polygon"),r.a.createElement(h,null),r.a.createElement("h1",null,"Here's a newbie D3 barchart"),r.a.createElement(u,null),r.a.createElement("h1",null,"This is example of calling SageMaker"),r.a.createElement(E,null),r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f9b09bac.chunk.js.map