(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(36)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(14),s=a.n(i),l=(a(23),a(3)),r=a(1);a(24),a(25);function o(){return c.a.createElement("div",null,c.a.createElement("i",{className:"circle-preloader"}))}a(26);function m(e){return console.log("https://agenciadenoticias.ibge.gov.br/"+JSON.parse(e.news.imagens).image_intro),c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card__img",src:"https://agenciadenoticias.ibge.gov.br/"+JSON.parse(e.news.imagens).image_intro,alt:"imagem demonstrativa da noticia ".concat(e.news.title)}),c.a.createElement("div",{className:"card__content"},c.a.createElement("p",null,null===e.news.titulo?"(Reportagem sem titulo)":e.news.titulo),c.a.createElement("a",{href:e.news.link,target:"_blank"},e.news.link),c.a.createElement("p",null,null===e.news.author?"(Reportagem sem editorias)":"Editorias: ".concat(e.news.editorias))))}a(27);var u=a(35).v4;function d(e){return c.a.createElement("div",{className:"main"},c.a.createElement("h2",null,"Selecione o estado, cidade e data de inicio para encontrar noticias relacionadas!"),c.a.createElement("div",{className:"main__forms"},c.a.createElement("div",{className:"main__forms-item"},c.a.createElement("label",null,"UF:"),c.a.createElement("select",{name:"uf",id:"uf",onChange:function(t){console.log(t.target.value);var a=t.target.value;e.setSelectedUf(a),console.log(e.selectedUf)},className:"main__forms-item-input"},c.a.createElement("option",{value:"0",key:"select_uf"},"Selecione uma UF"),e.ufs.map(function(e){return c.a.createElement("option",{value:e.sigla,key:e.sigla},e.nome)}))),c.a.createElement("div",{className:"main__forms-item"},c.a.createElement("label",null,"Cidade:"),c.a.createElement("select",{name:"city",id:"city",value:e.selectedCity,onChange:function(t){var a=t.target.value;e.setSelectedCity(a)},className:"main__forms-item-input"},c.a.createElement("option",{value:"0",key:"select_city"},"Selecione uma cidade"),e.cities.map(function(e){return c.a.createElement("option",{value:e.nome,key:e.id},e.nome)}))),c.a.createElement("div",{className:"main__forms-item"},c.a.createElement("label",null,"Data de inicio:"),c.a.createElement("input",{type:"date",onChange:function(t){var a=t.target.value;e.setSelectedDate(a)},className:"main__forms-item-input"})),c.a.createElement("button",{onClick:function(){e.setsearchTrigger(!e.searchTrigger)},className:"main__forms-item-button"},"Pesquisar")),c.a.createElement("div",{className:"main__content"},e.searching?c.a.createElement(o,null):0===e.selectedNews.length?e.message:e.selectedNews.map(function(e){return 0===e.length?"":c.a.createElement(m,{key:u(),news:e})})))}function f(){return c.a.createElement("div",{className:"Header"},c.a.createElement("h1",null,"News Searcher Web App"))}var g=a(7);a(28);function p(){return c.a.createElement("div",{className:"navigation"},c.a.createElement("h3",{className:"navigation__title"},"NewsSearcher"),c.a.createElement("div",{className:"navigation__menu"},c.a.createElement(g.b,{to:"/",className:"navigation__menu-item"},"Home"),c.a.createElement(g.b,{to:"main",className:"navigation__menu-item"},"Webapp")))}function v(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("p",null,"Desenvolvido por: Patrick Souza @2022"))}a(29);function h(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))}a(30).config();var E=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),m=o[0],u=o[1],g=Object(n.useState)("0"),E=Object(l.a)(g,2),b=E[0],_=E[1],N=Object(n.useState)("0"),w=Object(l.a)(N,2),y=w[0],S=w[1],j=Object(n.useState)(""),O=Object(l.a)(j,2),k=O[0],C=O[1],I=Object(n.useState)([""]),D=Object(l.a)(I,2),F=D[0],L=D[1],U=Object(n.useState)(!1),P=Object(l.a)(U,2),T=P[0],A=P[1],M=Object(n.useState)(!1),J=Object(l.a)(M,2),x=J[0],R=J[1],B=Object(n.useState)("Nenhuma noticia encontrada."),H=Object(l.a)(B,2),W=H[0],q=H[1];function z(e){if(e=function(e,t){var a=e.split("-");return e="US"===t?"".concat(a[1],"/").concat(a[2],"/").concat(a[0]):"".concat(a[2],"/").concat(a[1],"/").concat(a[0])}(e,"US"),!/^\d\d\/\d\d\/\d\d\d\d$/.test(e))return!1;var t=e.split("/").map(function(e){return parseInt(e,10)}),a=new Date(t[2],t[0],t[1]);return a.getMonth()===t[0]&&a.getDate()===t[1]&&a.getFullYear()===t[2]}return Object(n.useEffect)(function(){"0"!==b&&fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(b,"/municipios")).then(function(e){if(e.ok)return e.json()}).then(function(e){u(e)})},[b]),Object(n.useEffect)(function(){fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/").then(function(e){if(e.ok)return e.json()}).then(function(e){i(e)})},[]),Object(n.useEffect)(function(){if(console.log(!z(k)&&"0"!==y&&"0"!==b),!(!z(k)|"0"===y|"0"===b)){var e="https://servicodados.ibge.gov.br/api/v3/noticias/?busca=".concat(y.split(" ").join("%20").trim()+"%20"+b.trim(),"&de=").concat(k);console.log(e),fetch(e).then(R(!0)).then(function(e){if(e.ok)return e.json()}).then(function(e){if(console.log(e),null!=e)q("Nenhuma noticia encontrada."),R(!1),L(e.items);else{var t=new Date;t.setMonth(t.getMonth()-1),R(!1),L([]),q("A API permite buscas at\xe9 30 dias anteriores a data atual, mude a data para no m\xednimo: ".concat(t.toLocaleDateString(),"."))}})}},[T]),c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(p,null),c.a.createElement(r.c,null,c.a.createElement(r.a,{path:"/",element:c.a.createElement(h,null)}),c.a.createElement(r.a,{path:"/main",element:c.a.createElement(d,{setSelectedDate:C,setSelectedCity:S,setSelectedUf:_,setsearchTrigger:A,searchTrigger:T,ufs:a,selectedUf:b,selectedCity:y,cities:m,selectedNews:F,searching:x,message:W})})),c.a.createElement(v,null))},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(c.a.createElement(g.a,{basename:"/city-news-searcher-frontend"},c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)))),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.87128348.chunk.js.map