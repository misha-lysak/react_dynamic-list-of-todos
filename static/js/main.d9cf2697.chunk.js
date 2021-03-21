(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),l=a(1),o=a.n(l),u=a(2),i=a(9),d=a(3),m=a(4),p=a(6),h=a(5),f=(a(17),a(18),a(19),a(10)),v=a.n(f),_=function(e){var t=e.todos,a=e.selectHandler,n=e.search,c=e.changeHandler,s=e.choosedSelect;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",className:"TodoList__input",value:n,onChange:c,placeholder:"Search",name:"search"})),r.a.createElement("label",null,r.a.createElement("select",{className:"TodoList__select",name:"choosedSelect",value:s,onChange:c},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed"))),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.filter((function(e){return e.title&&e.title.includes(n.toLowerCase())})).map((function(e){return r.a.createElement("li",{key:e.id,className:v()("TodoList__item",e.completed?"TodoList__item--checked":"TodoList__item--unchecked")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return a(e.userId)}},"User\xa0#",e.userId))})))))};_.defaultProps={todos:[],search:""};a(20);var E=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.data}))},b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currUser:null},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.userId===t.userId){e.next=5;break}return e.next=3,E("".concat("https://mate-api.herokuapp.com/users/").concat(this.props.userId));case 3:a=e.sent,this.setState({currUser:a});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.userId,a=this.state.currUser;return r.a.createElement("div",{className:"CurrentUser"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(t))),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"CurrentUser__name"},a.name),r.a.createElement("p",{className:"CurrentUser__email"},a.email),r.a.createElement("p",{className:"CurrentUser__phone"},a.phone)),r.a.createElement("button",{type:"button",className:"CurrentUser__clear",onClick:function(){return e.props.clearHandler()}},"Clear")):"No user selected")}}]),a}(r.a.Component),y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,search:"",choosedSelect:"all"},e.selectHandler=function(t){return e.setState({selectedUserId:t})},e.clearHandler=function(){e.setState({selectedUserId:0})},e.changeHandler=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(i.a)({},n,r))},e.filterTodos=function(t){switch(e.state.choosedSelect){case"active":return t.filter((function(e){return e.completed}));case"completed":return t.filter((function(e){return!e.completed}));default:return t}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()})).then((function(e){return e.data}));case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId,n=this.filterTodos(t);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(_,{todos:n,selectHandler:this.selectHandler,search:this.state.search,changeHandler:this.changeHandler,showBy:this.showBy,choosedSelect:this.state.choosedSelect})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},r.a.createElement(b,{userId:a,clearHandler:this.clearHandler}))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.d9cf2697.chunk.js.map