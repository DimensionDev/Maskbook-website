(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[950],{1594:function(e){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o,c,s,r=navigator.userAgent||"",l=function(e,t){for(var a=window.isNaN,n=e.split("."),i=t.split("."),o=0;o<3;o++){var c=Number(n[o]),s=Number(i[o]);if(c>s)return 1;if(s>c)return-1;if(!a(c)&&a(s))return 1;if(a(c)&&!a(s))return-1}return 0},m=function(){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return Number.parseInt(e[1],10)},d=function(){return navigator.appVersion.match(/micromessenger\/(\d+\.\d+\.\d+)/i)[1]},p=/android/i.test(r),f=/iphone|ipad|ipod/i.test(r),u=/micromessenger\/([\d.]+)/i.test(r),b=/(weibo).*weibo__([\d.]+)/i.test(r),h=/(baiduboxapp)\/([\d.]+)/i.test(r),x=/qq\/([\d.]+)/i.test(r),g=/(qqbrowser)\/([\d.]+)/i.test(r),v=/qzone\/.*_qz_([\d.]+)/i.test(r),w=/chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(r)&&p&&r.indexOf("Version")<0;function O(e){var t=void 0!==e?Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&"):"";return t?"?".concat(t):""}function E(e,t){var a=e.path,n=e.param,i=t.scheme,o=t.buildScheme;if(void 0!==o)return o(e,t);var c=i.host,s=i.port,r=i.protocol,l=s?":".concat(s):"",m=c?"".concat(c).concat(l,"/"):"",d=O(n);return"".concat(r,"://").concat(m).concat(a).concat(d)}function y(e,t){var a=t.outChain,n=E(e,t);if(void 0!==a&&a){var i=a.protocol,o=a.path,c=a.key;n="".concat(i,"://").concat(o,"?").concat(c,"=").concat(encodeURIComponent(n))}return n}function k(e,t){var a=t.outChain,n=t.intent,i=t.fallback;if(void 0===n)return"";var o=Object.keys(n).map((function(e){return"".concat(e,"=").concat(n[e],";")})).join(""),c="#Intent;".concat(o,"S.browser_fallback_url=").concat(encodeURIComponent(i),";end;"),s=E(e,t);if(void 0!==a&&a){var r=a.path,l=a.key;return"intent://".concat(r,"?").concat(l,"=").concat(encodeURIComponent(s)).concat(c)}return s=s.slice(s.indexOf("//")+2),"intent://".concat(s).concat(c)}function j(e,t){var a=t.universal;if(void 0===a)return"";var n=a.host,i=a.pathKey,o=e.path,c=O(e.param),s="https://".concat(n,"/").concat(o).concat(c),r="https://".concat(n,"?").concat(i,"=").concat(o).concat(c.replace("?","&"));return i?r:s}function N(e,t){var a=y(e,t);return"".concat(t.yingyongbao,"&android_schema=").concat(encodeURIComponent(a))}function z(){"undefined"!=typeof document&&(void 0!==document.hidden?(o="hidden",c="visibilitychange"):void 0!==document.msHidden?(o="msHidden",c="msvisibilitychange"):void 0!==document.webkitHidden&&(o="webkitHidden",c="webkitvisibilitychange"))}function X(){return void 0!==o&&document[o]}function C(e){window.top.location.href=e}function q(e){var t=document.createElement("a");t.setAttribute("href",e),t.style.display="none",document.body.appendChild(t),t.click()}function Y(e){s||((s=document.createElement("iframe")).style.cssText="display:none;border:0;width:0;height:0;",document.body.append(s)),s.src=e}function S(e,t){var a=setTimeout((function(){X()||e()}),t);void 0!==c?document.addEventListener(c,(function(){clearTimeout(a)})):window.addEventListener("pagehide",(function(){clearTimeout(a)}))}return z(),function(){function t(a){e(this,t),n(this,"options",void 0);var o={timeout:2e3};this.options=i(o,a)}return a(t,[{key:"generateScheme",value:function(e){return y(e,this.options)}},{key:"generateIntent",value:function(e){return k(e,this.options)}},{key:"generateUniversalLink",value:function(e){return j(e,this.options)}},{key:"generateYingYongBao",value:function(e){return N(e,this.options)}},{key:"checkOpen",value:function(e){var t=this.options,a=t.logFunc;return S((function(){void 0!==a&&a("failure"),e()}),t.timeout)}},{key:"fallToAppStore",value:function(){var e=this;this.checkOpen((function(){C(e.options.appstore)}))}},{key:"fallToFbUrl",value:function(){var e=this;this.checkOpen((function(){C(e.options.fallback)}))}},{key:"fallToCustomCb",value:function(e){this.checkOpen((function(){e()}))}},{key:"open",value:function(e){var t,a=this.options,n=a.universal,i=a.appstore,o=a.logFunc,c=a.intent,s=e.callback,r=void 0!==n,p=this.generateScheme(e);void 0!==o&&o("pending"),f?u&&-1===l(d(),"7.0.5")||b?C(i):m()<9?(Y(p),t=this.fallToAppStore):!r||x||g||v?(q(p),t=this.fallToAppStore):C(this.generateUniversalLink(e)):u&&void 0!==this.options.yingyongbao?C(this.generateYingYongBao(e)):w?void 0!==c?C(this.generateIntent(e)):(C(p),t=this.fallToFbUrl):u||h||b||v?C(this.options.fallback):(Y(p),t=this.fallToFbUrl),void 0===s?t&&t.call(this):this.fallToCustomCb(s)}}]),t}()}()},7631:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),i=a(7823),o=a(2359),c=a.p+"static/chrome-c0c2155e1632ab3f32829ea1bb134cb4.png",s=a.p+"static/firefox-63f938d62ab4e39b5a1497be0f1ec110.png",r=a.p+"static/mobile_side_app-22385ab458a1deeb8e63a071a9f65b78.png",l="data:image/png;base64,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",m=a.p+"static/google_play-4b1e5d0a48e2e4618d34c81dcf600af6.png",d=a.p+"static/test_flight-348b20963b794274d484bda2e3b3a7ef.png",p=a.p+"static/apk-20e1776233548c0d9b6c0b7a4bbd08b6.png",f=a(2592),u=a(6277),b=function(){var e=(0,n.useState)(""),t=e[0],b=e[1],h=(0,n.useState)(!1),x=h[0],g=h[1];(0,n.useEffect)((function(){var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)?b("Android"):/iPad|iPhone|iPod/.test(e)?b("iOS"):b("Other")}),[]);var v=function(){var e=a(1594),n=window.location.href.replace("download-links","tf-docs");void 0!==typeof window&&("iOS"===t?new e({scheme:{protocol:"itms-beta"},appstore:n,fallback:n,timeout:500}).open({path:"testflight.apple.com/join/PYomz4pJ"}):window.location.href=n)};return t?n.createElement(f.Z,null,n.createElement(i.H,{title:"Download Links - Mask Network"}),"Other"===t||x?n.createElement("div",{className:"mt-16 sm:mt-0 w-full max-sm:my-8"},n.createElement("div",{className:"flex flex-col items-center text-center px-4 sm:hidden"},n.createElement("p",{className:"h2 mb-4"},"Install Mask Network on Your Devices"),n.createElement("p",{className:"text-2xl max-sm:text-xl max-sm:font-light hg:mb-24 md:mb-16 mb-8"},"Enjoy the Web 3.0 world with Mask Network"),n.createElement(o.S,{quality:90,alt:"",src:"../images/download.png",placeholder:"none",className:"max-w-5xl w-10/12",__imageData:a(5130)}),n.createElement("div",{className:"max-w-4xl w-10/12 flex justify-between max-sm:flex-col my-16"},[{name:"Chrome / Edge",image:c,text:"Chrome Web Store",link:"https://chrome.google.com/webstore/detail/mask-network/jkoeaghipilijlahjplgbfiocjhldnap",type:"ChromeWebStore"},{name:"Firefox",image:s,text:"ADD-ONS",link:"https://addons.mozilla.org/en-US/firefox/addon/maskbook",type:"Add_ons"}].map((function(e,t){return n.createElement("div",{className:(0===t?"mb-24":"")+" flex flex-col justify-between h-72 items-center md:w-64"},n.createElement("p",{className:"text-4xl font-light"},e.name),n.createElement("p",{className:"text-xl font-medium"},"Status: Stable"),n.createElement("img",{alt:"",src:e.image,className:"w-20 h-20"}),n.createElement("a",{href:e.link,onClick:function(){return(0,u.Z)("event",e.type)},className:"bg-black-main text-white py-3 text-center w-download-badge rounded-md cursor-pointer",target:"_blank",rel:"noreferrer"},e.text))})))),n.createElement("div",{className:"bg-blue-mask w-full py-16"},n.createElement("div",{className:"container mx-auto flex md:justify-between flex-row sm:flex-col-reverse items-center justify-between px-16 max-md:px-8"},n.createElement("div",{className:"h-48 max-sm:h-36 max-sm:px-4 w-full max-w-md text-white flex flex-col justify-between md:mt-0 mt-20 min-lg:mt-0"},n.createElement("p",{className:"text-4xl font-bold max-sm:text-center mb-4"},"Mobile App"),n.createElement("p",{className:"w-full md:max-w-xss md:font-medium font-light text-xl max-sm:text-sm leading-tight max-sm:text-center mb-4"},"Enjoy the Web 3.0 world with Mask Network"),n.createElement("div",{className:"flex sm:justify-between gap-x-4"},n.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.dimension.maskbook",target:"_blank",rel:"noreferrer",className:"text-center"},n.createElement("img",{alt:"google",src:m})),n.createElement("a",{href:"https://mask.io/links/?ios-app-store",target:"_blank",rel:"noreferrer"},n.createElement("img",{alt:"app",src:l})),n.createElement("div",{className:"cursor-pointer",onClick:v},n.createElement("img",{src:d,alt:"testflight"})))),n.createElement("img",{alt:"",src:r,className:"max-w-1/3 max-md:max-w-1/2"}))),n.createElement("div",{className:"w-full flex py-16 bg-white justify-center items-center"},n.createElement("div",{className:"flex flex-col justify-center items-center"},n.createElement("img",{alt:"",src:p,className:"w-48"}),n.createElement("a",{href:"https://github.com/DimensionDev/Mask-Android-Release/releases/download/1.34.0/app-release.apk",className:"bg-black-main rounded-md px-4 py-3 mt-8 text-white"},"Github releases")))):n.createElement("div",{className:"w-full bg-blue-mask flex flex-col items-center"},n.createElement("p",{className:"text-white h2 text-center pt-28 max-sm:pt-12 mb-7 px-4"},"Install Mask Network on Your Devices"),n.createElement("p",{className:"text-white text-xl items-center px-6 text-center mb-7"},"Enjoy the Web 3.0 world with Mask Network"),n.createElement("div",{className:"mb-16 flex-col items-center gap-8"},n.createElement("a",{href:"iOS"===t?"https://mask.io/links/?ios-app-store":"https://play.google.com/store/apps/details?id=com.dimension.maskbook",className:"mb-8 block"},n.createElement("img",{alt:"appStore",src:"iOS"===t?l:m,className:"w-download-badge"})),"iOS"===t&&n.createElement("div",{onClick:v},n.createElement("img",{src:d,alt:"testflight",className:"w-download-badge"}))),n.createElement(o.S,{alt:"",src:"../images/mobile_side_app.png",placeholder:"blurred",className:"mx-auto px-4 max-md:max-w-1/2",__imageData:a(9971)}),n.createElement("p",{onClick:function(){document.body.scrollTop=document.documentElement.scrollTop=0,g(!0)},className:"px-4 text-white text-lg text-center underline mb-24 max-sm:mb-14 sm:mt-16"},"Download for another operating system"))):null}},9971:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAACE4AAAhOAFFljFgAAAE0klEQVQ4y4WVW2gcVRjHJ2kq1igKsQrSgpfH+qggFGpfvKAPLRZ881F8E4RasE+CL7aKTyKCFosgCCqlNBVbq1Wh2maTpkm2u5vubpJN9pK57lzOdc6Z85c5aUNjW/zg8M2emf3Nd/nP+Zx9+/Y5pQGwfmTPa/b6/9Z0Y3XzurSSs3v3bsf55uS3TpKxkYzlo0aK0VcOvXX/6lpvf7fvHmourx1YWu0d7HTXD7Y7vYOtle6BlbXeG2vd1Zc/+vTzh+pzMyM8N6Mp4aMZFSMWfuyT4w4TyomGqX3b+0c/fNyPki4XEqVprSFljqIwMMZAaYOYKPnj6TPPls/33cCRUjmCSwdab6SaEr6HMLl3re89324137ww3fBb/bTkFVIK47qu0Vqb8nfCgCtNldca199uLXefIzx/gTO+V3LxFEzhOIvN9sOEyQaXCknG8p4b6s5S28xUKsYLUxOluSnK8AC7lFJGCGn6bqCTjGkucpmwHFEmJm3KU5WrExkVy5Qr+GFimst9/HHhHE58dcJ0fQEvSJBlxKZOhEJMpSFcYuCFiDMGqaAHqUInZL+KEvj35emJOBPtYMgQJVyv9QOjCxsN/CA0YRggCEJ4ng8/jIwXhMgINX44NFIqY+iKgsnBeX7ORnilMlNGuMSkRkZF0Vv3bzahbIaA67qYvVrB3GwF7XYbnDEwxhAOYxBCEa8vK7sn8vObQFIChbLA7iCAzBUKrZGmGThNUVlMMVkhYCQBIcSWwAsiUMbhslTxPAdl8vzWCG8C/SCAUsou3w8QRx4uTHXx3YUBosBFnCTICEEQDqFyhUvDa4pqDinUTeDUVuClBR8p3Uh5GMe2ds0bdSzW59HpdEAphRACXjgEoRyRnyghclB+lwiDWBTvfb2ObqCsqHOlYEyBPFfQhbG+KApoXcD1Q6SEg+dalf9NCd8KLOvWC0Tx8Q8eej6F4BRJRkF5jjzPLais6wZQ2xomGSvv3x3Iyy4TVvRCjsnTp/DZ8WPouAx9n4BSZiNWBuDKlFFh4AVIMg4m1H+AUzMThImljElEMSmi0APJEnhBXAodSRyVurMdj+IEXhghJdQKu4zwDuDUtP1SlggV8CJSfP97H0OibURZlsF1PVQX5lCrXrNNKfcoY/cG3kpZ5BpRKoovz7rw4rw8Z2yq8TDETLWDi5VVuOt92+VSh/cEXr5NNoSKYhgFUHpDh0EYgpMYv81lOHmRQ/LMpn4LmJK7AKenS6BsEW51qLoDv5C5sqdKGIZmMOib2dlZM1WZNu12y6RJYihlZuCFRZLxggklNzTMf7HARm3+USZU308NMiqx7gWl/oqiKBTnXAkhFCFEUUoUoVRprZVSWvthhCCRkHlhP1Uh8z8t8Mzk2QcJZT9zIZczQmtrvUG7FLQ9Xe0xeKfXRYFuf72TpFmdcVFjXHQzQr+4NV9Ku++xnRPj20ad8V1PPr3rr0v/vDN/vX702kL1yHy1dqS22DxcrS8enqvWjsxVax9cqcy8+9Krrz/jOM74zp07x3fs2PGA4zjbN6fdqVM/3T7ByhujN1804my1kdv89vFHnnAAszn5rH9x/36HcbEJrDeXnaVWc1urURu7Ub8+1qgujM3PztjVuL4wVu6vLLXGqvXFLWM1TjaG3L9qQiggO2LRjQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/gatsby-assets/static/3e011774c3165c24a86ea05750717458/9d1a4/mobile_side_app.png","srcSet":"/gatsby-assets/static/3e011774c3165c24a86ea05750717458/8ba3a/mobile_side_app.png 345w,\\n/gatsby-assets/static/3e011774c3165c24a86ea05750717458/9a9fc/mobile_side_app.png 690w,\\n/gatsby-assets/static/3e011774c3165c24a86ea05750717458/9d1a4/mobile_side_app.png 1380w","sizes":"(min-width: 1380px) 1380px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/3e011774c3165c24a86ea05750717458/0f303/mobile_side_app.webp 345w,\\n/gatsby-assets/static/3e011774c3165c24a86ea05750717458/0d6e2/mobile_side_app.webp 690w,\\n/gatsby-assets/static/3e011774c3165c24a86ea05750717458/64e0e/mobile_side_app.webp 1380w","type":"image/webp","sizes":"(min-width: 1380px) 1380px, 100vw"}]},"width":1380,"height":1645}')},5130:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/0423a/download.png","srcSet":"/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/4cecc/download.png 1060w,\\n/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/3054f/download.png 2120w,\\n/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/0423a/download.png 4240w","sizes":"(min-width: 4240px) 4240px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/22bb5/download.webp 1060w,\\n/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/6a7a7/download.webp 2120w,\\n/gatsby-assets/static/862cadc5722e394ed48a71405f3e3148/4a7ec/download.webp 4240w","type":"image/webp","sizes":"(min-width: 4240px) 4240px, 100vw"}]},"width":4240,"height":2240}')}}]);
//# sourceMappingURL=component---src-pages-download-links-tsx-5ea18cca76dd49ae32e2.js.map