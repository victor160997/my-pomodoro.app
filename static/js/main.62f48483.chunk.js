(this["webpackJsonpcromer.app"]=this["webpackJsonpcromer.app"]||[]).push([[0],{17:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(13),i=n.n(s),c=n(25),r=(n(30),n(3)),u=n(4),l=n(7),d=n(6),p=n(5),m=n(18),h=n.n(m),j=n.p+"static/media/ring.c3eccb3f.mp3",b=n(1),O=function(e,t,n){return Object(b.jsx)(h.a,{url:j,playStatus:h.a.status.PLAYING,playFromPosition:300,onLoading:e,onPlaying:t,onFinishedPlaying:n})},f=function(e){return{type:"RESET_CRO",payload:e}},v=(n(39),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={pomodoro:{timeWork:25,pausaCurta:5,paulaLonga:10,ciclos:8},minutes:0,seconds:0,quantidadeCiclos:1,pausa:!1,pausaLonga:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState((function(e){return{seconds:e.seconds+1}}))}),1e3)}},{key:"componentDidUpdate",value:function(e,t){var n=e.pomodoro,a=e.reset;59===t.seconds&&(this.setState((function(e){return{minutes:e.minutes+1}})),this.setState((function(e){return{seconds:0}}))),59===t.seconds&&t.minutes===n.timeWork-1&&(this.setState((function(e){return{minutes:0}})),this.setState((function(e){return{seconds:0}})),this.setState((function(e){return{pausa:!0}})),this.setState((function(e){return{quantidadeCiclos:e.quantidadeCiclos+1}}))),!0===t.pausa&&59===t.seconds&&t.minutes===t.pomodoro.pausaCurta-1&&(this.setState((function(e){return{minutes:0}})),this.setState((function(e){return{seconds:0}})),this.setState((function(e){return{pausa:!1}}))),59===t.seconds&&t.minutes===n.timeWork-1&&t.quantidadeCiclos===e.pomodoro.ciclos&&(this.setState((function(e){return{minutes:0}})),this.setState((function(e){return{seconds:0}})),this.setState((function(e){return{pausaLonga:!0}}))),!0===t.paulaLonga&&t.minutes===n.paulaLonga-1&&59===t.seconds&&(this.setState((function(e){return{minutes:0}})),this.setState((function(e){return{seconds:0}})),this.setState((function(e){return{pausaLonga:!1}})),a({timeWork:25,pausaCurta:5,pausaLonga:30,ciclos:8,ativo:!1}))}},{key:"render",value:function(){var e=this.state,t=e.minutes,n=e.seconds,a=e.quantidadeCiclos,o=e.pausa,s=this.props.pomodoro;return Object(b.jsxs)("div",{className:"cro-body",children:[t===s.timeWork-1&&n>50?Object(b.jsx)(O,{}):"",o?Object(b.jsx)("h2",{children:"Pausa"}):Object(b.jsxs)("h2",{children:["Ciclo ",a]}),Object(b.jsxs)("h1",{children:[t<10?0:"",t,": ",n<10?0:"",n]}),Object(b.jsx)("br",{})]})}}]),n}(a.Component)),g=Object(p.b)((function(e){return{pomodoro:e.time.time}}),(function(e){return{reset:function(t){return e(f(t))}}}))(v),x=n(14),C=n(11),y=(n(17),function(){return Object(b.jsx)("div",{className:"video-responsive",children:Object(b.jsx)("iframe",{width:"300",height:"150",src:"https://www.youtube.com/embed/LiCb4-4-BAQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube",class:"yt-videos"})})}),k=function(){return Object(b.jsx)("div",{className:"video-responsive",children:Object(b.jsx)("iframe",{width:"300",height:"150",src:"https://www.youtube.com/embed/9Jmnu9NPPqQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},S=function(){return Object(b.jsx)("div",{className:"video-responsive",children:Object(b.jsx)("iframe",{width:"300",height:"150",src:"https://www.youtube.com/embed/VB6SIKl8Md0",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube",class:"yt-videos"})})},w=(n(40),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={timeWork:25,pausaCurta:5,pausaLonga:30,ciclos:8,ativo:!1},a.handleChange=a.handleChange.bind(Object(C.a)(a)),a.handleClickInfo=a.handleClickInfo.bind(Object(C.a)(a)),a.handleInterruption=a.handleInterruption.bind(Object(C.a)(a)),a}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.pomodoro;!0===t.ativo&&!1===n.ativo&&this.setState({ativo:!1})}},{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(x.a)({},t,e.target.value))}},{key:"handleClickInfo",value:function(){var e=this.state,t=e.timeWork,n=e.pausaCurta,a=e.pausaLonga,o=e.ciclos,s=this.props.getInfoTimeProps;return Number(t)<25||Number(t)>50?alert("\xc9 recomendado que o tempo de foco seja de 25 a 50 minutos!"):Number(n)<5||Number(n)>10?alert("\xc9 recomendado que o tempo de pausa curta seja de 5 a 10 minutos!"):Number(a)<20||Number(a)>45?alert("\xc9 recomendado que o tempo de pausa longa seja de 20 a 45 minutos!"):Number(o)<2||Number(o)>8?alert("\xc9 recomendado que seja feito de 2 a 8 ciclos!"):(s({timeWork:t,pausaCurta:n,pausaLonga:a,ciclos:o,ativo:!0}),void this.setState({ativo:!0}))}},{key:"handleInterruption",value:function(){var e=this.props.getInfoTimeProps;this.setState({timeWork:25,pausaCurta:5,pausaLonga:30,ciclos:8,ativo:!1,selectMusic:""}),e({timeWork:25,pausaCurta:5,pausaLonga:30,ciclos:8,ativo:!1})}},{key:"render",value:function(){var e=this.state,t=e.timeWork,n=e.pausaCurta,a=e.pausaLonga,o=e.ciclos,s=e.ativo,i=e.selectMusic;return Object(b.jsxs)("form",{className:"form",children:[Object(b.jsxs)("div",{className:"inputs-form",children:[Object(b.jsxs)("label",{htmlFor:"work",children:["Pomodoro",Object(b.jsx)("input",{value:t,type:"number",id:"work",name:"timeWork",onChange:this.handleChange})]}),Object(b.jsxs)("label",{htmlFor:"pausa",children:["Pausa curta",Object(b.jsx)("input",{value:n,type:"number",id:"pausaCurta",name:"pausaCurta",onChange:this.handleChange})]}),Object(b.jsxs)("label",{htmlFor:"pausa",children:["Pausa longa",Object(b.jsx)("input",{value:a,type:"number",id:"pausaLonga",name:"pausaLonga",onChange:this.handleChange})]}),Object(b.jsxs)("label",{htmlFor:"ciclos",children:["Ciclos",Object(b.jsx)("input",{value:o,type:"number",id:"ciclos",name:"ciclos",onChange:this.handleChange})]})]}),Object(b.jsxs)("div",{className:"buttons-form",children:[Object(b.jsx)("button",{type:"button",onClick:this.handleClickInfo,disabled:!!s,children:"Come\xe7ar"}),Object(b.jsx)("button",{type:"button",onClick:this.handleInterruption,disabled:!s,children:"Reset"})]}),Object(b.jsxs)("label",{htmlFor:"selectMusic",children:["Selecione uma m\xfasica para se concentrar melhor:",Object(b.jsxs)("select",{className:"select-form",name:"selectMusic",id:"selectMusic",value:i,onChange:this.handleChange,children:[Object(b.jsx)("option",{value:"nenhuma",children:"Nenhuma"}),Object(b.jsx)("option",{value:"Concentration",children:"Concentration"}),Object(b.jsx)("option",{value:"jazz",children:"Jazz"}),Object(b.jsx)("option",{value:"opera",children:"Opera"})]})]}),Object(b.jsxs)("div",{className:"yt-videos",children:["Concentration"===i?Object(b.jsx)(k,{}):"","jazz"===i?Object(b.jsx)(y,{}):"","opera"===i?Object(b.jsx)(S,{}):""]})]})}}]),n}(a.Component)),N=Object(p.b)((function(e){return{pomodoro:e.time.time}}),(function(e){return{getInfoTimeProps:function(t){return e(function(e){return{type:"GET_INFO_TIME",payload:e}}(t))},reset:function(t){return e(f(t))}}}))(w),L=(n(41),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.pomodoro;return Object(b.jsxs)("div",{className:"home-page-body",children:[Object(b.jsx)("h1",{className:"title-home-page",children:"Pomodoro"}),Object(b.jsx)(N,{}),e&&e.ativo?Object(b.jsx)(g,{pomodoro:e}):"",Object(b.jsxs)("footer",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Feito com"}),": React, Redux e CSS"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Autor"}),": Victor Mendon\xe7a Rodrigues"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"E-mail"}),": victor.men.dev@gmail.com"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Vers\xe3o"}),": 1.0"]})]})]})}}]),n}(a.Component)),I=Object(p.b)((function(e){return{pomodoro:e.time.time}}))(L),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(I,{})})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),s(e),i(e)}))},W=n(10),E=n(22),M=n(23),T=n(8),q={timeWork:25,pausaCurta:5,pausaLonga:30,ciclos:8,ativo:!1},R="GET_INFO_TIME",B="RESET_CRO",z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:case B:return Object(T.a)(Object(T.a)({},e),{},{time:t.payload});default:return e}},_=Object(W.combineReducers)({time:z}),D=Object(W.createStore)(_,Object(E.composeWithDevTools)(Object(W.applyMiddleware)(M.a)));i.a.render(Object(b.jsx)(p.a,{store:D,children:Object(b.jsx)(c.a,{children:Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(F,{})})})}),document.getElementById("root")),P()}},[[46,1,2]]]);
//# sourceMappingURL=main.62f48483.chunk.js.map