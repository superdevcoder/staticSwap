(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[0],{739:function(e,t,n){"use strict";var r=n(7),a=n(56),i=n(0),o=n(768),u=n.n(o),s=n(3),c=n(1),f=["value","color","decimals","isDisabled","unit","prefix","onClick"];t.a=function(e){var t=e.value,n=e.color,o=void 0===n?"text":n,l=e.decimals,p=void 0===l?3:l,d=e.isDisabled,m=void 0!==d&&d,b=e.unit,h=e.prefix,v=e.onClick,y=Object(a.a)(e,f),g=Object(i.useRef)(0);return Object(i.useEffect)((function(){g.current=t}),[t]),Object(c.jsx)(s.Eb,Object(r.a)(Object(r.a)({color:m?"textDisabled":o,onClick:v},y),{},{children:Object(c.jsx)(u.a,{start:g.current,end:t,prefix:h,suffix:b,decimals:p,duration:1,separator:","})}))}},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return w})),n.d(t,"b",(function(){return V}));var r=n(7),a=n(2),i=n.n(a),o=n(33),u=n(11),s=n(60),c=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a){var u,c,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t[n]){e.next=2;break}throw new Error("Method ".concat(n," doesn't exist on ").concat(t.address));case 2:return e.next=4,(u=t.estimateGas)[n].apply(u,Object(o.a)(r));case 4:return c=e.sent,f=c.mul(s.a.BigNumber.from(1e4).add(s.a.BigNumber.from(a))).div(s.a.BigNumber.from(1e4)),e.abrupt("return",f);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,u,s,f,l,p=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:[],u=p.length>3&&void 0!==p[3]?p[3]:{},s=p.length>4&&void 0!==p[4]?p[4]:1e3,f=c(t,n,a,s),e.next=6,t[n].apply(t,Object(o.a)(a).concat([Object(r.a)({gasLimit:f},u)]));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=n(25),p=n.n(l),d=n(106),m=n(5),b=n(86),h=n(79),v=function(){var e=b.a.getState().user.gasPrice||h.b.default;return"56"===m.a.MAINNET.toString()?e:h.b.testnet},y={gasLimit:d.g},g=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var o,u,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=v(),u=new p.a(a).times(d.h).toString(),e.next=4,t.deposit(n,u,Object(r.a)(Object(r.a)({},y),{},{gasPrice:o}));case 4:return s=e.sent,e.next=7,s.wait();case 7:return c=e.sent,e.abrupt("return",c.status);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var o,u,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=v(),u=new p.a(a).times(d.h).toString(),e.next=4,t.withdraw(n,u,Object(r.a)(Object(r.a)({},y),{},{gasPrice:o}));case 4:return s=e.sent,e.next=7,s.wait();case 7:return c=e.sent,e.abrupt("return",c.status);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v(),e.next=3,t.deposit(n,"0",Object(r.a)(Object(r.a)({},y),{},{gasPrice:a}));case 3:return o=e.sent,e.next=6,o.wait();case 6:return u=e.sent,e.abrupt("return",u.status);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n(88),n(365),n(46),n(101),n(27)},768:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(42),a=n(0),i=n(353),o=n(769);function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=u(r),c=u(a),f=u(i),l=u(o);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){u=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,i=t.easingFn,o=t.end,u=t.formattingFn,s=t.prefix,c=t.separator,f=t.start,p=t.suffix,d=t.useEasing;return new l.default(e,f,o,r,a,{decimal:n,easingFn:i,formattingFn:u,separator:c,prefix:s,suffix:p,useEasing:d,useGrouping:!!c})},R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,a=V(i);function i(){var e;m(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(g(e=a.call.apply(a,[this].concat(n))),"checkProps",(function(t){var n=e.props,r=n.start,a=n.suffix,i=n.prefix,o=n.redraw,u=n.duration,s=n.separator,c=n.decimals,f=n.decimal,l=n.className;return u!==t.duration||r!==t.start||a!==t.suffix||i!==t.prefix||s!==t.separator||c!==t.decimals||f!==t.decimal||l!==t.className||o})),h(g(e),"createInstance",(function(){return"function"===typeof e.props.children&&f.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),x(e.containerRef.current,e.props)})),h(g(e),"pauseResume",(function(){var t=g(e),n=t.reset,r=t.restart,a=t.update,i=e.props.onPauseResume;e.instance.pauseResume(),i({reset:n,start:r,update:a})})),h(g(e),"reset",(function(){var t=g(e),n=t.pauseResume,r=t.restart,a=t.update,i=e.props.onReset;e.instance.reset(),i({pauseResume:n,start:r,update:a})})),h(g(e),"restart",(function(){e.reset(),e.start()})),h(g(e),"start",(function(){var t=g(e),n=t.pauseResume,r=t.reset,a=t.restart,i=t.update,o=e.props,u=o.delay,s=o.onEnd,c=o.onStart,f=function(){return e.instance.start((function(){return s({pauseResume:n,reset:r,start:a,update:i})}))};u>0?e.timeoutId=setTimeout(f,1e3*u):f(),c({pauseResume:n,reset:r,update:i})})),h(g(e),"update",(function(t){var n=g(e),r=n.pauseResume,a=n.reset,i=n.restart,o=e.props.onUpdate;e.instance.update(t),o({pauseResume:r,reset:a,start:i})})),h(g(e),"containerRef",c.default.createRef()),e}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,i=this.pauseResume,o=this.reset,u=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:i,reset:o,start:u,update:s}):c.default.createElement("span",{className:n,ref:a,style:r})}}])&&b(t.prototype,n),r&&b(t,r),i}(a.Component);h(R,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),h(R,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var F={innerHTML:null};t.default=R,t.useCountUp=function(e){var t=d(d({},R.defaultProps),e),n=t.start,r=t.formattingFn,i=O(a.useState("function"===typeof r?r(n):n),2),o=i[0],u=i[1],s=a.useRef(null),c=a.useRef(null),f=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=x(F,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);u(e)},e}();return s.current=n,n},l=function(){var e=t.onReset;f().reset(),e({pauseResume:m,start:p,update:b})},p=function e(){var n=t.onStart,r=t.onEnd;f().reset(),f().start((function(){r({pauseResume:m,reset:l,start:e,update:b})})),n({pauseResume:m,reset:l,update:b})},m=function(){var e=t.onPauseResume;f().pauseResume(),e({reset:l,start:p,update:b})},b=function(e){var n=t.onUpdate;f().update(e),n({pauseResume:m,reset:l,start:p})};return a.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(c.current=setTimeout((function(){n({pauseResume:m,reset:l,update:b}),f().start((function(){clearTimeout(c.current),r({pauseResume:m,reset:l,start:p,update:b})}))}),1e3*e)),function(){clearTimeout(c.current),l()}}),[]),{countUp:o,start:p,pauseResume:m,reset:l,update:b}}},769:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,i){function o(e){var t,n,r,a,i,o,u=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(a="",i=0,o=n.length;i<o;++i)0!==i&&i%3===0&&(a=c.options.separator+a),a=n[o-i-1]+a;n=a}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(u?"-":"")+c.options.prefix+n+r+c.options.suffix}function u(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:u,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var f in c.options)i.hasOwnProperty(f)&&null!==i[f]&&(c.options[f]=i[f]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var l=0,p=["webkit","moz","ms","o"],d=0;d<p.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[p[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[d]+"CancelAnimationFrame"]||window[p[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-l)),a=window.setTimeout((function(){e(n+r)}),r);return l=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),s(c.startVal)&&s(c.endVal)?(c.decimals=Math.max(0,r||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(a)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!s(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)}}]);
//# sourceMappingURL=0.b6df722c.chunk.js.map