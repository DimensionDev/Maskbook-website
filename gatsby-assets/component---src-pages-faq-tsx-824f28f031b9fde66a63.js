(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[288],{8163:function(e,t,a){var n;"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a(1),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(2),i=(n=r)&&n.__esModule?n:{default:n},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.smoothScroll=a.smoothScroll.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){a(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var a=function(){return 0};void 0!==this.props.offset&&(a=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var n=e.currentTarget.getAttribute("href").slice(1),o=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-a(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["offset"]));return i.default.createElement("a",o({},t,{onClick:this.smoothScroll}))}}]),t}(r.Component);t.default=l},function(t,a){t.exports=e},function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||i,scrollIntoView:n.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var a=f(this),n=a.getBoundingClientRect(),s=this.getBoundingClientRect();a!==t.body?(u.call(this,a,a.scrollLeft+s.left-n.left,a.scrollTop+s.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:s.left,top:s.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function p(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){var a;do{a=(e=e.parentNode)===t.body}while(!1===a&&!1===p(e));return a=null,e}function d(t){var a,n,o,r,i=(s()-t.startTime)/468;r=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*r)),n=t.startX+(t.x-t.startX)*a,o=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(d.bind(e,t))}function u(a,n,r){var l,c,m,p,f=s();a===t.body?(l=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,p=o.scroll):(l=a,c=a.scrollLeft,m=a.scrollTop,p=i),d({scrollable:l,method:p,startTime:f,startX:c,startY:m,x:n,y:r})}}}}()}])},e.exports=n(a(7294))},7057:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var n=a(7294),o=a(396),s=a(8163),r=a.n(s),i=a(9339),l=a(7823),c=a.p+"static/faq_sm-9ed7ce81ed2106e20f2308bab9abcc07.png",m=a.p+"static/faq_one-6fe3c81735fbc47a62cc62c631cc471d.png",p=a.p+"static/faq_two-c66853ae52fac0691e6f739f973fae73.png",f=a.p+"static/faq_three-1eab83cd9922a8c9ab6d037cc4d1df6e.png",d=a.p+"static/faq_four-149089df7b9719999753b4336578c869.png",u=a.p+"static/faq_five-a6ceb4488426e98c5147c531d8054cf3.png",b=a.p+"static/faq_six-e2c1340b30de58b9c3a7ed77a911a65b.png",h=a.p+"static/faq_other-4c24bd68e972d10cc51569d90f347a6a.png",w=a.p+"static/faq_seven-44011da6ee5c7476a2ec128478850823.png",k=a.p+"static/faq_eight-6dabfb25fba8fef94124b9731f0df193.png",g=a.p+"static/faq_nine-f660ad18edddbe49fa1b2dc95b9e5b8c.png",x=a.p+"static/faq_ten-84e8f613d179ccbb575fa996b8a8fb1e.png",y=a(2001);function v(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex items-center mb-8 max-md:mb-4 "+(0===e.i?"":"mt-20 max-sm:mt-6")},n.createElement("img",{alt:"",src:e.content.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),n.createElement("p",{className:"text-4xl ml-2 font-bold md:text-3xl sm:text-2xl"},e.content.title)),n.createElement("div",{className:"ml-14 max-sm:ml-2 flex flex-col"},e.content.contents.map((function(e){return n.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"font-semibold mb-8 max-md:mb-4 text-xl max-sm:text-base max-sm:font-light max-sm:mb-4 max-sm:underline md:text-base sm:text-sm "},e.text)}))))}function S(e){var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){t&&(t.current&&new IntersectionObserver((function(a){t&&t.current&&a[0]&&a[0].isIntersecting&&e.action(t.current.textContent)}),{root:document,rootMargin:"0px",threshold:1}).observe(t.current))}),[e,t]),n.createElement(n.Fragment,null,n.createElement("div",{ref:t,className:"flex items-center mb-12 max-md:mb-6 "+(0===e.i?"":"mt-24")},n.createElement("img",{alt:"",src:e.content.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),n.createElement("p",{className:"text-4xl md:text-3xl sm:text-2xl ml-2 font-bold",id:e.content.title},e.content.title)),n.createElement("div",{className:"pl-14 max-sm:pl-3"},e.content.contents.map((function(e,t){return n.createElement("div",{key:t.toString()},n.createElement(T,{show:e.show,title:e.title,content:e.content}))}))))}function A(e){return n.createElement(r(),{offset:"100",href:"#"+e.title,className:"whitespace-nowrap py-3 px-4 border-l-4 "+(e.title===e.current?" border-gray-800 text-gray-800":"border-gray-300 text-gray-300 font-light"),onClick:e.action},e.title)}function T(e){var t=(0,n.useState)(Boolean(e.show)),a=t[0],o=t[1];return n.createElement("div",{className:"mb-10 max-sm:mb-6"},n.createElement("p",{className:"text-2xl md:text-xl sm:text-base mb-4 max-md:mb-2 cursor-pointer flex items-center",onClick:function(){return o(!a)}},n.createElement("img",{src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAJCAYAAABnoO8WAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA4SURBVHgB7dXRCQAgDAPRRBSDUzqam9YpRBr6Nriv45A2jHFqBXxFg7kKzK4Cs7MP7AQO/nu2qguYwAQ/lq1vywAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAYAAACS0bM2AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dqxDYJAFMbx7x0McEqpFk4gI7iBbqSjOIJOoCM4AiNgYSc8sdPiupPkI9+vAy4h/+JCwjvDSGJc1EWBOvW8657ndoCMSowkBNvDcUiviDcgb1zAhCmOleJYKY6V4lgpjpXiWCmOleJYKY6V4lhNOu7n116Mq31R9BH/0NsG5snHAa9dVS0eyMi+L6rZ8jrc2WIitOdYKY6V4lj9fOfc/QILDf7BvTZLz+eG8dbZzbKOsAwjmc+Xx+Flyflc15frtm0aZKQ9x0pxrBTHSnGsFMdKcawUx0pxrBTHSnGsFMdqtKP31nd3D+UpvSLvsfuPN4JMLGszk7b1AAAAAElFTkSuQmCC",className:"pr-4 w-8 max-md:w-6",alt:""}),n.createElement("h5",{className:"font-bold"},e.title)),a?n.createElement("p",{className:"text-gray-500 text-xl md:text-base sm:text-sm relative left-8 max-sm:left-7 max-xsm:left-6 w-5/6 animate__animated animate__fadeIn",dangerouslySetInnerHTML:{__html:e.content}}):null)}function E(e){return e.innerWidth}var C=function(){var e=(0,n.useState)(0),t=e[0],s=e[1],r=(0,i.Wd)("type",i.Zp),T=r[0],C=r[1],M=[{title:"Getting Started",image:m,contents:[{title:"Where can I use Mask Network ?",show:!0,content:"Mask Network is now available on Facebook, Twitter, and Minds.com.<p> We will support more platforms in the future.</p>"},{title:"How to install Mask Network?",content:"Go to <a class='font-semibold' href='/download-links'>download page</a> to install Mask Network directly. You can also install through the , Google Play Store(beta), or the Apple App Store(beta)."},{title:"How to create a persona?",content:"Once installed, the Mask extension will guide you to create a persona. Make sure you take a good note of the mnemonic phrases, then you will have a persona ready to connect all the Web 2.0 accounts and Web 3.0 addresses."},{title:"Explain like I am a nerd.",content:"Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares <span class='underline-dotted'>K</span> via <span class='underline-dotted'>ECIES</span> over <a href='https://en.wikipedia.org/wiki/ECC' class='font-semibold'>SECP256K1</a> with Bob using Bob's public key (K.Bob). Alice publishes <span class='underline-dotted'>CT</span> on Facebook and synchronizes <span class='underline-dotted'>K.Bob</span> over GUN. Bob can then retrieve <span class='underline-dotted'>K</span> to decrypt <span class='underline-dotted'>M</span>."}]},{title:"Trade and Swaps",image:p,contents:[{title:"Where does the crypto price info come from?",content:"Mask Network supports price chart by CoinMarketCap, CoinGecko, and UniSwap Info."},{title:"What is swap and where can I find it?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p><p class='max-sm:mb-2 mb-3'>The Mask extension now supports:</p><p class='max-sm:mb-2 mb-3'>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</p><p class='max-sm:mb-2 mb-3'>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Polygon: QuickSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Arbitrum: UniSwap</p><p class='max-sm:mb-2 mb-3'>xDai: SushiSwap</p>"},{title:"Does Mask Network charge a fee on swap?",content:"No, we don’t charge any fee."}]},{title:"File Service",image:f,contents:[{title:"How to use the file service on Mask Network?",content:"Please check <a class='font-semibold' href='https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f'>this tutorial</<a>."},{title:"Who will be able to see the uploaded file?",content:"You can set & make amend to the recipients of the designated file."},{title:"Can my friends see the uploaded file?",content:"Only Mask Network users with specific permission settings can see this file."}]},{title:"About ITO",image:d,contents:[{title:"What is ITO ( Initial Twitter Offering )?",content:'<p class="max-sm:mb-2 mb-3">ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p><p class="max-sm:mb-2 mb-3">Please follow our <a class="font-semibold" href="http://masknetwork.medium.com/">Blog</a> or <a class="font-semibold" href="https://t.me/maskbook_group">Telegram Channel</a> for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>'},{title:"How do I prepare for participating in an ITO?",content:"<p class='max-sm:mb-2 mb-3'>1. Please make sure that you have installed the Mask extension.</p><p class='max-sm:mb-2 mb-3'>2. Create a Mask persona and connect to your Twitter account. Don’t forget to BACK UP!</p> <p class='max-sm:mb-2 mb-3'>3. Import or create a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support connecting MetaMask and WalletConnect.</p><p class='max-sm:mb-2 mb-3'>4. Prepare enough token for purchase and for sufficient gas fee. The ITO will be encrypted in a Tweet, and the entrance can only be seen when ITO starts.</p>"},{title:"How much can I purchase a single ITO address?",content:"<p>Each ITO has different rules, and the purchase limit for a single wallet address will be different.</p><p>In the future, Mask Network will support various forms of auctions and joint curves to serve various ITO needs.</p>"},{title:"What should I do if the gas is HIGH?",content:"The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer-2 solution."},{title:"If an ITO is on BSC/ Polygon, but all my $MASK is on Ethereum, will I be able to meet the snapshot requirement?",content:"Don’t worry about it, it doesn’t matter which chain your asset is on."}]},{title:"Wallet",image:u,contents:[{title:"How to create a wallet?",content:"Please check <a class='font-semibold' href='https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-67c1ba13c5664eda9a9240f8e145366a'>this tutorial</<a>."},{title:"I already have a wallet…?",content:"<p class='max-sm:mb-2 mb-3'>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p> <p class='max-sm:mb-2 mb-3'>The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), Polygon (Matic), Arbitrum, and xDai. We will support more chains in the future.</p>"}]},{title:"Lucky Drop",image:b,contents:[{title:"How to view the history and detailed information of the received Lucky Drop?",content:"Click the blue smiley face in the compose window, select “Lucky Drop.” You will be able to see them in the “Past” tab."},{title:"How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",content:"Lucky Drop is valid for 24 hours. After 24 hours, if parts of the Lucky Drop is unclaimed, then the remaining amount will be refunded."}]},{title:"Other",image:h,contents:[{title:"Will Mask Network be banned (by Twitter)?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p> <p class='max-sm:mb-2 mb-3'>Check <a class='font-semibold' href='https://hackmd.io/lW-K1-97R_C1wv-bg2rfGw?view'>this article</a> for the technical details about Mask Network.</p>"},{title:"My Twitter account is banned :( What happens to my assets now?",content:"Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine."},{title:"Where can I trade $MASK?",content:"You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges."}]}],N=[{title:"Set up & Back up",image:w,contents:[{link:"https://realmasknetwork.notion.site/Installation-set-up-dd3329c7b3124108a8e992829a61a51e",text:"🔨 Installation & set up"},{link:"https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-67c1ba13c5664eda9a9240f8e145366a",text:"👛 Setting up your wallet (Support MetaMask and WalletConnect)"},{link:"https://realmasknetwork.notion.site/Manually-update-the-Mask-Network-plugin-44fa7bbb3bab48bab4cb6198f54cc126",text:"🛠️ Manually update the Mask Network plugin"},{link:"https://realmasknetwork.notion.site/Back-up-your-private-key-5af0c5f5f7f342fe97b66d029159f9ca",text:"🗝️ Back up your private key"}]},{title:"NFT Features",image:k,contents:[{link:"https://realmasknetwork.notion.site/Set-any-NFT-you-own-as-your-Twitter-Profile-Picture-b60da726f7054f918d72634400479d1d",text:"👻 Set any NFT you owned as your Twitter Profile Avatar"},{link:"https://realmasknetwork.notion.site/Display-Your-NFTs-on-your-Twitter-profile-page-5772759b609843309839beb056bead02",text:"🖼️ Customise your Twitter page: Set up a Web3 Tab & create a NFT gallery"},{link:"https://realmasknetwork.notion.site/Purchase-or-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-c388746f11774ecfa17914c900d3ed97",text:"🎨 Purchase or bid for NFTs via OpenSea or Rarible on Twitter"},{link:"https://realmasknetwork.notion.site/See-the-latest-offer-of-a-Tweet-NFT-by-Valuables-Plugin-27424923ee454a4a9b0ed16fc5cb93d0",text:"🔓 See the latest offer of a Tweet NFT by Valuables Plugin"},{link:"https://realmasknetwork.notion.site/How-to-participate-in-a-MaskBox-sale-d0941687649a4ef7a38d71f23ecbe4da",text:"📦 How to participate in a MaskBox sale"}]},{title:"Personal Finance / DeFi Features",image:m,contents:[{link:"https://realmasknetwork.notion.site/Trade-cryptos-on-Twitter-via-Uniswap-Sushi-0x-Support-ETH-BSC-Polygon-Arbitrum-f2e7d081ee38487ca1db958393ac1edc",text:"💸 Trade cryptos on Twitter via Uniswap, Sushi, 0x (Support ETH, BSC, Polygon, Arbitrum)"},{link:"https://realmasknetwork.notion.site/Check-crypto-info-on-Twitter-Support-CoinGecko-CoinMarketCap-307619336f704ff78063550c7b37a1f6",text:"💹 Check crypto info on Twitter (Support  CoinGecko, CoinMarketCap)"},{link:"https://realmasknetwork.notion.site/Invest-in-your-favourite-fund-manager-via-dHEDGE-on-Twitter-ETH-and-Polygon-fb00ff2e626949279c83b59ed9207b9a",text:"👨🏼‍🎤 Invest in your favourite fund manager via dHEDGE on Twitter (ETH and Polygon)"},{link:"https://realmasknetwork.notion.site/Cultivate-a-weekly-saving-habit-via-GoodGhosting-on-Twitter-Polygon-only-f94aa38b01404b9c99c7a03935840962",text:"🏦 Cultivate a weekly saving habit via GoodGhosting on Twitter (Polygon only)"},{link:"https://realmasknetwork.notion.site/Participate-in-lossless-lottery-via-PoolTogether-on-Twitter-ETH-and-Polygon-377597e14aff441ab645ecba5ea690f1",text:"💱 Participate in lossless lottery via PoolTogether on Twitter (ETH and Polygon)"},{link:"https://realmasknetwork.notion.site/Launch-an-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-d84c60903f974f4880d2085a13906d55",text:"🚀 Launch an ITO (Initial Twitter Offering) (Support ETH, BSC, Polygon, Arbitrum)"},{link:"https://realmasknetwork.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-05619ffc02204848bcaf6d81b0db589f",text:"🙋 Participate in ITO (Initial Twitter Offering) (Support ETH, BSC, Polygon, Arbitrum)"}]},{title:"Broader Web 3.0 Features",image:g,contents:[{link:"https://realmasknetwork.notion.site/Send-an-Encrypted-Tweet-b76c1e6ec9fd4e9a8033df51669b4daf",text:"🔏 Send an Encrypted Tweet"},{link:"https://realmasknetwork.notion.site/Gift-token-NFTs-to-your-friends-Support-ETH-BSC-and-Polygon-0a71fd421aae4563bd07caa3e2129e5b",text:"💰 Gift token/NFTs to your friends (Support ETH, BSC and Polygon)"},{link:"https://realmasknetwork.notion.site/Cast-a-Snapshot-vote-10c08ed9629942dd852d9afbfab61208",text:"🗳️ Cast a Snapshot vote"},{link:"https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f",text:"🗄️ Use File Service via Arweave (IPFS, SIA, Swarm soon)"},{link:"https://realmasknetwork.notion.site/Make-a-quick-Gitcoin-Grant-donation-98ed83784ed4446a8a13fa685c7bddfb",text:"🔗 Make a quick Gitcoin Grant donation"},{link:"https://realmasknetwork.notion.site/Claim-tokens-from-ITO-Airdrop-Support-ETH-and-Polygon-c34c70345868455d8a1107244f9e5922",text:"🎁 Claim tokens (from ITO/Airdrop) (Support ETH and Polygon)"}]},{title:"Switch Network & Cross Chain",image:x,contents:[{link:"https://realmasknetwork.notion.site/MultiChain-Switch-networks-d9ba6324159741d49e816bd96f7867f2",text:"⛓️ MultiChain - Switch networks"},{link:"https://realmasknetwork.notion.site/Use-the-Polygon-Bridge-to-convert-from-Ethereum-Mainnet-and-Polygon-295ba2736178444dbea5c1cc8b474489",text:"🌉 Use the Polygon Bridge to convert from Ethereum Mainnet between Polygon"},{link:"https://realmasknetwork.notion.site/Convert-MASK-from-ERC20-to-BEP20-04d205700d0246d3a27909eac408b971",text:"🌉 Convert $MASK from ERC20 to BEP20"}]}],O=(0,n.useState)(M[0].title),P=O[0],B=O[1];return(0,n.useEffect)((function(){function e(){s(E(window))}return s(E(window)),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n.createElement(y.Z,null,n.createElement(l.H,{title:"FAQs — Mask Network"}),t?n.createElement(n.Fragment,null,t>768?n.createElement("div",{className:"w-full h-full flex relative max-h-screen-1/3 min-h-300"},n.createElement("div",{className:"flex justify-center items-center bg-gray-200 w-1/2 max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full"},n.createElement("p",{className:"h2 w-1/2 max-md:w-full max-md:text-gray-h2"},"How can we help you?")),n.createElement("div",{className:"w-1/2 max-md:w-full overflow-hidden"},t>768?n.createElement(o.S,{alt:"",src:"../images/faq.png",className:"noise-img",placeholder:"none",__imageData:a(3857)}):n.createElement(o.S,{alt:"",src:"../images/faq_sm.png",className:"noise-img",placeholder:"none",__imageData:a(4355)}))):n.createElement("img",{alt:"",src:c,className:"w-full"}),n.createElement("div",{className:"w-full md:mb-32 mb-16 min-lg:mt-48 md:mt-24 mt-16"},n.createElement("div",{className:"w-full max-w-7xl mx-auto px-5 flex justify-between"},n.createElement("div",{className:"w-full md:pr-8 pl-4 md:pl-2 sm:pl-0"},n.createElement("p",{className:"cursor-pointer mb-14 max-sm:mb-6",onClick:function(){C("faq"===T?"tutorials":"faq")}},n.createElement("span",{className:"faq"===T?"text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold":"text-6xl font-semibold md:text-4xl sm:text-3xl font-bold"},"Tutorial / "),n.createElement("span",{className:"faq"===T?"text-6xl font-semibold md:text-4xl sm:text-3xl font-bold":"text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold"},"FAQs")),"tutorials"!==T&&T?null:n.createElement("div",{className:"max-w-4xl my-24 max-sm:my-8"},n.createElement("p",{className:"text-4xl mb-8 px-4 md:px-0 max-sm:mb-4 max-sm:px-0 md:text-3xl sm:text-2xl"},"An (In)Complete Guide to Mask Network (2.0)"),n.createElement("p",{className:"text-xl text-gray-500 px-4 md:px-0 max-sm:text-base max-sm:px-0"},"Mask has dedicated itself to protect data privacy and build the best bridge between Web 2.0 and Web 3.0. Through our browser extension, we have introduced an ecosystem of 30+ popular Web 3.0 dApps / Features that works seamlessly on top of existing Web 2.0 sites like Twitter and Facebook.")),"tutorials"!==T&&T?null:N.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"w-full"},n.createElement(v,{i:t,content:e}))})),"faq"===T?M.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"max-w-3xl"},n.createElement(S,{contents:M,i:t,content:e,action:function(e){return B(e)}}))})):null),"faq"===T?n.createElement("div",null,n.createElement("aside",{className:"sticky top-16 flex sm:hidden flex-col"},M.map((function(e,t){return n.createElement(A,{title:e.title,i:t.toString(),current:P,action:function(){return B(e.title)}})})))):null))):n.createElement("div",{className:"h-screen"}))}},4355:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/f14e8/faq_sm.png","srcSet":"/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/fbf51/faq_sm.png 288w,\\n/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/7822f/faq_sm.png 577w,\\n/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/f14e8/faq_sm.png 1153w","sizes":"(min-width: 1153px) 1153px, 100vw"},"sources":[{"srcSet":"/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/3136c/faq_sm.webp 288w,\\n/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/44198/faq_sm.webp 577w,\\n/mask-website/static/4914ad7a739a648baf9d708c4f937bb2/56bf2/faq_sm.webp 1153w","type":"image/webp","sizes":"(min-width: 1153px) 1153px, 100vw"}]},"width":1153,"height":674}')},3857:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/87487/faq.png","srcSet":"/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/41f46/faq.png 720w,\\n/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/bc523/faq.png 1441w,\\n/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/87487/faq.png 2881w","sizes":"(min-width: 2881px) 2881px, 100vw"},"sources":[{"srcSet":"/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/7cc02/faq.webp 720w,\\n/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/cd176/faq.webp 1441w,\\n/mask-website/static/16ed0e57956d49cd8c9cc13004d9b26b/d6123/faq.webp 2881w","type":"image/webp","sizes":"(min-width: 2881px) 2881px, 100vw"}]},"width":2881,"height":1683}')}}]);
//# sourceMappingURL=component---src-pages-faq-tsx-824f28f031b9fde66a63.js.map