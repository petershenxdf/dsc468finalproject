(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[3],{209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(29),i=n(99);function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b="undefined"!==typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,P=/www\.dropbox\.com\/.+/,m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(E,e);var t,n,s,a,m=(t=E,function(){var e,n=y(t);if(h()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function E(){var e;l(this,E);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return v(d(e=m.call.apply(m,[this].concat(n))),"onReady",(function(){var t;return(t=e.props).onReady.apply(t,arguments)})),v(d(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),v(d(e),"onBuffer",(function(){var t;return(t=e.props).onBuffer.apply(t,arguments)})),v(d(e),"onBufferEnd",(function(){var t;return(t=e.props).onBufferEnd.apply(t,arguments)})),v(d(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),v(d(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),v(d(e),"onError",(function(){var t;return(t=e.props).onError.apply(t,arguments)})),v(d(e),"onEnablePIP",(function(){var t;return(t=e.props).onEnablePIP.apply(t,arguments)})),v(d(e),"onDisablePIP",(function(t){var n=e.props,r=n.onDisablePIP,o=n.playing;r(t),o&&e.play()})),v(d(e),"onPresentationModeChange",(function(t){if(e.player&&(0,o.supportsWebKitPresentationMode)(e.player)){var n=e.player.webkitPresentationMode;"picture-in-picture"===n?e.onEnablePIP(t):"inline"===n&&e.onDisablePIP(t)}})),v(d(e),"onSeek",(function(t){e.props.onSeek(t.target.currentTime)})),v(d(e),"mute",(function(){e.player.muted=!0})),v(d(e),"unmute",(function(){e.player.muted=!1})),v(d(e),"renderSourceElement",(function(e,t){return"string"===typeof e?r.default.createElement("source",{key:t,src:e}):r.default.createElement("source",u({key:t},e))})),v(d(e),"renderTrack",(function(e,t){return r.default.createElement("track",u({key:t},e))})),v(d(e),"ref",(function(t){e.player&&(e.prevPlayer=e.player),e.player=t})),e}return n=E,(s=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player),b&&this.player.load()}},{key:"componentDidUpdate",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer),this.addListeners(this.player))}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.player),this.hls&&this.hls.destroy()}},{key:"addListeners",value:function(e){var t=this.props.playsinline;e.addEventListener("canplay",this.onReady),e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),t&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}},{key:"removeListeners",value:function(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange)}},{key:"shouldUseAudio",value:function(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(i.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}},{key:"shouldUseHLS",value:function(e){return i.HLS_EXTENSIONS.test(e)&&!b||this.props.config.forceHLS}},{key:"shouldUseDASH",value:function(e){return i.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}},{key:"load",value:function(e){var t=this,n=this.props.config,r=n.hlsVersion,i=n.hlsOptions,s=n.dashVersion;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,o.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",r),"Hls").then((function(n){t.hls=new n(i),t.hls.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.hls,n)})),t.hls.loadSource(e),t.hls.attachMedia(t.player)})),this.shouldUseDASH(e)&&(0,o.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",s),"dashjs").then((function(n){t.dash=n.MediaPlayer().create(),t.dash.initialize(t.player,e,t.props.playing),t.dash.on("error",t.props.onError),t.dash.getDebug().setLogToBrowserConsole(!1)})),e instanceof Array)this.player.load();else if((0,o.isMediaStream)(e))try{this.player.srcObject=e}catch(a){this.player.src=window.URL.createObjectURL(e)}}},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(e){this.player.currentTime=e}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,o.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,o.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}},{key:"setPlaybackRate",value:function(e){this.player.playbackRate=e}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,n=e.seekable;return t===1/0&&n.length>0?n.end(n.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}},{key:"getSource",value:function(e){var t=this.shouldUseHLS(e),n=this.shouldUseDASH(e);if(!(e instanceof Array||(0,o.isMediaStream)(e)||t||n))return P.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.playing,o=e.loop,i=e.controls,s=e.muted,a=e.config,l=e.width,p=e.height,c=this.shouldUseAudio(this.props)?"audio":"video",f={width:"auto"===l?l:"100%",height:"auto"===p?p:"100%"};return r.default.createElement(c,u({ref:this.ref,src:this.getSource(t),style:f,preload:"auto",autoPlay:n||void 0,controls:i,muted:s,loop:o},a.attributes),t instanceof Array&&t.map(this.renderSourceElement),a.tracks.map(this.renderTrack))}}])&&p(n.prototype,s),a&&p(n,a),E}(r.Component);t.default=m,v(m,"displayName","FilePlayer")}}]);
//# sourceMappingURL=reactPlayerFilePlayer.c69d8b57.chunk.js.map