(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),o=n(25),l=n(26),s=n(41),u=n(52),m=u.create({baseURL:"https://swapi.co/api/"}),f=function(){return m.get("films/").then((function(e){return e.data.results}))},p=function(e){return u.get("".concat(e)).then((function(e){return e.data}))},d=n(19),h={films:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FILMS":return Object(d.a)({},e,{films:t.films});case"SET_PLANETS":return Object(d.a)({},e,{films:e.films.filter((function(n){return n.episode_id===t.id?n.planets.push(t.name):Object(d.a)({},e)}))});case"SET_STARSHIPS":return Object(d.a)({},e,{films:e.films.filter((function(n){return n.episode_id===t.id?n.starships.push(t.starships):Object(d.a)({},e)}))});case"SET_CHARACTERS":return Object(d.a)({},e,{films:e.films.filter((function(n){return n.episode_id===t.id?n.characters.push(t.character):Object(d.a)({},e)}))});default:return e}},g=n(223),b=n(229),S=n(78),v=n.n(S),O=n(225),j=n(226),k=n(227),y=n(228),w=n(236),C=n(43),T=n(42),_=function(e){var t=x(),n=r.a.useState(!1),i=Object(l.a)(n,2),c=i[0],o=i[1];Object(a.useEffect)((function(){e.getPlanets(e.film.planets,e.film.episode_id),e.getCharacters(e.film.characters,e.film.episode_id),e.getStarships(e.film.starships,e.film.episode_id)}),[]);return r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(O.a,{raised:!0,onClick:function(){o(!c)}},r.a.createElement(j.a,{title:e.film.title,subheader:e.film.release_date}),r.a.createElement(k.a,{className:t.media,image:v.a}),r.a.createElement(y.a,null,r.a.createElement(C.a,{variant:"body2",color:"textSecondary"},"Director:",e.film.director),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Producer:",e.film.producer)),r.a.createElement(w.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(y.a,null,"Planets: ",e.film.planets!==String?e.film.planets.map((function(e,t){return r.a.createElement("ul",{key:t},void 0!==e.name?r.a.createElement("li",null,e.name):r.a.createElement("span",null))})):r.a.createElement("div",null),"Characters: ",e.film.characters!==String?e.film.characters.map((function(e,t){return r.a.createElement("ul",{key:t},void 0!==e.name?r.a.createElement("li",null,e.name):r.a.createElement("span",null))})):r.a.createElement("div",null),"Starships: ",e.film.starships!==String?e.film.starships.map((function(e,t){return r.a.createElement("ul",{key:t},void 0!==e.name?r.a.createElement("li",null,e.name):r.a.createElement("span",null))})):r.a.createElement("div",null),e.film.opening_crawl))))},x=Object(b.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%",margin:"5px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:T.a[500]}}})),R=n(10),P=n(230),A=n(231),L=n(235),I=n(11),N=n(81),B=n.n(N),H=n(79),F=n.n(H),G=n(80),W=n.n(G),U=n(234);function J(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],c=n[1],o=M();return r.a.createElement("div",{className:o.root},r.a.createElement(P.a,{position:"static",color:"inherit"},r.a.createElement(A.a,null,r.a.createElement(C.a,{className:o.title,variant:"h6",noWrap:!0},"tokarkin"),r.a.createElement(U.a,{color:"secondary",variant:"contained",onClick:function(){c(!i),e.sortByName(i)}},!1===i?r.a.createElement(F.a,{color:"action"}):r.a.createElement(W.a,null),"Sort by name"),r.a.createElement("div",{className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(B.a,null)),r.a.createElement(L.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},inputComponent:"input",onChange:function(t){var n=t.target.value;e.alphabetSort(n)}})))))}var M=Object(b.a)((function(e){return{root:{flexGrow:1,"background\u0421olor":"black"},menuButton:{marginRight:e.spacing(2)},title:Object(R.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(R.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.b)(e.palette.common.black,.15),"&:hover":{backgroundColor:Object(I.b)(e.palette.common.black,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(R.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})),D=n(232),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALHABET_SORT":return t.input;default:return e}},q=n(50),z=n.n(q),K=Object(s.b)((function(e){return{films:e.films.films.filter((function(t){return t.title.toUpperCase().includes(e.input.toUpperCase())}))}}),{getFilmsThunk:function(){return function(e){f().then((function(t){e({type:"GET_FILMS",films:t})}))}},alphabetSort:function(e){return{type:"ALHABET_SORT",input:e}},getPlanets:function(e,t){return function(n){e.forEach((function(e){return p(e).then((function(e){console.log(e),n(function(e,t){return{type:"SET_PLANETS",name:e,id:t}}(e,t))}))}))}},getStarships:function(e,t){return function(n){e.forEach((function(e){return p(e).then((function(e){n(function(e,t){return{type:"SET_STARSHIPS",starships:e,id:t}}(e,t))}))}))}},getCharacters:function(e,t){return function(n){e.forEach((function(e){return p(e).then((function(e){n(function(e,t){return{type:"SET_CHARACTERS",character:e,id:t}}(e,t))}))}))}}})((function(e){Object(a.useEffect)((function(){e.getFilmsThunk()}),[]);var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],c=n[1];return r.a.createElement(g.a,{container:!0,spacing:3},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(J,{sortByName:function(e){c(!e)},alphabetSort:e.alphabetSort})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(g.a,{container:!0,spacing:3},void 0!==e.films?!0===i?Object(o.a)(e.films).sort((function(e,t){var n=e.title.toLowerCase(),a=t.title.toLowerCase();return n<a?-1:n>a?1:0})).map((function(t,n){return r.a.createElement(_,{getCharacters:e.getCharacters,getPlanets:e.getPlanets,key:n,film:t,getStarships:e.getStarships})})):e.films.map((function(t,n){return r.a.createElement(_,{getCharacters:e.getCharacters,getPlanets:e.getPlanets,getStarships:e.getStarships,key:n,film:t})})):r.a.createElement("div",null,r.a.createElement(D.a,null)))))})),Q=n(86),V=function(){return r.a.createElement(Q.a,null,r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(27),Y=n(83),Z=n(233),ee=Object(X.c)({form:Z.a,films:E,input:$,planets:z.a}),te=Object(X.d)(ee,Object(X.a)(Y.a));window.store=te;var ne=te;c.a.render(r.a.createElement(s.a,{store:ne},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t){},78:function(e,t,n){e.exports=n.p+"static/media/358477.700xp.ce4b4809.jpg"},93:function(e,t,n){e.exports=n(194)}},[[93,1,2]]]);
//# sourceMappingURL=main.0117b423.chunk.js.map