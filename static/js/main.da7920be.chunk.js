(this["webpackJsonpgovernace-app"]=this["webpackJsonpgovernace-app"]||[]).push([[0],{100:function(e,t,n){e.exports={proposals:"Proposals_proposals__tR26n",ACTIVE:"Proposals_ACTIVE__3trqe",EXECUTED:"Proposals_EXECUTED__1ZW43"}},204:function(e,t,n){e.exports=n(415)},209:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(44),l=n.n(o),c=(n(209),n(17)),s=n.n(c),u=n(38),p=n(46),i=n(65),m=n.n(i),d="https://api.thegraph.com/subgraphs/name/powerpool-finance/powerpool-governance",v={getGovernanceData:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(d,{query:"{\n  governances {\n    id\n    proposals\n    proposalsQueued\n    currentTokenHolders\n    totalTokenHolders\n    currentDelegates\n    totalDelegates\n    delegatedVotes\n  }\n}"});case 3:return t=e.sent,console.log("getGovernanceData",t),e.abrupt("return",t.data.data.governances[0]);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getTokenHolders:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(d,{query:"{\n  tokenHolders(where: { tokenBalance_gt: 1}) {\n    tokenBalance\n    delegate {\n      delegatedVotes\n    }\n  }\n}"});case 3:return t=e.sent,console.log("tokenHoldersQuery",t),e.abrupt("return",t.data.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getProposals:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(d,{query:"{\n  proposals {\n    id\n    status\n    description\n    proposer {\n      id\n    }\n    votes(\n      where: {votes_gt: 1},\n      orderBy: votes,\n      orderDirection: desc\n    ) {\n      id\n      support\n      votes\n      voter {\n        id\n      }\n    }\n  }\n}\n"});case 3:return t=e.sent,console.log("getProposals",t),e.abrupt("return",t.data.data.proposals);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},E=n(16),f={Supported:"#79C982",Against:"#DE5959"},h=function(e){e.id;var t=e.support,n=e.votes,a=e.voter;return r.a.createElement("li",{style:{listStyle:"none",marginBottom:"0.25rem"}},t?r.a.createElement(E.c,{style:{color:f.Supported}}):r.a.createElement(E.b,{style:{color:f.Against}}),"\xa0",r.a.createElement("a",{href:"https://etherscan.io/address/".concat(a.id)},a.id),"\xa0",t?"supported":"against"," with ",Math.round(n))},g=n(29),_=n(96),b=n.n(_),y=n(49),w=n.n(y);b.a.setAppElement("#root");var k=function(e){var t=e.votes,n=r.a.useState(!1),a=Object(p.a)(n,2),o=a[0],l=a[1],c=Math.round(t.filter((function(e){return e.support})).reduce((function(e,t){return e+Number(t.votes)}),0)),s=Math.round(t.filter((function(e){return!e.support})).reduce((function(e,t){return e+Number(t.votes)}),0)),u=Math.round(t.reduce((function(e,t){return e+Number(t.votes)}),0)),i=function(e){return e.map((function(e){return{name:e.support?"Supported":"Against",votes:Math.round(Number(e.votes))}}))}(t);return r.a.createElement("div",{className:w.a.votes},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Supported:"),r.a.createElement("td",null,r.a.createElement("span",null,c)," ",r.a.createElement(E.c,{style:{color:f.Supported}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Against: "),r.a.createElement("td",null,r.a.createElement("span",null,s)," ",r.a.createElement(E.b,{style:{color:f.Against}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"All votes: "),r.a.createElement("td",null,u)))),r.a.createElement("div",{className:w.a.pieChart},t&&r.a.createElement(g.d,null,r.a.createElement(g.c,null,r.a.createElement(g.b,{dataKey:"votes",data:i,innerRadius:20,outerRadius:120,fill:"grey"},i.map((function(e,t){return r.a.createElement(g.a,{key:"cell-".concat(t),fill:f[e.name]})}))),r.a.createElement(g.e,null)))),r.a.createElement("button",{onClick:function(){return l((function(e){return!e}))}},"Show voters"),r.a.createElement(b.a,{isOpen:o,onRequestClose:function(){return l((function(e){return!e}))},className:w.a.modal,overlayClassName:w.a.overlay,contentLabel:"Votes"},r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return l((function(e){return!e}))}},r.a.createElement(E.a,{style:{fontSize:"32px"}})),t&&t.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))})))))},N=n(24),x=n(97),P=n.n(x),S=function(e){var t=e.id,n=e.status,a=e.votes,o=e.description,l=e.proposer;return r.a.createElement("div",{className:P.a.proposal},r.a.createElement(N.b,{to:"/"},r.a.createElement(E.a,{style:{fontSize:"24px",marginBottom:"1rem"}})),r.a.createElement("h3",null,"Proposal ",r.a.createElement("span",null,"ID:",t),"\xa0 Status:\xa0",n),r.a.createElement("div",null,"Proposer:"," ",r.a.createElement("a",{href:"https://etherscan.io/address/".concat(l.id)},l.id)),r.a.createElement("div",{className:P.a.main},r.a.createElement(k,{votes:a}),r.a.createElement("pre",{className:"wrapword"},o)))},C=n(7),D=n(50),T=n.n(D),O=n(100),A=n.n(O),H=function(e){var t=e.proposals;return r.a.createElement("div",{className:A.a.proposals},r.a.createElement("ul",null,t&&t.map((function(e){return r.a.createElement(N.b,{key:e.id,to:"/proposal/".concat(e.id)},r.a.createElement("li",{className:A.a[e.status]},"Proposal #",e.id," status: ",e.status))}))))},j=function(){var e=r.a.useState(null),t=Object(p.a)(e,2),n=t[0],a=t[1],o=r.a.useState(null),l=Object(p.a)(o,2),c=l[0],i=l[1],m=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getGovernanceData();case 2:return t=e.sent,a(t),e.next=6,v.getProposals();case 6:n=e.sent,i(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){m()}),[]);var d=function(){var e=Object(C.f)().id;if(!c)return null;var t=c.filter((function(t){return t.id===e}));return t&&0!==t.length?r.a.createElement(S,t[0]):r.a.createElement("div",null,"Proposal with #",e," not found")};return r.a.createElement("div",{className:T.a.governance},r.a.createElement("header",{className:T.a.header},r.a.createElement("h1",null,r.a.createElement(N.b,{to:"/"},"Governance"))),r.a.createElement("div",{className:T.a.main},n&&r.a.createElement("div",{className:T.a.goverananceTable},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Token Holders:"),r.a.createElement("td",null,n.currentTokenHolders)),r.a.createElement("tr",null,r.a.createElement("td",null,"Delegates:"),r.a.createElement("td",null,n.currentDelegates)),r.a.createElement("tr",null,r.a.createElement("td",null,"Proposals:"),r.a.createElement("td",null,n.proposals)),r.a.createElement("tr",null,r.a.createElement("td",null,"Proposal Queued:"),r.a.createElement("td",null,n.proposalsQueued))))),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/proposal/:id"},r.a.createElement(d,null)),r.a.createElement(C.a,{path:"/"},r.a.createElement(H,{proposals:c})))))};n(414);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,null,r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,n){e.exports={votes:"Votes_votes__1HXFM",pieChart:"Votes_pieChart__141UR",modal:"Votes_modal__1K76P",overlay:"Votes_overlay__1oH-v"}},50:function(e,t,n){e.exports={governance:"Governance_governance__1cJa7",header:"Governance_header__2HUah",main:"Governance_main__36hGC",goverananceTable:"Governance_goverananceTable__1tYNb"}},97:function(e,t,n){e.exports={proposal:"Proposal_proposal__2ldvd",main:"Proposal_main__O5abq"}}},[[204,1,2]]]);
//# sourceMappingURL=main.da7920be.chunk.js.map