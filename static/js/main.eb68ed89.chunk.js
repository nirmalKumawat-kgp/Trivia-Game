(this.webpackJsonpfinished=this.webpackJsonpfinished||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),i=n(1),o=[{id:"any",name:"Any Category"},{id:9,name:"General Knowledge"},{id:10,name:"Entertainment: Books"},{id:11,name:"Entertainment: Film"},{id:12,name:"Entertainment: Music"},{id:13,name:"Entertainment: Musicals &amp; Theatres"},{id:14,name:"Entertainment: Television"},{id:15,name:"Entertainment: Video Games"},{id:16,name:"Entertainment: Board Games"},{id:17,name:"Science &amp; Nature"},{id:18,name:"Science: Computers"},{id:19,name:"Science: Mathematics"},{id:20,name:"Mythology"},{id:21,name:"Sports"},{id:22,name:"Geography"},{id:23,name:"History"},{id:24,name:"Politics"},{id:25,name:"Art"},{id:26,name:"Celebrities"},{id:27,name:"Animals"},{id:28,name:"Vehicles"},{id:29,name:"Entertainment: Comics"},{id:30,name:"Science: Gadgets"},{id:31,name:"Entertainment: Japanese Anime &amp; Manga"},{id:32,name:"Entertainment: Cartoon &amp; Animations"}];function s(e){var t=e.category,n=e.chooseCategory;return r.a.createElement("div",{className:"category-selector"},r.a.createElement("p",null,"Select Category"),r.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},o.map((function(e,t){return r.a.createElement("option",{key:t,value:e.id,dangerouslySetInnerHTML:{__html:e.name}})}))))}function m(e){var t=e.isCorrect,n=e.correctAnswer,a=e.nextQuestion;return r.a.createElement("div",{className:"result-modal ".concat(t?"is-correct":"is-wrong")},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"result-modal-content"},t&&r.a.createElement("h3",null,"\ud83d\udc4a\ud83d\udc4a\ud83d\udc4a",r.a.createElement("br",null),"YOU WON!"),!t&&r.a.createElement("h3",null,"\ud83d\ude1f\ud83d\ude22\ud83d\ude1f",r.a.createElement("br",null),"YOU LOST!"),r.a.createElement("div",{className:"correct-answer"},r.a.createElement("small",null,"The correct answer was:"),r.a.createElement("br",null),r.a.createElement("strong",{dangerouslySetInnerHTML:{__html:n}})),r.a.createElement("button",{onClick:function(){return a()}},"Go to next question \ud83d\udc49")))}function u(e){var t=e.isCorrect,n=Object(a.useState)(0),c=Object(i.a)(n,2),l=c[0],o=c[1],s=Object(a.useState)(0),m=Object(i.a)(s,2),u=m[0],d=m[1];return Object(a.useEffect)((function(){null!==t&&(t?o((function(e){return e+1})):d((function(e){return e+1})))}),[t]),r.a.createElement("div",{className:"scoreboard"},r.a.createElement("div",{className:"wrong"},r.a.createElement("strong",null,u),r.a.createElement("span",null,"wrong")),r.a.createElement("div",{className:"correct"},r.a.createElement("strong",null,l),r.a.createElement("span",null,"correct")))}var d=n(7),E=n(6);function f(e){var t=e.question,n=e.answeredOption,a=Object(E.shuffle)([].concat(Object(d.a)(t.incorrect_answers),[t.correct_answer]));return r.a.createElement("div",{className:"question"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:t.question}}),a.map((function(e,t){return r.a.createElement("button",{key:t,onClick:function(){return n(e)},dangerouslySetInnerHTML:{__html:e}})})))}n(14);function h(){var e=Object(a.useState)("any"),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),o=Object(i.a)(l,2),d=o[0],E=o[1],h=Object(a.useState)(null),p=Object(i.a)(h,2),v=p[0],b=p[1],g=Object(a.useCallback)((function(){b(null);var e="https://opentdb.com/api.php?amount=1";"any"!==n&&(e+="&category=".concat(n)),fetch(e).then((function(e){return e.json()})).then((function(e){E(e.results[0])}))}),[n]);Object(a.useEffect)((function(){g()}),[g]);var y=function(){b(null),g()};return r.a.createElement("div",{className:"app"},null!==v&&r.a.createElement(m,{isCorrect:v,correctAnswer:d.correct_answer,nextQuestion:y}),r.a.createElement("div",{className:"question-header"},r.a.createElement(s,{category:n,chooseCategory:c}),r.a.createElement(u,{isCorrect:v})),r.a.createElement("div",{className:"question-main"},d&&r.a.createElement(f,{question:d,answeredOption:function(e){var t=e===d.correct_answer;b(t)}})),r.a.createElement("div",{className:"question-footer"},r.a.createElement("button",{onClick:y},"Go to next question \ud83d\udc49")))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null),","),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eb68ed89.chunk.js.map