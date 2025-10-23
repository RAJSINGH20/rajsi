let e,t,r,o,i,n,a,c;var h,p,u,g,m,b,f,v,w,_,$,x={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},6047:(e,t,r)=>{r(602)}},C={};function S(e){var t=C[e];if(void 0!==t)return t.exports;var r=C[e]={exports:{}};return x[e](r,r.exports,S),r.exports}S.d=(e,t)=>{for(var r in t)S.o(t,r)&&!S.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},S.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Object.defineProperty(S,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=o??!1}};let s=class s{constructor(e,t,r,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=r,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function P({context:e}){return(t,r)=>{let o=new WeakMap;if("object"==typeof r)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){let e=new WeakMap;i={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=n.set;i={...n,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,r,i)}}}function A({context:e,subscribe:t}){return(r,o)=>{"object"==typeof o?o.addInitializer(function(){new s(this,{context:e,callback:e=>{r.set.call(this,e)},subscribe:t})}):r.constructor.addInitializer(r=>{new s(r,{context:e,callback:e=>{r[o]=e},subscribe:t})})}}let O=globalThis,B=O.ShadowRoot&&(void 0===O.ShadyCSS||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol(),T=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==E)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(B&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=T.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&T.set(t,e))}return e}toString(){return this.cssText}};let D=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,E),j=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,E),F=B?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return D(t)})(e):e,{is:q,defineProperty:U,getOwnPropertyDescriptor:W,getOwnPropertyNames:G,getOwnPropertySymbols:V,getPrototypeOf:K}=Object,Y=globalThis,J=Y.trustedTypes,Z=J?J.emptyScript:"",X=Y.reactiveElementPolyfillSupport,Q={toAttribute(e,t){switch(t){case Boolean:e=e?Z:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ee=(e,t)=>!q(e,t),et={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=et){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&U(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=W(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let n=o?.call(this);i?.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??et}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=K(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...G(e),...V(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(F(r));else void 0!==e&&t.push(F(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(B)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=O.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:Q).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Q;this._$Em=o;let n=i.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){let o=this.constructor,i=this[e];if(!(((r??=o.getPropertyOptions(e)).hasChanged??ee)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,X?.({ReactiveElement:y}),(Y.reactiveElementVersions??=[]).push("2.1.1");let er=globalThis,eo=er.trustedTypes,ei=eo?eo.createPolicy("lit-html",{createHTML:e=>e}):void 0,en="$lit$",es=`lit$${Math.random().toFixed(9).slice(2)}$`,ea="?"+es,el=`<${ea}>`,ec=document,ed=()=>ec.createComment(""),eh=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ep=Array.isArray,eu=e=>ep(e)||"function"==typeof e?.[Symbol.iterator],eg=`[ 	
\f\r]`,em=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eb=/-->/g,ef=/>/g,ev=RegExp(`>|${eg}(?:([^\\s"'>=/]+)(${eg}*=${eg}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ey=/'/g,ew=/"/g,e_=/^(?:script|style|textarea|title)$/i,ek=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),e$=ek(1),ex=ek(2),eC=(ek(3),Symbol.for("lit-noChange")),eS=Symbol.for("lit-nothing"),eP=new WeakMap,eA=ec.createTreeWalker(ec,129);function eO(e,t){if(!ep(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ei?ei.createHTML(t):t}let eR=(e,t)=>{let r=e.length-1,o=[],i,n=2===t?"<svg>":3===t?"<math>":"",a=em;for(let t=0;t<r;t++){let r=e[t],c,h,p=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(h=a.exec(r)));)u=a.lastIndex,a===em?"!--"===h[1]?a=eb:void 0!==h[1]?a=ef:void 0!==h[2]?(e_.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=ev):void 0!==h[3]&&(a=ev):a===ev?">"===h[0]?(a=i??em,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?ev:'"'===h[3]?ew:ey):a===ew||a===ey?a=ev:a===eb||a===ef?a=em:(a=ev,i=void 0);let g=a===ev&&e[t+1].startsWith("/>")?" ":"";n+=a===em?r+el:p>=0?(o.push(c),r.slice(0,p)+en+r.slice(p)+es+g):r+es+(-2===p?t:g)}return[eO(e,n+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let N=class N{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0,a=e.length-1,c=this.parts,[h,p]=eR(e,t);if(this.el=N.createElement(h,r),eA.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eA.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(en)){let t=p[n++],r=o.getAttribute(e).split(es),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),o.removeAttribute(e)}else e.startsWith(es)&&(c.push({type:6,index:i}),o.removeAttribute(e));if(e_.test(o.tagName)){let e=o.textContent.split(es),t=e.length-1;if(t>0){o.textContent=eo?eo.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],ed()),eA.nextNode(),c.push({type:2,index:++i});o.append(e[t],ed())}}}else if(8===o.nodeType)if(o.data===ea)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(es,e+1));)c.push({type:7,index:i}),e+=es.length-1}i++}}static createElement(e,t){let r=ec.createElement("template");return r.innerHTML=e,r}};function eI(e,t,r=e,o){if(t===eC)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl,n=eh(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=eI(e,i._$AS(e,t.values),i,o)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??ec).importNode(t,!0);eA.currentNode=o;let i=eA.nextNode(),n=0,a=0,c=r[0];for(;void 0!==c;){if(n===c.index){let t;2===c.type?t=new R(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new z(i,this,e)),this._$AV.push(t),c=r[++a]}n!==c?.index&&(i=eA.nextNode(),n++)}return eA.currentNode=ec,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=eS,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){eh(e=eI(this,e,t))?e===eS||null==e||""===e?(this._$AH!==eS&&this._$AR(),this._$AH=eS):e!==this._$AH&&e!==eC&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):eu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==eS&&eh(this._$AH)?this._$AA.nextSibling.data=e:this.T(ec.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=N.createElement(eO(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new M(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=eP.get(e.strings);return void 0===t&&eP.set(e.strings,t=new N(e)),t}k(e){ep(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new R(this.O(ed()),this.O(ed()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=eS,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=eS}_$AI(e,t=this,r,o){let i=this.strings,n=!1;if(void 0===i)(n=!eh(e=eI(this,e,t,0))||e!==this._$AH&&e!==eC)&&(this._$AH=e);else{let o,a,c=e;for(e=i[0],o=0;o<i.length-1;o++)(a=eI(this,c[r+o],t,o))===eC&&(a=this._$AH[o]),n||=!eh(a)||a!==this._$AH[o],a===eS?e=eS:e!==eS&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}n&&!o&&this.j(e)}j(e){e===eS?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===eS?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==eS)}};let L=class L extends k{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=eI(this,e,t,0)??eS)===eC)return;let r=this._$AH,o=e===eS&&r!==eS||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==eS&&(r===eS||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){eI(this,e)}};let eB=er.litHtmlPolyfillSupport;eB?.(N,R),(er.litHtmlVersions??=[]).push("3.3.1");let eE=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,i=o._$litPart$;if(void 0===i){let e=r?.renderBefore??null;o._$litPart$=i=new R(t.insertBefore(ed(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eC}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eE.litElementHydrateSupport?.({LitElement:lit_element_i});let eT=eE.litElementPolyfillSupport;eT?.({LitElement:lit_element_i}),(eE.litElementVersions??=[]).push("4.2.1");let eL=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eD={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:ee};function ez(e){return(t,r)=>"object"==typeof r?((e=eD,t,r)=>{let{kind:o,metadata:i}=r,n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=r;return function(r){let i=this[o];t.call(this,r),this.requestUpdate(o,i,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):((e,t,r)=>{let o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function eN(e){return ez({...e,state:!0,attribute:!1})}let eM=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function ej(e,t){return(r,o,i)=>{let n=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof o?r:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eM(r,o,{get(){let r=e.call(this);return void 0===r&&(null!==(r=n(this))||this.hasUpdated)&&t.call(this,r),r}})}return eM(r,o,{get(){return n(this)}})}}function eF(e,t,r){return e?t(e):r?.(e)}let IpcCall=class IpcCall{constructor(e,t,r=!1){this.scope=e,this.reset=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r){super(e,t,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let eq=new IpcRequest("core","webview/ready"),eU=new IpcCommand("core","webview/focus/changed"),eW=new IpcCommand("core","command/execute"),eH=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let eG=new IpcCommand("core","telemetry/sendEvent"),eV=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let eK=new IpcCommand("core","webview/focus/didChange"),eY=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let eJ="home",eZ=new IpcRequest(eJ,"launchpad/summary"),eX=new IpcRequest(eJ,"overview/active"),eQ=new IpcRequest(eJ,"overview/inactive"),e0=new IpcRequest(eJ,"overviewFilter"),e1=new IpcCommand(eJ,"overview/repository/change"),e2=new IpcNotification(eJ,"overview/repository/didChange"),e5=new IpcCommand(eJ,"previewEnabled/toggle"),e8=new IpcCommand(eJ,"section/collapse"),e3=new IpcCommand(eJ,"walkthrough/dismiss"),e4=new IpcNotification(eJ,"ai/allAccess/didChange"),e6=new IpcNotification(eJ,"mcp/didChange"),e9=new IpcCommand(eJ,"ai/allAccess/dismiss"),e7=new IpcCommand(eJ,"overview/filter/set");new IpcCommand(eJ,"openInGraph");let te=new IpcNotification(eJ,"repositories/didCompleteDiscovering"),tt=new IpcNotification(eJ,"previewEnabled/didChange"),tr=new IpcNotification(eJ,"repository/wip/didChange"),to=new IpcNotification(eJ,"repositories/didChange"),ti=new IpcNotification(eJ,"walkthroughProgress/didChange"),tn=new IpcNotification(eJ,"integrations/didChange"),ts=new IpcNotification(eJ,"launchpad/didChange"),ta=new IpcNotification(eJ,"subscription/didChange"),tl=new IpcNotification(eJ,"org/settings/didChange"),tc=new IpcNotification(eJ,"home/ownerFilter/didChange"),td=new IpcNotification(eJ,"account/didFocus");var th=Object.defineProperty,tp=(e,t,r)=>{let o;return(o="symbol"!=typeof t?t+"":t)in e?th(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,r},tu=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},tg=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},tm=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot access private method");return r};function tb(e,t){return Object.is(e,t)}let tf=null,tv=!1,ty=1,tw=Symbol("SIGNAL");function t_(e){let t=tf;return tf=e,t}let tk={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function t$(e){if(tv)throw Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===tf)return;tf.consumerOnSignalRead(e);let t=tf.nextProducerIndex++;tS(tf),t<tf.producerNode.length&&tf.producerNode[t]!==e&&tC(tf)&&tx(tf.producerNode[t],tf.producerIndexOfThis[t]),tf.producerNode[t]!==e&&(tf.producerNode[t]=e,tf.producerIndexOfThis[t]=tC(tf)?function e(t,r,o){var i;if(tP(t),tS(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=e(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(o),t.liveConsumerNode.push(r)-1}(e,tf,t):0),tf.producerLastReadVersion[t]=e.version}function tx(e,t){var r;if(tP(e),tS(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)tx(e.producerNode[t],e.producerIndexOfThis[t])}let o=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[o],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[o],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];tS(o),o.producerIndexOfThis[r]=t}}function tC(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function tS(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function tP(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function tA(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==ty){if(!t.producerMustRecompute(t)&&!function(t){tS(t);for(let r=0;r<t.producerNode.length;r++){let o=t.producerNode[r],i=t.producerLastReadVersion[r];if(i!==o.version||(e(o),i!==o.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=ty;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=ty}}(e),t$(e),e.value===tI)throw e.error;return e.value}let tO=Symbol("UNSET"),tR=Symbol("COMPUTING"),tI=Symbol("ERRORED"),tB={...tk,value:tO,dirty:!0,error:null,equal:tb,producerMustRecompute:e=>e.value===tO||e.value===tR,producerRecomputeValue(e){let t;if(e.value===tR)throw Error("Detected cycle in computations.");let r=e.value;e.value=tR;let o=(e&&(e.nextProducerIndex=0),t_(e)),i=!1;try{t=e.computation.call(e.wrapper),i=r!==tO&&r!==tI&&e.equal.call(e.wrapper,r,t)}catch(r){t=tI,e.error=r}finally{if(t_(o),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(tC(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)tx(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=r;return}e.value=t,e.version++}},tE=function(){throw Error()};function tT(){return t$(this),this.value}let tL={...tk,equal:tb,value:void 0},tD=Symbol("node");(e=>{var t,r,o,i;let State=class State{constructor(o,i={}){tg(this,r),tp(this,t);let n=function(e){let t=Object.create(tL);t.value=e;let r=()=>(t$(t),t.value);return r[tw]=t,r}(o)[tw];if(this[tD]=n,n.wrapper=this,i){let t=i.equals;t&&(n.equal=t),n.watched=i[e.subtle.watched],n.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return tT.call(this[tD])}set(t){var r,o;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(tv)throw Error("Writes to signals not permitted during Watcher callback");r=this[tD],(null==tf?void 0:tf.consumerAllowSignalWrites)===!1&&tE(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,o=r,o.version++,ty++,function e(t){if(void 0===t.liveConsumerNode)return;let r=tv;tv=!0;try{for(let r of t.liveConsumerNode)r.dirty||function(t){var r;t.dirty=!0,e(t),null==(r=t.consumerMarkedDirty)||r.call(t.wrapper??t)}(r)}finally{tv=r}}(o))}};t=tD,r=new WeakSet,e.isState=e=>"object"==typeof e&&tu(r,e),e.State=State;let Computed=class Computed{constructor(t,r){tg(this,i),tp(this,o);let n=function(e){let t=Object.create(tB);t.computation=e;let r=()=>tA(t);return r[tw]=t,r}(t)[tw];if(n.consumerAllowSignalWrites=!0,this[tD]=n,n.wrapper=this,r){let t=r.equals;t&&(n.equal=t),n.watched=r[e.subtle.watched],n.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return tA(this[tD])}};o=tD,i=new WeakSet,e.isComputed=e=>"object"==typeof e&&tu(i,e),e.Computed=Computed,(t=>{var r,o,i,n;t.untrack=function(e){let t,r=null;try{r=t_(null),t=e()}finally{t_(r)}return t},t.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[tD].producerNode)?void 0:r.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[tD].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let r=t[tD].liveConsumerNode;return!!r&&r.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=t[tD].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(e){tg(this,o),tg(this,i),tp(this,r);let t=Object.create(tk);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[tD]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");tm(this,i,n).call(this,t);let r=this[tD];r.dirty=!1;let o=t_(r);for(let e of t)t$(e[tD]);t_(o)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");tm(this,i,n).call(this,t);let r=this[tD];tS(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){tx(r.producerNode[e],r.producerIndexOfThis[e]);let t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){let t=r.producerIndexOfThis[e],o=r.producerNode[e];tP(o),o.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[tD].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};r=tD,o=new WeakSet,i=new WeakSet,n=function(t){for(let r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>tu(o,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=tf)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(v||(v={}));let tz=(e=null)=>new v.State(e,{equals:()=>!1});new WeakMap;let SignalObjectImpl=class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=tz();constructor(e={}){let t=Object.getPrototypeOf(e),r=Object.getOwnPropertyDescriptors(e),o=Object.create(t);for(let e in r)Object.defineProperty(o,e,r[e]);let i=this;return new Proxy(o,{get:(e,t,r)=>(i.#r(t),Reflect.get(e,t,r)),has:(e,t)=>(i.#r(t),t in e),ownKeys:e=>(i.#t.get(),Reflect.ownKeys(e)),set(e,t,r,o){let n=Reflect.set(e,t,r,o);return i.#o(t),i.#i(),n},deleteProperty:(e,t)=>(t in e&&(delete e[t],i.#o(t),i.#i()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#r(e){let t=this.#e.get(e);void 0===t&&(t=tz(),this.#e.set(e,t)),t.get()}#o(e){let t=this.#e.get(e);t&&t.set(null)}#i(){this.#t.set(null)}};let tN=Symbol("SignalWatcherBrand"),tM=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),tj=new WeakMap;function tF(e){return!0===e[tN]?e:class extends e{constructor(){super(...arguments),this._$St=new v.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new v.Computed(()=>{this._$St.get(),super.performUpdate()});let e=this._$Su=new v.subtle.Watcher(function(){let e=tj.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});tj.set(e,this),tM.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,r){this._$So=!0,super.requestUpdate(e,t,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);let t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}let tq=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:tU}={M:en,P:es,A:ea,C:1,L:eR,R:M,D:eu,V:eI,I:R,H:k,N:I,U:L,B:H,F:z},tW=()=>document.createComment(""),tH=(e,t,r)=>{let o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===r)r=new tU(o.insertBefore(tW(),i),o.insertBefore(tW(),i),e,e.options);else{let t=r._$AB.nextSibling,n=r._$AM,a=n!==e;if(a){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==n._$AU&&r._$AP(t)}if(t!==i||a){let e=r._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,i),e=t}}}return r},tG=(e,t,r=e)=>(e._$AI(t,r),e),tV={},tK=e=>{e._$AR(),e._$AA.remove()},tY=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),tY(e,t);return!0},tJ=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},tZ=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),t0(t)}};function tX(e){void 0!==this._$AN?(tJ(this),this._$AM=e,tZ(this)):this._$AM=e}function tQ(e,t=!1,r=0){let o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)tY(o[e],!1),tJ(o[e]);else null!=o&&(tY(o,!1),tJ(o));else tY(this,e)}let t0=e=>{2==e.type&&(e._$AP??=tQ,e._$AQ??=tX)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),tZ(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tY(this,e),tJ(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let watch_h=class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new v.Computed(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()});let e=this._$Su=new v.subtle.Watcher(()=>{var t;null==(t=this._$SO)||t._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null==(e=this._$SO)||e.m(this))}commit(){this.setValue(v.subtle.untrack(()=>{var e;return null==(e=this._$SW)?void 0:e.get()}))}render(e){return v.subtle.untrack(()=>e.get())}update(e,[t]){var r;return null!=this._$SO||(this._$SO=null==(r=e.options)?void 0:r.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),v.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}};let t1=tq(watch_h),t2=e=>(t,...r)=>e(t,...r.map(e=>e instanceof v.State||e instanceof v.Computed?t1(e):e));t2(e$),t2(ex),v.State,v.Computed;let t5=(e,t)=>new v.State(e,t);let AsyncComputed=class AsyncComputed{#n=!1;#s=new v.State("initial");get status(){this.run();let e=this.#s.get();return this.#n?"pending":e}#a;get value(){return this.run(),this.#a.get()}#l=new v.State(void 0);get error(){return this.run(),this.#l.get()}#c=new v.State(void 0);get complete(){return this.run(),this.#c.get().promise}#d;#h;#p=0;#u;constructor(e,t){this.#a=new v.State(t?.initialValue),this.#d=new v.Computed(()=>{let t=++this.#p;"pending"!==v.subtle.untrack(()=>this.#s.get())&&this.#c.set(Promise.withResolvers()),this.#n=!1,this.#s.set("pending"),this.#u?.abort(),this.#u=new AbortController,e(this.#u.signal).then(e=>{t===this.#p&&(this.#s.set("complete"),this.#a.set(e),this.#l.set(void 0),this.#c.get().resolve(e))},e=>{t===this.#p&&(this.#s.set("error"),this.#l.set(e),this.#a.set(void 0),this.#c.get().reject(e))})}),this.#h=new v.subtle.Watcher(async()=>{this.#n=!0,this.#h.watch()}),this.#h.watch(this.#d)}get(){let e=this.status;if("error"===e||"pending"===e&&void 0!==this.error)throw this.error;return this.value}run(){this.#d.get()}};function t8(e,t,r){let o,i,n,a,c,h,p,u,g,m,b=0;null!=r&&({edges:h,maxWait:p,signal:u,aggregator:g}=r);let f="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function w(){if(null!=o){b=Date.now();let t=o,r=m;return m=void 0,o=void 0,n=e.apply(r,t)}}function _(){null!=a&&(clearTimeout(a),a=void 0)}function $(){null!=c&&(clearTimeout(c),c=void 0)}function x(){_(),$(),m=void 0,o=void 0,i=void 0,b=0}function C(...e){if(u?.aborted)return;let r=Date.now();null!=g&&null!=o?o=g(o,e):(m=this,o=e);let h=null==a&&null==c;i=r,_();let $=Date.now();if(i=$,a=setTimeout(()=>{a=void 0,function(e){let r=e-(i??0),o=e-b;return null==i||r>=t||r<0||null!=p&&o>=p}(Date.now())&&v&&w(),x()},t),null!=p&&!c){let e=p-($-b);e>0?c=setTimeout(()=>{c=void 0,v&&null!=o&&w(),b=Date.now()},e):(v&&null!=o&&w(),x())}return f&&h?w():n}return C.cancel=x,C.flush=function(){return _(),$(),w()},C.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",x,{once:!0}),C}let AsyncComputedState=class AsyncComputedState{constructor(e,t){this._fetch=e,this._debounce=500,this._invalidate=t5(0),this._state=t5(void 0),null!=t&&(this._state.set(t.initial),null!=t.debounce&&(this._debounce=t.debounce),!0===t.autoRun&&this.run())}get state(){return this._run(),this._state.get()}get computed(){if(null==this._computed){let e=this._state.get();this._computed=new AsyncComputed(async e=>{this._invalidate.get();let t=await this._fetch(e);return this._state.set(t),t},e?{initialValue:e}:void 0)}return this._computed}_runCore(){this.computed.run()}_run(e=!1){if(e)return void this._runCore();null==this._runDebounced&&(this._runDebounced=t8(this._runCore.bind(this),this._debounce)),this._runDebounced()}run(e=!1){e&&this.invalidate(),this._run()}invalidate(){this._invalidate.set(Date.now())}render(e){return((e,{initial:t,pending:r,complete:o,error:i})=>{switch(e.status){case"initial":return t?.();case"pending":return r?.();case"complete":return o?.(e.value);case"error":return i?.(e.error)}})(this.computed,e)}};let ActiveOverviewState=class ActiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eX,void 0),t),this._ipc=e,this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case tn.is(e):case to.is(e):case tr.is(e):case e2.is(e):this.run(!0)}})}dispose(){this._disposable?.dispose()}changeRepository(){this._ipc.sendCommand(e1,void 0)}};let InactiveOverviewState=class InactiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eQ,void 0),t),this._ipc=e,this.filter=new SignalObjectImpl({}),this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case to.is(e):this.run(!0);break;case tc.is(e):this.filter.recent=e.params.filter.recent,this.filter.stale=e.params.filter.stale,this.run(!0);break;case e2.is(e):this.run(!0)}}),this._ipc.sendRequest(e0,void 0).then(e=>{this.filter.recent=e.recent,this.filter.stale=e.stale})}dispose(){this._disposable?.dispose()}};let t3=new WeakMap;function t4(e,t){return function(r,o,i){let n=t3.get(r.constructor);null==n&&t3.set(r.constructor,n=[]),n.push({method:i.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(o),o}update(e){let t=t3.get(this.constructor);if(null!=t)for(let{keys:r,method:o,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function t6(e){let t=.001*performance.now(),r=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(o-=e[1])<0&&(r--,o+=1e9)),[r,o]}S(6047);var t9=((h=t9||{})[h.Hash=35]="Hash",h[h.Slash=47]="Slash",h[h.Digit0=48]="Digit0",h[h.Digit1=49]="Digit1",h[h.Digit2=50]="Digit2",h[h.Digit3=51]="Digit3",h[h.Digit4=52]="Digit4",h[h.Digit5=53]="Digit5",h[h.Digit6=54]="Digit6",h[h.Digit7=55]="Digit7",h[h.Digit8=56]="Digit8",h[h.Digit9=57]="Digit9",h[h.Backslash=92]="Backslash",h[h.A=65]="A",h[h.B=66]="B",h[h.C=67]="C",h[h.D=68]="D",h[h.E=69]="E",h[h.F=70]="F",h[h.Z=90]="Z",h[h.a=97]="a",h[h.b=98]="b",h[h.c=99]="c",h[h.d=100]="d",h[h.e=101]="e",h[h.f=102]="f",h[h.z=122]="z",h),t7=((p=t7||{}).AngleBracketLeftHeavy="❰",p.AngleBracketRightHeavy="❱",p.ArrowBack="↩",p.ArrowDown="↓",p.ArrowDownUp="⇵",p.ArrowDropRight="⤷",p.ArrowHeadRight="➤",p.ArrowLeft="←",p.ArrowLeftDouble="⇐",p.ArrowLeftRight="↔",p.ArrowLeftRightDouble="⇔",p.ArrowLeftRightDoubleStrike="⇎",p.ArrowLeftRightLong="⟷",p.ArrowRight="→",p.ArrowRightDouble="⇒",p.ArrowRightHollow="⇨",p.ArrowUp="↑",p.ArrowUpDown="⇅",p.ArrowUpRight="↗",p.ArrowsHalfLeftRight="⇋",p.ArrowsHalfRightLeft="⇌",p.ArrowsLeftRight="⇆",p.ArrowsRightLeft="⇄",p.Asterisk="∗",p.Bullseye="◎",p.Check="✔",p.Dash="—",p.Dot="•",p.Ellipsis="…",p.EnDash="–",p.Envelope="✉",p.EqualsTriple="≡",p.Flag="⚑",p.FlagHollow="⚐",p.MiddleEllipsis="⋯",p.MuchLessThan="≪",p.MuchGreaterThan="≫",p.Pencil="✎",p.Space=" ",p.SpaceThin=" ",p.SpaceThinnest=" ",p.SquareWithBottomShadow="❏",p.SquareWithTopShadow="❐",p.Warning="⚠",p.ZeroWidthSpace="​",p);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var re=((u=re||{}).File="file",u.Git="git",u.GitHub="github",u.GitLens="gitlens",u.GitLensAIMarkdown="gitlens-ai-markdown",u.PRs="pr",u.Remote="vscode-remote",u.Vsls="vsls",u.VslsScc="vsls-scc",u.Virtual="vscode-vfs",u);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let rt="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",rr=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${rt}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${rt}`,graph:`https://gitkraken.com/solutions/commit-graph?${rt}`,launchpad:`https://gitkraken.com/solutions/launchpad?${rt}`,platform:`https://gitkraken.com/devex?${rt}`,pricing:`https://gitkraken.com/gitlens/pricing?${rt}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${rt}`,security:`https://help.gitkraken.com/gitlens/security?${rt}`,workspaces:`https://gitkraken.com/solutions/workspaces?${rt}`,cli:`https://gitkraken.com/cli?${rt}`,browserExtension:`https://gitkraken.com/browser-extension?${rt}`,desktop:`https://gitkraken.com/git-client?${rt}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${rt}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${rt}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rt}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${rt}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${rt}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${rt}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rt}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${rt}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${rt}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rt}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rt}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rt}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${rt}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${rt}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${rt}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${rt}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${rt}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${rt}`}),ro=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ri=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,rn=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],rs=new Map,ra=new Map;function rl(e,n){let a=("number"==typeof e?e:e.getTime())-new Date().getTime();for(let[e,c,h,p]of rn){let u=Math.abs(a);if(u>=c||1e3===c){if(n){if(null==t&&(t=null!=i?i.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(i=new Intl.RelativeTimeFormat(r,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===t||t?.startsWith("en-")){let e=Math.round(u/h);return`${e}${p}`}return null==i&&(i=new Intl.RelativeTimeFormat(r,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),i.format(Math.round(a/h),e)}return null==o&&(o=new Intl.RelativeTimeFormat(r,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(a/h),e)}}return""}let rc=["th","st","nd","rd"];function rd(e,t){null==e&&(e="decimal");let o=`${t??""}:${e}`,i=ra.get(o);if(null==i){let n,a={localeMatcher:"best fit",style:e};n=null==t?r:"system"===t?void 0:[t],i=new Intl.NumberFormat(n,a),ra.set(o,i)}return i.format}function rh(e){let[t,r]=t6(e);return 1e3*t+Math.floor(r/1e6)}let rp=/\$\{(?:'.*?[^\\]'|\W*)?(\w*?)(?:'.*?[^\\]'|[\W\d]*)\}/g,ru=new Map;function rg(e){return 95===e||e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57}function rm(e,t,r){let o;if(null==r)return n??=rd(),`${n(t)} ${e}${1===t?"":"s"}`;let i=1===t?e:r.plural??`${e}s`;return r.only?i:(0===t?o=r.zero??t:!1===r.format?o=t:null!=r.format?o=r.format(t):(n??=rd(),o=n(t)),`${o}${r.infix??" "}${i}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var rb=((g=rb||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g);let rf=["accessToken","password","token"],rv=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){if(null!=e.sanitizeKeys)for(let t of rf)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(rf);this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return this.level>=ry(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ry(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let r;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...r){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,r)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let r;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let r;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,(e,r)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(r=t(e,r)),this.provider?.sanitizer!=null&&(r=this.provider.sanitizer(e,r)),r))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};function ry(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let rw=new WeakMap,r_={enabled:e=>rv.enabled(e)||rv.isDebugging,log:(e,t,r,...o)=>{switch(e){case"error":rv.error(void 0,t,r,...o);break;case"warn":rv.warn(t,r,...o);break;case"info":rv.log(t,r,...o);break;default:rv.debug(t,r,...o)}}},rk=0x40000000-1;function r$(){let e=0;return{get current(){return e},next:function(){return e===rk&&(e=0),++e},reset:function(){e=0}}}let rx=r$(),rC=new Map;function rS(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function rP(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let r=t?rx.current:void 0,o=rx.next();return{scopeId:o,prevScopeId:r,prefix:`${rS(o,r)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=rP(e,void 0),rv.configure({name:e,createChannel:function(e){return{name:e,appendLine:rv.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?rv.log(this.scope,e,...t):rv.log(e,t.shift(),...t)}};let rA="graph";new IpcCommand(rA,"chooseRepository"),new IpcCommand(rA,"dblclick"),new IpcCommand(rA,"dblclick"),new IpcCommand(rA,"avatars/get"),new IpcCommand(rA,"refs/metadata/get"),new IpcCommand(rA,"rows/get"),new IpcCommand(rA,"pullRequest/openDetails"),new IpcCommand(rA,"search/openInView"),new IpcCommand(rA,"columns/update"),new IpcCommand(rA,"refs/update/visibility"),new IpcCommand(rA,"filters/update/excludeTypes"),new IpcCommand(rA,"configuration/update"),new IpcCommand(rA,"search/update/mode"),new IpcCommand(rA,"filters/update/includedRefs"),new IpcCommand(rA,"selection/update"),new IpcRequest(rA,"chooseRef"),new IpcRequest(rA,"rows/ensure"),new IpcRequest(rA,"counts"),new IpcRequest(rA,"row/hover/get"),new IpcRequest(rA,"search"),new IpcNotification(rA,"repositories/integration/didChange"),new IpcNotification(rA,"didChange",!0),new IpcNotification(rA,"configuration/didChange");let rO=new IpcNotification(rA,"subscription/didChange");new IpcNotification(rA,"org/settings/didChange"),new IpcNotification(rA,"avatars/didChange"),new IpcNotification(rA,"mcp/didChange"),new IpcNotification(rA,"branchState/didChange"),new IpcNotification(rA,"refs/didChangeMetadata"),new IpcNotification(rA,"columns/didChange"),new IpcNotification(rA,"scrollMarkers/didChange"),new IpcNotification(rA,"refs/didChangeVisibility"),new IpcNotification(rA,"rows/didChange"),new IpcNotification(rA,"rows/stats/didChange"),new IpcNotification(rA,"selection/didChange"),new IpcNotification(rA,"workingTree/didChange"),new IpcNotification(rA,"didSearch"),new IpcNotification(rA,"didFetch"),new IpcNotification(rA,"featurePreview/didStart");let rR="timeline";new IpcRequest(rR,"ref/choose"),new IpcRequest(rR,"path/choose"),new IpcCommand(rR,"point/open"),new IpcCommand(rR,"config/update"),new IpcCommand(rR,"scope/update");let rI=new IpcNotification(rR,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(ta.is(e)||rO.is(e)||rI.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let r=`${e}|${t}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(eH,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(eG,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var rB=Uint8Array,rE=Uint16Array,rT=Int32Array,rL=new rB([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rD=new rB([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rz=new rB([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rN=function(e,t){for(var r=new rE(31),o=0;o<31;++o)r[o]=t+=1<<e[o-1];for(var i=new rT(r[30]),o=1;o<30;++o)for(var n=r[o];n<r[o+1];++n)i[n]=n-r[o]<<5|o;return{b:r,r:i}},rM=rN(rL,2),rj=rM.b,rF=rM.r;rj[28]=258,rF[258]=28;var rq=rN(rD,0),rU=rq.b;rq.r;for(var rW=new rE(32768),rH=0;rH<32768;++rH){var rG=(43690&rH)>>1|(21845&rH)<<1;rG=(61680&(rG=(52428&rG)>>2|(13107&rG)<<2))>>4|(3855&rG)<<4,rW[rH]=((65280&rG)>>8|(255&rG)<<8)>>1}for(var rV=function(e,t,r){for(var o,i=e.length,n=0,a=new rE(t);n<i;++n)e[n]&&++a[e[n]-1];var c=new rE(t);for(n=1;n<t;++n)c[n]=c[n-1]+a[n-1]<<1;if(r){o=new rE(1<<t);var h=15-t;for(n=0;n<i;++n)if(e[n])for(var p=n<<4|e[n],u=t-e[n],g=c[e[n]-1]++<<u,m=g|(1<<u)-1;g<=m;++g)o[rW[g]>>h]=p}else for(n=0,o=new rE(i);n<i;++n)e[n]&&(o[n]=rW[c[e[n]-1]++]>>15-e[n]);return o},rK=new rB(288),rH=0;rH<144;++rH)rK[rH]=8;for(var rH=144;rH<256;++rH)rK[rH]=9;for(var rH=256;rH<280;++rH)rK[rH]=7;for(var rH=280;rH<288;++rH)rK[rH]=8;for(var rY=new rB(32),rH=0;rH<32;++rH)rY[rH]=5;var rJ=rV(rK,9,1),rZ=rV(rY,5,1),rX=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},rQ=function(e,t,r){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&r},r0=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},r1=function(e,t,r){return(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length),new rB(e.subarray(t,r))},r2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],r5=function(e,t,r){var o=Error(t||r2[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,r5),!r)throw o;return o},r8=function(e,t,r,o){var i=e.length,n=o?o.length:0;if(!i||t.f&&!t.l)return r||new rB(0);var a=!r,c=a||2!=t.i,h=t.i;a&&(r=new rB(3*i));var p=function(e){var t=r.length;if(e>t){var o=new rB(Math.max(2*t,e));o.set(r),r=o}},u=t.f||0,g=t.p||0,m=t.b||0,b=t.l,f=t.d,v=t.m,w=t.n,_=8*i;do{if(!b){u=rQ(e,g,1);var $=rQ(e,g+1,3);if(g+=3,$)if(1==$)b=rJ,f=rZ,v=9,w=5;else if(2==$){var x=rQ(e,g,31)+257,C=rQ(e,g+10,15)+4,S=x+rQ(e,g+5,31)+1;g+=14;for(var P=new rB(S),A=new rB(19),O=0;O<C;++O)A[rz[O]]=rQ(e,g+3*O,7);g+=3*C;for(var B=rX(A),E=(1<<B)-1,T=rV(A,B,1),O=0;O<S;){var D=T[rQ(e,g,E)];g+=15&D;var j=D>>4;if(j<16)P[O++]=j;else{var F=0,q=0;for(16==j?(q=3+rQ(e,g,3),g+=2,F=P[O-1]):17==j?(q=3+rQ(e,g,7),g+=3):18==j&&(q=11+rQ(e,g,127),g+=7);q--;)P[O++]=F}}var U=P.subarray(0,x),W=P.subarray(x);v=rX(U),w=rX(W),b=rV(U,v,1),f=rV(W,w,1)}else r5(1);else{var j=((g+7)/8|0)+4,G=e[j-4]|e[j-3]<<8,V=j+G;if(V>i){h&&r5(0);break}c&&p(m+G),r.set(e.subarray(j,V),m),t.b=m+=G,t.p=g=8*V,t.f=u;continue}if(g>_){h&&r5(0);break}}c&&p(m+131072);for(var K=(1<<v)-1,Y=(1<<w)-1,J=g;;J=g){var F=b[r0(e,g)&K],Z=F>>4;if((g+=15&F)>_){h&&r5(0);break}if(F||r5(2),Z<256)r[m++]=Z;else if(256==Z){J=g,b=null;break}else{var X=Z-254;if(Z>264){var O=Z-257,Q=rL[O];X=rQ(e,g,(1<<Q)-1)+rj[O],g+=Q}var ee=f[r0(e,g)&Y],et=ee>>4;ee||r5(3),g+=15&ee;var W=rU[et];if(et>3){var Q=rD[et];W+=r0(e,g)&(1<<Q)-1,g+=Q}if(g>_){h&&r5(0);break}c&&p(m+131072);var er=m+X;if(m<W){var eo=n-W,ei=Math.min(W,er);for(eo+m<0&&r5(3);m<ei;++m)r[m]=o[eo+m]}for(;m<er;++m)r[m]=r[m-W]}}t.l=b,t.p=J,t.b=m,t.f=u,b&&(u=1,t.m=v,t.d=f,t.n=w)}while(!u)return m!=r.length&&a?r1(r,0,m):r.subarray(0,m)},r3=new rB(0),r4="undefined"!=typeof TextDecoder&&new TextDecoder;try{r4.decode(r3,{stream:!0})}catch{}var r6=function(e){for(var t="",r=0;;){var o=e[r++],i=(o>127)+(o>223)+(o>239);if(r+i>e.length)return{s:t,r:r1(e,r-1)};i?3==i?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536)>>10,56320|1023&o):1&i?t+=String.fromCharCode((31&o)<<6|63&e[r++]):t+=String.fromCharCode((15&o)<<12|(63&e[r++])<<6|63&e[r++]):t+=String.fromCharCode(o)}};function r9(e,t){if(t){for(var r="",o=0;o<e.length;o+=16384)r+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return r}if(r4)return r4.decode(e);var i=r6(e),n=i.s,r=i.r;return r.length&&r5(8),n}"function"==typeof queueMicrotask&&queueMicrotask;let r7=/\(([\s\S]*)\)/,oe=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ot=/\s?=.*$/;function or(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function oo(e,t=!1){let r,o,i,n,a,c=0,h=!1,p=!1,u=!0;null!=e&&({args:r,if:o,enter:i,exit:n,prefix:a,logThreshold:c=0,scoped:h=!0,singleLine:p=!1,timed:u=!0}=e),c>0&&(p=!0,u=!0),u&&(h=!0);let g=rv.isDebugging,m=t?rv.debug:rv.log,b=g?"debug":"info";return(e,t,f)=>{let v,w;if("function"==typeof f.value?(v=f.value,w="value"):"function"==typeof f.get&&(v=f.get,w="get"),null==v||null==w)throw Error("Not supported");let _=!1!==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(oe,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");r=r>=0?r+1:0,o=o>0?o:t.indexOf("="),t=t.slice(r,o),t=`(${t})`;let i=r7.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(ot,"")):[]}(v):[];f[w]=function(...e){var f;let w,$;if(!g&&!rv.enabled(b)||null!=o&&!o.apply(this,e))return v.apply(this,e);let x=rx.current,C=rx.next(),S=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let i=rw.get(t);return i?.(e,r)??r}(this):void 0,P=S?h?`${rS(C,x)} ${S}.${t}`:`${S}.${t}`:t;null!=a&&(P=a({id:C,instance:this,instanceName:S??"",name:t,prefix:P},...e)),h&&(f={scopeId:C,prevScopeId:x,prefix:P},f={prevScopeId:rx.current,...f},rC.set(C,f),w=f);let A=null!=i?i(...e):"";if(!1===r||0===e.length)$="",p||m.call(rv,`${P}${A}`);else{let t,o,i,n;$="";let a=-1;for(n of e){if(o=_[++a],null!=(t=r?.[a])){if("boolean"==typeof t)continue;if($.length>0&&($+=", "),"string"==typeof t){$+=t;continue}i=String(t(n))}else $.length>0&&($+=", "),i=rv.toLoggable(n);$+=o?`${o}=${i}`:i}p||m.call(rv,$?`${P}${A}(${$})`:`${P}${A}`)}if(p||u||null!=n){let t,r=u?t6():void 0,o=e=>{let t=void 0!==r?` [${rh(r)}ms]`:"";p?rv.error(e,$?`${P}${A}(${$})`:`${P}${A}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):rv.error(e,P,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),h&&rC.delete(C)};try{t=v.apply(this,e)}catch(e){throw o(e),e}let i=e=>{let t,o,i,a;if(null!=r?(t=rh(r))>500?(o=rv.warn,i=` [*${t}ms] (slow)`):(o=m,i=` [${t}ms]`):(i="",o=m),null!=n)if("function"==typeof n)try{a=n(e)}catch(e){a=`@log.exit error: ${e}`}else!0===n&&(a=`returned ${rv.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,o=(e,...t)=>rv.error(null,e,...t)):a="completed";p?(0===c||t>c)&&o.call(rv,$?`${P}${A}(${$}) ${a}${w?.exitDetails||""}${i}`:`${P}${A} ${a}${w?.exitDetails||""}${i}`):o.call(rv,$?`${P}(${$}) ${a}${w?.exitDetails||""}${i}`:`${P} ${a}${w?.exitDetails||""}${i}`),h&&rC.delete(C)};return null!=t&&or(t)?t.then(i,o):i(t),t}return v.apply(this,e)}}}(()=>{let e;var t,r,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,o="",i=0,n=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)r=e.charCodeAt(c);else{if(47===r)break;r=47}if(47===r){if(n===c-1||1===a);else if(n!==c-1&&2===a){if(o.length<2||2!==i||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",i=0):i=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),n=c,a=0;continue}}else if(2===o.length||1===o.length){o="",i=0,n=c,a=0;continue}}t&&(o.length>0?o+="/..":o="..",i=2)}else o.length>0?o+="/"+e.slice(n+1,c):o=e.slice(n+1,c),i=c-n-1;n=c,a=0}else 46===r&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,i="",n=!1,a=arguments.length-1;a>=-1&&!n;a--)a>=0?e=arguments[a]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(i=e+"/"+i,n=47===e.charCodeAt(0));return i=r(i,!n),n?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!o)).length||o||(e="."),e.length>0&&i&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=o.resolve(e))===(r=o.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var n=e.length,a=n-i,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var h=r.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===r.charCodeAt(c+g))return r.slice(c+g+1);if(0===g)return r.slice(c+g)}else a>p&&(47===e.charCodeAt(i+g)?u=g:0===g&&(u=0));break}var m=e.charCodeAt(i+g);if(m!==r.charCodeAt(c+g))break;47===m&&(u=g)}var b="";for(g=i+u+1;g<=n;++g)g!==n&&47!==e.charCodeAt(g)||(0===b.length?b+="..":b+="/..");return b.length>0?b+r.slice(c+u):(c+=u,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),o=47===r,i=-1,n=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!n){i=a;break}}else n=!1;return -1===i?o?"/":".":o&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var o,i=0,n=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var c=r.length-1,h=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(47===p){if(!a){i=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===r.charCodeAt(c)?-1==--c&&(n=o):(c=-1,n=h))}return i===n?n=h:-1===n&&(n=e.length),e.slice(i,n)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){i=o+1;break}}else -1===n&&(a=!1,n=o+1);return -1===n?"":e.slice(i,n)},extname:function(e){t(e);for(var r=-1,o=0,i=-1,n=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===i&&(n=!1,i=c+1),46===h?-1===r?r=c:1!==a&&(a=1):-1!==r&&(a=-1);else if(!n){o=c+1;break}}return -1===r||-1===i||0===a||1===a&&r===i-1&&r===o+1?"":e.slice(r,i)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o,i=e.charCodeAt(0),n=47===i;n?(r.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u)if(47!==(i=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===i?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(r.base=r.name=0===c&&n?e.slice(1,h):e.slice(c,h)):(0===c&&n?(r.name=e.slice(1,a),r.base=e.slice(1,h)):(r.name=e.slice(c,a),r.base=e.slice(c,h)),r.ext=e.slice(a,h)),c>0?r.dir=e.slice(0,c-1):n&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(n.r(a),n.d(a,{URI:()=>l,Utils:()=>r}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,r,o,i,n=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||n?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,r||""),this.query=o||"",this.fragment=i||"",u(this,n))}get fsPath(){return _(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:r,path:o,query:i,fragment:n}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===i?i=this.query:null===i&&(i=""),void 0===n?n=this.fragment:null===n&&(n=""),t===this.scheme&&r===this.authority&&o===this.path&&i===this.query&&n===this.fragment?this:new d(t,r,o,i,n)}static parse(e,t=!1){let r=g.exec(e);return r?new d(r[2]||"",C(r[4]||""),C(r[5]||""),C(r[7]||""),C(r[9]||""),t):new d("","","","","")}static file(t){let r="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(r=t.substring(2),t="/"):(r=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",r,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return $(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===m?e.fsPath:null,t}}return e}};let m=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=_(this,!1)),this._fsPath}toString(e=!1){return e?$(this,!0):(this._formatted||(this._formatted=$(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=m),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let b={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function f(e,t,r){let o,i=-1;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||r&&91===a||r&&93===a||r&&58===a)-1!==i&&(o+=encodeURIComponent(e.substring(i,n)),i=-1),void 0!==o&&(o+=e.charAt(n));else{void 0===o&&(o=e.substr(0,n));let t=b[a];void 0!==t?(-1!==i&&(o+=encodeURIComponent(e.substring(i,n)),i=-1),o+=t):-1===i&&(i=n)}}return -1!==i&&(o+=encodeURIComponent(e.substring(i))),void 0!==o?o:e}function v(e){let t;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);35===o||63===o?(void 0===t&&(t=e.substr(0,r)),t+=b[o]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function _(t,r){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?r?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function $(e,t){let r=t?v:f,o="",{scheme:i,authority:n,path:a,query:c,fragment:h}=e;if(i&&(o+=i,o+=":"),(n||"file"===i)&&(o+="/",o+="/"),n){let e=n.indexOf("@");if(-1!==e){let t=n.substr(0,e);n=n.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=r(t,!1,!1):(o+=r(t.substr(0,e),!1,!1),o+=":",o+=r(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(n=n.toLowerCase()).lastIndexOf(":"))?o+=r(n,!1,!0):(o+=r(n.substr(0,e),!1,!0),o+=n.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}o+=r(a,!0,!1)}return c&&(o+="?",o+=r(c,!1,!1)),h&&(o+="#",o+=t?h:f(h,!1,!1)),o}let x=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function C(e){return e.match(x)?e.replace(x,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var S=n(975);let P=S.posix||S;(t=r||(r={})).joinPath=function(e,...t){return e.with({path:P.join(e.path,...t)})},t.resolvePath=function(e,...t){let r=e.path,o=!1;"/"!==r[0]&&(r="/"+r,o=!0);let i=P.resolve(r,...t);return o&&"/"===i[0]&&!e.authority&&(i=i.substring(1)),e.with({path:i})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=P.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return P.basename(e.path)},t.extname=function(e){return P.extname(e.path)},w=a})();let{URI:oi,Utils:on}=w;function os(e,t){return JSON.parse(e,(e,r)=>(function(e,t,r){let o=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(t);if(null==o)return t;switch(o.__ipc){case"date":return new Date(o.value);case"promise":return r(o.value);case"uri":return oi.revive(o.value)}})(0,r,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:rP(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??r_,this._time=t6(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=t6(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=t6(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[r,o]=t6(this._time),i=1e3*r+Math.floor(o/1e6),n=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${n?`${n} `:""}[${i}ms]${e?.suffix??""}`)}};function oa(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ol(e,t){return new Promise(r=>{e.addEventListener(t,function o(i){i.target===e&&(e.removeEventListener(t,o),r())})})}(_||(_={})).on=function(e,t,r,o){let i=!1;if("string"==typeof e){let n=function(t){let o=t?.target?.closest(e);null!=o&&r(t,o)};return document.addEventListener(t,n,o??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,n,o??!0))}}}let n=function(e){r(e,this)};return e.addEventListener(t,n,o??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,n,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let oc={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?oc:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var od=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,op=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?oh(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&od(t,r,n),n};let ou=r$();function og(){return`webview:${ou.next()}`}let om=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=a??=acquireVsCodeApi(),this._disposable=_.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,r,o,i,n;let a=rC.get(rx.current),c=e.data,h=function(e,t,...r){return(t?.provider??r_).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(rP(`(e=${c.id}|${c.method})`,a),{log:!1,logLevel:"debug"});if(c.compressed&&c.params instanceof Uint8Array){if("deflate"===c.compressed)try{c.params=r9((t=c.params,r8(t,{i:2},void 0,r&&r.dictionary)))}catch(e){c.params=r9(c.params)}else c.params=r9(c.params);h?.restart({message:`\u2022 decompressed (${c.compressed}) serialized params`})}if("string"==typeof c.params?(c.params=os(c.params,e=>this.getResponsePromise(e.method,e.id)),h?.stop({message:`\u2022 deserialized params`})):null==c.params?h?.stop({message:`\u2022 no params`}):h?.stop({message:`\u2022 invalid params`}),o=` \u2022 ipc (host -> webview) duration=${Date.now()-c.timestamp}ms`,null!=a&&(null!=a.exitDetails&&null!=o?a.exitDetails+=o:a.exitDetails=o),null!=c.completionId){let e=(i=c.method,n=c.completionId,`${i}|${n}`);this._pendingHandlers.get(e)?.(c);return}this._onReceiveMessage.fire(c)}deserializeIpcData(e){return os(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let r=og();this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let r=og(),o=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:r}),o}getResponsePromise(e,t){return new Promise((r,o)=>{var i,n;let a,c=(i=e,n=t,`${i}|${n}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(rv.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===eV.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function ob(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}op([oo({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],om.prototype,"onMessageReceived",1),op([oo({args:{0:e=>e.method,1:!1}},!0)],om.prototype,"sendCommand",1),op([oo({args:{0:e=>e.method,1:!1,2:!1}},!0)],om.prototype,"sendRequest",1),op([oo({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],om.prototype,"postMessage",1),om=op([(m=e=>`${e.appName}(HostIpc)`,e=>void rw.set(e,m))],om);let RGBA=class RGBA{constructor(e,t,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=ob(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ob(Math.max(Math.min(1,t),0),3),this.l=ob(Math.max(Math.min(1,r),0),3),this.a=ob(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=e.a,n=Math.max(t,r,o),a=Math.min(t,r,o),c=0,h=0,p=(a+n)/2,u=n-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),n){case t:c=(r-o)/u+6*(r<o);break;case r:c=(o-t)/u+2;break;case o:c=(t-r)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,i)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,o,i=e.h/360,{s:n,l:a,a:c}=e;if(0===n)t=r=o=a;else{let e=a<.5?a*(1+n):a+n-a*n,c=2*a-e;t=HSLA._hue2rgb(c,e,i+1/3),r=HSLA._hue2rgb(c,e,i),o=HSLA._hue2rgb(c,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ob(Math.max(Math.min(1,t),0),3),this.v=ob(Math.max(Math.min(1,r),0),3),this.a=ob(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(t,r,o),n=i-Math.min(t,r,o);return new HSVA(Math.round(60*(0===n?0:i===t?((r-o)/n%6+6)%6:i===r?(o-t)/n+2:(t-r)/n+4)),0===i?0:n/i,i,e.a)}static toRGBA(e){let{h:t,s:r,v:o,a:i}=e,n=o*r,a=n*(1-Math.abs(t/60%2-1)),c=o-n,[h,p,u]=[0,0,0];return t<60?(h=n,p=a):t<120?(h=a,p=n):t<180?(p=n,u=a):t<240?(p=a,u=n):t<300?(h=a,u=n):t<=360&&(h=n,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),i)}};function of(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(of(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return ob(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(t,r,o,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,o=t.a,i=r+o*(1-r);if(i<1e-6)return Color.transparent;let n=this.rgba.r*r/i+t.r*o*(1-r)/i;return new Color(new RGBA(n,this.rgba.g*r/i+t.g*o*(1-r)/i,this.rgba.b*r/i+t.b*o*(1-r)/i,i))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-r),e.rgba.b-i*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${ov(e.rgba.r)}${ov(e.rgba.g)}${ov(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(i-o)/i,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(o-i)/o,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function ov(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let oy=new Emitter,ow=oy.event;function o_(e){let t=document.documentElement,r=window.getComputedStyle(t),o=document.body.classList,i=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),n=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=of("--vscode-editor-background",r),c=of("--vscode-editor-foreground",r);return c||(c=of("--vscode-foreground",r)),{colors:{background:a,foreground:c},computedStyle:r,isLightTheme:i,isHighContrastTheme:n,isInitializing:null==e}}var ok=Object.defineProperty,o$=Object.getOwnPropertyDescriptor,ox=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?o$(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ok(t,r,n),n};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new om(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let t=o_();null!=this.onThemeUpdated&&(this.onThemeUpdated(t),this.disposables.push(function(){let e=new MutationObserver(e=>{oy.fire(o_(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(ow(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case eK.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case eY.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=t8(e=>{this._ipc.sendCommand(eU,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return e$`<slot></slot>`}};ox([ez({type:String})],GlAppHost.prototype,"name",2),ox([ez({type:String})],GlAppHost.prototype,"placement",2),ox([P({context:"ipc"})],GlAppHost.prototype,"_ipc",2),ox([P({context:"logger"})],GlAppHost.prototype,"_logger",2),ox([P({context:"promos"})],GlAppHost.prototype,"_promos",2),ox([P({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),ox([ez({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oC=j`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;j`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${oC}
	}
`;let oS=j`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,oP=j`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,oA=j`
	:focus-visible {
		${oS}
	}
`,oO=j`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;j`
	* {
		box-sizing: border-box;
	}
`;let oR=j`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${oS}
	}
	a:hover {
		text-decoration: underline;
	}
`,oI=j`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;j`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let oB=j`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}
`,oE=j`
	.home {
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		overflow: hidden;
	}

	.home__alerts {
		flex: none;
		padding: 0 2rem;
		position: relative;
	}
	.home__alerts:not([has-alerts]) {
		display: none;
	}

	.home__main {
		flex: 1;
		overflow: auto;
		padding: 0.8rem 1.2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}

	.home__aux,
	.home__header {
		flex: none;
	}

	.home__header {
		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
		padding: 0.4rem;
	}

	.home__aux:has(gl-promo-banner:has(gl-promo:not([has-promo])):only-child) {
		display: none;
	}

	summary {
		font-size: 1.3rem;
		font-weight: normal;
		text-transform: uppercase;
		color: var(--vscode-foreground);
		cursor: pointer;
	}

	details[open] summary {
		margin-block-end: 0.8rem;
	}

	gl-home-header {
		margin: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}
`;j`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}
	.button-container--trio > gl-button:first-child {
		margin-bottom: 0.4rem;
	}

	.button-group {
		display: inline-flex;
		gap: 0.4rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}
	.button-group gl-button {
		margin-top: 0;
	}
	.button-group gl-button:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group gl-button:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;let oT=j`
	.alert {
		position: relative;
		padding: 0.8rem 1.2rem;
		line-height: 1.2;
		margin-bottom: 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-alert-neutralBorder);
		color: var(--color-alert-foreground);
	}
	.alert__title {
		font-size: 1.4rem;
		margin: 0;
	}
	.alert__description {
		font-size: 1.2rem;
		margin: 0.4rem 0 0;
	}
	.alert__description > :first-child {
		margin-top: 0;
	}
	.alert__description > :last-child {
		margin-bottom: 0;
	}
	.alert__close {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		color: inherit;
		opacity: 0.64;
	}
	.alert__close:hover {
		color: inherit;
		opacity: 1;
	}
	.alert.is-collapsed {
		cursor: pointer;
	}
	.alert.is-collapsed:hover {
		background-color: var(--color-alert-neutralHoverBackground);
	}
	.alert.is-collapsed .alert__description,
	.alert.is-collapsed .alert__close gl-tooltip:first-child,
	.alert:not(.is-collapsed) .alert__close gl-tooltip:last-child {
		display: none;
	}
	.alert--info {
		--color-alert-foreground: var(--color-alert-infoForeground);
		background-color: var(--color-alert-infoBackground);
		border-left-color: var(--color-alert-infoBorder);
	}
	.alert--warning {
		--color-alert-foreground: var(--color-alert-warningForeground);
		background-color: var(--color-alert-warningBackground);
		border-left-color: var(--color-alert-warningBorder);
	}
	.alert--danger {
		--color-alert-foreground: var(--color-alert-errorForeground);
		background-color: var(--color-alert-errorBackground);
		border-left-color: var(--color-alert-errorBorder);
	}
	.alert a:not(:hover) {
		color: color-mix(in srgb, var(--color-alert-foreground) 50%, var(--vscode-textLink-foreground));
	}
	.alert a:hover {
		color: color-mix(in srgb, var(--color-alert-foreground) 50%, var(--vscode-textLink-activeForeground));
	}
`,oL=j`
	.nav-list {
		margin-left: -1.2rem;
		margin-right: -1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: stretch;
		margin-bottom: 1.6rem;
	}
	.nav-list__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		padding: 0.4rem 2rem;
	}
	.nav-list__item:hover,
	.nav-list__item:focus-within {
		background-color: var(--vscode-list-hoverBackground);
		color: var(--vscode-list-hoverForeground);
	}
	.nav-list__item:has(:first-child:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.nav-list__item:has(:active) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}
	.nav-list__item:has(.is-disabled) {
		cursor: not-allowed;
	}
	.nav-list__link {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: inherit;
	}
	.nav-list__link:hover,
	.nav-list__link:focus {
		color: inherit;
		text-decoration: none;
	}
	.nav-list__link:focus {
		outline: none;
	}
	.nav-list__link.is-disabled,
	.nav-list__link.is-disabled:hover {
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
	.nav-list__icon {
		flex: none;
		opacity: 0.5;
	}
	.nav-list__label {
		flex: 1;
		font-weight: 600;
	}
	.nav-list__desc {
		color: var(--color-foreground--65);
		font-variant: all-small-caps;
		margin-left: 1rem;
	}
	.nav-list__group {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-list__group .nav-list__label {
		width: auto;
	}
	.nav-list__access {
		flex: none;
		position: relative;
		left: 1.2rem;
		font-size: x-small;
		outline: none;
		white-space: nowrap;
		--gl-feature-badge-color: color-mix(in srgb, transparent 40%, currentColor);
		--gl-feature-badge-border-color: color-mix(in srgb, transparent 40%, var(--color-foreground--50));
	}
	.nav-list__item:hover .nav-list__label {
		text-decoration: underline;
	}
	.nav-list__item:hover .is-disabled .nav-list__label {
		text-decoration: none;
	}
	.nav-list__item:hover .nav-list__desc {
		color: var(--color-foreground);
	}
	.nav-list__item:focus-within .nav-list__access,
	.nav-list__item:hover .nav-list__access {
		--gl-feature-badge-color: currentColor;
		--gl-feature-badge-border-color: var(--color-foreground--50);
	}
	.nav-list__title {
		padding: 0 2rem;
	}

	.t-eyebrow {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-foreground--50);
		margin: 0;
	}
	.t-eyebrow.sticky {
		top: -8px;
	}
`,oD=j`
	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
	}

	.walkthrough-progress {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 2px 4px 4px;
		margin-top: 4px;
		align-items: stretch;
		cursor: pointer;
		border-radius: 4px;
	}
	.walkthrough-progress:focus-within,
	.walkthrough-progress:hover {
		background-color: var(--gl-walkthrough-hover-background);
	}

	.walkthrough-progress__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-foreground--85);
	}
	.walkthrough-progress__button {
		--button-padding: 1px 2px 0px 2px;
		position: absolute;
		right: 0.4rem;
	}
	.walkthrough-progress__bar::-webkit-progress-bar {
		border-radius: 2px;
		background: var(--color-alert-neutralBackground);
	}
	.walkthrough-progress__bar::-webkit-progress-value {
		background: var(--vscode-progressBar-background, blue);
		transition: 0.1s ease-in;
		border-radius: 2px;
	}
	.walkthrough-progress__bar {
		pointer-events: none;
		border-radius: 2px;
		width: 100%;
		background: unset;
		height: 4px;
		flex-shrink: 0;
		z-index: 2;
	}
`,{fromCharCode:oz}=String;new TextEncoder;let oN=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,r,o){this.host=e,this.ipc=r,this.logger=o,this._state=this.ipc.deserializeIpcData(oN.decode(function(e){let t=globalThis.atob(e),r=t.length,o=new Uint8Array(r),i=0,n=r-r%8;for(;i<n;i+=8)o[i]=t.charCodeAt(i),o[i+1]=t.charCodeAt(i+1),o[i+2]=t.charCodeAt(i+2),o[i+3]=t.charCodeAt(i+3),o[i+4]=t.charCodeAt(i+4),o[i+5]=t.charCodeAt(i+5),o[i+6]=t.charCodeAt(i+6),o[i+7]=t.charCodeAt(i+7);for(;i<r;i++)o[i]=t.charCodeAt(i);return o}(t))),this.logger?.log(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(eq,{bootstrap:!0});if(null!=e.state){let t=or(e.state)?await e.state:e.state;this._state={...t,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}else this.ipc.sendRequest(eq,{bootstrap:!1})}};let HomeStateProvider=class HomeStateProvider extends StateProviderBase{createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMessageReceived(e){switch(!0){case to.is(e):this._state.repositories=e.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case te.is(e):this._state.repositories=e.params.repositories,this._state.discovering=e.params.discovering,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case ti.is(e):this._state.walkthroughProgress=e.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case ta.is(e):this._state.subscription=e.params.subscription,this._state.avatar=e.params.avatar,this._state.organizationsCount=e.params.organizationsCount,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tl.is(e):this._state.orgSettings=e.params.orgSettings,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tn.is(e):this._state.hasAnyIntegrationConnected=e.params.hasAnyIntegrationConnected,this._state.integrations=e.params.integrations,this._state.ai=e.params.ai,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tt.is(e):this._state.previewEnabled=e.params.previewEnabled,this._state.previewCollapsed=e.params.previewCollapsed,this._state.aiEnabled=e.params.aiEnabled,this._state.experimentalComposerEnabled=e.params.experimentalComposerEnabled,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case e4.is(e):this._state.aiAllAccessBannerCollapsed=e.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case e6.is(e):this._state.mcpBannerCollapsed=e.params.mcpBannerCollapsed,this._state.mcpCanAutoRegister=e.params.mcpCanAutoRegister,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate()}}};var oM=((b=oM||{})[b.VerificationRequired=-1]="VerificationRequired",b[b.Community=0]="Community",b[b.DeprecatedPreview=1]="DeprecatedPreview",b[b.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",b[b.Trial=3]="Trial",b[b.TrialExpired=4]="TrialExpired",b[b.TrialReactivationEligible=5]="TrialReactivationEligible",b[b.Paid=6]="Paid",b);let oj=["community","community-with-account","student","pro","advanced","teams","enterprise"],oF=["student","pro","advanced","teams","enterprise"];function oq(e){switch(e){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}function oU(e){return null!=e?oj.indexOf(e):-1}function oW(e){return`GitLens ${oq(e)}`}function oH(e,t){var r;return r=e.plan.effective.expiresOn,null!=r?function(e,t,r,o){let i=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),n=o??Math.floor;switch(r){case"days":return n(i/864e5);case"hours":return n(i/36e5);case"minutes":return n(i/6e4);case"seconds":return n(i/1e3);default:return i}}(Date.now(),new Date(r),t,Math.round):void 0}function oG(e){var t;return t=e.plan.actual.id,oF.includes(t)}function oV(e){return null!=e.state?e.state===oM.Trial:e.plan.actual.id!==e.plan.effective.id}function oK(e){return null!=e&&(e===oM.Trial||e===oM.Paid)}function oY(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let oJ=j`
	:host {
		display: flex;
	}

	.chip {
		display: flex;
		gap: 0.6rem;
		align-items: center;

		border-radius: 0.3rem;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
	}

	.chip:focus-visible {
		${oS}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 0.4rem;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		padding-bottom: 0.4rem;
	}

	.header__actions {
		flex: none;
		display: flex;
		gap: 0.2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.header__title {
		flex: 1;
		font-size: 1.5rem;
		line-height: 1.7;
		font-weight: 600;
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`,oZ=j`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,oX=j`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var oQ=Object.defineProperty,o0=Object.defineProperties,o1=Object.getOwnPropertyDescriptor,o2=Object.getOwnPropertyDescriptors,o5=Object.getOwnPropertySymbols,o8=Object.prototype.hasOwnProperty,o3=Object.prototype.propertyIsEnumerable,o4=e=>{throw TypeError(e)},o6=(e,t,r)=>t in e?oQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o9=(e,t)=>{for(var r in t||(t={}))o8.call(t,r)&&o6(e,r,t[r]);if(o5)for(var r of o5(t))o3.call(t,r)&&o6(e,r,t[r]);return e},o7=(e,t)=>o0(e,o2(t)),ie=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?o1(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&oQ(t,r,n),n},it=(e,t,r)=>t.has(e)||o4("Cannot "+r),ir=new Map,io=new WeakMap;function ii(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function is(e,t){ir.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function ia(e,t,r){let o=io.get(e);if(null==o?void 0:o[t])return ii(o[t],r.dir);let i=ir.get(t);return i?ii(i,r.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=eS,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===eS||null==e)return this._t=void 0,this.it=e;if(e===eC)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let il=tq(unsafe_html_e);var ic=j`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,id=j`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let ih=new Set,ip=new Map,iu="ltr",ig="en",im="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(im){let e=new MutationObserver(iv);iu=document.documentElement.dir||"ltr",ig=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ib(...e){e.map(e=>{let t=e.$code.toLowerCase();ip.has(t)?ip.set(t,Object.assign(Object.assign({},ip.get(t)),e)):ip.set(t,e),c||(c=e)}),iv()}function iv(){im&&(iu=document.documentElement.dir||"ltr",ig=document.documentElement.lang||navigator.language),[...ih.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ih.add(this.host)}hostDisconnected(){ih.delete(this.host)}dir(){return`${this.host.dir||iu}`.toLowerCase()}lang(){return`${this.host.lang||ig}`.toLowerCase()}getTranslationData(e){var t,r;let o=new Intl.Locale(e.replace(/_/g,"-")),i=null==o?void 0:o.language.toLowerCase(),n=null!=(r=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?r:"",a=ip.get(`${i}-${n}`),c=ip.get(i);return{locale:o,language:i,region:n,primary:a,secondary:c}}exists(e,t){var r;let{primary:o,secondary:i}=this.getTranslationData(null!=(r=t.lang)?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!i&&!!i[e]||!!t.includeFallback&&!!c&&!!c[e]}term(e,...t){let r,{primary:o,secondary:i}=this.getTranslationData(this.lang());if(o&&o[e])r=o[e];else if(i&&i[e])r=i[e];else{if(!c||!c[e])return String(e);r=c[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var iy={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ib(iy);var iw=class extends LocalizeController{};ib(iy);var i_=j`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ik=class extends lit_element_i{constructor(){let e;super(),(e=$).has(this)?o4("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,o9({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",n=i;if("version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(n=" v"+o.version),i&&n&&i===n)return}attributeChangedCallback(e,t,r){let o,i;if(it(this,o=$,"read from private field"),i?!i.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),it(this,e=$,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}};$=new WeakMap,ik.version="2.20.1",ik.dependencies={},ie([ez()],ik.prototype,"dir",2),ie([ez()],ik.prototype,"lang",2);let i$=Math.min,ix=Math.max,iC=Math.round,iS=Math.floor,iP=e=>({x:e,y:e}),iA={left:"right",right:"left",bottom:"top",top:"bottom"},iO={start:"end",end:"start"};function iR(e,t){return"function"==typeof e?e(t):e}function iI(e){return e.split("-")[0]}function iB(e){return e.split("-")[1]}function iE(e){return"x"===e?"y":"x"}function iT(e){return"y"===e?"height":"width"}let iL=new Set(["top","bottom"]);function iD(e){return iL.has(iI(e))?"y":"x"}function iz(e){return e.replace(/start|end/g,e=>iO[e])}let iN=["left","right"],iM=["right","left"],ij=["top","bottom"],iF=["bottom","top"];function iq(e){return e.replace(/left|right|bottom|top/g,e=>iA[e])}function iU(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function iW(e){let{x:t,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:t,right:t+o,bottom:r+i,x:t,y:r}}function iH(e,t,r){let o,{reference:i,floating:n}=e,a=iD(t),c=iE(iD(t)),h=iT(c),p=iI(t),u="y"===a,g=i.x+i.width/2-n.width/2,m=i.y+i.height/2-n.height/2,b=i[h]/2-n[h]/2;switch(p){case"top":o={x:g,y:i.y-n.height};break;case"bottom":o={x:g,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:m};break;case"left":o={x:i.x-n.width,y:m};break;default:o={x:i.x,y:i.y}}switch(iB(t)){case"start":o[c]-=b*(r&&u?-1:1);break;case"end":o[c]+=b*(r&&u?-1:1)}return o}let iG=async(e,t,r)=>{let{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:a}=r,c=n.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:g}=iH(p,o,h),m=o,b={},f=0;for(let r=0;r<c.length;r++){let{name:n,fn:v}=c[r],{x:w,y:_,data:$,reset:x}=await v({x:u,y:g,initialPlacement:o,placement:m,strategy:i,middlewareData:b,rects:p,platform:a,elements:{reference:e,floating:t}});u=null!=w?w:u,g=null!=_?_:g,b={...b,[n]:{...b[n],...$}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(m=x.placement),x.rects&&(p=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:g}=iH(p,m,h)),r=-1)}return{x:u,y:g,placement:m,strategy:i,middlewareData:b}};async function iV(e,t){var r;void 0===t&&(t={});let{x:o,y:i,platform:n,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:m=!1,padding:b=0}=iR(t,e),f=iU(b),v=c[m?"floating"===g?"reference":"floating":g],w=iW(await n.getClippingRect({element:null==(r=await (null==n.isElement?void 0:n.isElement(v)))||r?v:v.contextElement||await (null==n.getDocumentElement?void 0:n.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),_="floating"===g?{x:o,y:i,width:a.floating.width,height:a.floating.height}:a.reference,$=await (null==n.getOffsetParent?void 0:n.getOffsetParent(c.floating)),x=await (null==n.isElement?void 0:n.isElement($))&&await (null==n.getScale?void 0:n.getScale($))||{x:1,y:1},C=iW(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:_,offsetParent:$,strategy:h}):_);return{top:(w.top-C.top+f.top)/x.y,bottom:(C.bottom-w.bottom+f.bottom)/x.y,left:(w.left-C.left+f.left)/x.x,right:(C.right-w.right+f.right)/x.x}}let iK=new Set(["left","top"]);async function iY(e,t){let{placement:r,platform:o,elements:i}=e,n=await (null==o.isRTL?void 0:o.isRTL(i.floating)),a=iI(r),c=iB(r),h="y"===iD(r),p=iK.has(a)?-1:1,u=n&&h?-1:1,g=iR(t,e),{mainAxis:m,crossAxis:b,alignmentAxis:f}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof f&&(b="end"===c?-1*f:f),h?{x:b*u,y:m*p}:{x:m*p,y:b*u}}function iJ(){return"undefined"!=typeof window}function iZ(e){return i0(e)?(e.nodeName||"").toLowerCase():"#document"}function iX(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function iQ(e){var t;return null==(t=(i0(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function i0(e){return!!iJ()&&(e instanceof Node||e instanceof iX(e).Node)}function i1(e){return!!iJ()&&(e instanceof Element||e instanceof iX(e).Element)}function i2(e){return!!iJ()&&(e instanceof HTMLElement||e instanceof iX(e).HTMLElement)}function i5(e){return!!iJ()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof iX(e).ShadowRoot)}let i8=new Set(["inline","contents"]);function i3(e){let{overflow:t,overflowX:r,overflowY:o,display:i}=ns(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!i8.has(i)}let i4=new Set(["table","td","th"]),i6=[":popover-open",":modal"];function i9(e){return i6.some(t=>{try{return e.matches(t)}catch{return!1}})}let i7=["transform","translate","scale","rotate","perspective"],ne=["transform","translate","scale","rotate","perspective","filter"],nt=["paint","layout","strict","content"];function nr(e){let t=no(),r=i1(e)?ns(e):e;return i7.some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||ne.some(e=>(r.willChange||"").includes(e))||nt.some(e=>(r.contain||"").includes(e))}function no(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let ni=new Set(["html","body","#document"]);function nn(e){return ni.has(iZ(e))}function ns(e){return iX(e).getComputedStyle(e)}function na(e){return i1(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nl(e){if("html"===iZ(e))return e;let t=e.assignedSlot||e.parentNode||i5(e)&&e.host||iQ(e);return i5(t)?t.host:t}function nc(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let i=function e(t){let r=nl(t);return nn(r)?t.ownerDocument?t.ownerDocument.body:t.body:i2(r)&&i3(r)?r:e(r)}(e),n=i===(null==(o=e.ownerDocument)?void 0:o.body),a=iX(i);if(n){let e=nd(a);return t.concat(a,a.visualViewport||[],i3(i)?i:[],e&&r?nc(e):[])}return t.concat(i,nc(i,[],r))}function nd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function nh(e){let t=ns(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,i=i2(e),n=i?e.offsetWidth:r,a=i?e.offsetHeight:o,c=iC(r)!==n||iC(o)!==a;return c&&(r=n,o=a),{width:r,height:o,$:c}}function np(e){return i1(e)?e:e.contextElement}function nu(e){let t=np(e);if(!i2(t))return iP(1);let r=t.getBoundingClientRect(),{width:o,height:i,$:n}=nh(t),a=(n?iC(r.width):r.width)/o,c=(n?iC(r.height):r.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let ng=iP(0);function nm(e){let t=iX(e);return no()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ng}function nb(e,t,r,o){var i;void 0===t&&(t=!1),void 0===r&&(r=!1);let n=e.getBoundingClientRect(),a=np(e),c=iP(1);t&&(o?i1(o)&&(c=nu(o)):c=nu(e));let h=(void 0===(i=r)&&(i=!1),o&&(!i||o===iX(a))&&i)?nm(a):iP(0),p=(n.left+h.x)/c.x,u=(n.top+h.y)/c.y,g=n.width/c.x,m=n.height/c.y;if(a){let e=iX(a),t=o&&i1(o)?iX(o):o,r=e,i=nd(r);for(;i&&o&&t!==r;){let e=nu(i),t=i.getBoundingClientRect(),o=ns(i),n=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,m*=e.y,p+=n,u+=a,i=nd(r=iX(i))}}return iW({width:g,height:m,x:p,y:u})}function nf(e,t){let r=na(e).scrollLeft;return t?t.left+r:nb(iQ(e)).left+r}function nv(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-nf(e,r),y:r.top+t.scrollTop}}let ny=new Set(["absolute","fixed"]);function nw(e,t,r){let o;if("viewport"===t)o=function(e,t){let r=iX(e),o=iQ(e),i=r.visualViewport,n=o.clientWidth,a=o.clientHeight,c=0,h=0;if(i){n=i.width,a=i.height;let e=no();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,h=i.offsetTop)}let p=nf(o);if(p<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),i="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-i);a<=25&&(n-=a)}else p<=25&&(n+=p);return{width:n,height:a,x:c,y:h}}(e,r);else if("document"===t)o=function(e){let t=iQ(e),r=na(e),o=e.ownerDocument.body,i=ix(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),n=ix(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),a=-r.scrollLeft+nf(e),c=-r.scrollTop;return"rtl"===ns(o).direction&&(a+=ix(t.clientWidth,o.clientWidth)-i),{width:i,height:n,x:a,y:c}}(iQ(e));else if(i1(t))o=function(e,t){let r=nb(e,!0,"fixed"===t),o=r.top+e.clientTop,i=r.left+e.clientLeft,n=i2(e)?nu(e):iP(1),a=e.clientWidth*n.x,c=e.clientHeight*n.y;return{width:a,height:c,x:i*n.x,y:o*n.y}}(t,r);else{let r=nm(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return iW(o)}function n_(e){return"static"===ns(e).position}function nk(e,t){if(!i2(e)||"fixed"===ns(e).position)return null;if(t)return t(e);let r=e.offsetParent;return iQ(e)===r&&(r=r.ownerDocument.body),r}function n$(e,t){var r;let o=iX(e);if(i9(e))return o;if(!i2(e)){let t=nl(e);for(;t&&!nn(t);){if(i1(t)&&!n_(t))return t;t=nl(t)}return o}let i=nk(e,t);for(;i&&(r=i,i4.has(iZ(r)))&&n_(i);)i=nk(i,t);return i&&nn(i)&&n_(i)&&!nr(i)?o:i||function(e){let t=nl(e);for(;i2(t)&&!nn(t);){if(nr(t))return t;if(i9(t))break;t=nl(t)}return null}(e)||o}let nx=async function(e){let t=this.getOffsetParent||n$,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=i2(t),i=iQ(t),n="fixed"===r,a=nb(e,!0,n,t),c={scrollLeft:0,scrollTop:0},h=iP(0);if(o||!o&&!n)if(("body"!==iZ(t)||i3(i))&&(c=na(t)),o){let e=nb(t,!0,n,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else i&&(h.x=nf(i));n&&!o&&i&&(h.x=nf(i));let p=!i||o||n?iP(0):nv(i,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},nC={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e,n="fixed"===i,a=iQ(o),c=!!t&&i9(t.floating);if(o===a||c&&n)return r;let h={scrollLeft:0,scrollTop:0},p=iP(1),u=iP(0),g=i2(o);if((g||!g&&!n)&&(("body"!==iZ(o)||i3(a))&&(h=na(o)),i2(o))){let e=nb(o);p=nu(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}let m=!a||g||n?iP(0):nv(a,h);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+u.x+m.x,y:r.y*p.y-h.scrollTop*p.y+u.y+m.y}},getDocumentElement:iQ,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e,n=[..."clippingAncestors"===r?i9(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=nc(e,[],!1).filter(e=>i1(e)&&"body"!==iZ(e)),i=null,n="fixed"===ns(e).position,a=n?nl(e):e;for(;i1(a)&&!nn(a);){let t=ns(a),r=nr(a);r||"fixed"!==t.position||(i=null),(n?!r&&!i:!r&&"static"===t.position&&!!i&&ny.has(i.position)||i3(a)&&!r&&function e(t,r){let o=nl(t);return!(o===r||!i1(o)||nn(o))&&("fixed"===ns(o).position||e(o,r))}(e,a))?o=o.filter(e=>e!==a):i=t,a=nl(a)}return t.set(e,o),o}(t,this._c):[].concat(r),o],a=n[0],c=n.reduce((e,r)=>{let o=nw(t,r,i);return e.top=ix(o.top,e.top),e.right=i$(o.right,e.right),e.bottom=i$(o.bottom,e.bottom),e.left=ix(o.left,e.left),e},nw(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:n$,getElementRects:nx,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=nh(e);return{width:t,height:r}},getScale:nu,isElement:i1,isRTL:function(e){return"rtl"===ns(e).direction}};function nS(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let nP=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,o;let i,n,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=iR(e,t),m=await iV(t,g),b=iI(a),f=iB(a),v="y"===iD(a),{width:w,height:_}=c.floating;"top"===b||"bottom"===b?(i=b,n=f===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(n=b,i="end"===f?"top":"bottom");let $=_-m.top-m.bottom,x=w-m.left-m.right,C=i$(_-m[i],$),S=i$(w-m[n],x),P=!t.middlewareData.shift,A=C,O=S;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(O=x),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(A=$),P&&!f){let e=ix(m.left,0),t=ix(m.right,0),r=ix(m.top,0),o=ix(m.bottom,0);v?O=w-2*(0!==e||0!==t?e+t:ix(m.left,m.right)):A=_-2*(0!==r||0!==o?r+o:ix(m.top,m.bottom))}await u({...t,availableWidth:O,availableHeight:A});let B=await h.getDimensions(p.floating);return w!==B.width||_!==B.height?{reset:{rects:!0}}:{}}}},nA=tq(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return eC}});function nO(e){var t=e;for(let e=t;e;e=nR(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=nR(t);e;e=nR(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||nr(t)||"BODY"===e.tagName))return e}return null}function nR(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var nI=class extends ik{constructor(){super(...arguments),this.localize=new iw(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,i=0,n=0,a=0,c=0,h=0,p=0,u=0;r?e.top<t.top?(o=e.left,i=e.bottom,n=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(o=t.left,i=t.bottom,n=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(o=e.right,i=e.top,n=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(o=t.right,i=t.top,n=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,r,o){let i;void 0===o&&(o={});let{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=np(e),g=n||a?[...u?nc(u):[],...nc(t)]:[];g.forEach(e=>{n&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let m=u&&h?function(e,t){let r,o=null,i=iQ(e);function n(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),n();let p=e.getBoundingClientRect(),{left:u,top:g,width:m,height:b}=p;if(c||t(),!m||!b)return;let f=iS(g),v=iS(i.clientWidth-(u+m)),w={rootMargin:-f+"px "+-v+"px "+-iS(i.clientHeight-(g+b))+"px "+-iS(u)+"px",threshold:ix(0,i$(1,h))||1},_=!0;function $(t){let o=t[0].intersectionRatio;if(o!==h){if(!_)return a();o?a(!1,o):r=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||nS(p,e.getBoundingClientRect())||a(),_=!1}try{o=new IntersectionObserver($,{...w,root:i.ownerDocument})}catch{o=new IntersectionObserver($,w)}o.observe(e)}(!0),n}(u,r):null,b=-1,f=null;c&&(f=new ResizeObserver(e=>{let[o]=e;o&&o.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=f)||e.observe(t)})),r()}),u&&!p&&f.observe(u),f.observe(t));let v=p?nb(e):null;return p&&function t(){let o=nb(e);v&&!nS(v,o)&&r(),v=o,i=requestAnimationFrame(t)}(),r(),()=>{var e;g.forEach(e=>{n&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==m||m(),null==(e=f)||e.disconnect(),f=null,p&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r;let o;if(!this.active||!this.anchorEl)return;let i=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,o;let{x:i,y:n,placement:a,middlewareData:c}=t,h=await iY(t,e);return a===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+h.x,y:n+h.y,data:{...h,placement:a}}}}];this.sync?i.push(nP({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,o,i,n,a;let{placement:c,middlewareData:h,rects:p,initialPlacement:u,platform:g,elements:m}=e,{mainAxis:b=!0,crossAxis:f=!0,fallbackPlacements:v,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:$=!0,...x}=iR(t,e);if(null!=(r=h.arrow)&&r.alignmentOffset)return{};let C=iI(c),S=iD(u),P=iI(u)===u,A=await (null==g.isRTL?void 0:g.isRTL(m.floating)),O=v||(P||!$?[iq(u)]:function(e){let t=iq(e);return[iz(e),t,iz(t)]}(u)),B="none"!==_;!v&&B&&O.push(...function(e,t,r,o){let i=iB(e),n=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?iM:iN;return t?iN:iM;case"left":case"right":return t?ij:iF;default:return[]}}(iI(e),"start"===r,o);return i&&(n=n.map(e=>e+"-"+i),t&&(n=n.concat(n.map(iz)))),n}(u,$,_,A));let E=[u,...O],T=await iV(e,x),D=[],j=(null==(o=h.flip)?void 0:o.overflows)||[];if(b&&D.push(T[C]),f){let e=function(e,t,r){void 0===r&&(r=!1);let o=iB(e),i=iE(iD(e)),n=iT(i),a="x"===i?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=iq(a)),[a,iq(a)]}(c,p,A);D.push(T[e[0]],T[e[1]])}if(j=[...j,{placement:c,overflows:D}],!D.every(e=>e<=0)){let e=((null==(i=h.flip)?void 0:i.index)||0)+1,t=E[e];if(t&&("alignment"!==f||S===iD(t)||j.every(e=>iD(e.placement)!==S||e.overflows[0]>0)))return{data:{index:e,overflows:j},reset:{placement:t}};let r=null==(n=j.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:n.placement;if(!r)switch(w){case"bestFit":{let e=null==(a=j.filter(e=>{if(B){let t=iD(e.placement);return t===S||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(r=e);break}case"initialPlacement":r=u}if(c!==r)return{reset:{placement:r}}}return{}}}),this.shift&&i.push({name:"shift",options:r={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...h}=iR(r,e),p={x:t,y:o},u=await iV(e,h),g=iD(iI(i)),m=iE(g),b=p[m],f=p[g];if(n){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",r=b+u[e],o=b-u[t];b=ix(r,i$(b,o))}if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",r=f+u[e],o=f-u[t];f=ix(r,i$(f,o))}let v=c.fn({...e,[m]:b,[g]:f});return{...v,data:{x:v.x-t,y:v.y-o,enabled:{[m]:n,[g]:a}}}}}),this.autoSize?i.push(nP({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push({name:"arrow",options:o={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:r,placement:i,rects:n,platform:a,elements:c,middlewareData:h}=e,{element:p,padding:u=0}=iR(o,e)||{};if(null==p)return{};let g=iU(u),m={x:t,y:r},b=iE(iD(i)),f=iT(b),v=await a.getDimensions(p),w="y"===b,_=w?"clientHeight":"clientWidth",$=n.reference[f]+n.reference[b]-m[b]-n.floating[f],x=m[b]-n.reference[b],C=await (null==a.getOffsetParent?void 0:a.getOffsetParent(p)),S=C?C[_]:0;S&&await (null==a.isElement?void 0:a.isElement(C))||(S=c.floating[_]||n.floating[f]);let P=S/2-v[f]/2-1,A=i$(g[w?"top":"left"],P),O=i$(g[w?"bottom":"right"],P),B=S-v[f]-O,E=S/2-v[f]/2+($/2-x/2),T=ix(A,i$(E,B)),D=!h.arrow&&null!=iB(i)&&E!==T&&n.reference[f]/2-(E<A?A:O)-v[f]/2<0,j=D?E<A?E-A:E-B:0;return{[b]:m[b]+j,data:{[b]:T,centerOffset:E-T-j,...D&&{alignmentOffset:j}},reset:D}}});let n="absolute"===this.strategy?e=>nC.getOffsetParent(e,nO):nC.getOffsetParent;((e,t,r)=>{let o=new Map,i={platform:nC,...r},n={...i.platform,_c:o};return iG(e,t,{...i,platform:n})})(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:o7(o9({},nC),{getOffsetParent:n})}).then(({x:e,y:t,middlewareData:r,placement:o})=>{let i="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=i?r:"",h=i?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=i?"":r,h=i?r:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return e$`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${nA({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${nA({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?e$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function nB(e,t){return new Promise(r=>{e.addEventListener(t,function o(i){i.target===e&&(e.removeEventListener(t,o),r())})})}function nE(e,t,r){return new Promise(o=>{if((null==r?void 0:r.duration)===1/0)throw Error("Promise-based animations must be finite.");let i=e.animate(t,o7(o9({},r),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function nT(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function nL(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function nD(e,t){let r=o9({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),n=this[t];i!==n&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](i,n)}}),i.call(this,e)}}}nI.styles=[i_,id],ie([ej(".popup")],nI.prototype,"popup",2),ie([ej(".popup__arrow")],nI.prototype,"arrowEl",2),ie([ez()],nI.prototype,"anchor",2),ie([ez({type:Boolean,reflect:!0})],nI.prototype,"active",2),ie([ez({reflect:!0})],nI.prototype,"placement",2),ie([ez({reflect:!0})],nI.prototype,"strategy",2),ie([ez({type:Number})],nI.prototype,"distance",2),ie([ez({type:Number})],nI.prototype,"skidding",2),ie([ez({type:Boolean})],nI.prototype,"arrow",2),ie([ez({attribute:"arrow-placement"})],nI.prototype,"arrowPlacement",2),ie([ez({attribute:"arrow-padding",type:Number})],nI.prototype,"arrowPadding",2),ie([ez({type:Boolean})],nI.prototype,"flip",2),ie([ez({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],nI.prototype,"flipFallbackPlacements",2),ie([ez({attribute:"flip-fallback-strategy"})],nI.prototype,"flipFallbackStrategy",2),ie([ez({type:Object})],nI.prototype,"flipBoundary",2),ie([ez({attribute:"flip-padding",type:Number})],nI.prototype,"flipPadding",2),ie([ez({type:Boolean})],nI.prototype,"shift",2),ie([ez({type:Object})],nI.prototype,"shiftBoundary",2),ie([ez({attribute:"shift-padding",type:Number})],nI.prototype,"shiftPadding",2),ie([ez({attribute:"auto-size"})],nI.prototype,"autoSize",2),ie([ez()],nI.prototype,"sync",2),ie([ez({type:Object})],nI.prototype,"autoSizeBoundary",2),ie([ez({attribute:"auto-size-padding",type:Number})],nI.prototype,"autoSizePadding",2),ie([ez({attribute:"hover-bridge",type:Boolean})],nI.prototype,"hoverBridge",2);var nz=class extends ik{constructor(){super(),this.localize=new iw(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=nT(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=nT(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await nL(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=ia(this,"tooltip.show",{dir:this.localize.dir()});await nE(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await nL(this.body);let{keyframes:e,options:r}=ia(this,"tooltip.hide",{dir:this.localize.dir()});await nE(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,nB(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,nB(this,"sl-after-hide")}render(){return e$`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${nA({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};nz.styles=[i_,ic],nz.dependencies={"sl-popup":nI},ie([ej("slot:not([name])")],nz.prototype,"defaultSlot",2),ie([ej(".tooltip__body")],nz.prototype,"body",2),ie([ej("sl-popup")],nz.prototype,"popup",2),ie([ez()],nz.prototype,"content",2),ie([ez()],nz.prototype,"placement",2),ie([ez({type:Boolean,reflect:!0})],nz.prototype,"disabled",2),ie([ez({type:Number})],nz.prototype,"distance",2),ie([ez({type:Boolean,reflect:!0})],nz.prototype,"open",2),ie([ez({type:Number})],nz.prototype,"skidding",2),ie([ez()],nz.prototype,"trigger",2),ie([ez({type:Boolean})],nz.prototype,"hoist",2),ie([nD("open",{waitUntilFirstUpdate:!0})],nz.prototype,"handleOpenChange",1),ie([nD(["content","distance","hoist","placement","skidding"])],nz.prototype,"handleOptionsChange",1),ie([nD("disabled")],nz.prototype,"handleDisabledChange",1),is("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),is("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),nz.define("sl-tooltip");var nN=Object.defineProperty,nM=Object.getOwnPropertyDescriptor,nj=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nM(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nN(t,r,n),n};is("tooltip.show",null),is("tooltip.hide",null);let nF=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var e;return e$`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??eS}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?il(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};nF.styles=j`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,nj([ez()],nF.prototype,"content",2),nj([ez({reflect:!0})],nF.prototype,"placement",2),nj([ez({type:Boolean})],nF.prototype,"disabled",2),nj([ez({type:Number})],nF.prototype,"distance",2),nj([ez({type:Boolean})],nF.prototype,"hoist",2),nF=nj([eL("gl-tooltip")],nF);var nq=Object.defineProperty,nU=Object.getOwnPropertyDescriptor,nW=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nU(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nq(t,r,n),n};let nH=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?e$`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??eS}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?e$`<gl-tooltip placement=${this.tooltipPlacement??eS}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?e$`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??eS}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:e$`<button
			class="control"
			role=${this.role??eS}
			aria-checked=${this.ariaChecked??eS}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};nH.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nH.styles=[oO,j`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${oP}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],nW([ej(".control")],nH.prototype,"control",2),nW([ez({reflect:!0})],nH.prototype,"appearance",2),nW([ez({type:Boolean,reflect:!0})],nH.prototype,"disabled",2),nW([ez({reflect:!0})],nH.prototype,"density",2),nW([ez({type:Boolean,reflect:!0})],nH.prototype,"full",2),nW([ez()],nH.prototype,"href",2),nW([ez()],nH.prototype,"tooltip",2),nW([ez()],nH.prototype,"tooltipPlacement",2),nW([ez({type:Boolean,reflect:!0})],nH.prototype,"truncate",2),nH=nW([eL("gl-button")],nH);var nG=Object.defineProperty,nV=Object.getOwnPropertyDescriptor,nK=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nV(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nG(t,r,n),n};let nY=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return e$`<div class="group"><slot></slot></div>`}};nY.styles=[oO,j`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],nK([ez({type:Boolean})],nY.prototype,"editor",2),nK([ez({reflect:!0})],nY.prototype,"layout",2),nK([ez({reflect:!0})],nY.prototype,"grouping",2),nY=nK([eL("button-container")],nY);let nJ=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),nZ=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var nX=Object.defineProperty,nQ=Object.getOwnPropertyDescriptor,n0=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nQ(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nX(t,r,n),n};function n1(e,t=""){return D(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let n2=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};n2.styles=j`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${n1(nJ)}
		${n1(nZ,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,n0([ez({reflect:!0})],n2.prototype,"icon",2),n0([ez({reflect:!0})],n2.prototype,"modifier",2),n0([ez({type:Number})],n2.prototype,"size",2),n0([ez({reflect:!0})],n2.prototype,"flip",2),n0([ez({reflect:!0})],n2.prototype,"rotate",2),n2=n0([eL("code-icon")],n2),nI.define("sl-popup");var n5=Object.defineProperty,n8=Object.getOwnPropertyDescriptor,n3=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?n8(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&n5(t,r,n),n};let n4=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=oa(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let r=oa(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of n4.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),n4.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return e$`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return n4.closeOthers(this),this.open=!0,n4.openPopovers.add(this),ol(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,n4.openPopovers.delete(this),ol(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};n4.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},n4.openPopovers=new Set,n4.styles=[oI,j`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],n3([ej("#popover")],n4.prototype,"body",2),n3([ej("sl-popup")],n4.prototype,"popup",2),n3([ez({reflect:!0})],n4.prototype,"placement",2),n3([ez({type:Object})],n4.prototype,"anchor",2),n3([ez({reflect:!0,type:Boolean})],n4.prototype,"disabled",2),n3([ez({type:Number})],n4.prototype,"distance",2),n3([ez({reflect:!0,type:Boolean})],n4.prototype,"open",2),n3([ez({reflect:!0,type:Boolean})],n4.prototype,"arrow",2),n3([ez({type:Number})],n4.prototype,"skidding",2),n3([ez()],n4.prototype,"trigger",2),n3([ez({type:Boolean})],n4.prototype,"hoist",2),n3([ez({reflect:!0})],n4.prototype,"appearance",2),n3([t4("open",{afterFirstUpdate:!0})],n4.prototype,"handleOpenChange",1),n3([t4(["distance","hoist","placement","skidding"])],n4.prototype,"handleOptionsChange",1),n3([t4("disabled")],n4.prototype,"handleDisabledChange",1),n4=n3([eL("gl-popover")],n4);var n6=Object.defineProperty,n9=Object.getOwnPropertyDescriptor,n7=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?n9(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&n6(t,r,n),n};let se=class extends lit_element_i{constructor(){super(...arguments),this._showUpgrade=!1}get showUpgrade(){return this._showUpgrade}set showUpgrade(e){this._showUpgrade=e}get accountAvatar(){return this.hasAccount&&this._state.avatar}get accountName(){return this.subscription?.account?.name??""}get accountEmail(){return this.subscription?.account?.email??""}get hasAccount(){return this.subscription?.account!=null}get isReactivatedTrial(){return this.subscriptionState===oM.Trial&&(this.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??"pro"}get effectivePlanId(){return this._state.subscription?.plan.effective.id??"pro"}get planName(){return function(e,t,r){switch(e){case oM.Community:case oM.Trial:return`${"student"===r?oW("student"):oW("pro")} Trial`;case oM.TrialExpired:case oM.TrialReactivationEligible:return oW("community-with-account");case oM.VerificationRequired:return`${oW(t??"pro")} (Unverified)`;default:return oW(t??"pro")}}(this.subscriptionState,this.planId,this.effectivePlanId)}get planTier(){return oV(this.subscription)?"student"===this.subscription.plan.effective.id?"Student":"Pro Trial":oq(this.planId)}get subscription(){return this._state.subscription}get subscriptionState(){return this.subscription?.state}get trialDaysRemaining(){return null==this.subscription?0:oH(this.subscription,"days")??0}focus(){this._chip.focus()}render(){return e$`<gl-popover placement="bottom" trigger="hover focus click" hoist>
				<span id="chip" slot="anchor" class="chip" tabindex="0">
					${this.accountAvatar?e$`<img class="chip__media" src=${this.accountAvatar} />`:e$`<code-icon class="chip__media" icon="gl-gitlens" size="16"></code-icon>`}
					<span>${this.planTier}</span>
				</span>
				<div slot="content" class="content" tabindex="-1">
					<div class="header">
						<span class="header__title">${this.planName}</span>
						<span class="header__actions">
							${this.hasAccount?e$`<gl-button
											appearance="toolbar"
											href="${oY("gitlens.views.home.account.resync",{source:"account"})}"
											tooltip="Synchronize Status"
											aria-label="Synchronize Status"
											><code-icon icon="sync"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${oY("gitlens.plus.manage",{source:"account"})}"
											tooltip="Manage Account"
											aria-label="Manage Account"
											><code-icon icon="gear"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${oY("gitlens.plus.logout",{source:"account"})}"
											tooltip="Sign Out"
											aria-label="Sign Out"
											><code-icon icon="sign-out"></code-icon
										></gl-button>`:eS}
						</span>
					</div>
					${this.renderAccountInfo()} ${this.renderAccountState()}
				</div>
			</gl-popover>
			${this.renderUpgradeContent()}`}show(){this._popover.show(),this.focus()}renderAccountInfo(){let e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?e$`<div class="account-info">
			<span class="row">
				<span class="row__media"
					>${this._state.avatar?e$`<img src=${this._state.avatar} />`:e$`<code-icon icon="gl-gitlens" size="20"></code-icon>`}</span
				>
				<span class="details"
					><p class="details__title">${this.accountName}</p>
					<p class="details__subtitle">${this.accountEmail}</p></span
				>
			</span>
			<span class="row">
				<span class="row__media"><code-icon icon="organization" size="20"></code-icon></span>
				<span class="details"><p class="details__title">${e}</p></span>
				${eF(this._state.organizationsCount>1,()=>e$`<div class="details__button">
							<gl-button
								appearance="toolbar"
								href="${oY("gitlens.gk.switchOrganization",{source:"account",detail:{organization:this._state.subscription?.activeOrganization?.id}})}"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${rm("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`)}
			</span>
			${eF(oK(this.subscription.state),()=>{var e;return e$`<span class="row">
						<span class="row__media"><code-icon icon="unlock" size="20"></code-icon></span>
						<span class="details"
							><p class="details__title">
								${oV(this.subscription)?e$`${oq(this.effectivePlanId)} plan
											<span class="details__subtitle">(trial)</span>`:e$`${oq(this.planId)} plan`}
							</p></span
						>
						${oG(this.subscription)&&0>(e=this.planId,oU(e)-oU("advanced"))?e$`<div class="details__button">
									<gl-button
										appearance="secondary"
										href="${oY("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"plan-section:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
										aria-label="Upgrade to Advanced"
										><span class="upgrade-button">Upgrade</span>${this.renderPromo("advanced","icon","suffix")}
										<span slot="tooltip"
											>Upgrade to the Advanced plan for access to self-hosted integrations,
											advanced AI features @ 1M tokens/week, and more
											${this.renderPromo("advanced","info")}
										</span>
									</gl-button>
								</div>`:eS}
					</span>`})}
		</div>`:eS}renderAccountState(){switch(this.subscriptionState){case oM.Paid:return e$`<div class="account-status">
					${this.renderIncludesDevEx()}${this.renderReferFriend()}
				</div> `;case oM.VerificationRequired:return e$`<div class="account-status">
					<p>You must verify your email before you can access Pro features.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oY("gitlens.plus.resendVerification",{source:"account"})}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							href="${oY("gitlens.plus.validate",{source:"account"})}"
							><code-icon size="20" icon="refresh"></code-icon>
						</gl-button>
					</button-container>
				</div>`;case oM.Trial:{let e=this.trialDaysRemaining;return e$`<div class="account-status">
					${this.isReactivatedTrial?e$`<p>
								<code-icon icon="megaphone"></code-icon>
								See
								<a href="${rr.releaseNotes}">what's new</a>
								in GitLens.
							</p>`:eS}
					<p>
						You have
						<strong>${e<1?"<1 day":rm("day",e,{infix:" more "})} left</strong>
						in your ${"Student"===this.planTier?"Student":"Pro"} trial. Once your trial ends, you will
						only be able to use Pro features on publicly-hosted repos.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oY("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`}case oM.TrialExpired:return e$`<div class="account-status">
					<p>Thank you for trying <a href="${rr.communityVsPro}">GitLens Pro</a>.</p>
					<p>Continue leveraging Pro features and workflows on privately-hosted repos by upgrading today.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oY("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`;case oM.TrialReactivationEligible:return e$`<div class="account-status">
					<p>
						Reactivate your GitLens Pro trial and experience all the new Pro features — free for another
						${rm("day",14)}.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oY("gitlens.plus.reactivateProTrial",{source:"account"})}"
							tooltip="Reactivate your Pro trial for another ${rm("day",14)}"
							>Reactivate GitLens Pro Trial</gl-button
						>
					</button-container>
					${this.renderReferFriend()}
				</div>`;default:return e$`<div class="account-status">
					<p>
						Unlock advanced features and workflows on private repos, accelerate reviews, and streamline
						collaboration with
						<a href="${rr.communityVsPro}">GitLens Pro</a>.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oY("gitlens.plus.signUp",{source:"account"})}"
							>Try GitLens Pro</gl-button
						>
						<span class="button-suffix"
							>or
							<a
								href="${oY("gitlens.plus.login",{source:"account"})}"
								>sign in</a
							></span
						>
					</button-container>
					<p>Get ${14} days of GitLens Pro for free — no credit card required.</p>
				</div>`}}renderIncludesDevEx(){return e$`<p>Includes access to <a href="${rr.platform}">GitKraken's DevEx platform</a></p>`}renderReferFriend(){return oG(this.subscription)?e$`<p>
			<a
				href="${oY("gitlens.plus.referFriend",{source:"account"})}"
				>Refer a friend</a
			>
			&mdash; give 50% off and get up to $20
		</p>`:eS}renderUpgradeContent(){return oG(this.subscription)?(this.showUpgrade=!1,eS):(this.showUpgrade=!0,e$`<gl-popover placement="bottom" trigger="hover focus click" hoist>
			<span slot="anchor" class="chip chip--outlined" tabindex="0">
				<span>Upgrade</span>
			</span>
			<div slot="content" class="content" tabindex="-1">
				<div class="header">
					<span class="header__title">Advantages of GitLens Pro</span>
				</div>
				<div class="upgrade">
					<button-container layout="editor">
						<gl-button
							full
							href="${oY("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")}

					<ul>
						<li>Unlimited cloud integrations</li>
						<li>Smart AI features &mdash; 250K tokens/week</li>
						<li>
							Powerful tools &mdash; Commit Graph, Visual History, &amp; Git Worktrees on private repos
						</li>
						<li>Streamlined workflows &mdash; start work from issues, pull request reviews</li>
					</ul>

					<br />
					<button-container>
						<gl-button
							full
							href="${oY("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
							>Upgrade to Advanced</gl-button
						>
					</button-container>
					${this.renderPromo("advanced")}

					<ul>
						<li>Self-hosted integrations</li>
						<li>Advanced AI features &mdash; 1M tokens/week</li>
					</ul>
				</div>
			</div>
		</gl-popover>`)}renderPromo(e,t="info",r){return e$`<gl-promo
			slot=${r??eS}
			.promoPromise=${this.promos.getApplicablePromo(e,"account")}
			.type=${t}
			.source="${{source:"account"}}"
		></gl-promo>`}};se.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},se.styles=[oO,oR,oA,oJ,oX,j`
			:host {
				display: inline-flex;
				align-items: center;
				gap: 0.8rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 10%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 25%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 20%);
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #000 7%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 18%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 15%);
			}

			.chip {
				padding-right: 0.6rem;

				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				line-height: 2rem;
				background-color: var(--gl-account-chip-color);
			}

			.chip--outlined {
				background-color: transparent;
				border: 1px solid var(--gl-account-chip-color);
			}

			.chip__media {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.2rem;
			}

			img.chip__media {
				width: 1.6rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-chip-media-color);
			}

			.chip-group {
				display: inline-flex;
				flex-direction: row;
				gap: 0.8rem;
				cursor: pointer;
			}

			.account-info {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}

			.row {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.6rem;
				align-items: center;
			}

			.row:last-of-type {
				margin-bottom: 0.6rem;
			}

			.row__media {
				flex: 0 0 auto;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.row__media code-icon {
				color: var(--color-foreground--65);
			}

			.row__media img {
				width: 2rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-account-media-color);
			}

			.details {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.details__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.details__subtitle {
				font-size: 1.1rem;
				font-weight: 400;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.details__button {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.org__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
				margin-right: 0.6rem;
			}

			.account-status > :first-child {
				margin-block-start: 0;
			}
			.account-status > :last-child {
				margin-block-end: 0;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			button-container .button-suffix {
				display: inline-flex;
				align-items: center;
				white-space: nowrap;
				gap: 0.2em;
				margin-left: 0.4rem;
			}

			.upgrade > * {
				margin-block: 0.8rem 0;
			}

			.upgrade ul {
				padding-inline-start: 2rem;
			}

			.upgrade li {
				text-wrap: pretty;
			}

			.upgrade gl-promo::part(text) {
				margin-block-start: 0;
				/* border-radius: 0.3rem;
				padding: 0.2rem 0.4rem;
				background-color: var(--gl-account-chip-color); */
			}

			.upgrade gl-promo:not([has-promo]) {
				display: none;
			}

			.upgrade-button {
				text-transform: uppercase;
				font-size: 1rem;
			}
		`],n7([ez({type:Boolean,reflect:!0,attribute:"show-upgrade"})],se.prototype,"showUpgrade",1),n7([ej("#chip")],se.prototype,"_chip",2),n7([ej("gl-popover")],se.prototype,"_popover",2),n7([A({context:"state",subscribe:!0}),eN()],se.prototype,"_state",2),n7([A({context:"promos"})],se.prototype,"promos",2),se=n7([eL("gl-account-chip")],se);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let st=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!st(e))??eC}update(e,t){let r=this._$Cbt,o=r.length;this._$Cbt=t;let i=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!st(a))return this._$Cwt=e,a;e<o&&a===r[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(a).then(async e=>{for(;n.get();)await n.get();let t=i.deref();if(void 0!==t){let r=t._$Cbt.indexOf(a);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return eC}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let sr=tq(until_c);var so=Object.defineProperty,si=Object.getOwnPropertyDescriptor,sn=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?si(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&so(t,r,n),n};let ss=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return e$`${sr(this.promoPromise?.then(e=>this.renderPromo(e)),eS)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return e$`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,e$`<p class="promo" part="text">${il(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,e$`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??eS}"
						>${il(t.link.html)}</a
					>`}return this.hasPromo=!1,eS}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),oY(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};ss.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ss.styles=[j`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${oS}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],sn([ej('a,button,[tabindex="0"]')],ss.prototype,"_focusable",2),sn([ez({type:Object})],ss.prototype,"promoPromise",2),sn([ez({type:Object})],ss.prototype,"source",2),sn([ez({reflect:!0,type:String})],ss.prototype,"type",2),sn([ez({type:Boolean,reflect:!0,attribute:"has-promo"})],ss.prototype,"hasPromo",1),ss=sn([eL("gl-promo")],ss);var sa=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,sc=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sl(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sa(t,r,n),n};let sd=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:oH(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return e$`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===oM.VerificationRequired)return e$`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else if(oG(this.subscription)||this.cloud&&null!=this.subscription.account)return e$`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;else if(oV(this.subscription))return e$`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=e$`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===oM.Paid?e$`<div class="popup-header">${e}</div>`:this.cloud?this.preview?e$`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:e$`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?e$`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:e$`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return eS;switch(this.state){case oM.Paid:e=e$`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${oY("gitlens.showAccountView")}"
							>${oW(this.subscription?.plan.actual.id??"pro")}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case oM.VerificationRequired:e=e$`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${oY("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${oY("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case oM.Trial:{let t=this.daysRemaining;e=e$`<p>
						You have
						<strong>${t<1?"<1 day":rm("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case oM.TrialExpired:e=e$`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(e$`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case oM.TrialReactivationEligible:e=e$`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${rm("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${oY("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${rm("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=e$`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return e$`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return e$`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${oY("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${oY("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return e$`<div class="actions">
			${e??eS}
			<gl-button
				density="tight"
				href="${oY("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return e$`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};sd.styles=[oO,oR,j`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus-visible {
				${D(oS)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],sc([ez({type:Boolean})],sd.prototype,"cloud",2),sc([ez({reflect:!0})],sd.prototype,"placement",2),sc([ez({type:Boolean})],sd.prototype,"preview",2),sc([A({context:"promos"})],sd.prototype,"promos",2),sc([ez({type:Object})],sd.prototype,"source",2),sc([ez({attribute:!1})],sd.prototype,"subscription",2),sd=sc([eL("gl-feature-badge")],sd);var sh=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,su=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sp(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sh(t,r,n),n};let sg=class extends lit_element_i{get hasAccount(){return this._state.subscription?.account!=null}get isPaidAccount(){return this._state.subscription?.state===oM.Paid}get isProAccount(){return oK(this._state.subscription?.state)}get hasConnectedIntegrations(){return this.hasAccount&&this.integrations.some(e=>e.connected)}get ai(){return this._state.ai}get aiSettingEnabled(){return this._state.aiEnabled}get aiOrgEnabled(){return this._state.orgSettings?.ai??!0}get aiEnabled(){return this.aiSettingEnabled&&this.aiOrgEnabled}get integrations(){return this._state.integrations}focus(){this._chip.focus()}render(){let e=this.hasConnectedIntegrations,t=function(e){let t=new Map;for(let r of e){let e=t.get(r.icon);e&&(!r.connected||e.connected)||t.set(r.icon,r)}return e=>t.get(e.icon)===e}(this.integrations);return e$`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip" tabindex="0"
				>${!e?e$`<span class="chip__label">Connect</span>`:""}${this.integrations.filter(t).map(e=>this.renderIntegrationStatus(e))}${this.renderAIStatus()}</span
			>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Integrations</span>
					<span class="header__actions"></span>
						<gl-button
							appearance="toolbar"
							href="${oY("gitlens.views.home.account.resync",{source:"home",detail:"integrations"})}"
							tooltip="Synchronize Status"
							aria-label="Synchronize Status"
							><code-icon icon="sync"></code-icon
						></gl-button>
						<gl-button
							appearance="toolbar"
							href="${oY("gitlens.plus.cloudIntegrations.manage",{source:{source:"home"}})}"
							tooltip="Manage Integrations"
							aria-label="Manage Integrations"
							><code-icon icon="gear"></code-icon></gl-button
					></span>
				</div>
				<div class="integrations">${!e?e$`<p>
									Connect hosting services like <strong>GitHub</strong> and issue trackers like
									<strong>Jira</strong> to track progress and take action on PRs and issues related to
									your branches.
								</p>
								<button-container>
									<gl-button
										full
										href="${oY("gitlens.plus.cloudIntegrations.connect",{integrationIds:this.integrations.map(e=>e.id),source:{source:"home",detail:"integrations"}})}"
										>Connect Integrations</gl-button
									>
								</button-container>`:this.integrations.map(e=>this.renderIntegrationRow(e))}${this.renderAIRow()}</div>
			</div>
		</gl-popover>`}renderIntegrationStatus(e){return e.requiresPro&&!this.isProAccount?e$`<span
				class="integration status--${e.connected?"connected":"disconnected"} is-locked"
				slot="anchor"
				><code-icon icon="${e.icon}"></code-icon
			></span>`:e$`<span
			class="integration status--${e.connected?"connected":"disconnected"}"
			slot="anchor"
			><code-icon icon="${e.icon}"></code-icon
		></span>`}renderIntegrationRow(e){let t=e.requiresPro&&!this.isProAccount,r=e.requiresPro&&!this.isPaidAccount;return e$`<div
			class="integration-row status--${e.connected?"connected":"disconnected"}${t?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${e.icon}"></code-icon></span>
			<span class="integration__content">
				<span class="integration__title">
					<span>${e.name}</span>
					${r?e$` <gl-feature-badge
								placement="right"
								.source=${{source:"home",detail:"integrations"}}
								cloud
							></gl-feature-badge>`:eS}
				</span>
				<span class="integration__details">${function(e){let t=e.supports.map(e=>sm.get(e));if(0===t.length)return"";if(1===t.length)return`Supports ${t[0]}`;let r=t.pop();return`Supports ${t.join(", ")}, and ${r}`}(e)}</span>
			</span>
			<span class="integration__actions">
				${t?e$`<gl-button
							appearance="toolbar"
							href="${oY("gitlens.plus.upgrade",{plan:"pro",source:"home",detail:"integrations"})}"
							tooltip="Unlock ${e.name} features with GitLens Pro"
							aria-label="Unlock ${e.name} features with GitLens Pro"
							><code-icon class="status-indicator" icon="lock"></code-icon
						></gl-button>`:e.connected?e$`<gl-tooltip
								class="status-indicator status--connected"
								placement="bottom"
								content="Connected"
								><code-icon class="status-indicator" icon="check"></code-icon
							></gl-tooltip>`:e$`<gl-button
								appearance="toolbar"
								href="${oY("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.id],source:{source:"home",detail:"integrations"}})}"
								tooltip="Connect ${e.name}"
								aria-label="Connect ${e.name}"
								><code-icon icon="plug"></code-icon
							></gl-button>`}
			</span>
		</div>`}renderAIStatus(){return e$`<span
			class="integration status--${this.aiEnabled&&this.ai?.model!=null?"connected":"disconnected"}"
			slot="anchor"
		>
			<code-icon icon="${this.aiEnabled&&this.ai?.model!=null?"sparkle-filled":"sparkle"}"></code-icon>
		</span>`}renderAIRow(){let{model:e}=this.ai,t=this.aiEnabled&&null!=e,r=!this.aiEnabled;return e$`<div
			class="integration-row integration-row--ai status--${t?"connected":"disconnected"}${r?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${t?"sparkle-filled":"sparkle"}"></code-icon></span>
			${this.aiEnabled?e$`<span class="integration__content">
							${e?.provider.name?e$`<span class="integration__title">
										<span>${e.provider.name}</span>
										${eS}
									</span>`:e$`<span class="integration_details">Select AI model to enable AI features</span>`}
							${e?.name?e$`<span class="integration__details">${e.name}</span>`:eS}
						</span>
						<span class="integration__actions">
							<gl-button
								appearance="toolbar"
								href="${oY("gitlens.ai.switchProvider",{source:"home",detail:"integrations"})}"
								tooltip="Switch AI Provider/Model"
								aria-label="Switch AI Provider/Model"
								><code-icon icon="arrow-swap"></code-icon
							></gl-button>
						</span>`:e$`<span class="integration__content">
							<span class="integration_details"
								>GitLens AI features have been
								disabled${!this.aiSettingEnabled?" via settings":" by your GitKraken admin"}</span
							>
						</span>
						${!this.aiSettingEnabled?e$` <span class="integration__actions">
									<gl-button
										appearance="toolbar"
										href="${oY("gitlens.home.enableAi",void 0)}"
										tooltip="Re-enable AI Features"
										aria-label="Re-enable AI Features"
										><code-icon icon="unlock"></code-icon
									></gl-button>
								</span>`:eS}`}
		</div>`}};sg.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sg.styles=[oO,oR,oJ,j`
			.chip {
				gap: 0.6rem;
				padding: 0.2rem 0.4rem 0.4rem 0.4rem;
				align-items: baseline;
			}

			.chip__label {
				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				color: var(--color-foreground--75);
				margin-right: 0.4rem;
			}

			.integration {
				white-space: nowrap;
			}

			.content {
				gap: 0.6rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--status-color--connected: #00dd00;
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--status-color--connected: #00aa00;
			}

			.status--disconnected.integration {
				color: var(--color-foreground--25);
			}

			.status--connected:not(.is-locked) .status-indicator {
				color: var(--status-color--connected);
			}

			gl-tooltip.status-indicator {
				margin-right: 0.4rem;
			}

			.integrations {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				width: 100%;
			}

			.integration-row {
				display: flex;
				gap: 1rem;
				align-items: center;
			}

			.integration-row--ai {
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.status--disconnected .integration__icon {
				color: var(--color-foreground--25);
			}

			.integration__content {
				flex: 1 1 auto;
				display: block;
			}

			.integration__title {
				display: flex;
				justify-content: space-between;
			}

			.integration__title gl-feature-badge {
				vertical-align: super;
			}

			.integration__details {
				display: block;
				color: var(--color-foreground--75);
				font-size: 1rem;
			}

			.status--disconnected .integration__title,
			.status--disconnected .integration__details {
				color: var(--color-foreground--50);
			}

			.integration__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: flex-start;
				justify-content: flex-end;
			}

			button-container {
				margin-bottom: 0.4rem;
				width: 100%;
			}

			p {
				margin: 0;
			}

			gl-popover::part(body) {
				--max-width: 90vw;
			}
		`],su([ej("#chip")],sg.prototype,"_chip",2),su([A({context:"state",subscribe:!0}),eN()],sg.prototype,"_state",2),sg=su([eL("gl-integrations-chip")],sg);let sm=new Map([["prs","pull requests"],["issues","issues"]]),sb={gettingStarted:"Getting Started",homeView:"Home View",visualizeCodeHistory:"Visualize Code History",prReviews:"PR Reviews",streamlineCollaboration:"Streamline Collaboration",integrations:"Integrations",aiFeatures:"AI Features"};var sf=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,sy=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sv(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sf(t,r,n),n};let sw=class extends lit_element_i{constructor(){super(...arguments),this.onDismissWalkthrough=()=>{this._state.walkthroughProgress=void 0,this._ipc.sendCommand(e3),this.requestUpdate()}}render(){if(null!=this._state.walkthroughProgress)return e$`<gl-button
				@click=${this.onDismissWalkthrough}
				class="walkthrough-progress__button"
				appearance="toolbar"
				tooltip="Dismiss"
				aria-label="Dismiss"
				><code-icon icon="x"></code-icon
			></gl-button>
			<gl-tooltip placement="bottom">
				<a
					class="walkthrough-progress"
					href=${oY("gitlens.openWalkthrough",{source:{source:"home",detail:"onboarding"}})}
				>
					<header class="walkthrough-progress__title">
						<span
							>GitLens Walkthrough
							(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})</span
						>
					</header>
					<progress
						class="walkthrough-progress__bar"
						value=${this._state.walkthroughProgress.progress}
					></progress>
				</a>
				<div slot="content">
					<div>Open Walkthrough</div>
					<hr />
					${this.renderWalkthroughProgress()}
				</div>
			</gl-tooltip>`}renderWalkthroughProgress(){if(null!=this._state.walkthroughProgress)return e$`<p class="walkthrough-progress__label">
				Walkthrough Progress
				(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})
			</p>
			<ul class="walkthrough-progress__steps">
				${Object.entries(sb).map(([e,t])=>{let r=this._state.walkthroughProgress.state[e];return e$`<li class="walkthrough-progress__step ${r?"completed":""}">
						<code-icon icon="${r?"pass":"circle-large"}"></code-icon>
						<span class="walkthrough-progress__step-label">${t}</span>
					</li>`})}
			</ul>`}};sw.styles=[oB,oD,oX,j`
			.walkthrough-progress__label {
				margin-block: 0;
			}
			.walkthrough-progress__steps {
				margin-block: 0;
				padding-inline-start: 0;
			}
			.walkthrough-progress__step {
				list-style: none;
				margin-block-start: 0.3rem;
			}
			.walkthrough-progress__step-label {
				margin-inline-start: 0.3rem;
			}
			code-icon[icon='circle-large'] {
				color: var(--color-foreground--50);
			}
			code-icon[icon='pass'] {
				color: #00dd00;
			}
		`],sy([A({context:"state",subscribe:!0}),eN()],sw.prototype,"_state",2),sy([A({context:"ipc",subscribe:!0}),eN()],sw.prototype,"_ipc",2),sw=sy([eL("gl-onboarding")],sw);var s_=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,s$=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sk(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&s_(t,r,n),n};let sx=class extends lit_element_i{render(){return e$`
			<gl-promo
				.promoPromise=${this.promos.getApplicablePromo(void 0,"home")}
				.source="${{source:"home"}}"
				class="promo-banner promo-banner--eyebrow"
				id="promo"
				type="link"
			></gl-promo>
		`}};sx.styles=[j`
			:host {
				display: block;
			}
			.promo-banner {
				text-align: center;
				margin-bottom: 1rem;
			}
			.promo-banner--eyebrow {
				color: var(--color-foreground--50);
				margin-bottom: 0.2rem;
			}
			.promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}
		`],s$([A({context:"promos"})],sx.prototype,"promos",2),sx=s$([eL("gl-promo-banner")],sx);var sC=Object.defineProperty,sS=Object.getOwnPropertyDescriptor,sP=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sS(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sC(t,r,n),n};let sA=class extends lit_element_i{render(){return e$`<gl-promo-banner></gl-promo-banner>
			<div class="container" tabindex="-1">
				<span class="group"><gl-account-chip></gl-account-chip></span>
				<gl-integrations-chip></gl-integrations-chip>
			</div>
			<gl-onboarding></gl-onboarding>`}show(){this.accountChip.show()}refreshPromo(){this.promoBanner?.requestUpdate()}};function sO(e,t,r,o){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:r,...o}))}`}sA.styles=[oO,oR,j`
			:host {
				display: block;
			}

			.container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.6rem;
			}

			.container:focus,
			.container:focus-within {
				outline: none;
			}

			/* .actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			} */

			gl-promo-banner {
				margin: 0 0.2rem 0.6rem;
			}

			gl-promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}

			.group {
				display: flex;
				align-items: center;
				gap: 0.4rem;
			}
		`],sP([ej("gl-account-chip")],sA.prototype,"accountChip",2),sP([ej("gl-promo-banner")],sA.prototype,"promoBanner",2),sA=sP([eL("gl-home-header")],sA);let sR=new Map([["current-branch","$(git-branch)"],["pinned","$(pinned)"],["mergeable","$(rocket)"],["blocked","$(error)"],["follow-up","$(report)"],["needs-review","$(comment-unresolved)"],["waiting-for-review","$(gitlens-clock)"],["draft","$(git-pull-request-draft)"],["other","$(ellipsis)"],["snoozed","$(bell-slash)"]]),sI=new Map([["current-branch","Current Branch"],["pinned","Pinned"],["mergeable","Ready to Merge"],["blocked","Blocked"],["follow-up","Requires Follow-up"],["needs-review","Needs Your Review"],["waiting-for-review","Waiting for Review"],["draft","Draft"],["other","Other"],["snoozed","Snoozed"]]),sB=new Map([["mergeable","mergeable"],["conflicts","blocked"],["failed-checks","blocked"],["unassigned-reviewers","blocked"],["needs-my-review","needs-review"],["code-suggestions","follow-up"],["changes-requested","follow-up"],["reviewer-commented","follow-up"],["waiting-for-review","waiting-for-review"],["draft","draft"],["other","other"]]),sE=new Map([["mergeable",["Ready to Merge","Ready to merge"]],["unassigned-reviewers",["Unassigned Reviewers","You need to assign reviewers"]],["failed-checks",["Failed Checks","You need to resolve the failing checks"]],["conflicts",["Resolve Conflicts","You need to resolve merge conflicts"]],["needs-my-review",["Needs Your Review","${author} requested your review"]],["code-suggestions",["Code Suggestions","Code suggestions have been made on this pull request"]],["changes-requested",["Changes Requested","Reviewers requested changes before this can be merged"]],["reviewer-commented",["Reviewers Commented","Reviewers have commented on this pull request"]],["waiting-for-review",["Waiting for Review","Waiting for reviewers to approve this pull request"]],["draft",["Draft","Continue working on your draft"]],["other",["Other","Opened by ${author} ${createdDateRelative}"]]]);var sT=Object.defineProperty,sL=Object.getOwnPropertyDescriptor,sD=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sL(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sT(t,r,n),n};let sz=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return e$`<span class="${this.worktree?"worktree":"branch"}"
			><code-icon
				class="icon"
				icon="${this.worktree?"gl-worktree":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span></span
		>`}};function sN(e,t){return e$`<gl-branch-name .name=${e} .size=${12} ?worktree=${t??!1}></gl-branch-name>`}sz.styles=j`
		:host {
			display: inline-block;
			max-width: 100%;
			align-content: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			vertical-align: middle;
			margin-top: -3px;
		}

		.icon {
			margin: 0 0.3rem 0.1rem 0.2rem;
		}

		.worktree .icon {
			margin-right: 0.4rem;
		}

		.label {
			font-weight: bold;
		}
	`,sD([ez({type:String})],sz.prototype,"name",2),sD([ez({type:Number})],sz.prototype,"size",2),sD([ez({type:Boolean})],sz.prototype,"worktree",2),sz=sD([eL("gl-branch-name")],sz);var sM=Object.defineProperty,sj=Object.getOwnPropertyDescriptor,sF=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sj(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sM(t,r,n),n};let sq=class extends lit_element_i{render(){return this.name?e$`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?e$`<a href=${this.href} class="avatar">${this.renderContent()}</a>`:e$`<span class="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?e$`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:e$`<slot class="thumb thumb--text"></slot>`}};sq.styles=[j`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--vscode-descriptionForeground);
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],sF([ez()],sq.prototype,"src",2),sF([ez()],sq.prototype,"name",2),sF([ez()],sq.prototype,"href",2),sq=sF([eL("gl-avatar")],sq);var sU=Object.defineProperty,sW=Object.getOwnPropertyDescriptor,sH=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sW(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sU(t,r,n),n};let sG=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return e$`<gl-avatar-group>${this.renderList()}</gl-avatar-group>`}renderList(){let e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return e$`
			${e.map(e=>e$`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}></gl-avatar>`)}
			${eF(t.length>0,()=>e$`<gl-popover>
						<gl-avatar slot="anchor" class="overflow">+${t.length}</gl-avatar>
						<div slot="content" class="overflow-list">
							${t.map(e=>e$`<gl-avatar
										.src=${e.src}
										.name=${e.name}
										.href=${e.href}
									></gl-avatar>`)}
						</div>
					</gl-popover>`)}
		`}};sH([ez({type:Number})],sG.prototype,"max",2),sH([ez({type:Array})],sG.prototype,"avatars",2),sG=sH([eL("gl-avatar-list")],sG);let sV=class extends lit_element_i{render(){return e$`<slot class="avatar-group" part="base"></slot>`}};sV.styles=[j`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within::slotted(*),
			.avatar-group:hover::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within::slotted(*:focus),
			.avatar-group:hover::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],sV=sH([eL("gl-avatar-group")],sV);var sK=Object.defineProperty,sY=Object.getOwnPropertyDescriptor,sJ=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sY(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sK(t,r,n),n};let sZ=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),sX=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return sZ.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let r=this[e];return null==r?eS:e$`<span class="stat ${e}" aria-label="${r} ${e}"
			><span class="label">${this.renderSymbol(t)}${r}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?e$`<code-icon class="icon" icon="${t}"></code-icon>`:e$`<span>${e}</span>`}};sX.styles=j`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,sJ([ez({type:Number})],sX.prototype,"added",2),sJ([ez({type:Number})],sX.prototype,"modified",2),sJ([ez({type:Number})],sX.prototype,"removed",2),sJ([ez()],sX.prototype,"symbol",2),sX=sJ([eL("commit-stats")],sX);var sQ=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,s1=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?s0(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sQ(t,r,n),n};let s2=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(e,t,o,i=!0){t=t??void 0;let n=`${(void 0)??""}:${t}`,a=rs.get(n);if(null==a){let e,o=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=ri.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(ro))if(null!=t){for(let[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===o?r.day="2-digit":r.day="numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(t);e=r,a=new Intl.DateTimeFormat(e,o),i&&rs.set(n,a)}if(null==t||ri.test(t))return a.format(e);let c=a.formatToParts(e);return t.replace(ro,(t,n,a,h,p,u,g,m,b,f,v,w,_,$,x)=>{if(null!=n)return n.substring(1,n.length-1);for(let[t,n]of Object.entries(x)){if(null==n)continue;let a=c.find(e=>e.type===t);if("Do"===n&&a?.type==="day"){var C=Number(a.value);let e=C%100;return`${C}${rc[(e-20)%10]??rc[e]??rc[0]}`}if("a"===n&&a?.type==="dayPeriod"){let t=(function(e){let t=`${o??""}:time:${e}`,n=rs.get(t);if(null==n){let a;a=null==o?r:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:e}),i&&rs.set(t,n)}return n})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??a)?.value??""}`}return a?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?rl(this.date):this.absoluteDate}render(){return e$`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};s1([ez()],s2.prototype,"format",2),s1([ez({attribute:"date-style"})],s2.prototype,"dateStyle",2),s1([ez({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>{let r=new Date(e);return isNaN(r.getTime())?new Date(parseInt(e,10)):r}},reflect:!0,attribute:!1})],s2.prototype,"date",2),s1([ez()],s2.prototype,"tooltip",2),s2=s1([eL("formatted-date")],s2);let s5=j`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var s8=Object.defineProperty,s3=Object.getOwnPropertyDescriptor,s4=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?s3(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&s8(t,r,n),n};let s6=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?e$`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:e$`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:eS:e$`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${eF(this.behind>0,()=>e$`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${eF(this.ahead>0,()=>e$`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${eF(this.working>0,()=>e$`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};s6.styles=[s5,j`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],s4([ez({type:Number})],s6.prototype,"ahead",2),s4([ez({type:Number})],s6.prototype,"behind",2),s4([ez({type:Number})],s6.prototype,"working",2),s4([ez({type:Boolean,attribute:"always-show"})],s6.prototype,"alwaysShow",2),s4([ez({type:Boolean})],s6.prototype,"outlined",2),s4([ez({type:Boolean})],s6.prototype,"colorized",2),s4([ez({type:Boolean})],s6.prototype,"missingUpstream",2),s6=s4([eL("gl-tracking-pill")],s6);let s9=j`
	.issue-icon--opened {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-icon--closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
	}
`;var s7=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,at=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ae(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&s7(t,r,n),n};let ar=class extends lit_element_i{get icon(){let e="issues";if(this.state)switch(this.state){case"opened":e="issues";break;case"closed":e="pass"}return e}get classes(){return this.state?`issue-icon issue-icon--${this.state}`:"issue-icon"}get label(){return this.state?`Issue ${this.issueId?`#${this.issueId}`:""} is ${this.state}`:"Issue"}render(){return this.state?e$`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??eS}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:e$`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??eS}
			></code-icon>`}};ar.styles=[s9],at([ez()],ar.prototype,"state",2),at([ez({attribute:"issue-id"})],ar.prototype,"issueId",2),ar=at([eL("issue-icon")],ar);let ao=j`
	.pr-icon--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr-icon--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr-icon--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var ai=Object.defineProperty,an=Object.getOwnPropertyDescriptor,as=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?an(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ai(t,r,n),n};let aa=class extends lit_element_i{constructor(){super(...arguments),this.draft=!1}get icon(){let e=this.draft?"git-pull-request-draft":"git-pull-request";if(this.state)switch(this.state){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed"}return e}get classes(){return!this.state||this.draft&&"opened"===this.state?"pr-icon":`pr-icon pr-icon--${this.state}`}get label(){let e=this.draft?"Draft pull request":"Pull request";return this.state?`${e} ${this.prId?`#${this.prId}`:""} is ${this.state}`:e}render(){return this.state?e$`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??eS}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:e$`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??eS}
			></code-icon>`}};aa.styles=[ao],as([ez()],aa.prototype,"state",2),as([ez({type:Boolean})],aa.prototype,"draft",2),as([ez({attribute:"pr-id"})],aa.prototype,"prId",2),aa=as([eL("pr-icon")],aa);let al=navigator?.userAgentData?.platform,ac=navigator.userAgent;"Linux"===al||ac.includes("Linux");let ad="macOS"===al||ac.includes("Macintosh");"Windows"===al||ac.includes("Windows");var ah=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,au=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ap(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ah(t,r,n),n};let ag=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1,this.handleLinkKeydown=e=>{this.effectiveHref||" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.target.click())}}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${ad?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return e$`
			<gl-tooltip hoist content="${this.effectiveTooltip??eS}">
				<a
					role="${!this.effectiveHref?"button":eS}"
					type="${!this.effectiveHref?"button":eS}"
					aria-label="${this.effectiveLabel??eS}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??eS}
					tabindex="0"
					@keydown=${this.handleLinkKeydown}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};ag.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ag.styles=j`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: var(--action-item-foreground, var(--vscode-icon-foreground));
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${oS}
		}

		:host(:hover),
		:host(:focus-within) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			text-decoration: none;
		}
		a:focus {
			outline: none;
		}
		a:is(:hover, :focus, :active) {
			text-decoration: none;
		}
	`,au([ez()],ag.prototype,"href",2),au([ez({attribute:"alt-href"})],ag.prototype,"altHref",2),au([ez()],ag.prototype,"label",2),au([ez({attribute:"alt-label"})],ag.prototype,"altLabel",2),au([ez()],ag.prototype,"icon",2),au([ez({attribute:"alt-icon"})],ag.prototype,"altIcon",2),au([ez({type:Boolean})],ag.prototype,"disabled",2),au([ej("a")],ag.prototype,"defaultFocusEl",2),au([eN()],ag.prototype,"isAltKeyPressed",2),ag=au([eL("action-item")],ag);var am=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,af=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ab(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&am(t,r,n),n};let av=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return e$`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let t=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",r),e.setAttribute("tabindex",0===o?"0":"-1"),this.actionNodes.length>=2&&e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes)return;let t=e.target,r=parseInt(t.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.actionNodes.length<2)return;let o=null;if("ArrowLeft"===e.key){let e=1===r?this.actionNodes.length-1:r-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=r===this.actionNodes.length?0:r;o=this.actionNodes[e]}null!=o&&o!==t&&(e.preventDefault(),e.stopPropagation(),t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};av.styles=j`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,af([(f={flatten:!0},(e,t)=>{let{slot:r,selector:o}=f??{},i="slot"+(r?`[name=${r}]`:":not([name])");return eM(e,t,{get(){let e=this.renderRoot?.querySelector(i),t=e?.assignedElements(f)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],av.prototype,"actionNodes",2),av=af([eL("action-nav")],av);var ay=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,a_=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aw(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ay(t,r,n),n};let ak=class extends lit_element_i{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1,this.isDefault=!1}render(){return e$`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){let e;if(!this.worktree&&(!this.status||"local"===this.status))return e$`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return e$`<code-icon icon="git-commit"></code-icon>`;let t="0.5";switch(this.status){case"diverged":e="var(--gl-icon-color-status-diverged)";break;case"behind":e="var(--gl-icon-color-status-behind)";break;case"ahead":e="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":e="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":e=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?e="var(--gl-icon-color-status-changes)":(e="transparent",t="1")}return this.worktree&&!1===this.isDefault?ex`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${e}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${t}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:ex`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${e}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${t}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){let e,t=this.branch?sN(this.branch):"Branch",r=this.upstream?sN(this.upstream):"its upstream";switch(this.status){case"diverged":e=e$`${t} has diverged from ${r}`;break;case"behind":e=e$`${t} is behind ${r}`;break;case"ahead":e=e$`${t} is ahead of ${r}`;break;case"missingUpstream":e=e$`${t} is missing its upstream ${r}`;break;case"upToDate":e=e$`${t} is up to date with ${r}`;break;case"local":e=e$`${t} is a local branch which hasn't been published`;break;case"remote":e=e$`${t} is a remote branch`;break;case"detached":e=e$`${t} is in a detached state, i.e. checked out to a commit or tag`;break;default:e=e$`${t} is in an unknown state`}return e=e$`<p>${e}</p>`,this.worktree?e=this.hasChanges?e$`${e}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:e$`${e}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(e=e$`${e}
				<p>Has working (uncommitted) changes</p>`),e}};ak.styles=j`
		:host {
			display: inline-flex;
			width: 16px;
			height: 16px;

			--gl-icon-color-foreground: var(--vscode-foreground, #c5c5c5);

			--gl-icon-color-status-synced: var(
				--gl-icon-color-foreground,
				var(--vscode-gitlens-decoration\\.branchUpToDateForegroundColor)
			);
			--gl-icon-color-status-diverged: var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor, #ff5);
			--gl-icon-color-status-behind: var(--vscode-gitlens-decorations\\.branchBehindForegroundColor, #f05);
			--gl-icon-color-status-ahead: var(--vscode-gitlens-decorations\\.branchAheadForegroundColor, #0f5);
			--gl-icon-color-status-missingUpstream: var(
				--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor,
				#c74e39
			);
			--gl-icon-color-status-changes: #1a79ff;
		}

		:host-context(.vscode-dark),
		:host-context(.vscode-high-contrast) {
			--gl-icon-color-foreground: #c5c5c5;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--gl-icon-color-foreground: #424242;
		}

		p {
			margin: 0;
		}

		p + p {
			margin-top: 0.4rem;
		}

		svg {
			width: 100%;
			height: 100%;
			margin-top: -0.2rem;
			vertical-align: middle;
		}
	`,a_([ez({type:String})],ak.prototype,"branch",2),a_([ez({type:String})],ak.prototype,"status",2),a_([ez({type:Boolean})],ak.prototype,"hasChanges",2),a_([ez({type:String})],ak.prototype,"upstream",2),a_([ez({type:Boolean})],ak.prototype,"worktree",2),a_([ez({type:Boolean,attribute:"is-default"})],ak.prototype,"isDefault",2),ak=a_([eL("gl-branch-icon")],ak);let a$=j`
	:host {
		box-sizing: border-box;
		display: flex;
		align-items: center;

		max-width: 100%;
		min-width: 4.6rem;
	}

	* {
		box-sizing: border-box;
	}
`,ax=j`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,aC=j`
	.truncated-button {
		max-width: 100%;
		min-width: 4rem;
	}
	gl-button[disabled] {
		opacity: 1;
		cursor: default;
	}
	.truncated-button__label {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;var aS=Object.defineProperty,aP=Object.getOwnPropertyDescriptor,aA=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aP(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aS(t,r,n),n};let aO=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return eS;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return e$`${this.icon?e$`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:eS}<span class="label">${this.ref.name}</span>`}};aO.styles=j`
		:host {
			box-sizing: border-box;
			display: flex;
			align-content: center;

			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			gap: 0.4rem;
		}

		* {
			box-sizing: border-box;
		}

		.icon.tag,
		.icon.worktree {
			margin-right: 0.1rem;
		}

		.label {
			min-width: 2.4rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: var(--font-weight, bold);
		}
	`,aA([ez({type:Boolean,reflect:!0})],aO.prototype,"icon",2),aA([ez({type:Object})],aO.prototype,"ref",2),aA([ez({type:Number})],aO.prototype,"size",2),aA([ez({type:Boolean})],aO.prototype,"worktree",2),aO=aA([eL("gl-ref-name")],aO);var aR=Object.defineProperty,aI=Object.getOwnPropertyDescriptor,aB=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aI(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aR(t,r,n),n};let aE=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return e$`<gl-button appearance="toolbar" href=${this.href??eS} ?disabled=${this.disabled}
			>${null==this.ref?e$`<slot name="empty">&lt;missing&gt;</slot>`:e$`<gl-ref-name
						part="label"
						?icon=${this.icon}
						.ref=${this.ref}
						.size=${this.size}
						?worktree=${this.worktree}
					></gl-ref-name>`}<code-icon
				slot="suffix"
				class="picker-icon"
				icon="chevron-down"
				size="10"
			></code-icon
			><slot name="tooltip" slot="tooltip"></slot
		></gl-button>`}};aE.styles=[a$,j`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,ax],aB([ez({type:Boolean,reflect:!0})],aE.prototype,"disabled",2),aB([ez({type:String,reflect:!0})],aE.prototype,"href",2),aB([ez({type:Boolean,reflect:!0})],aE.prototype,"icon",2),aB([ez({type:Object})],aE.prototype,"ref",2),aB([ez({type:Number})],aE.prototype,"size",2),aB([ez({type:Boolean})],aE.prototype,"worktree",2),aE=aB([eL("gl-ref-button")],aE);var aT=Object.defineProperty,aL=Object.getOwnPropertyDescriptor,aD=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aL(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aT(t,r,n),n};let az=j`
	.header__actions {
		margin-top: 0.4rem;
	}

	.content {
		gap: 0.6rem;
	}

	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast) {
		--color-status--in-sync: #00bb00;
		--color-merge--clean: #00bb00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--color-status--in-sync: #00aa00;
		--color-merge--clean: #00aa00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title > span {
		cursor: help;
	}

	.header__title code-icon:not(.info) {
		margin-bottom: 0.1rem;
	}

	.header__title code-icon.status--warning {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title p {
		margin: 0.5rem 0 0 0;
	}

	.header__subtitle {
		font-size: 1.3rem;
		margin: 0.2rem 0 0 0;
	}

	.status--conflict .icon,
	.status--conflict .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--behind .icon,
	.status--behind .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--merged .icon,
	.status--merged .status-indicator {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}

	.status--merged .icon {
		transform: rotateY(180deg);
	}

	.status--in-sync .status-indicator {
		color: var(--color-status--in-sync);
	}

	.status--merge-conflict {
		color: var(--color-merge--conflict);
	}

	.status--merge-clean {
		color: var(--color-merge--clean);
	}

	.status--upgrade {
		color: var(--color-foreground--50);
	}

	.status-indicator {
		margin-left: -0.5rem;
		margin-top: 0.8rem;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;
	}

	.button-container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.button-container gl-button {
		max-width: 30rem;
	}

	p {
		margin: 0 0.4rem;
	}

	p code-icon,
	gl-button code-icon {
		margin-bottom: 0.1rem;
	}

	details {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 0;
		position: relative;
		margin: 0 0.2rem 0.4rem;
		overflow: hidden;
		border: 1px solid transparent;
		color: var(--color-foreground--85);
	}

	details[open] {
		border-radius: 0.3rem;
		border: 1px solid var(--vscode-sideBar-border);
	}

	summary {
		position: sticky;
		top: 0;
		color: var(--color-foreground);
		cursor: pointer;
		list-style: none;
		transition: transform ease-in-out 0.1s;
		padding: 0.4rem 0.6rem 0.4rem 0.6rem;
		z-index: 1;
	}

	summary:hover {
		color: var(--vscode-textLink-activeForeground);
	}

	details[open] > summary {
		color: var(--vscode-textLink-foreground);
		border-radius: 0.3rem 0.3rem 0 0;
		margin-left: 0;
		background: var(--vscode-sideBar-background);
	}

	details[open] > summary code-icon {
		transform: rotate(90deg);
	}

	summary code-icon {
		transition: transform 0.2s;
	}

	.files {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		max-height: 8rem;
		overflow-y: auto;
		padding: 0.4rem 0.8rem;

		background: var(--vscode-sideBar-background);
	}

	gl-popover {
		--max-width: 80vw;
	}

	.target-edit * {
		text-decoration: underline dotted;
		text-underline-offset: 0.3rem;
	}
`,aN=class extends lit_element_i{get target(){return this._target}get targetPromise(){return this._targetPromise}set targetPromise(e){this._targetPromise!==e&&(this._targetPromise=e,this._targetPromise?.then(e=>this._target=e,()=>this._target=void 0))}get conflicts(){return this.target?.potentialConflicts}get mergedStatus(){return this.target?.mergedStatus}get status(){return this.target?.status}get branchRef(){if(null!=this.branch)return{repoPath:this.branch.repoPath,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get targetBranchRef(){if(null!=this.target)return{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name}}render(){let e,t;return this.status||this.conflicts?(this.mergedStatus?.merged?(e="git-merge",t="merged"):this.conflicts?(e="warning",t="conflict"):(this.status?.behind??0)>0?(e="arrow-down",t="behind"):(e="check",t="in-sync"),e$`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${t}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${t}" icon="${e}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">${this.renderContent()}</div>
		</gl-popover>`):eS}renderContent(){let e=sN(this.target?.name),t=this.mergedStatus?.merged&&this.mergedStatus.localBranchOnly?{repoPath:this.branch.repoPath,branchId:this.mergedStatus.localBranchOnly.id,branchName:this.mergedStatus.localBranchOnly.name,branchUpstreamName:this.mergedStatus.localBranchOnly.upstream?.name}:this.target?{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name,branchUpstreamName:void 0}:void 0;return this.mergedStatus?.merged?this.mergedStatus.localBranchOnly?e$`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged Locally into Merge Target`,"git-merge")}
					<div class="body">
						<p>
							Your current branch ${sN(this.branch.name)} has
							${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge
							target's local branch ${sN(this.mergedStatus.localBranchOnly.name)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${oY("gitlens.home.pushBranch",t)}"
								>Push ${sN(this.mergedStatus.localBranchOnly.name)}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${oY("gitlens.home.deleteBranchOrWorktree",[this.branchRef,t])}"
								>Delete
								${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
								${sN(this.branch.name,null!=this.branch.worktree)}</gl-button
							>
						</div>
					</div>`:e$`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged into Merge Target`,"git-merge")}
				<div class="body">
					<p>
						Your current branch ${sN(this.branch.name)} has
						${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${oY("gitlens.home.deleteBranchOrWorktree",[this.branchRef,t])}"
							>Delete
							${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
							${sN(this.branch.name,null!=this.branch.worktree)}</gl-button
						>
					</div>
				</div>`:this.conflicts?e$`${this.renderHeader("Potential Conflicts with Merge Target","warning","warning")}
				<div class="body">
					${this.status?e$`<p>
								Your current branch ${sN(this.branch.name)} is
								${rm("commit",this.status.behind)} behind its merge target
								${this.renderInlineTargetEdit(this.target)}.
							</p>`:eS}
					<div class="button-container">
						<gl-button
							full
							href="${oY("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
							>Rebase ${sN(this.conflicts.branch)} onto ${e}</gl-button
						>
						<gl-button
							full
							appearance="secondary"
							href="${oY("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
							>Merge ${e} into ${sN(this.conflicts.branch)}</gl-button
						>
					</div>
					<p class="status--merge-conflict">
						<code-icon icon="warning"></code-icon> Merging will cause conflicts in
						${rm("file",this.conflicts.files.length)} that will need to be resolved.
					</p>
					${this.renderFiles(this.conflicts.files)}
				</div>`:null!=this.status?this.status.behind>0?e$`${this.renderHeader(`${rm("Commit",this.status.behind)} Behind Merge Target`,"arrow-down","warning")}
					<div class="body">
						<p>
							Your current branch ${sN(this.branch.name)} is
							${rm("commit",this.status.behind)} behind its merge target
							${this.renderInlineTargetEdit(this.target)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${oY("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
								>Rebase ${sN(this.branch.name)} onto ${e}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${oY("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
								>Merge ${e} into ${sN(this.branch.name)}</gl-button
							>
						</div>
						<p class="status--merge-clean">
							<code-icon icon="check"></code-icon> Merging will not cause conflicts.
						</p>
					</div>`:e$`${this.renderHeader("Up to Date with Merge Target","check")}
				<div class="body">
					<p>
						Your current branch ${sN(this.branch.name)} is up to date with its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
				</div>`:eS}renderHeader(e,t,r){return e$`<div class="header">
			<gl-tooltip class="header__title">
				<span>
					<code-icon
						icon="${t}"
						class="${(r?`status--${r}`:void 0)??eS}"
					></code-icon>
					${e}&nbsp;<code-icon class="info" icon="question" size="16"></code-icon>
				</span>
				<span slot="content"
					>${e}
					<p>
						The "merge target" is the branch that ${sN(this.branch.name)} is most likely to be
						merged into.
					</p>
				</span>
			</gl-tooltip>
			${this.renderHeaderActions()}
		</div>`}renderHeaderActions(){let e=this.branchRef,t=this.targetBranchRef;return e$`<span class="header__actions"
			>${e&&t?e$`<gl-button
							href="${oY("gitlens.home.changeBranchMergeTarget",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="pencil"></code-icon
							><span slot="tooltip"
								>Change Merge Target<br />${sN(this.target?.name)}</span
							></gl-button
						><gl-button
							href="${oY("gitlens.home.openMergeTargetComparison",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="git-compare"></code-icon>
							<span slot="tooltip"
								>Compare Branch with Merge Target<br />${sN(this.branch.name)}
								<code-icon icon="arrow-both" size="12"></code-icon> ${sN(this.target?.name)}</span
							>
						</gl-button>`:eS}<gl-button
				href="${oY("gitlens.home.fetch",this.targetBranchRef)}"
				appearance="toolbar"
				><code-icon icon="repo-fetch"></code-icon>
				<span slot="tooltip">Fetch Merge Target<br />${sN(this.target?.name)}</span>
			</gl-button></span
		>`}renderInlineTargetEdit(e){return e$`<gl-button
			class="target-edit"
			appearance="toolbar"
			density="compact"
			tooltip="Change Merge Target"
			href="${oY("gitlens.home.changeBranchMergeTarget",{...this.branchRef,mergeTargetId:this.targetBranchRef.branchId,mergeTargetName:this.targetBranchRef.branchName})}"
			>${sN(e?.name)}</gl-button
		>`}renderFiles(e){return e$`
			<details>
				<summary>
					<code-icon icon="chevron-right"></code-icon>
					Show ${e.length} conflicting files
				</summary>
				<div class="files scrollable">${e.map(e=>this.renderFile(e.path))}</div>
			</details>
		`}renderFile(e){return e$`<span class="files__item"><code-icon icon="file"></code-icon> ${e}</span>`}};aN.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},aN.styles=[oO,oR,oJ,oI,az],aD([ez({type:Object})],aN.prototype,"branch",2),aD([eN()],aN.prototype,"_target",2),aD([ez({type:Object})],aN.prototype,"targetPromise",1),aN=aD([eL("gl-merge-target-status")],aN);let aM=class extends lit_element_i{render(){let e="upgrade";return e$`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${e}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${e}" icon="${"warning"}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Detect potential merge conflicts</span>
				</div>
				<div class="body">
					<p>
						Upgrade to GitLens Pro to see when your current branch has potential conflicts with its merge
						target branch and take action to resolve them.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${oY("gitlens.plus.upgrade",{plan:"pro",source:"merge-target"})}"
							>Upgrade to Pro</gl-button
						>
					</div>
				</div>
			</div>
		</gl-popover>`}};aM.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},aM.styles=[oO,oR,oJ,oI,az],aM=aD([eL("gl-merge-target-upgrade")],aM);var aj=Object.defineProperty,aF=Object.getOwnPropertyDescriptor,aq=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aF(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aj(t,r,n),n};let aU=j`
	* {
		box-sizing: border-box;
	}

	gl-avatar-list {
		--gl-avatar-size: 2.4rem;
		margin-block: -0.4rem;
	}

	.branch-item {
		position: relative;
	}

	.branch-item__container {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.branch-item__container > * {
		margin-block: 0;
	}

	.branch-item__section {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.branch-item__section > * {
		margin-block: 0;
	}

	.branch-item__section--details {
		font-size: 0.9em;
		color: var(--vscode-descriptionForeground);
	}

	.branch-item__actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 0.9em;
	}

	/* :empty selector doesn't work with lit */
	.branch-item__actions:not(:has(*)) {
		display: none;
	}

	.branch-item__icon {
		color: var(--vscode-descriptionForeground);
		flex: none;
	}

	.branch-item__name {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.branch-item__name--secondary {
		font-weight: normal;
	}

	.branch-item__identifier {
		color: var(--vscode-descriptionForeground);
		text-decoration: none;
	}

	.branch-item__grouping {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		max-width: 100%;
		margin-block: 0;
	}

	.branch-item__changes {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: flex-end;
		flex-wrap: wrap;
		white-space: nowrap;
	}

	.branch-item__changes formatted-date {
		margin-inline-end: auto;
	}

	.branch-item__summary {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.branch-item__collapsed-actions {
		position: absolute;
		z-index: var(--gl-branch-card-actions-zindex, 2);
		right: 0.4rem;
		bottom: 0.3rem;
		padding: 0.4rem 0.6rem;
		background-color: var(--gl-card-hover-background);
	}

	.branch-item:not(:focus-within):not(:hover) .branch-item__collapsed-actions {
		${oC}
	}

	.pill {
		--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
	}

	.work-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}
	.work-item::part(base) {
		margin-block-end: 0;
	}

	.branch-item__section.mb-1 {
		margin-block: 0.4rem;
	}

	.branch-item__merge-target {
		margin-inline-end: auto;
	}

	.branch-item__row {
		display: flex;
		gap: 0.8rem;
	}

	.branch-item__row [full] {
		flex-grow: 1;
	}

	.branch-item__missing {
		--button-foreground: inherit;
	}

	:host-context(.vscode-dark) .branch-item__missing,
	:host-context(.vscode-high-contrast) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 12%);
	}

	:host-context(.vscode-light) .branch-item__missing,
	:host-context(.vscode-high-contrast-light) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 14%);
	}

	.branch-item__category {
		margin-inline-start: 0.6rem;
	}

	.launchpad-grouping--mergeable {
		color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
	}

	.launchpad-grouping--blocked {
		color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
	}

	.launchpad-grouping--attention {
		color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
	}

	.tracking__pill,
	.wip__pill {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.tracking__tooltip,
	.wip__tooltip {
		display: contents;
		vertical-align: middle;
	}

	.tracking__tooltip p,
	.wip__tooltip p {
		margin-block: 0;
	}

	p.tracking__tooltip--wip {
		margin-block-start: 1rem;
	}
`;let GlBranchCardBase=class GlBranchCardBase extends GlElement{constructor(){super(...arguments),this.showUpgrade=!1,this.busy=!1,this.expanded=!1,this.expandable=!1,this.onFocus=e=>{e.composedPath().some(e=>e.matches?.("action-item")??!1)||this.expanded||this.toggleExpanded(!0)}}static{this.styles=[oZ,aU]}get branch(){return this._branch}set branch(e){this._branch=e,this.autolinksPromise=e?.autolinks,this.contributorsPromise=e?.contributors,this.issuesPromise=e?.issues,this.prPromise=e?.pr,this.mergeTargetPromise=e?.mergeTarget,this.remotePromise=e?.remote,this.wipPromise=e?.wip}get autolinks(){return this._autolinks}get autolinksPromise(){return this._autolinksPromise}set autolinksPromise(e){this._autolinksPromise!==e&&(this._autolinksPromise=e,this._autolinksPromise?.then(e=>this._autolinks=e,()=>this._autolinks=void 0))}get contributors(){return this._contributors}get contributorsPromise(){return this._contributorsPromise}set contributorsPromise(e){this._contributorsPromise!==e&&(this._contributorsPromise=e,this._contributorsPromise?.then(e=>this._contributors=e,()=>this._contributors=void 0))}get issues(){return this._issues}get issuesPromise(){return this._issuesPromise}set issuesPromise(e){this._issuesPromise!==e&&(this._issuesPromise=e,this._issuesPromise?.then(e=>this._issues=e,()=>this._issues=void 0))}get pr(){return this._pr}get prPromise(){return this._prPromise}set prPromise(e){this._prPromise!==e&&(this._prPromise=e,this._prPromise?.then(e=>{this._pr=e,this.launchpadItemPromise=e?.launchpad},()=>{this._pr=void 0,this.launchpadItemPromise=void 0}))}get launchpadItem(){return this._launchpadItem}get launchpadItemPromise(){return this._launchpadItemPromise}set launchpadItemPromise(e){this._launchpadItemPromise!==e&&(this._launchpadItemPromise=e,this._launchpadItemPromise?.then(e=>this._launchpadItem=e,()=>this._launchpadItem=void 0))}get mergeTarget(){return this._mergeTarget}get mergeTargetPromise(){return this._mergeTargetPromise}set mergeTargetPromise(e){this._mergeTargetPromise!==e&&(this._mergeTargetPromise=e,this._mergeTargetPromise?.then(e=>this._mergeTarget=e,()=>this._mergeTarget=void 0))}get remote(){return this._remote}get remotePromise(){return this._remotePromise}set remotePromise(e){this._remotePromise!==e&&(this._remotePromise=e,this._remotePromise?.then(e=>this._remote=e,()=>this._remote=void 0))}get wip(){return this._wip}get wipPromise(){return this._wipPromise}set wipPromise(e){this._wipPromise!==e&&(this._wipPromise=e,this._wipPromise?.then(e=>this._wip=e,()=>this._wip=void 0))}onExpandableChanged(){this.attachFocusListener()}get branchRef(){return{repoPath:this.repo,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get isWorktree(){return null!=this.branch.worktree&&!this.branch.worktree.isDefault}get cardIndicator(){return aV(aG(this.pr,this.launchpadItem))??"base"}get branchCardIndicator(){if(this.branch.opened){if(this.wip?.pausedOpStatus!=null){if(this.wip?.hasConflicts)return"conflict";switch(this.wip.pausedOpStatus.type){case"cherry-pick":return"cherry-picking";case"merge":return"merging";case"rebase":return"rebasing";case"revert":return"reverting"}}if(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0)return"branch-changes";if(this.mergeTarget?.mergedStatus?.merged)return"branch-merged";switch(this.branch.status){case"ahead":return"branch-ahead";case"behind":return"branch-behind";case"diverged":return"branch-diverged";case"upToDate":return"branch-synced";case"missingUpstream":return"branch-missingUpstream";default:return}}}connectedCallback(){super.connectedCallback?.(),this.attachFocusListener()}disconnectedCallback(){super.disconnectedCallback?.(),this.eventController?.abort()}attachFocusListener(){this.eventController?.abort(),this.eventController=void 0,this.expandable&&(null==this.eventController&&(this.eventController=new AbortController),this.addEventListener("focusin",this.onFocus,{signal:this.eventController.signal}))}renderIssues(){let{autolinks:e,issues:t}=this,r=t?.length?t:e;return r?.length?e$`
			${r.map(e=>e$`
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<issue-icon state=${e.state} issue-id=${e.id}></issue-icon>
						</span>
						<a href=${e.url} class="branch-item__name branch-item__name--secondary">${e.title}</a>
						<span class="branch-item__identifier">${isNaN(parseInt(e.id))?"":"#"}${e.id}</span>
					</p>
				`)}
		`:eS}renderWip(){let e=this.wip?.workingTreeState;if(null==e)return eS;let t=aK(e);return e$`<gl-tooltip class="wip__pill" placement="bottom"
			><commit-stats
				added=${e.added}
				modified=${e.changed}
				removed=${e.deleted}
				symbol="icons"
			></commit-stats>
			<span class="wip__tooltip" slot="content">
				<p>${t.length?`${t.join(", ")} in the working tree`:"No working tree changes"}</p>
			</span>
		</gl-tooltip>`}renderAvatars(){let{contributors:e}=this;return e?.length?e$`<gl-avatar-list
			.avatars=${e.map(e=>({name:e.name,src:e.avatarUrl}))}
			max="1"
		></gl-avatar-list>`:eS}renderTracking(e=!1){let t,r;if(null==this.branch.upstream)return eS;let{state:o}=this.branch.upstream,i=0;if(e){let e=this.wip?.workingTreeState;if(null!=e){i=e.added+e.changed+e.deleted;let r=aK(e);r.length&&(t=e$`<p class="tracking__tooltip--wip">${r.join(", ")} in the working tree</p>`)}}if(this.branch.upstream.missing)r=e$`${sN(this.branch.name)} is missing its upstream
			${sN(this.branch.upstream.name)}`;else{let e=[];o.behind&&e.push(`${rm("commit",o.behind)} behind`),o.ahead&&e.push(`${rm("commit",o.ahead)} ahead of`),r=e.length?e$`${sN(this.branch.name)} is
				${e.join(", ")}${sN(this.branch.upstream?.name)}`:e$`${sN(this.branch.name)} is up to date with
				${sN(this.branch.upstream?.name)}`}return e$`<gl-tooltip class="tracking__pill" placement="bottom"
			><gl-tracking-pill
				class="pill"
				colorized
				outlined
				always-show
				ahead=${o.ahead}
				behind=${o.behind}
				working=${i}
				?missingUpstream=${this.branch.upstream?.missing??!1}
			></gl-tracking-pill>
			<span class="tracking__tooltip" slot="content">${r}${t}</span></gl-tooltip
		>`}renderBranchActions(){let e=this.getBranchActions?.();return e?.length?e$`<action-nav>${e}</action-nav>`:eS}renderPrActions(){let e=this.getPrActions?.();return e?.length?e$`<action-nav>${e}</action-nav>`:eS}renderCollapsedActions(){if(this.expanded)return eS;let e=this.getCollapsedActions?.();return e?.length?e$`<action-nav class="branch-item__collapsed-actions">${e}</action-nav>`:eS}createWebviewCommandLink(e,t){return sO(e,"gitlens.views.home","",t?{...t,...this.branchRef}:this.branchRef)}createCommandLink(e,t){return oY(e,t?{...t,...this.branchRef}:this.branchRef)}renderTimestamp(){let{timestamp:e}=this.branch;return null==e?eS:e$`<formatted-date
			tooltip="Last commit on "
			.date=${new Date(e)}
			class="branch-item__date"
		></formatted-date>`}renderBranchItem(e){let t=this.renderWip(),r=this.renderTracking(),o=this.renderAvatars(),i=this.branch.opened?void 0:this.renderBranchIndicator?.(),n=this.renderMergeTargetStatus(),a=this.renderTimestamp();return e$`
			<gl-work-item
				?primary=${!this.branch.opened}
				?nested=${!this.branch.opened}
				.indicator=${this.branchCardIndicator}
				?expanded=${this.expanded}
			>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon"> ${this.renderBranchIcon()} </span>
						<span class="branch-item__name">${this.branch.name}</span>
					</p>
				</div>
				${eF(a||i||t||r||o,()=>e$`
						<div class="branch-item__section branch-item__section--details" slot="context">
							<p class="branch-item__changes">${a}${i}${t}${r}${o}</p>
						</div>
					`)}
				${eF(e||n,()=>e$`<div class="branch-item__actions" slot="actions">
							${n??eS}${e??eS}
						</div>`)}
				<span class="branch-item__summary" slot="summary">${this.renderTracking(!0)} ${o}</span>
			</gl-work-item>
		`}renderBranchIcon(){let e=this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0;return e$`<gl-branch-icon
			branch="${this.branch.name}"
			status="${this.branch.status}"
			?hasChanges=${e}
			upstream=${this.branch.upstream?.name}
			?worktree=${null!=this.branch.worktree}
			?is-default=${this.branch.worktree?.isDefault??!1}
		></gl-branch-icon>`}renderPrItem(){if(!this.pr)return this.branch.upstream?.missing===!1&&this.expanded?e$`
					<div>
						<button-container grouping="split" layout="full">
							<gl-button
								class="branch-item__missing"
								appearance="secondary"
								full
								href="${oY("gitlens.home.createPullRequest",{ref:this.branchRef,describeWithAI:!1,source:{source:"home",detail:"create-pr"}})}"
							>
								<code-icon icon="git-pull-request" slot="prefix"></code-icon>
								<span>Create a Pull Request</span>
							</gl-button>
							${this._homeState.orgSettings.ai&&this._homeState.aiEnabled&&this.remote?.provider?.supportedFeatures?.createPullRequestWithDetails?e$`<gl-button
										class="branch-item__missing"
										tooltip="Create a Pull Request with AI (Preview)"
										appearance="secondary"
										href="${oY("gitlens.home.createPullRequest",{ref:this.branchRef,describeWithAI:!0,source:{source:"home",detail:"create-pr"}})}"
									>
										<code-icon icon="sparkle"></code-icon>
									</gl-button>`:eS}
						</button-container>
					</div>
				`:eS;let e=this.branch.opened?aV(aG(this.pr,this.launchpadItem))??"base":void 0,t=this.renderPrActions();return e$`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<pr-icon ?draft=${this.pr.draft} state=${this.pr.state} pr-id=${this.pr.id}></pr-icon>
						</span>
						<a href=${this.pr.url} class="branch-item__name branch-item__name--secondary"
							>${this.pr.title}</a
						>
						<span class="branch-item__identifier">#${this.pr.id}</span>
					</p>
				</div>
				${this.renderLaunchpadItem()}
				${eF(null!=t,()=>e$`<div class="branch-item__actions" slot="actions">${t}</div>`)}
			</gl-work-item>
		`}renderLaunchpadItem(){if(null==this.launchpadItem)return eS;let e=aG(this.pr,this.launchpadItem);if(null==e)return eS;let t=sI.get(e),r=sR.get(e);if(null==t||null==r)return eS;let o=r.match(/\$\((.*?)\)/)[1].replace("gitlens","gl"),i=function(e,t){if(null==e||0===e.length)return e;if(null==t)return e.replace(rp,"");let r=function(e){let t=ru.get(e);if(null!=t)return t;t=[];let r=e.length,o=0;for(;o<r;){let r=e.indexOf("${",o);if(-1===r)break;let i=e.indexOf("}",r);if(-1===i)break;let n=r+2,a="",c="",h="",p=!1,u="right",g="";if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(c=e.slice(t,n)),n++}else if(!rg(e.charCodeAt(n))){let t=n++;for(;n<i&&!rg(e.charCodeAt(n));)n++;t!==n&&(c=e.slice(t,n))}for(;n<i;){let t=e.charCodeAt(n);if(rg(t))a+=e[n++];else{if(124!==t)break;for(;n<i;){if((t=e.charCodeAt(++n))>=48&&t<=57){h+=e[n];continue}63===t?(p=!0,n++):45===t&&(u="left",n++);break}}}if(n<i){if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(g=e.slice(t,n)),n++}else if(!rg(e.charCodeAt(n))){let t=n++;for(;n<i&&!rg(e.charCodeAt(n));)n++;t!==n&&(g=e.slice(t,n))}}o=i+1,t.push({key:a,start:r,end:o,options:{prefix:c||void 0,suffix:g||void 0,truncateTo:h?parseInt(h,10):void 0,collapseWhitespace:p,padDirection:u}})}return ru.set(e,t),t}(e);if(0===r.length)return e;let o=0,i="";for(let n of r)i+=e.slice(o,n.start)+(t[n.key]??""),o=n.end;return o<e.length&&(i+=e.slice(o)),i}(sE.get(this.launchpadItem.category)[1],{author:this.launchpadItem.author?.username??"unknown",createdDateRelative:rl(new Date(this.launchpadItem.createdDate))});return e$`<div class="branch-item__section branch-item__section--details" slot="context">
				<p class="launchpad-grouping--${aV(e)}">
					<gl-tooltip content="${i}">
						<a
							href=${oY("gitlens.showLaunchpad",{source:"home",state:{id:{uuid:this.launchpadItem.uuid,group:e}}})}
							class="launchpad__grouping"
						>
							<code-icon icon="${o}"></code-icon
							><span class="branch-item__category">${t.toUpperCase()}</span></a
						>
					</gl-tooltip>
				</p>
			</div>
			${o?e$`<span
						class="branch-item__summary launchpad-grouping--${aV(e)}"
						slot="summary"
						><gl-tooltip placement="bottom" content="${t}"
							><code-icon icon="${o}"></code-icon></gl-tooltip
					></span>`:eS}`}renderMergeTargetStatus(){return this.showUpgrade?e$`<gl-merge-target-upgrade class="branch-item__merge-target"></gl-merge-target-upgrade>`:this.branch.mergeTarget?e$`<gl-merge-target-status
			class="branch-item__merge-target"
			.branch=${this.branch}
			.targetPromise=${this.branch.mergeTarget}
		></gl-merge-target-status>`:eS}renderIssuesItem(){if(![...this.issues??[],...this.autolinks??[]].length)return eS;let e=this.branch.opened?"base":void 0;return e$`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">${this.renderIssues()}</div>
			</gl-work-item>
		`}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask(()=>{this.emit("gl-branch-card-expand-toggled",{expanded:e})})}};aq([A({context:"state",subscribe:!0}),eN()],GlBranchCardBase.prototype,"_homeState",2),aq([ez()],GlBranchCardBase.prototype,"repo",2),aq([ez({type:Boolean})],GlBranchCardBase.prototype,"showUpgrade",2),aq([ez({type:Object})],GlBranchCardBase.prototype,"branch",1),aq([eN()],GlBranchCardBase.prototype,"_autolinks",2),aq([eN()],GlBranchCardBase.prototype,"_contributors",2),aq([eN()],GlBranchCardBase.prototype,"_issues",2),aq([eN()],GlBranchCardBase.prototype,"_pr",2),aq([eN()],GlBranchCardBase.prototype,"_launchpadItem",2),aq([eN()],GlBranchCardBase.prototype,"_mergeTarget",2),aq([eN()],GlBranchCardBase.prototype,"_remote",2),aq([eN()],GlBranchCardBase.prototype,"_wip",2),aq([ez({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"busy",2),aq([ez({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expanded",2),aq([ez({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expandable",2),aq([t4("expandable")],GlBranchCardBase.prototype,"onExpandableChanged",1);let aW=class extends GlBranchCardBase{render(){return e$`
			<gl-card class="branch-item" focusable .indicator=${this.cardIndicator}>
				<div class="branch-item__container">
					${this.renderBranchItem(this.renderBranchActions())}${this.renderPrItem()}${this.renderIssuesItem()}
				</div>
				${this.renderCollapsedActions()}
			</gl-card>
		`}getCollapsedActions(){let e=[];return this.isWorktree?e.push(e$`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
					alt-href=${this.createCommandLink("gitlens.home.openWorktree",{location:"newWindow"})}
				></action-item>`):e.push(e$`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),e.push(e$`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${oY("gitlens.home.openInGraph",{...this.branchRef,type:"branch"})}
			></action-item>`,e$`<action-item
				label=${this.isWorktree?"Open in Worktrees View":"Open in Branches View"}
				icon="arrow-right"
				href=${this.createCommandLink("gitlens.openInView.branch:home")}
			></action-item>`),e}getBranchActions(){let e=[],t=this._homeState.orgSettings.ai&&this._homeState.aiEnabled;return this.isWorktree?(e.push(e$`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
					alt-href=${this.createCommandLink("gitlens.home.openWorktree",{location:"newWindow"})}
				></action-item>`),t&&(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0?e.push(e$`<action-item
							label="Explain Working Changes (Preview)"
							icon="sparkle"
							href=${this.createCommandLink("gitlens.ai.explainWip:home")}
						></action-item>`):e.push(e$`<action-item
							label="Explain Branch Changes (Preview)"
							icon="sparkle"
							href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
						></action-item>`))):(e.push(e$`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),t&&e.push(e$`<action-item
						label="Explain Branch Changes (Preview)"
						icon="sparkle"
						href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
					></action-item>`)),e.push(e$`<action-item
				label="Fetch"
				icon="repo-fetch"
				href=${this.createCommandLink("gitlens.home.fetch")}
			></action-item>`),e.push(e$` <action-item
				label="Visualize Branch History"
				icon="graph-scatter"
				href=${oY("gitlens.visualizeHistory.branch:home",{type:"branch",repoPath:this.repo,branchId:this.branch.id})}
			></action-item>`),e.push(e$`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${oY("gitlens.home.openInGraph",{...this.branchRef,type:"branch"})}
			></action-item>`,e$`<action-item
				label=${this.isWorktree?"Open in Worktrees View":"Open in Branches View"}
				icon="arrow-right"
				href=${this.createCommandLink("gitlens.openInView.branch:home")}
			></action-item>`),e}getPrActions(){return[e$`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,e$`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,e$`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}renderBranchIndicator(){}};aW=aq([eL("gl-branch-card")],aW);let aH=class extends lit_element_i{constructor(){super(...arguments),this.primary=!1,this.nested=!1,this.expanded=!1}render(){return e$`<gl-card
			.density=${this.primary?"tight":void 0}
			.grouping=${!1===this.nested?void 0:this.primary?"item-primary":"item"}
			.indicator=${this.indicator}
			>${this.renderContent()}</gl-card
		>`}renderContent(){let e=this.querySelectorAll('[slot="context"]').length>0||this.querySelectorAll('[slot="actions"]').length>0;return e$`
			<div class=${nA({"work-item":!0,"work-item_content-empty":!e})}>
				<header class="work-item__header">
					<slot class="work-item__main"></slot>
					${this.renderSummary()}
				</header>
				<div class="work-item__content">
					<slot class="work-item__context" name="context"></slot>
					<slot class="work-item__actions" name="actions"></slot>
				</div>
			</div>
		`}renderSummary(){return this.expanded?eS:e$`<slot class="work-item__summary" name="summary"></slot>`}};function aG(e,t){if(null==t||e?.state!=="opened"||e.draft&&"unassigned-reviewers"===t.category)return;let r=sB.get(t.category);if(null!=r&&"other"!==r&&"draft"!==r&&"current-branch"!==r)return r}function aV(e){switch(e){case"mergeable":return"mergeable";case"blocked":return"blocked";case"follow-up":case"needs-review":return"attention"}}function aK(e){let t=[];return e.added&&t.push(`${rm("file",e.added??0)} added`),e.changed&&t.push(`${rm("file",e.changed??0)} changed`),e.deleted&&t.push(`${rm("file",e.deleted??0)} deleted`),t}aH.styles=[j`
			.work-item {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.work-item_content-empty {
				gap: 0;
			}

			.work-item__header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 0.8rem;
			}

			.work-item__main {
				display: block;
				flex: 1;
				min-width: 0;
			}

			.work-item__summary {
				display: block;
				flex: none;
			}

			.work-item__content {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-height: 100px;

				transition-property: opacity, max-height, display;
				transition-duration: 0.2s;
				transition-behavior: allow-discrete;
			}

			:host(:not([expanded])) .work-item__content {
				display: none;
				opacity: 0;
				max-height: 0;
			}

			gl-card::part(base) {
				margin-block-end: 0;
				padding-top: var(--gl-card-vertical-padding, 0.8rem);
				padding-bottom: var(--gl-card-vertical-padding, 0.8rem);
			}
		`],aq([ez({type:Boolean,reflect:!0})],aH.prototype,"primary",2),aq([ez({type:Boolean,reflect:!0})],aH.prototype,"nested",2),aq([ez({reflect:!0})],aH.prototype,"indicator",2),aq([ez({type:Boolean,reflect:!0})],aH.prototype,"expanded",2),aH=aq([eL("gl-work-item")],aH);var aY=Object.defineProperty,aJ=Object.getOwnPropertyDescriptor,aZ=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aJ(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aY(t,r,n),n};let aX=class extends lit_element_i{render(){return e$`<slot></slot>`}};aX.styles=j`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);
			width: 100%;
		}

		::slotted(gl-breadcrumb-item:not(:last-of-type))::after {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			position: relative;
			left: -0.6rem;
			margin-right: -0.6rem;
			transition:
				left 0.3s cubic-bezier(0.25, 1, 0.5, 1),
				margin-right 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}

		::slotted(gl-breadcrumb-item[collapsed]:not(:hover):not(:focus-within):not(:last-of-type))::after {
			left: -1.2rem;
			margin-right: -1.2rem;
		}

		::slotted(:last-child:not(gl-breadcrumb-item:last-of-type)) {
			margin-left: 1rem;
		}
	`,aX=aZ([eL("gl-breadcrumbs")],aX);let aQ=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return e$`<div class=${nA({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?e$`<gl-tooltip
			content="${e?t?"Click to Expand":"Click to Collapse":this.iconTooltip}"
			placement="bottom"
		>
			<code-icon
				class="breadcrumb-icon"
				icon="${this.icon}"
				tabindex="0"
				@click=${e?this.onToggleCollapse:void 0}
				@keyup=${e?this.onToggleCollapse:void 0}
			></code-icon>
		</gl-tooltip>`:e$`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:eS}};aQ.styles=[oA,j`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
			}

			:host([icon]) {
				min-width: calc(24px + 0.6rem);
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				cursor: default;
			}

			.breadcrumb-content {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				vertical-align: middle;
				max-width: 100%;
			}

			.breadcrumb-icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.collapsible .breadcrumb-icon {
				cursor: pointer;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			.breadcrumb-tooltip {
				display: inline-flex;
				align-items: center;
				vertical-align: middle;
			}

			slot[name='children'] {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				overflow: hidden;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) .breadcrumb-label,
			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) slot[name='children'] {
				max-width: 0;
			}
		`],aZ([eN()],aQ.prototype,"_collapsed",2),aZ([ez({type:Boolean,reflect:!0})],aQ.prototype,"collapsed",1),aZ([ez({type:String})],aQ.prototype,"collapsibleState",2),aZ([ez()],aQ.prototype,"icon",2),aZ([ez()],aQ.prototype,"iconTooltip",2),aZ([ez({type:Number})],aQ.prototype,"shrink",1),aQ=aZ([eL("gl-breadcrumb-item")],aQ);let a0=class extends lit_element_i{render(){return e$`<slot></slot>`}};a0.styles=j`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;
			margin-right: 0.6rem;
		}

		:host::before {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			margin-right: 0.4rem;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
		}

		.breadcrumb-label {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,a0=aZ([eL("gl-breadcrumb-item-child")],a0);var a1=Object.defineProperty,a2=Object.getOwnPropertyDescriptor,a5=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?a2(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&a1(t,r,n),n};let a8=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return e$`<div class="skeleton" style=${e}></div>`}};a8.styles=j`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,a5([ez({type:Number})],a8.prototype,"lines",2),a8=a5([eL("skeleton-loader")],a8);let a3=j`
	:host {
		--gl-color-mix-base: var(
			--gl-card-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%)
		);
	}

	.card {
		display: block;
		flex-direction: column;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.4rem;
		border-inline-start: 0.3rem solid transparent;
		/* border-inline-end: 0.3rem solid transparent; */
		background-color: var(--gl-card-background, color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%));
		margin-block-end: 0.6rem;
		position: relative;
	}

	:host-context(.vscode-dark) .card.is-base,
	:host-context(.vscode-high-contrast) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #fff 7%);
	}

	:host-context(.vscode-light) .card.is-base,
	:host-context(.vscode-high-contrast-light) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #000 5%);
	}

	.card.is-active {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitDecoration-addedResourceForeground));
	}

	.card.is-cherry-picking,
	.card.is-merging,
	.card.is-rebasing,
	.card.is-reverting {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor)
		);
	}

	.card.is-conflict {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor)
		);
	}

	.card.is-issue-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-issue-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-pr-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-merged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-mergedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-mergeable {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(var(--vscode-gitlens-launchpadIndicatorMergeableColor))
		);
	}

	.card.is-blocked {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorBlockedColor)
		);
	}

	.card.is-attention {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorAttentionColor)
		);
	}

	.card.is-branch-merged {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitlens-mergedPullRequestIconColor));
	}

	.card.is-branch-synced {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchUpToDateForegroundColor) 20%, transparent)
		);
	}

	.card.is-branch-diverged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor) 70%, transparent)
		);
	}

	.card.is-branch-behind {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-branch-ahead {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-info,
	.card.is-branch-changes {
		border-inline-start-color: var(--gl-card-indicator-border, color-mix(in lab, #1a79ff 80%, transparent));
	}

	.card.is-branch-missingUpstream {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor)
		);
	}

	.card--focusable {
		cursor: pointer;
	}

	.card--focusable:focus,
	.card:focus-within,
	.card:hover {
		background-color: var(
			--gl-card-hover-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 8%)
		);
	}

	.card--focusable:focus-visible {
		outline: 0.1rem solid var(--vscode-focusBorder);
	}

	.card__actions {
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		display: block;
	}

	.card__content {
		display: block;
	}

	.card__content::slotted(:first-child) {
		margin-block-start: 0;
	}

	.card__content::slotted(:last-child) {
		margin-block-end: 0;
	}

	:host-context(.vscode-dark) .card--grouping-item,
	:host-context(.vscode-high-contrast) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}

	:host-context(.vscode-light) .card--grouping-item,
	:host-context(.vscode-high-contrast-light) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
	}

	.card--grouping-item-primary {
		--gl-card-background: transparent;
		--gl-card-hover-background: transparent;
	}

	.card--density-tight {
		padding: 0;
	}
`;var a4=Object.defineProperty,a6=Object.getOwnPropertyDescriptor,a9=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?a6(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&a4(t,r,n),n};let a7=class extends lit_element_i{constructor(){super(...arguments),this._focusable=!1}get focusable(){return null!=this.href||this._focusable}set focusable(e){let t=this._focusable;this._focusable=e,this.requestUpdate("focusable",t)}get classNames(){return{card:!0,"card--focusable":this.focusable,[`card--grouping-${this.grouping}`]:null!=this.grouping,[`card--density-${this.density}`]:null!=this.density,[`is-${this.indicator}`]:null!=this.indicator}}render(){return null!=this.href?e$`<a part="base" class=${nA(this.classNames)} href=${this.href}
				>${this.renderContent()}</a
			>`:e$`<div part="base" tabindex=${this.focusable?0:-1} class=${nA(this.classNames)}>
			${this.renderContent()}
		</div>`}renderContent(){return e$`
			<slot class="card__content"></slot>
			<slot name="actions" class="card__actions"></slot>
		`}focus(e){null!=this.href?this.shadowRoot?.querySelector("a")?.focus(e):super.focus(e)}};a7.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},a7.styles=[a3],a9([ez({reflect:!0})],a7.prototype,"indicator",2),a9([ez({reflect:!0})],a7.prototype,"grouping",2),a9([ez({reflect:!0})],a7.prototype,"density",2),a9([ez()],a7.prototype,"href",2),a9([ez({type:Boolean,reflect:!0})],a7.prototype,"focusable",1),a7=a9([eL("gl-card")],a7);var le=Object.defineProperty,lt=Object.getOwnPropertyDescriptor;let lr=class extends lit_element_i{};lr.styles=[oO,j`
			:host {
				display: block;
				height: 0;
				margin: 0.6rem;
				border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
			}
		`],lr=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?lt(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&le(t,r,n),n})([eL("menu-divider")],lr);var lo=Object.defineProperty,li=Object.getOwnPropertyDescriptor,ln=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?li(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lo(t,r,n),n};let ls=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?e$`<a href=${this.href}><slot></slot></a>`:e$`<slot></slot>`}};ls.styles=[oO,j`
			:host {
				display: block;
				font-family: inherit;
				border: none;
				padding: 0 0.6rem;
				cursor: pointer;
				color: var(--vscode-menu-foreground);
				background-color: var(--vscode-menu-background);
				text-align: left;
				height: auto;
				line-height: 2.2rem;
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
			}

			:host([role='option']:hover) {
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-selectionBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}

			:host([aria-selected='true']) {
				opacity: 1;
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-background);
			}

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],ln([ez({type:Boolean,reflect:!0})],ls.prototype,"disabled",2),ln([ez({reflect:!0})],ls.prototype,"href",2),ln([ez({reflect:!0})],ls.prototype,"role",2),ls=ln([eL("menu-item")],ls);var la=Object.defineProperty,ll=Object.getOwnPropertyDescriptor;let lc=class extends lit_element_i{render(){return e$`<slot></slot>`}};lc.styles=[oO,j`
			:host {
				display: block;
				text-transform: uppercase;
				font-size: 0.84em;
				line-height: 2.2rem;
				padding-left: 0.6rem;
				padding-right: 0.6rem;
				margin: 0px;
				color: var(--vscode-menu-foreground);
				opacity: 0.6;
				user-select: none;
				-webkit-font-smoothing: auto;
			}
		`],lc=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?ll(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&la(t,r,n),n})([eL("menu-label")],lc);let ld=j`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,lh=j`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var lp=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,lg=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lu(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lp(t,r,n),n};let lm=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return e$`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};lm.styles=[ld,lh],lg([ez({type:Boolean})],lm.prototype,"pulse",2),lm=lg([eL("gl-indicator")],lm);var lb=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,lv=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lf(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lb(t,r,n),n};let ly=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return e$`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?e$`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:eS}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){if(!this.icon)return eS;let{repository:e}=this;if(!e?.provider)return e$`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:t}=e,r=t.integration?.connected;return e$`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${t.url??eS}
					aria-label=${`Open Repository on ${t.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===t.icon?"cloud":`gl-provider-${t.icon}`}
						aria-hidden="true"
					></code-icon>
					${eF(r,()=>e$`<gl-indicator class="indicator-dot"></gl-indicator>`)}
				</gl-button>
				<span slot="content">
					Open Repository on ${t.name}
					<hr />
					${eF(r,()=>e$`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${t.name}
							</span>
						`,()=>!1!==r?eS:e$`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${oY("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
								>
									Connect to ${e.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return eS;let{repository:e}=this;if(!e?.provider)return eS;let{provider:t}=e;return t.integration?.connected!==!1?eS:e$`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${oY("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};ly.styles=[oZ,oX,a$,aC,j`
			:host([icons='1']:not([expandable])) {
				min-width: 7rem;
			}

			:host([icons='1'][expandable]) {
				min-width: 0;
			}

			:host([icons='2']:not([expandable])) {
				min-width: 9.4rem;
			}

			:host([icons='2'][expandable]) {
				min-width: 5.6rem;
			}

			.indicator-dot {
				--gl-indicator-color: green;
				--gl-indicator-size: 0.4rem;
				margin-left: -0.2rem;
			}

			/* :host([expandable]) .truncated-button {
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			} */

			:host([expandable]:not(:hover, :focus-within)) .truncated-button .picker-icon::before {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button {
				min-width: 0;
				max-width: 0;
			}
		`,ax],lv([ez({type:Boolean})],ly.prototype,"connectIcon",2),lv([ez({type:Boolean})],ly.prototype,"disabled",2),lv([ez({type:Boolean})],ly.prototype,"icon",2),lv([ez({type:Object})],ly.prototype,"repository",2),lv([ez({type:Boolean})],ly.prototype,"hasMultipleRepositories",2),lv([ez({type:Object})],ly.prototype,"source",2),lv([ez({type:Boolean,reflect:!0})],ly.prototype,"expandable",2),lv([ez({type:Number,reflect:!0})],ly.prototype,"icons",1),ly=lv([eL("gl-repo-button-group")],ly);let lw={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}};function l_(e){return e.startsWith("remotes/")?e.indexOf("/",8):e.indexOf("/")}let lk=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,l$=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,lx=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,lC=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,lS=/(^[0-9a-f]{40})\^[0-3]?$/;function lP(e,t){var r,o,i,n;let a;if(null==e)return"";t=!1===t?{}:{expand:!0,icon:!0,label:t?.label??t?.expand??!0,...t};let c=t?.quoted?`'${e.name}'`:e.name;switch(e.refType){case"branch":{let i;e.remote&&(c=`${(r=c).substring(0,l_(r))}: ${(o=c).substring(l_(o)+1)}`,c=t?.quoted?`'${c}'`:c),i=t.label?t.capitalize&&t.expand?`${e.remote?"Remote ":""}Branch `:`${e.remote?"remote ":""}branch `:"",a=`${i}${t.icon?`$(git-branch)${t7.Space}${c}`:c}`;break}case"tag":a=`${t.label?"tag ":""}${t.icon?`$(tag)${t7.Space}${c}`:c}`;break;default:if(e?.refType==="stash"||e?.refType==="revision"&&e?.stashName){let r;t.expand&&e.message&&(r=`${null!=e.stashNumber?`#${e.stashNumber}: `:""}${e.message.length>20?`${e.message.substring(0,20).trimEnd()}${t7.Ellipsis}`:e.message}`),a=`${t.label?"stash ":""}${t.icon?`$(archive)${t7.Space}${r??e.name}`:r??(e.stashNumber?`#${e.stashNumber}`:e.name)}`}else if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return l$.test(e);case"qualified-double-dot":return lx.test(e);case"qualified-triple-dot":return lC.test(e);default:return lk.test(e)}}(e.ref))a=c;else{let r,o;(t.expand&&e.message&&(r=e.message.length>20?` (${e.message.substring(0,20).trimEnd()}${t7.Ellipsis})`:` (${e.message})`),t.expand&&t.label&&(i=e.ref,i&&lS.test(i)))?(c=e.name.endsWith("^")?e.name.substring(0,e.name.length-1):e.name,t?.quoted&&(c=`'${c}'`),o="before "):o="",a=`${t.label?`${o}commit `:""}${t.icon?`$(git-commit)${t7.Space}${c}${r??""}`:`${c}${r??""}`}`}}return t.capitalize&&t.expand&&!1!==t.label?(n=a,`${n[0].toLocaleUpperCase()}${n.slice(1)}`):a}var lA=Object.defineProperty,lO=Object.getOwnPropertyDescriptor,lR=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lO(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lA(t,r,n),n};let lI=class extends lit_element_i{constructor(){super(...arguments),this.conflicts=!1,this.skipCommand="gitlens.home.skipPausedOperation",this.continueCommand="gitlens.home.continuePausedOperation",this.abortCommand="gitlens.home.abortPausedOperation",this.openEditorCommand="gitlens.home.openRebaseEditor"}get onSkipUrl(){return this.createCommandLink(this.skipCommand,this.pausedOpStatus)}get onContinueUrl(){return this.createCommandLink(this.continueCommand,this.pausedOpStatus)}get onAbortUrl(){return this.createCommandLink(this.abortCommand,this.pausedOpStatus)}get onOpenEditorUrl(){return this.createCommandLink(this.openEditorCommand,this.pausedOpStatus)}createCommandLink(e,t){return null!=this.webviewCommandContext&&(t=null==t?this.webviewCommandContext:{...t,...this.webviewCommandContext}),oY(e,t)}render(){return null==this.pausedOpStatus?eS:e$`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){let t=lw[e.type];return e$`<span class="label"
				>${this.conflicts?t.conflicts:t.label}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${lP(e.incoming,{expand:!1,icon:!1})} ${t.directionality}
				${lP(e.current,{expand:!1,icon:!1})}</span
			>`}let t=e.steps.total>0,r=lw[e.type];return e$`<span class="label"
				>${this.conflicts?r.conflicts:t?r.label:r.pending}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${lP(e.incoming,{expand:!1,icon:!1})} ${r.directionality}
				${lP(e.current??e.onto,{expand:!1,icon:!1})}</span
			>${t?e$`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
					>`:eS}`}renderActions(){if(null==this.pausedOpStatus)return eS;let e=this.pausedOpStatus.type;return e$`<action-nav class="actions">
			${eF("revert"!==e&&!("rebase"===e&&this.conflicts),()=>e$`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`)}
			${eF("merge"!==e,()=>e$`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`)}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
			${eF("rebase"===e,()=>e$`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`)}
		</action-nav>`}};lI.styles=[j`
			.status {
				--action-item-foreground: #000;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.6rem;
				width: 100%;
				max-width: 100%;
				margin-block: 0;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
			}

			:host([conflicts]) .status {
				--action-item-foreground: #fff;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}

			.label {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.icon,
			.steps,
			.actions {
				flex: none;
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],lR([ez({type:Boolean,reflect:!0})],lI.prototype,"conflicts",2),lR([ez({type:Object})],lI.prototype,"pausedOpStatus",2),lR([ez()],lI.prototype,"skipCommand",2),lR([ez()],lI.prototype,"continueCommand",2),lR([ez()],lI.prototype,"abortCommand",2),lR([ez()],lI.prototype,"openEditorCommand",2),lR([ez({type:Object})],lI.prototype,"webviewCommandContext",2),lI=lR([eL("gl-merge-rebase-status")],lI);var lB=Object.defineProperty,lE=Object.getOwnPropertyDescriptor,lT=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lE(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lB(t,r,n),n};let lL=class extends tF(lit_element_i){constructor(){super(...arguments),this.repoCollapsed=!0}get isPro(){return oK(this._homeState.subscription.state)}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._activeOverviewState.run()}onBranchSelectorClicked(){this._ipc.sendCommand(eW,{command:"gitlens.home.switchToBranch",args:[{repoPath:this._activeOverviewState.state?.active.repoPath}]})}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?eS:this._activeOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>e$`<span>Error</span>`})}renderLoader(){return e$`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._activeOverviewState.state?this.renderLoader():this.renderComplete(this._activeOverviewState.state,!0)}renderComplete(e,t=!1){let r=e?.repository,o=e?.active;if(!r||!o)return e$`<span>None</span>`;let i=this._homeState.repositories.openCount>1;return e$`
			<gl-section ?loading=${t}>
				<gl-breadcrumbs slot="heading">
					<gl-breadcrumb-item collapsibleState="none" class="heading-repo-breadcrumb"
						><gl-repo-button-group
							.repository=${r}
							?disabled=${!i}
							?hasMultipleRepositories=${i}
							.source=${{source:"graph"}}
							?expandable=${!0}
							@gl-click=${this.onRepositorySelectorClicked}
							><span slot="tooltip">
								Switch to Another Repository...
								<hr />
								${r.name}
							</span></gl-repo-button-group
						></gl-breadcrumb-item
					>
					<gl-breadcrumb-item collapsibleState="none" icon="git-branch" class="heading-branch-breadcrumb"
						><gl-ref-button .ref=${o.reference} @click=${this.onBranchSelectorClicked}
							><span slot="tooltip">Switch to Another Branch... </span></gl-ref-button
						></gl-breadcrumb-item
					>
				</gl-breadcrumbs>
				<span class="section-heading-actions" slot="heading-actions">
					<gl-button
						aria-busy="${t??eS}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Fetch All"
						href=${oY("gitlens.home.fetch",void 0)}
						><code-icon icon="repo-fetch"></code-icon
					></gl-button>
					<gl-button
						aria-busy="${t??eS}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Visualize Repo History"
						href=${oY("gitlens.visualizeHistory.repo:home",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="graph-scatter"></code-icon></gl-button
					><gl-button
						aria-busy="${t??eS}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Open in Commit Graph"
						href=${oY("gitlens.home.openInGraph",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="gl-graph"></code-icon
					></gl-button>
				</span>
				${this.renderRepoBranchCard(o,r.path,t)}
			</gl-section>
		`}renderRepoBranchCard(e,t,r){return e$`<gl-active-branch-card
			.branch=${e}
			.repo=${t}
			?busy=${r}
			?showUpgrade=${!this.isPro}
		></gl-active-branch-card>`}onRepositorySelectorClicked(e){"label"===e.detail.part&&this._activeOverviewState.changeRepository()}};lL.styles=[oZ,aU,oX,j`
			[hidden] {
				display: none;
			}

			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}

			gl-repo-button-group {
				text-transform: none;
			}

			gl-section::part(header) {
				margin-block-end: 0.2rem;
			}

			.section-heading-actions {
				flex: none;
				display: flex;
				align-items: center;
			}

			.section-heading-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
				/* margin-block: -1rem; */
			}

			.section-heading-provider {
				color: inherit;
			}

			.tooltip {
				text-transform: none;
			}

			.uppercase {
				text-transform: uppercase;
			}

			gl-breadcrumbs {
				--gl-tooltip-text-transform: none;
			}

			.heading-branch-breadcrumb {
				text-transform: none;
			}
		`],lT([A({context:"state",subscribe:!0}),eN()],lL.prototype,"_homeState",2),lT([A({context:"activeOverviewState"})],lL.prototype,"_activeOverviewState",2),lT([A({context:"ipc"})],lL.prototype,"_ipc",2),lT([eN()],lL.prototype,"repoCollapsed",2),lL=lT([eL("gl-active-work")],lL);let lD=class extends GlBranchCardBase{connectedCallback(){super.connectedCallback?.(),this.toggleExpanded(!0)}render(){return e$`
			${this.renderBranchIndicator()}${this.renderIssuesItem()}${this.renderBranchItem(e$`${this.renderBranchStateActions()}${this.renderBranchActions()}`)}${this.renderPrItem()}
		`}renderActionsMenu(){let e=this._homeState.orgSettings.ai&&this._homeState.aiEnabled,t=this.busy,r=this.wip?.workingTreeState,o=null!=r&&r.added+r.changed+r.deleted>0,i=[];if(e)o&&(i.push(e$`<menu-item
						?disabled=${t}
						href=${this.createCommandLink("gitlens.ai.generateCommitMessage",{repoPath:this.repo,source:"home"})}
						>Generate Commit Message</menu-item
					>`),i.push(e$`<menu-divider></menu-divider>`),i.push(e$`<menu-item ?disabled=${t} href=${this.createCommandLink("gitlens.ai.explainWip:home")}
						>Explain Working Changes (Preview)</menu-item
					>`)),i.push(e$`<menu-item ?disabled=${t} href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
					>Explain Branch Changes (Preview)</menu-item
				>`),o&&(i.push(e$`<menu-divider></menu-divider>`),i.push(e$`<menu-item
						?disabled=${t}
						href=${this.createCommandLink("gitlens.home.createCloudPatch")}
						>Share as Cloud Patch</menu-item
					>`));else if(o)return e$`
				<gl-button
					aria-busy=${t??eS}
					?disabled=${t}
					href=${this.createCommandLink("gitlens.home.createCloudPatch")}
					appearance="secondary"
					tooltip="Share as Cloud Patch"
					><code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`;if(0!==i.length)return e$`<gl-popover
			appearance="menu"
			trigger="click focus"
			placement="bottom-end"
			.arrow=${!1}
			distance="0"
		>
			<gl-button slot="anchor" appearance="toolbar" tooltipPlacement="top" aria-label="Additional Actions">
				<code-icon icon="ellipsis"></code-icon>
			</gl-button>
			<div slot="content">${i}</div>
		</gl-popover>`}renderBranchStateActions(){let{name:e,upstream:t}=this.branch,r=[],o=()=>0===r.length?this.renderActionsMenu():e$`<div><button-container>${r}${this.renderActionsMenu()}</button-container></div>`,i=this.busy,n=this.wip?.workingTreeState,a=null!=n&&n.added+n.changed+n.deleted>0;if(a&&r.push(e$`
				<gl-button
					aria-busy=${i??eS}
					?disabled=${i}
					href=${this.createCommandLink("gitlens.composeCommits:home")}
					appearance="secondary"
					density="compact"
					><code-icon icon="wand" slot="prefix"></code-icon>Compose Commits...<span slot="tooltip"
						><strong>Compose Commits</strong> (Preview)<br /><i
							>Automatically or interactively organize changes into meaningful commits</i
						></span
					></gl-button
				>
			`),this.wip?.pausedOpStatus!=null)return o();if(t?.missing!==!1)return r.push(e$`
				<gl-button
					aria-busy=${i??eS}
					?disabled=${i}
					href=${this.createWebviewCommandLink("gitlens.views.home.publishBranch")}
					appearance="secondary"
					density="compact"
				>
					<code-icon icon="cloud-upload" slot="${(a?void 0:"prefix")??eS}"></code-icon>
					${a?"":"Publish Branch"}
					<span slot="tooltip"
						>Publish (push) <strong>${e}</strong> to ${t?.name??"a remote"}</span
					>
				</gl-button>
			`),o();if(t?.state?.ahead||t?.state?.behind){let e=!!t.state.ahead,n=!!t.state.behind;if(e&&n)return r.push(e$`
					<gl-button
						aria-busy=${i??eS}
						?disabled=${i}
						href=${sO("gitlens.views.home.pull","gitlens.views.home","")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-pull" slot="${(a?void 0:"prefix")??eS}"></code-icon>
						${a?"":"Pull"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Pull${t?.name?e$` from <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
					<gl-button
						aria-busy=${i??eS}
						?disabled=${i}
						href=${sO("gitlens.views.home.push","gitlens.views.home","",{force:!0})}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-force-push"></code-icon>
						<span slot="tooltip"
							>Force Push${t?.name?e$` to <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`),o();if(n)return r.push(e$`
					<gl-button
						aria-busy=${i??eS}
						?disabled=${i}
						href=${sO("gitlens.views.home.pull","gitlens.views.home","")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-pull" slot="${(a?void 0:"prefix")??eS}"></code-icon>
						${a?"":"Pull"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Pull${t?.name?e$` from <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`),o();e&&r.push(e$`
					<gl-button
						aria-busy=${i??eS}
						?disabled=${i}
						href=${sO("gitlens.views.home.push","gitlens.views.home","")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-push" slot="prefix"></code-icon>
						${a?"":"Push"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Push${t?.name?e$` to <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`)}return o()}renderBranchIndicator(){let e=this.wip;if(e?.pausedOpStatus!=null)return e$`<gl-merge-rebase-status
			?conflicts=${e.hasConflicts}
			.pausedOpStatus=${e.pausedOpStatus}
		></gl-merge-rebase-status>`}getBranchActions(){return[]}getPrActions(){return[e$`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,e$`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,e$`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}getCollapsedActions(){return[]}renderIssuesItem(){return[...this.issues??[],...this.autolinks??[]].length?super.renderIssuesItem():this.expanded?e$`<div class="branch-item__row" full>
				<span class="branch-item__missing" full>Current work item</span>
				<gl-button
					class="associate-issue-action"
					appearance="toolbar"
					href=${this.createCommandLink("gitlens.associateIssueWithBranch",{branch:this.branch.reference,source:"home"})}
					tooltip="Associate Issue with Branch"
					aria-label="Associate Issue with Branch"
					><issue-icon></issue-icon>
				</gl-button>
			</div>`:eS}};lD.styles=[oZ,aU,j`
			:host {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			span.branch-item__missing {
				color: var(--vscode-descriptionForeground);
				font-style: italic;
			}

			gl-work-item {
				--gl-card-vertical-padding: 0.4rem;
			}

			.associate-issue-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
			}
		`],lD=lT([eL("gl-active-branch-card")],lD);var lz=Object.defineProperty,lN=Object.getOwnPropertyDescriptor,lM=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lN(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lz(t,r,n),n};let lj=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return e$`<div class="progress-bar"></div>`}};lj.styles=j`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,lM([ez({reflect:!0})],lj.prototype,"mode",2),lM([ez({type:Boolean})],lj.prototype,"active",2),lM([ez()],lj.prototype,"position",2),lj=lM([eL("progress-indicator")],lj);var lF=Object.defineProperty,lq=Object.getOwnPropertyDescriptor,lU=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lq(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lF(t,r,n),n};let lW=class extends lit_element_i{constructor(){super(...arguments),this.loading=!1,this.headingLevel="3"}render(){return e$`
			<div class="section">
				<header class="section__header" part="header">
					<div
						class="section__heading"
						role="heading"
						aria-level=${(this.headingLevel?this.headingLevel:void 0)??eS}
					>
						<slot name="heading" class="section__headline"></slot>
					</div>
					<slot name="heading-actions" class="section__actions"></slot>
					<progress-indicator class="section__loader" ?active="${this.loading}"></progress-indicator>
				</header>
				<slot></slot>
			</div>
		`}};lW.styles=[j`
			.section {
				margin-bottom: 1.2rem;
			}
			.section__header {
				position: relative;
				display: flex;
				justify-content: space-between;
				gap: 8px;
				margin-block: 0 0.8rem;
			}
			.section__heading {
				min-width: 0;
				flex: 1;
				font-size: 1.3rem;
			}
			.section__headline {
				font-weight: normal;
				text-transform: uppercase;
			}

			.section__actions {
				margin-inline-start: auto;
			}

			.section__loader {
				position: absolute;
				left: 0;
				bottom: 0;
			}
		`],lU([ez({type:Boolean})],lW.prototype,"loading",2),lU([ez({attribute:"heading-level"})],lW.prototype,"headingLevel",2),lW=lU([eL("gl-section")],lW);let lH=class extends lit_element_i{constructor(){super(...arguments),this.isFetching=!1,this.onCardExpanded=e=>{let t=e.composedPath().find(e=>e.matches("gl-branch-card"));this.toggleSiblingCardsDebounced(t)},this.toggleSiblingCardsDebounced=t8(this.toggleSiblingCards.bind(this),100)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}toggleSiblingCards(e){e?.expanded===!0&&this.branchCards.forEach(t=>{t!==e&&(t.expanded=!1)})}renderSectionLabel(){return this.isFetching||0===this.branches.length?this.label:`${this.label} (${this.branches.length})`}render(){return e$`
			<gl-section ?loading=${this.isFetching}>
				<span slot="heading">${this.renderSectionLabel()}</span>
				<span slot="heading-actions"><slot name="heading-actions"></slot></span>
				${eF(this.branches.length>0,()=>this.branches.map(e=>e$`<gl-branch-card expandable .repo=${this.repo} .branch=${e}></gl-branch-card>`),()=>e$`<p>No ${this.label} branches</p>`)}
			</gl-section>
		`}};lU([ez({type:String})],lH.prototype,"label",2),lU([ez()],lH.prototype,"repo",2),lU([ez({type:Array})],lH.prototype,"branches",2),lU([ez({type:Boolean})],lH.prototype,"isFetching",2),lU([(t,r)=>eM(t,r,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll("gl-branch-card")}})],lH.prototype,"branchCards",2),lH=lU([eL("gl-branch-section")],lH);var lG=Object.defineProperty,lV=Object.getOwnPropertyDescriptor,lK=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lV(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lG(t,r,n),n};let lY=class extends tF(lit_element_i){constructor(){super(...arguments),this._disposable=[],this._summary=t5(void 0),this._summaryState=new AsyncComputedState(async e=>await this._ipc.sendRequest(eZ,{}))}get startWorkCommand(){return oY("gitlens.home.startWork",void 0)}get createBranchCommand(){return oY("gitlens.home.createBranch",void 0)}connectedCallback(){super.connectedCallback?.(),this._disposable.push(this._ipc.onReceiveMessage(e=>{!0===ts.is(e)&&this._summaryState.run(!0)})),this._summaryState.run()}disconnectedCallback(){super.disconnectedCallback?.(),this._disposable.forEach(e=>e.dispose())}render(){return e$`
			<gl-section ?loading=${"pending"===this._summaryState.computed.status}>
				<span slot="heading">Launchpad</span>
				<div class="summary">${this.renderSummaryResult()}</div>
				<button-container grouping="gap-wide">
					<gl-button full class="start-work" href=${this.startWorkCommand}>Start Work on an Issue</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						class="start-work"
						href=${this.createBranchCommand}
						tooltip="Create New Branch"
						><code-icon icon="custom-start-work"></code-icon
					></gl-button>
				</button-container>
			</gl-section>
		`}renderSummaryResult(){return!1===this._homeState.hasAnyIntegrationConnected?e$`<ul class="menu">
				<li>
					<a
						class="launchpad-action"
						href="${oY("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
					>
						<code-icon class="launchpad-action__icon" icon="plug"></code-icon>
						<span>Connect to see PRs and Issue here</span>
					</a>
				</li>
			</ul>`:this._summaryState.render({pending:()=>this.renderPending(),complete:e=>this.renderSummary(e),error:()=>e$`<ul class="menu">
					<li>Error loading summary</li>
				</ul>`})}renderPending(){return null==this._summaryState.state?e$`
				<div class="loader">
					<skeleton-loader lines="1"></skeleton-loader>
					<skeleton-loader lines="1"></skeleton-loader>
				</div>
			`:this.renderSummary(this._summaryState.state)}renderSummary(e){if(null==e)return eS;if("error"in e)return e$`<ul class="menu">
				<li>Unable to load items</li>
			</ul>`;if(0===e.total)return e$`<ul class="menu">
				<li>You are all caught up!</li>
			</ul>`;if(!e.hasGroupedItems)return e$`<ul class="menu">
				<li>No pull requests need your attention</li>
				<li>(${e.total} other pull requests)</li>
			</ul>`;let t=[];for(let r of e.groups){let o;switch(r){case"mergeable":{if(0===(o=e.mergeable?.total??0))continue;let r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"mergeable"}}))}`;t.push(e$`<li>
							<a href=${r} class="launchpad-action launchpad-action--mergable">
								<code-icon class="launchpad-action__icon" icon="rocket"></code-icon>
								<span>${rm("pull request",o)} can be merged</span>
							</a>
						</li>`);break}case"blocked":{if(0===(o=e.blocked?.total??0))continue;let r=[];e.blocked.unassignedReviewers&&r.push({count:e.blocked.unassignedReviewers,message:`${e.blocked.unassignedReviewers>1?"need":"needs"} reviewers`}),e.blocked.failedChecks&&r.push({count:e.blocked.failedChecks,message:`${e.blocked.failedChecks>1?"have":"has"} failed CI checks`}),e.blocked.conflicts&&r.push({count:e.blocked.conflicts,message:`${e.blocked.conflicts>1?"have":"has"} conflicts`});let i=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"blocked"}}))}`;1===r.length?t.push(e$`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span>${rm("pull request",o)} ${r[0].message}</span>
								</a>
							</li>`):t.push(e$`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span
										>${rm("pull request",o)} ${o>1?"are":"is"} blocked
										(${r.map(e=>`${e.count} ${e.message}`).join(", ")})</span
									>
								</a>
							</li>`);break}case"follow-up":{if(0===(o=e.followUp?.total??0))continue;let r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"follow-up"}}))}`;t.push(e$`<li>
							<a href=${r} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="report"></code-icon>
								<span
									>${rm("pull request",o)} ${o>1?"require":"requires"}
									follow-up</span
								>
							</a>
						</li>`);break}case"needs-review":{if(0===(o=e.needsReview?.total??0))continue;let r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"needs-review"}}))}`;t.push(e$`<li>
							<a href=${r} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="comment-unresolved"></code-icon>
								<span
									>${rm("pull request",o)} ${o>1?"need":"needs"} your
									review</span
								>
							</a>
						</li>`)}}}return e$`<menu class="menu">${t}</menu>`}};lY.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lY.styles=[oZ,j`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
			.summary {
				margin-bottom: 1rem;
			}

			.menu {
				list-style: none;
				padding-inline-start: 0;
				margin-block-start: 0;
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}

			.launchpad-action {
				display: flex;
				align-items: center;
				gap: 0.6rem;
				color: inherit;
				text-decoration: none;
			}
			.launchpad-action:hover {
				text-decoration: none;
			}

			.launchpad-action:hover span {
				text-decoration: underline;
			}

			.launchpad-action__icon {
				color: var(--gl-launchpad-action-color, inherit);
			}

			.launchpad-action:hover .launchpad-action__icon {
				color: var(--gl-launchpad-action-hover-color, inherit);
			}

			.launchpad-action--mergable {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorMergeableHoverColor);
			}

			.launchpad-action--blocked {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorBlockedHoverColor);
			}

			.launchpad-action--attention {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorAttentionHoverColor);
			}

			.loader {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}
		`],lK([A({context:"state",subscribe:!0}),eN()],lY.prototype,"_homeState",2),lK([A({context:"ipc"})],lY.prototype,"_ipc",2),lY=lK([eL("gl-launchpad")],lY);let lJ=(e,t,r)=>{let o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},lZ=tq(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);let i=[],n=[],a=0;for(let t of e)i[a]=o?o(t,a):a,n[a]=r(t,a),a++;return{values:n,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){let i=e._$AH,{values:n,keys:a}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=a,n;let c=this.ut??=[],h=[],p,u,g=0,m=i.length-1,b=0,f=n.length-1;for(;g<=m&&b<=f;)if(null===i[g])g++;else if(null===i[m])m--;else if(c[g]===a[b])h[b]=tG(i[g],n[b]),g++,b++;else if(c[m]===a[f])h[f]=tG(i[m],n[f]),m--,f--;else if(c[g]===a[f])h[f]=tG(i[g],n[f]),tH(e,h[f+1],i[g]),g++,f--;else if(c[m]===a[b])h[b]=tG(i[m],n[b]),tH(e,i[g],i[m]),m--,b++;else if(void 0===p&&(p=lJ(a,b,f),u=lJ(c,g,m)),p.has(c[g]))if(p.has(c[m])){let t=u.get(a[b]),r=void 0!==t?i[t]:null;if(null===r){let t=tH(e,i[g]);tG(t,n[b]),h[b]=t}else h[b]=tG(r,n[b]),tH(e,i[g],r),i[t]=null;b++}else tK(i[m]),m--;else tK(i[g]),g++;for(;b<=f;){let t=tH(e,h[f+1]);tG(t,n[b]),h[b++]=t}for(;g<=m;){let e=i[g++];null!==e&&tK(e)}return this.ut=a,((e,t=tV)=>e._$AH=t)(e,h),eC}}),lX=j`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var lQ=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,l1=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?l0(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lQ(t,r,n),n};let l2=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return e$` <code-icon icon="check"></code-icon> `}render(){return e$`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};l2.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},l2.styles=[lX],l1([ez({type:Boolean,reflect:!0})],l2.prototype,"disabled",2),l1([ez({type:String})],l2.prototype,"value",2),l1([ez({type:Boolean})],l2.prototype,"defaultChecked",1),l1([ez({type:Boolean,reflect:!0})],l2.prototype,"checked",2),l2=l1([eL("gl-checkbox")],l2);var l5=Object.defineProperty,l8=Object.getOwnPropertyDescriptor,l3=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?l8(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&l5(t,r,n),n};let l4=j`
	.select {
		background: none;
		outline: none;
		border: none;
		text-decoration: none !important;
		font-weight: 500;
		color: var(--color-foreground--25);
	}
	.select option {
		color: var(--vscode-foreground);
		background-color: var(--vscode-dropdown-background);
	}
	.select:not(:disabled) {
		cursor: pointer;
		color: var(--color-foreground--50);
	}
	.select:not(:disabled):focus {
		outline: 1px solid var(--color-focus-border);
	}
	.select:not(:disabled):hover {
		color: var(--vscode-foreground);
		text-decoration: underline !important;
	}
`;let GlObjectSelect=class GlObjectSelect extends GlElement{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[l4]}render(){if(this.options)return e$`
			<select .disabled=${this.disabled} class="select" @change=${e=>this.onChange?.(e)}>
				${lZ(this.options,e=>{let t=this.getValue(e),r=this.getLabel(e);return e$`<option .value="${t}" ?selected=${this.value===t}>${r}</option>`})}
			</select>
		`}};l3([ez({type:Boolean})],GlObjectSelect.prototype,"disabled",2),l3([ez({type:String})],GlObjectSelect.prototype,"value",2),l3([ez({type:Array})],GlObjectSelect.prototype,"options",2);let l6=class extends GlObjectSelect{getValue(e){return e.value}getLabel(e){return e.label}onChange(e){let t=new CustomEvent("gl-change",{detail:{threshold:e.target.value}});this.dispatchEvent(t)}};l6=l3([eL("gl-branch-threshold-filter")],l6);var l9=Object.defineProperty,l7=Object.getOwnPropertyDescriptor,ce=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?l7(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&l9(t,r,n),n};let ct=class extends tF(lit_element_i){constructor(){super(...arguments),this.onChangeRecentThresholdFilter=e=>{this._inactiveOverviewState.filter.stale&&this._inactiveOverviewState.filter.recent&&this._ipc.sendCommand(e7,{stale:this._inactiveOverviewState.filter.stale,recent:{...this._inactiveOverviewState.filter.recent,threshold:e.detail.threshold}})}}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._inactiveOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?eS:this._inactiveOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>e$`<span>Error</span>`})}renderLoader(){return e$`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._inactiveOverviewState.state?this.renderLoader():this.renderComplete(this._inactiveOverviewState.state,!0)}renderComplete(e,t=!1){if(null==e)return eS;let{repository:r}=e;return e$`
			<gl-branch-section
				label="recent"
				.isFetching=${t}
				.repo=${r.path}
				.branches=${e.recent}
			>
				<gl-branch-threshold-filter
					slot="heading-actions"
					@gl-change=${this.onChangeRecentThresholdFilter}
					.options=${[{value:"OneDay",label:"1 day"},{value:"OneWeek",label:"1 week"},{value:"OneMonth",label:"1 month"}]}
					.disabled=${t}
					.value=${this._inactiveOverviewState.filter.recent?.threshold}
				></gl-branch-threshold-filter>
			</gl-branch-section>
			${eF(this._inactiveOverviewState.filter.stale?.show===!0&&e.stale,()=>e$`
					<gl-branch-section
						label="stale"
						.repo=${r.path}
						.branches=${e.stale}
					></gl-branch-section>
				`)}
		`}};ct.styles=[oZ,j`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
		`],ce([A({context:"state",subscribe:!0}),eN()],ct.prototype,"_homeState",2),ce([A({context:"inactiveOverviewState"})],ct.prototype,"_inactiveOverviewState",2),ce([A({context:"ipc"})],ct.prototype,"_ipc",2),ct=ce([eL("gl-overview")],ct);var cr=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ci=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?co(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cr(t,r,n),n};let cn=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;let{repositories:{openCount:e,hasUnsafe:t,trusted:r}}=this._state;return!r||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return e$`
			${eF(this.blockRepoFeatures,()=>e$`
					<p>
						<code-icon icon="question"></code-icon> Features which need a repository are currently
						unavailable
					</p>
				`)}
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Setup</h2>
				<div class="nav-list__item">
					<a class="nav-list__link" href="command:gitlens.showSettingsPage" aria-label="Open GitLens Settings"
						><code-icon class="nav-list__icon" icon="gear"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open GitLens Settings">
							<span>Open GitLens Settings</span></gl-tooltip
						>
					</a>
				</div>
				${eF(!this._state.hasAnyIntegrationConnected,()=>e$`
						<div class="nav-list__item" data-integrations="none">
							<a
								class="nav-list__link"
								href="${oY("gitlens.plus.cloudIntegrations.connect",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Connect an Integration on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="gl-unplug"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Connect an Integration on GitKraken.dev"
									><span>Connect an Integration</span></gl-tooltip
								>
							</a>
						</div>
					`,()=>e$`
						<div class="nav-list__item" data-integrations="connected">
							<a
								class="nav-list__link"
								href="${oY("gitlens.plus.cloudIntegrations.manage",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Manage Integrations on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="settings"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Manage Integrations on GitKraken.dev"
									><span>Manage Integrations</span></gl-tooltip
								>
							</a>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showSettingsPage!autolinks"
						aria-label="Open Autolinks Settings"
						><code-icon class="nav-list__icon" icon="link"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Autolinks Settings"
							><span>Configure Autolinks</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Popular</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showGraph"
						aria-label="Show Commit Graph"
						data-requires="repo"
						@click=${e=>this.onRepoFeatureClicked(e)}
					>
						<code-icon class="nav-list__icon" icon="gl-graph"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commit Graph">
							<span>Commit Graph</span>
						</gl-tooltip>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showLaunchpad?%7B%22source%22%3A%22home%22%7D"
						aria-label="Open Launchpad"
						><code-icon class="nav-list__icon" icon="rocket"></code-icon
						><gl-tooltip hoist class="nav-list__group" content="Open Launchpad"
							><span class="nav-list__label">Launchpad</span
							><span class="nav-list__desc">New!</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitsView"
						aria-label="Show Commits view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commits-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commits view">
							<span>Commits</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitDetailsView"
						aria-label="Show Inspect view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commit-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Inspect view">
							<span>Inspect</span></gl-tooltip
						>
					</a>
				</div>
				${eF(this.orgAllowsDrafts,()=>e$`
						<div class="nav-list__item">
							${eF(this._state.walkthroughSupported,()=>e$` <a
										class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
										href="${oY("gitlens.openWalkthrough",{step:"streamline-collaboration",source:{source:"home",detail:"old-home"}})}"
										data-requires="repo"
										data-org-requires="drafts"
										aria-label="Open Code Suggest walkthrough"
										><code-icon class="nav-list__icon" icon="gl-code-suggestion"></code-icon
										><gl-tooltip
											hoist
											class="nav-list__group"
											content="Open Code Suggest walkthrough"
											><span class="nav-list__label">Code Suggest</span
											><span class="nav-list__desc">New!</span></gl-tooltip
										>
									</a>`)}
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								preview
							></gl-feature-badge>
						</div>
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.showDraftsView"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Show Cloud Patches view"
								><code-icon class="nav-list__icon" icon="gl-cloud-patch"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Show Cloud Patches view"
									><span class="nav-list__label">Cloud Patches</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showFileHistoryView"
						aria-label="Show File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-history-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show File History view">
							<span>File History</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showTimelineView"
						aria-label="Show Visual File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="graph-scatter"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Visual File History view">
							<span>Visual File History</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showStashesView"
						aria-label="Show Stashes view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-stashes-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Stashes view">
							<span>Stashes</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showSearchAndCompareView"
						aria-label="Show Search &amp; Compare view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-search-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Search &amp; Compare view">
							<span>Search &amp; Compare</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorkspacesView"
						aria-label="Show Cloud Workspaces view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-workspaces-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Cloud Workspaces view">
							<span>Cloud Workspaces</span></gl-tooltip
						>
					</a>
					<gl-feature-badge placement="left" class="nav-list__access" cloud preview></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorktreesView"
						aria-label="Show Worktrees view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-worktrees-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Worktrees view">
							<span>Worktrees</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Activity Bar</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:workbench.view.extension.gitlens"
						aria-label="Show GitLens Side Bar"
						><code-icon class="nav-list__icon" icon="gl-gitlens"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Side Bar"
							><span>GitLens</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.extension.gitlensInspect"
						aria-label="Show GitLens Inspect Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-gitlens-inspect"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Inspect Side Bar"
							><span>GitLens Inspect</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.scm"
						aria-label="Show GitLens Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="source-control"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Source Control Side Bar"
							><span>Source Control</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h3 class="nav-list__title t-eyebrow sticky">Commands</h3>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"command:workbench.action.quickOpen?%22>GitLens%3A%22"}
						aria-label="Show GitLens Commands"
						><code-icon class="nav-list__icon" icon="symbol-event"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Commands"
							><span>Commands</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.gitCommands"
						aria-label="Open Git Command Palette"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="symbol-color"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Git Command Palette"
							><span>Git Command Palette</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Companion Tools</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken Browser Extension"
						><code-icon class="nav-list__icon" icon="extensions"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken Browser Extension"
							><span>GitKraken Browser Extension</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken CLI"
						><code-icon class="nav-list__icon" icon="terminal"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken CLI"
							><span>GitKraken CLI</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.dev?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try GitKraken.dev"
						><code-icon class="nav-list__icon" icon="globe"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try GitKraken.dev"
							><span>GitKraken.dev</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
		`}};cn.styles=[oR,oB,oL,j``],ci([ez({type:Object})],cn.prototype,"badgeSource",2),ci([A({context:"state",subscribe:!0}),eN()],cn.prototype,"_state",2),cn=ci([eL("gl-feature-nav")],cn);let cs=j`
	:host {
		/* Banner color custom properties */
		--gl-banner-primary-background: var(--vscode-sideBar-background);
		--gl-banner-secondary-background: var(--vscode-editor-background);
		--gl-banner-primary-emphasis-background: var(--vscode-button-background);
		--gl-banner-secondary-emphasis-background: var(--vscode-button-secondaryBackground);
		--gl-banner-text-color: var(--vscode-foreground);
		--gl-banner-dim-text-color: var(--vscode-descriptionForeground);
		--gl-banner-transparency: 0.5;

		/* Layout properties */
		--gl-banner-padding: 1.2rem;
		--gl-banner-gap: 0.8rem;
		--gl-banner-border-radius: 0.4rem;

		/* Button customization - use 8px horizontal padding, keep original vertical padding */
		--gl-banner-button-padding: 0.4rem 0.8rem;

		display: block;
		margin-block-end: 1.2rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		padding: var(--gl-banner-padding);
		border-radius: var(--gl-banner-border-radius);
		position: relative;
		overflow: hidden;
		container-type: inline-size;
	}

	/* Solid display mode - same as card background */
	.banner--solid {
		background-color: var(--gl-banner-primary-background);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-background) 100%, var(--vscode-foreground) 12%);
	}

	/* Outline display mode - emphasis color outline with secondary background */
	.banner--outline {
		background-color: var(--gl-banner-secondary-background);
		border: 2px solid var(--gl-banner-primary-emphasis-background);
	}

	/* Gradient display mode - horizontal gradient from primary to secondary emphasis */
	.banner--gradient {
		background: linear-gradient(
			to right,
			var(--gl-banner-primary-emphasis-background) 0%,
			var(--gl-banner-secondary-emphasis-background) 100%
		);
		border: 1px solid
			color-mix(
				in lab,
				var(--gl-banner-primary-emphasis-background) 50%,
				var(--gl-banner-secondary-emphasis-background) 50%
			);
	}

	/* Gradient transparent display mode - same gradient but with transparency */
	.banner--gradient-transparent {
		background: linear-gradient(
			to right,
			color-mix(
					in lab,
					var(--gl-banner-primary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				0%,
			color-mix(
					in lab,
					var(--gl-banner-secondary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				100%
		);
		border: 1px solid
			color-mix(
				in lab,
				color-mix(
						in lab,
						var(--gl-banner-primary-emphasis-background) 50%,
						var(--gl-banner-secondary-emphasis-background) 50%
					)
					calc(100% * (1 - var(--gl-banner-transparency))),
				transparent
			);
	}

	/* Gradient purple display mode - matches the auto-composer container styling */
	.banner--gradient-purple {
		border: 1px solid var(--vscode-panel-border);
		border-radius: 6px;
		background: linear-gradient(135deg, #a100ff1a 0%, #255ed11a 100%);
	}

	.banner--gradient-purple .banner__title {
		font-size: 1.3rem;
		color: var(--vscode-foreground);
		font-weight: normal;
	}

	.banner--gradient-purple .banner__body {
		font-size: 1.2rem;
		color: var(--vscode-descriptionForeground);
		line-height: 1.4;
	}

	.banner--gradient-purple .banner__body a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	.banner--gradient-purple .banner__body a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	.banner__content {
		display: flex;
		flex-direction: column;
		gap: var(--gl-banner-gap);
		align-items: center;
		text-align: center;
	}

	/* Responsive layout */
	.banner--responsive .banner__content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		gap: var(--gl-banner-gap);
	}

	.banner--responsive .banner__text {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.banner--responsive .banner__title,
	.banner--responsive .banner__body {
		text-align: left;
	}

	/* < 500px: Stack vertically with full-width buttons */
	.banner--responsive .banner__buttons {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.8rem;
		width: 100%;
	}

	.banner--responsive .banner__button {
		grid-column: unset;
		justify-self: unset;
		width: 100% !important;
		min-width: 100% !important;
		max-width: 100% !important;
		justify-content: center;
		flex: 1;
	}

	/* >= 500px: Three-group horizontal layout */
	@container (min-width: 500px) {
		.banner--responsive .banner__content {
			flex-direction: row;
			align-items: center;
			gap: 1.6rem;
		}

		/* Group 1: Text content (left-aligned) */
		.banner--responsive .banner__text {
			flex: 1;
			min-width: 0;
			align-self: center;
		}

		/* Group 2: Buttons (content-sized) */
		.banner--responsive .banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			margin-top: 0;
			width: auto;
			flex-shrink: 0;
			align-self: center;
		}

		.banner--responsive .banner__button {
			width: auto;
			white-space: nowrap;
		}

		/* Group 3: Dismiss button (to the right of buttons) */
		.banner--responsive .banner__dismiss {
			position: static !important;
			top: auto !important;
			right: auto !important;
			align-self: center;
			flex-shrink: 0;
		}
	}

	.banner__title {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--gl-banner-text-color);
		margin: 0;
		text-wrap: pretty;
	}

	.banner__body {
		font-size: 1em;
		color: var(--gl-banner-text-color);
		margin: 0;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.banner__buttons {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.8rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	.banner:not(.banner--gradient-purple) .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-foreground: var(--gl-banner-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner--gradient-purple .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner__button--secondary {
		grid-column: 3;
		justify-self: end;
		white-space: nowrap;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 10%, transparent);
	}

	/* When only primary button exists, center it across the full width */
	.banner__buttons:has(.banner__button--primary):not(:has(.banner__button--secondary)) .banner__button--primary {
		grid-column: 1 / -1;
		justify-self: center;
	}

	/* Dismiss button */
	.banner__dismiss {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 15%, transparent);
		--button-padding: 0.4rem;
		z-index: 1;
	}

	/* Responsive layout dismiss button */
	.banner--responsive .banner__dismiss {
		/* < 500px: Upper right corner (default positioning) */
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
	}

	/* Theme-specific adjustments */

	/* Light theme: Brighten gradient colors for better contrast with dark text */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-primary-emphasis-background: color-mix(in lab, var(--vscode-button-background) 40%, #fff 60%);
		--gl-banner-secondary-emphasis-background: color-mix(
			in lab,
			var(--vscode-button-secondaryBackground) 40%,
			#fff 60%
		);
	}

	/* Override text color for high contrast light theme specifically */
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-text-color: #000;
	}

	:host-context(.vscode-dark) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light))
		.banner:not(.banner--gradient-purple)
		.banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-foreground: #fff;
	}

	:host-context(.vscode-light) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast-light) .banner:not(.banner--gradient-purple) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 8%, #fff 25%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 15%, #fff 35%);
		--button-foreground: #000;
	}

	/* Make banner text darker in light themes */
	:host-context(.vscode-light) .banner__body,
	:host-context(.vscode-high-contrast-light) .banner__body {
		color: color-mix(in lab, var(--gl-banner-text-color) 20%, #000 80%);
	}

	/* Strong colors for banner title - pure black/white for maximum contrast */
	:host-context(.vscode-light) .banner__title,
	:host-context(.vscode-high-contrast-light) .banner__title {
		color: #000 !important;
	}

	:host-context(.vscode-dark) .banner__title,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__title {
		color: #fff !important;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.banner__buttons {
			flex-direction: column;
			width: 100%;
		}

		.banner__button {
			width: 100%;
		}
	}

	/* More aggressive responsive layout for narrow sidebars */
	@media (max-width: 400px) {
		.banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-top: 0.8rem;
			align-items: center;
			width: 100%;
		}

		.banner__button--primary,
		.banner__button--secondary {
			grid-column: unset;
			justify-self: unset;
			width: 100%;
			max-width: 200px;
		}

		.banner__button--primary {
			order: 1;
		}

		.banner__button--secondary {
			order: 2;
		}
	}

	/* Support for custom banner buttons layout */
	:host([data-banner-buttons-layout='column']) .banner__buttons,
	.banner__buttons[data-layout='column'] {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	:host([data-banner-buttons-layout='column']) .banner__button--primary,
	:host([data-banner-buttons-layout='column']) .banner__button--secondary,
	.banner__buttons[data-layout='column'] .banner__button--primary,
	.banner__buttons[data-layout='column'] .banner__button--secondary {
		grid-column: unset;
		justify-self: unset;
		width: 100%;
		max-width: 200px;
	}
`;var ca=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,cc=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cl(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ca(t,r,n),n};let cd=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return e$`<div part="base" class=${nA(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return e$`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return e$`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return e$`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return e$`<div class="banner__body">${il(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return e$`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return e$`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??eS}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return e$`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??eS}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return e$`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??eS}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};cd.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cd.styles=[cs],cc([ez({reflect:!0})],cd.prototype,"display",2),cc([ez({attribute:"banner-title"})],cd.prototype,"bannerTitle",2),cc([ez()],cd.prototype,"body",2),cc([ez({attribute:"primary-button"})],cd.prototype,"primaryButton",2),cc([ez({attribute:"primary-button-href"})],cd.prototype,"primaryButtonHref",2),cc([ez({attribute:"primary-button-command"})],cd.prototype,"primaryButtonCommand",2),cc([ez({attribute:"secondary-button"})],cd.prototype,"secondaryButton",2),cc([ez({attribute:"secondary-button-href"})],cd.prototype,"secondaryButtonHref",2),cc([ez({attribute:"secondary-button-command"})],cd.prototype,"secondaryButtonCommand",2),cc([ez({type:Boolean,attribute:"dismissible"})],cd.prototype,"dismissible",2),cc([ez({attribute:"dismiss-href"})],cd.prototype,"dismissHref",2),cc([ez({attribute:"layout"})],cd.prototype,"layout",2),cd=cc([eL("gl-banner")],cd);var ch=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,cu=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cp(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ch(t,r,n),n};let cg=class extends lit_element_i{get shouldShow(){return!this._state.aiAllAccessBannerCollapsed}get bodyLabel(){return this.hasAdvancedOrHigher?"Opt in now to get unlimited GitKraken AI until July 11th!":"Opt in now to try all Advanced GitLens features with unlimited GitKraken AI for FREE until July 11th!"}get primaryButtonLabel(){return"Opt In Now"}get hasAdvancedOrHigher(){var e,t;return this._state.subscription.plan&&(e=this._state.subscription.plan.actual.id,oU(e)-oU("advanced")>=0)||(t=this._state.subscription.plan.effective.id,oU(t)-oU("advanced")>=0)}render(){return this.shouldShow?e$`
			<gl-banner
				display="gradient"
				banner-title="All Access Week - now until July 11th!"
				body="${this.bodyLabel}"
				primary-button="${this.primaryButtonLabel}"
				primary-button-href="${oY("gitlens.plus.aiAllAccess.optIn",{source:"home"})}"
				secondary-button="Dismiss"
				@gl-banner-secondary-click=${this.onSecondaryClick}
			></gl-banner>
		`:eS}onSecondaryClick(){this._ipc.sendCommand(e9,void 0)}};cg.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cg.styles=[j`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}
		`],cu([A({context:"state",subscribe:!0}),eN()],cg.prototype,"_state",2),cu([A({context:"ipc",subscribe:!0}),eN()],cg.prototype,"_ipc",2),cg=cu([eL("gl-ai-all-access-banner")],cg);var cm=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,cf=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cb(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cm(t,r,n),n};let cv=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||!0===this._state.amaBannerCollapsed?eS:e$`
			<gl-card indicator="info">
				<h4>Live AMA w/ the creator of GitLens</h4>
				<p>Feb 13 @ 1pm EST &mdash; <a href="${"https://www.gitkraken.com/lp/gitlensama?utm_source=githubdiscussion&utm_medium=hyperlink&utm_campaign=GLAMA&utm_id=GLAMA"}">Register now</a></p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._state.amaBannerCollapsed=!0,this._ipc.sendCommand(e8,{section:"feb2025AmaBanner",collapsed:!0})}};cv.styles=[oR,j`
			:host {
				margin-inline: 1.2rem;
			}
			h4 {
				font-weight: normal;
				margin-block-end: 0.4em;
			}

			p {
				margin-block: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],cf([A({context:"state",subscribe:!0}),eN()],cv.prototype,"_state",2),cf([A({context:"ipc",subscribe:!0}),eN()],cv.prototype,"_ipc",2),cf([eN()],cv.prototype,"closed",2),cv=cf([eL("gl-ama-banner")],cv);var cy=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,c_=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cw(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cy(t,r,n),n};let ck=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||this._state.hasAnyIntegrationConnected||this._state.integrationBannerCollapsed?eS:e$`
			<gl-card>
				<p><strong>GitLens is better with integrations!</strong></p>
				<p>
					Connect hosting services like GitHub and issue trackers like Jira to track progress and take action
					on PRs and issues related to your branches.
				</p>
				<button-container>
					<gl-button
						appearance="secondary"
						href="${oY("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
						full
						><code-icon icon="plug"></code-icon> Connect Integrations</gl-button
					>
				</button-container>
				<gl-button slot="actions" appearance="toolbar" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._ipc.sendCommand(e8,{section:"integrationBanner",collapsed:!0})}focus(){this._button.focus()}};ck.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ck.styles=[j`
			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}
		`],c_([A({context:"state",subscribe:!0}),eN()],ck.prototype,"_state",2),c_([A({context:"ipc",subscribe:!0}),eN()],ck.prototype,"_ipc",2),c_([eN()],ck.prototype,"closed",2),c_([ej("gl-button")],ck.prototype,"_button",2),ck=c_([eL("gl-integration-banner")],ck);var c$=Object.defineProperty,cx=Object.getOwnPropertyDescriptor,cC=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cx(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&c$(t,r,n),n};let cS=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}get isNewInstall(){return this._state.newInstall}render(){return!0!==this._state.previewEnabled?e$`
				<gl-tooltip placement="bottom">
					<button class="text-button text-button--end" @click=${()=>this.togglePreview()}>
						New Home View <code-icon icon="arrow-right"></code-icon>
					</button>
					<p slot="content">
						<strong>Switch to the new Home View!</strong><br />
						We've reimagined GitLens' Home to be a more helpful daily workflow tool. We're continuing to
						refine this experience and welcome your feedback.
					</p>
				</gl-tooltip>
			`:this.closed||!0===this._state.previewCollapsed?eS:e$`
			<gl-card>
				<h4 class="title">Welcome to the GitLens Home View</h4>
				<p>
					Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
					requests, all in one intuitive hub.
					<a class="feedback" href="https://help.gitkraken.com/gitlens/home-view/">Learn more</a>
				</p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss Welcome" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}togglePreview(e=!1){this._ipc.sendCommand(e5),e&&(this.closed=!0)}onClose(){this.closed=!0,this._ipc.sendCommand(e8,{section:"newHomePreview",collapsed:!0})}focus(){this._button?.focus()}};cS.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cS.styles=[oR,j`
			.title {
				margin-block-end: 0.4em;
			}

			.text-button {
				padding: 0.4rem 0.8rem;
			}

			.text-button {
				appearance: none;
				background: none;
				border: none;
				color: inherit;
				text-align: end;
				cursor: pointer;
				width: 100%;
			}
			.text-button:hover,
			.text-button:focus-within {
				background-color: var(--gl-card-background);
			}
			.text-button:focus-visible {
				${oS}
			}

			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}

			.feedback {
				white-space: nowrap;
			}

			p {
				margin-block: 0;
			}
		`],cC([A({context:"state",subscribe:!0}),eN()],cS.prototype,"_state",2),cC([A({context:"ipc",subscribe:!0}),eN()],cS.prototype,"_ipc",2),cC([eN()],cS.prototype,"closed",2),cC([ej("button")],cS.prototype,"_button",2),cS=cC([eL("gl-preview-banner")],cS);var cP=Object.defineProperty,cA=Object.getOwnPropertyDescriptor,cO=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cA(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cP(t,r,n),n};let cR=class extends lit_element_i{constructor(){super(...arguments),this.source="unknown",this.layout="default",this.collapsed=!1,this.canAutoRegister=!1}render(){if(this.collapsed)return eS;if(this.canAutoRegister){let e=`GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and perform actions. <a href="${rr.helpCenterMCP}">Learn more</a>`;return e$`
				<gl-banner
					exportparts="base"
					display="gradient-purple"
					layout="${this.layout}"
					banner-title="GitKraken MCP Bundled with GitLens"
					body="${e}"
					dismissible
					dismiss-href="${oY("gitlens.storage.store",{key:"mcp:banner:dismissed",value:!0})}"
				></gl-banner>
			`}let e=`Leverage Git and your integrations (issues, PRs, etc) to provide context and perform actions in AI chat. <a href="${rr.helpCenterMCP}">Learn more</a>`;return e$`
			<gl-banner
				exportparts="base"
				display="gradient-purple"
				layout="${this.layout}"
				banner-title="Install GitKraken MCP for GitLens"
				body="${e}"
				primary-button="Install GitKraken MCP"
				primary-button-href="${oY("gitlens.ai.mcp.install",{source:this.source})}"
				dismissible
				dismiss-href="${oY("gitlens.storage.store",{key:"mcp:banner:dismissed",value:!0})}"
			></gl-banner>
		`}};cR.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cR.styles=[j`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}

			:host([layout='responsive']) gl-banner {
				margin-bottom: 0;
				width: 100%;
			}
		`],cO([ez()],cR.prototype,"source",2),cO([ez()],cR.prototype,"layout",2),cO([ez({type:Boolean})],cR.prototype,"collapsed",2),cO([ez({type:Boolean})],cR.prototype,"canAutoRegister",2),cR=cO([eL("gl-mcp-banner")],cR);var cI=Object.defineProperty,cB=Object.getOwnPropertyDescriptor,cE=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cB(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cI(t,r,n),n};let cT=class extends GlElement{get hasAlerts(){return!0===this.alertVisibility.header||void 0}get alertVisibility(){let e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||this._state.discovering||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return e$`
			${eF(this.alertVisibility.noRepo,()=>e$`
					<div id="no-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">No repository detected</h1>
						<div class="alert__description">
							<p>
								To use GitLens, open a folder containing a git repository or clone from a URL from the
								Explorer.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Open a Folder or Repository</gl-button
								>
							</p>
							<p class="mb-0">
								If you have opened a folder with a repository, please let us know by
								<a class="one-line" href="https://github.com/gitkraken/vscode-gitlens/issues/new/choose"
									>creating an Issue</a
								>.
							</p>
						</div>
					</div>
				`)}
			${eF(this.alertVisibility.unsafeRepo,()=>e$`
					<div id="unsafe-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">Unsafe repository</h1>
						<div class="alert__description">
							<p>
								Unable to open any repositories as Git blocked them as potentially unsafe, due to the
								folder(s) not being owned by the current user.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Manage in Source Control</gl-button
								>
							</p>
						</div>
					</div>
				`)}
			${eF(this.alertVisibility.untrusted,()=>e$`
					<div id="untrusted-alert" class="alert alert--info mb-0" aria-hidden="true">
						<h1 class="alert__title">Untrusted workspace</h1>
						<div class="alert__description">
							<p>Unable to open repositories in Restricted Mode.</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.trust.manage"
									>Manage Workspace Trust</gl-button
								>
							</p>
						</div>
					</div>
				`)}
		`}};cT.styles=[oR,oB,oT,j`
			.alert {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.one-line {
				white-space: nowrap;
			}

			gl-button.is-basic {
				max-width: 300px;
				width: 100%;
			}
			gl-button.is-basic + gl-button.is-basic {
				margin-top: 1rem;
			}
		`],cE([ez({type:Boolean,reflect:!0,attribute:"has-alerts"})],cT.prototype,"hasAlerts",1),cE([A({context:"state",subscribe:!0}),eN()],cT.prototype,"_state",2),cT=cE([eL("gl-repo-alerts")],cT);var cL=Object.defineProperty,cD=Object.getOwnPropertyDescriptor,cz=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cD(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cL(t,r,n),n};let cN=class extends GlAppHost{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}createStateProvider(e,t,r){return this.disposables.push(this._activeOverviewState=new ActiveOverviewState(t)),this.disposables.push(this._inactiveOverviewState=new InactiveOverviewState(t)),new HomeStateProvider(this,e,t,r)}connectedCallback(){super.connectedCallback?.(),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case td.is(e):this._header.show();break;case ta.is(e):this._header.refreshPromo(),this.refreshAiAllAccessPromo()}}))}render(){return e$`
			<div class="home scrollable">
				<gl-home-header class="home__header"></gl-home-header>
				${eF(!this.state?.previewEnabled,()=>e$`<gl-preview-banner></gl-preview-banner>`)}
				${eF(this.state?.amaBannerCollapsed===!1,()=>e$`<gl-ama-banner></gl-ama-banner>`)}
				<gl-repo-alerts class="home__alerts"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					${eF(this.state?.previewEnabled===!0,()=>e$`
							<gl-preview-banner></gl-preview-banner>
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-mcp-banner
								.layout=${"responsive"}
								.source=${"home"}
								.canAutoRegister=${this.state?.mcpCanAutoRegister??!1}
								.collapsed=${this.state?.mcpBannerCollapsed??!0}
							></gl-mcp-banner>
							<gl-active-work></gl-active-work>
							<gl-launchpad></gl-launchpad>
							<gl-overview></gl-overview>
						`,()=>e$`
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-mcp-banner
								.layout=${"responsive"}
								.source=${"home"}
								.canAutoRegister=${this.state?.mcpCanAutoRegister??!1}
								.collapsed=${this.state?.mcpBannerCollapsed??!0}
							></gl-mcp-banner>
							<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>
						`)}
				</main>
			</div>
		`}refreshAiAllAccessPromo(){this.allAccessPromoBanner?.requestUpdate()}};cN.styles=[oB,oI,oE],cz([P({context:"activeOverviewState"})],cN.prototype,"_activeOverviewState",2),cz([P({context:"inactiveOverviewState"})],cN.prototype,"_inactiveOverviewState",2),cz([ej("gl-home-header")],cN.prototype,"_header",2),cz([ej("gl-ai-all-access-banner")],cN.prototype,"allAccessPromoBanner",2),cN=cz([eL("gl-home-app")],cN);export{cN as GlHomeApp};