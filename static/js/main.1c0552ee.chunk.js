(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1OQvU"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1nUkR","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2hVNo",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3c-tH"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3kj40",Modal:"Modal_Modal__2ODeR"}},15:function(e,t,a){e.exports={Button:"Button_Button__2z20G"}},21:function(e,t,a){},23:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(21),a(3)),s=a(4),i=a(6),u=a(5),h=a(7),m=(a(22),a(23),a(9)),p=a.n(m),d=a(1),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleNameChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):Object(h.b)("Enter name photo")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:p.a.Searchbar,children:Object(d.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(d.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:p.a.SearchFormInput,type:"text",value:this.state.value,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=a(14),b=a(11),f=a.n(b),y=a(12),O=a.n(y),v=function(e){var t=e.url,a=e.tags,n=e.modalUrl,r=e.onClick;return Object(d.jsx)("li",{className:O.a.ImageGalleryItem,onClick:function(){return r(n)},children:Object(d.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItemImage})})},S=a(15),x=a.n(S),_=function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",className:x.a.Button,onClick:t,children:"Load more"})},I=a(16),k=a.n(I);function C(e){e.query;return Object(d.jsx)(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}var w=a(13),F=a.n(w),N=document.querySelector("#modal-root"),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){console.log("click"),t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.url,a=e.onClose;return Object(o.createPortal)(Object(d.jsx)("div",{className:F.a.Overlay,onClick:a,children:Object(d.jsxs)("div",{className:F.a.Modal,children:[Object(d.jsx)("img",{src:t,alt:""}),this.props.children]})}),N)}}]),a}(n.Component),M=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22354412-39f12e0c13d349d19862b3301&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438 ".concat(e)))}))},B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictures:null,error:null,status:"idle",page:1,isModalOpen:!1,modalUrl:""},e.getNextPagePictures=function(){var t=e.state.page,a=e.props.query;e.setState({status:"pending"}),M(a,t).then((function(t){if(0===t.hits.length)return console.log("lenght 0"),void h.b.warning('No more pictures for "'.concat(a,'" query'));e.setState((function(e){return{pictures:[].concat(Object(j.a)(e.pictures),Object(j.a)(t.hits)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t,status:"rejected"})})).finally((function(){return e.setState({status:"idle"})}))},e.toggleModal=function(t){e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalUrl:t}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.query,r=this.state.page;e.query!==n&&(this.setState({pictures:null,status:"pending",page:1}),M(n,r).then((function(e){if(0===e.total)return h.b.error("No result for ".concat(n,". Try another query"));a.setState({pictures:e.hits})})).catch((function(e){return a.setState({error:e,status:"rejected"})})).finally((function(){return a.setState((function(e){return{status:"idle",page:e.page+1}}))})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.pictures,n=t.error,r=t.status,o=t.isModalOpen,c=t.modalUrl;return"idle"===r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:f.a.ImageGallery,children:a&&a.map((function(t){return Object(d.jsx)(v,{url:t.webformatURL,tags:t.tags,modalUrl:t.largeImageURL,onClick:e.toggleModal},t.id)}))}),a&&Object(d.jsx)(_,{onClick:this.getNextPagePictures}),o&&Object(d.jsx)(G,{onClose:this.toggleModal,url:c})]}):"rejected"===r?Object(d.jsx)("h2",{children:n.message}):"pending"===r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:f.a.ImageGallery,children:a&&a.map((function(e){return Object(d.jsx)(v,{url:e.webformatURL,tags:e.tags},e.id)}))}),Object(d.jsx)(C,{}),Object(d.jsx)(_,{onClick:this.getNextPagePictures})]}):void 0}}]),a}(n.Component),q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",loading:!1},e.onSubmit=function(t){e.setState({query:t}),console.log(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{onSubmit:this.onSubmit}),Object(d.jsx)(B,{query:this.state.query}),Object(d.jsx)(h.a,{autoClose:3e3,position:"top-left"})]})}}]),a}(n.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),L()},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1x92C",SearchForm:"Searchbar_SearchForm__16Q8x",SearchFormButton:"Searchbar_SearchFormButton__19tXD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__guyvP",SearchFormInput:"Searchbar_SearchFormInput__sjcg-"}}},[[45,1,2]]]);
//# sourceMappingURL=main.1c0552ee.chunk.js.map