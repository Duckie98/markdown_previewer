(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(15),n(4)),l=n(5),c=n(8),u=n(6),d=n(9),h=n(7),m=n.n(h),p=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){n.setState({userInput:e.target.value}),console.log(n.state.userInput)},n.state={userInput:""},n.display="# This is a h1 tag \n\n## This is a h2 tag \n\nHere is a link to my github repo: [links](https://www.freecodecamp.com) \n\nLets say hello in ES6: ``` console.log('Hello'); ``` \n\nYou can also make text **bold**... whoa! \n\n> My fav quote: No pain, No gain ! \n\n- And of course there are lists.\n\t - Some are bulleted.\n\t  - With different indentation levels. \n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n``` \nfunction anotherExample(firstLine, lastLine) { \n\t if (firstLine == '```' && lastLine == '```' { \n\t\t return multiLineCode; \n\t } \n}\n```",n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({userInput:this.display})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"header"},"Markdown Previewer"),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("label",{for:"editor"},"Editor:"),o.a.createElement("textarea",{name:"editor",id:"editor",onChange:this.handleInput,value:this.state.userInput})),o.a.createElement("label",{for:"preview"},"Previewer:"),o.a.createElement("div",{id:"preview",className:"textOutput",dangerouslySetInnerHTML:{__html:m()(this.state.userInput)}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.a38e7c10.chunk.js.map