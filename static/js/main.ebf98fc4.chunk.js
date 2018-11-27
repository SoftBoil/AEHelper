(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a(1),u=a(5),i=a(7),s=a(3),d={articles:[],cards:[{name:"Nemesis",id:"default1"},{name:"Nemesis",id:"default2"}],screen:"SETUP",inDiscard:[],inDeck:[],startHP:{gravehold:30,nemesis:70},currentHP:{gravehold:30,nemesis:70}};function o(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}var m,f=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"END_SETUP":if("SETUP"===a.screen){var r=a.cards.slice();return o(r),Object(s.a)({},a,{screen:"PLAY",inDeck:r,inDiscard:[],currentHP:Object.assign({},a.startHP)})}return Object(s.a)({},a,{screen:"SETUP"});case"ADD_CARD":return Object(s.a)({},a,{cards:Object(i.a)(a.cards).concat([n.payload])});case"REMOVE_CARD":var c=n.payload.id;return e=a.cards.filter(function(e){return e.id!==c}),Object(s.a)({},a,{cards:e});case"SHUFFLE_CARDS":return o(e=a.cards.slice()),Object(s.a)({},a,{inDeck:e,inDiscard:[]});case"REVEAL_CARD":return Object(s.a)({},a,{inDeck:a.inDeck.slice(1),inDiscard:[a.inDeck[0]].concat(Object(i.a)(a.inDiscard))});case"RETURN_CARD":return Object(s.a)({},a,{inDiscard:a.inDiscard.slice(1),inDeck:[a.inDiscard[0]].concat(Object(i.a)(a.inDeck))});case"SET_STARTINGHP":return(t=Object.assign(a.startHP))[n.payload.type]=n.payload.value,Object(s.a)({},a,{startHP:t});case"SET_CURRENTHP":return(t=Object.assign(a.currentHP))[n.payload.type]=n.payload.value,Object(s.a)({},a,{currentHP:t});default:return a}},v=window.localStorage?localStorage.getItem("state"):null;m=v?Object(u.b)(f,JSON.parse(v)):Object(u.b)(f),window.localStorage&&m.subscribe(function(){var e=m.getState();localStorage.setItem("state",JSON.stringify(e))});var E=m,h=function(e){var t=e.card,a=e.onClick;return r.a.createElement("div",{className:"cardFront",id:t.id,onClick:a,style:{background:"gray",width:100,height:150,marginLeft:"5px",textAlign:"center"}},t.name)},p=Object(l.b)(function(e){return{cards:e.cards}},function(e){return{removeCard:function(t){return e({type:"REMOVE_CARD",payload:{id:t.id}})}}})(function(e){var t=e.cards,a=e.removeCard,n=function(e){a({id:e.target.id})};return r.a.createElement("div",{style:{display:"flex",height:160}},t.map(function(e){return r.a.createElement(h,{key:e.id,card:e,onClick:n})}))}),b=a(16),P=a(17),y=a(20),H=a(18),O=a(21),g=a(4),C=a(19),D=a.n(C),S=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(y.a)(this,Object(H.a)(t).call(this))).state={title:"",selectedOption:""},e.handleOptionChange=e.handleOptionChange.bind(Object(g.a)(Object(g.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(Object(g.a)(e))),e}return Object(O.a)(t,e),Object(P.a)(t,[{key:"handleOptionChange",value:function(e){this.setState({selectedOption:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.selectedOption,a=D()();this.props.addCard({name:t,id:a}),this.setState({selectedOption:""})}},{key:"render",value:function(){var e=this,t=function(t){var a=t.card;return r.a.createElement("div",{className:"radio"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:a,checked:e.state.selectedOption===a,onChange:e.handleOptionChange}),a))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},t({card:"Nemesis"}),t({card:"Player One"}),t({card:"Player Two"}),t({card:"Player Three"}),t({card:"Player Four"}),t({card:"Player One/Two"}),t({card:"Player Three/Four"}),t({card:"Wild"}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg"},"ADD")))}}]),t}(n.Component),N=Object(l.b)(null,function(e){return{addCard:function(t){return e({type:"ADD_CARD",payload:{id:(a=t).id,name:a.name}});var a}}})(S),j=Object(l.b)(function(e){return{cards:e.inDeck}},function(e){return{revealCard:function(){return e({type:"REVEAL_CARD",payload:{}})}}})(function(e){var t=e.cards,a=e.revealCard,n=function(){a()};return r.a.createElement("div",{className:"deckHolder"},t.map(function(e){return r.a.createElement("div",{className:"cardBack",onClick:n})}))}),k=Object(l.b)(function(e){return{cards:e.inDiscard}},function(e){return{returnCard:function(){return e({type:"RETURN_CARD",payload:{}})}}})(function(e){var t=e.cards,a=e.returnCard,n=function(){a()};return r.a.createElement("div",{className:"deckHolder"},t.map(function(e){return r.a.createElement(h,{key:e.id,card:e,onClick:n})}))}),R=Object(l.b)(function(e){return{cards:e.inDiscard}},function(e){return{shuffleCards:function(){return e({type:"SHUFFLE_CARDS",payload:{}})}}})(function(e){e.cards;var t=e.shuffleCards;return r.a.createElement("button",{onClick:function(){t()}},"Shuffle All")}),A=Object(l.b)(function(e){return{startHP1:e.startHP.gravehold,startHP2:e.startHP.nemesis}},function(e){return{setStartingHP:function(t){return e({type:"SET_STARTINGHP",payload:{type:(a=t).type,value:a.value}});var a}}})(function(e){var t=e.startHP1,a=e.startHP2,n=e.setStartingHP;return r.a.createElement("div",null,r.a.createElement("label",null,"Gravehold:",r.a.createElement("input",{className:"hpInput",type:"text",value:t,onChange:function(e){n({type:"gravehold",value:e.target.value})}})),r.a.createElement("br",null),r.a.createElement("label",null,"Nemesis:",r.a.createElement("input",{className:"hpInput",type:"text",value:a,onChange:function(e){n({type:"nemesis",value:e.target.value})}})))}),T=function(e){var t=e.startHP,a=e.hp,n=e.increaseHP,c=e.decreaseHP;return r.a.createElement("div",{className:"healthTracker"},r.a.createElement("div",{className:"healthButton",onClick:c},"-"),r.a.createElement("div",{className:function(e,t){return t>=e?"healthNumber goodHealth":t<e/2?"healthNumber badHealth":"healthNumber okHealth"}(t,a)},a),r.a.createElement("div",{className:"healthButton",onClick:n},"+"))},w=Object(l.b)(function(e){return{currentHP1:e.currentHP.gravehold,currentHP2:e.currentHP.nemesis,startHP1:e.startHP.gravehold,startHP2:e.startHP.nemesis}},function(e){return{setCurrentHP:function(t){return e({type:"SET_CURRENTHP",payload:{type:(a=t).type,value:a.value}});var a}}})(function(e){var t=e.currentHP1,a=e.currentHP2,n=e.startHP1,c=e.startHP2,l=e.setCurrentHP;return r.a.createElement("div",{className:"currentHealth"},r.a.createElement("div",null,"Gravehold: ",r.a.createElement(T,{startHP:n,hp:t,increaseHP:function(e){l({type:"gravehold",value:t+1})},decreaseHP:function(e){l({type:"gravehold",value:t-1})}})),r.a.createElement("div",null,"Nemesis: ",r.a.createElement(T,{startHP:c,hp:a,increaseHP:function(e){l({type:"nemesis",value:a+1})},decreaseHP:function(e){l({type:"nemesis",value:a-1})}})))}),_=Object(l.b)(function(e){return{screen:e.screen}})(function(e){return"PLAY"===e.screen?r.a.createElement("div",null,r.a.createElement("h1",null,"PLAYING"),r.a.createElement("div",{className:"col-md-4 offset-md-1"},r.a.createElement("h2",null,"Health"),r.a.createElement(w,null),r.a.createElement("h2",null,"Cards"),r.a.createElement(j,null),r.a.createElement(k,null),r.a.createElement(R,null))):r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-4 offset-md-1"},r.a.createElement("h2",null,"Cards"),r.a.createElement(p,null)),r.a.createElement("div",{className:"col-md-4 offset-md-1"},r.a.createElement("h2",null,"Add a new card"),r.a.createElement(N,null)),r.a.createElement("div",{className:"col-md-4 offset-md-1"},r.a.createElement("h2",null,"Starting Health"),r.a.createElement(A,null)))}),U=Object(l.b)(function(e){return{screen:e.screen}},function(e){return{endSetup:function(){return e({type:"END_SETUP",payload:{}})}}})(function(e){var t=e.screen,a=e.endSetup,n="SETUP"===t?"Start Game":"Return to Setup";return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("switch screen"),a()}},r.a.createElement("button",{type:"submit"},n)))}),I=function(){return r.a.createElement("div",{className:"row mt-5"},r.a.createElement(_,null),r.a.createElement("p",null),r.a.createElement(U,null))};Object(c.render)(r.a.createElement(l.a,{store:E},r.a.createElement(I,null)),document.getElementById("app"))}},[[22,2,1]]]);
//# sourceMappingURL=main.ebf98fc4.chunk.js.map