"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[811],{"./src/widgets/Navbar/ui/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var react=__webpack_require__("./node_modules/react/index.js"),ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),Modal=__webpack_require__("./src/shared/ui/Modal/Modal.tsx"),LoginForm=__webpack_require__("./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx"),LoginModal=function(param){param.className;var isOpen=param.isOpen,onClose=param.onClose;return react.createElement(Modal.u,{isOpen:isOpen,onClose:onClose,lazy:!0},react.createElement(LoginForm.U,null))};try{LoginModal.displayName="LoginModal",LoginModal.__docgenInfo={description:"",displayName:"LoginModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx#LoginModal"]={docgenInfo:LoginModal.__docgenInfo,name:"LoginModal",path:"src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx#LoginModal"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Navbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Navbar_module.Z,options);let ui_Navbar_module=Navbar_module.Z&&Navbar_module.Z.locals?Navbar_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Navbar=function(param){var className=param.className,t=(0,useTranslation.$)().t,_useState=_sliced_to_array((0,react.useState)(!1),2),isAuthModal=_useState[0],setIsAuthModal=_useState[1],onCloseModal=(0,react.useCallback)(function(){setIsAuthModal(!1)},[]),onShowModal=(0,react.useCallback)(function(){setIsAuthModal(!0)},[]);return react.createElement("div",{className:(0,classNames.A)(ui_Navbar_module.Navbar,{},[className])},react.createElement(Button.zx,{theme:Button.bn.CLEAR_INVERTED,className:ui_Navbar_module.links,onClick:onShowModal},t("Войти")),react.createElement(LoginModal,{isOpen:isAuthModal,onClose:onCloseModal}))};try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Navbar/ui/Navbar.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/widgets/Navbar/ui/Navbar.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}let Navbar_stories={title:"widget/Navbar",component:Navbar,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};var Light={args:{}},Dark={args:{},decorators:[(0,ThemeDecorator.F)(ThemeProvider.Q2.DARK)]};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}};let __namedExportsOrder=["Light","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Modal-Modal-module__Modal--ESw4g{position:fixed;top:0;bottom:0;right:0;left:0;opacity:0;pointer-events:none;z-index:-1;color:var(--primary-color)}.src-shared-ui-Modal-Modal-module__overlay--OTlZW{width:100%;height:100%;background:var(--overlay-color);display:flex;align-items:center;justify-content:center}.src-shared-ui-Modal-Modal-module__content--NxhSG{padding:20px;border-radius:12px;background:var(--bg-color);transition:.3s transform;transform:scale(0.5);max-width:60%}.src-shared-ui-Modal-Modal-module__opened--RuLiu{pointer-events:auto;opacity:1;z-index:var(--modal-z-index)}.src-shared-ui-Modal-Modal-module__opened--RuLiu .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(1)}.src-shared-ui-Modal-Modal-module__isClosing--xbkvH .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(0.2)}","",{version:3,sources:["webpack://./src/shared/ui/Modal/Modal.module.scss"],names:[],mappings:"AAAA,gDACE,cAAA,CACA,KAAA,CACA,QAAA,CACA,OAAA,CACA,MAAA,CACA,SAAA,CACA,mBAAA,CACA,UAAA,CACA,0BAAA,CAGF,kDACE,UAAA,CACA,WAAA,CACA,+BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGF,kDACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAAA,CAGF,iDACE,mBAAA,CACA,SAAA,CACA,4BAAA,CAEA,mGACE,kBAAA,CAKF,sGACE,oBAAA",sourcesContent:[".Modal {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  z-index: -1;\r\n  color: var(--primary-color);\r\n}\r\n\r\n.overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--overlay-color);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  background: var(--bg-color);\r\n  transition: 0.3s transform;\r\n  transform: scale(0.5);\r\n  max-width: 60%;\r\n}\r\n\r\n.opened {\r\n  pointer-events: auto;\r\n  opacity: 1;\r\n  z-index: var(--modal-z-index);\r\n\r\n  .content {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.isClosing {\r\n  .content {\r\n    transform: scale(0.2);\r\n  }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Modal:"src-shared-ui-Modal-Modal-module__Modal--ESw4g",overlay:"src-shared-ui-Modal-Modal-module__overlay--OTlZW",content:"src-shared-ui-Modal-Modal-module__content--NxhSG",opened:"src-shared-ui-Modal-Modal-module__opened--RuLiu",isClosing:"src-shared-ui-Modal-Modal-module__isClosing--xbkvH"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yK{width:100%;height:var(--navbar-height);background:var(--inverted-bg-color);display:flex;align-items:center;padding:20px}.src-widgets-Navbar-ui-Navbar-module__links--_tl_p{margin-left:auto}.src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP{margin-right:15px}","",{version:3,sources:["webpack://./src/widgets/Navbar/ui/Navbar.module.scss"],names:[],mappings:"AAAA,oDACE,UAAA,CACA,2BAAA,CACA,mCAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CAGF,mDACE,gBAAA,CAGF,sDACE,iBAAA",sourcesContent:[".Navbar {\r\n  width: 100%;\r\n  height: var(--navbar-height);\r\n  background: var(--inverted-bg-color);\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n}\r\n\r\n.links {\r\n  margin-left: auto;\r\n}\r\n\r\n.mainLink {\r\n  margin-right: 15px;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Navbar:"src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yK",links:"src-widgets-Navbar-ui-Navbar-module__links--_tl_p",mainLink:"src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function(props){var children=props.children,_props_element=props.element,element=void 0===_props_element?document.body:_props_element;return(0,react_dom.createPortal)(children,element)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/shared/ui/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}var ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Modal_module.Z,options);let Modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Modal=function(props){var _obj,className=props.className,children=props.children,isOpen=props.isOpen,onClose=props.onClose,lazy=props.lazy,_useState=_sliced_to_array((0,react.useState)(!1),2),isClosing=_useState[0],setIsClosing=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isMounted=_useState1[0],setIsMounted=_useState1[1],timerRef=(0,react.useRef)(),theme=(0,ThemeProvider.Fg)().theme;(0,react.useEffect)(function(){isOpen&&setIsMounted(!0)},[isOpen]);var closeHandler=(0,react.useCallback)(function(){onClose&&(setIsClosing(!0),timerRef.current=setTimeout(function(){onClose(),setIsClosing(!1)},300))},[onClose]),onKeyDown=(0,react.useCallback)(function(e){"Escape"===e.key&&closeHandler()},[closeHandler]);(0,react.useEffect)(function(){return isOpen&&window.addEventListener("keydown",onKeyDown),function(){clearTimeout(timerRef.current),window.removeEventListener("keydown",onKeyDown)}},[isOpen,onKeyDown]);var mods=(_define_property(_obj={},Modal_Modal_module.opened,isOpen),_define_property(_obj,Modal_Modal_module.isClosing,isClosing),_obj);return lazy&&!isMounted?null:react.createElement(Portal,null,react.createElement("div",{className:(0,classNames.A)(Modal_Modal_module.Modal,mods,[className,theme,"app_modal"])},react.createElement("div",{className:Modal_Modal_module.overlay,onClick:closeHandler},react.createElement("div",{className:Modal_Modal_module.content,onClick:function(e){e.stopPropagation()}},children))))};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},lazy:{defaultValue:null,description:"",name:"lazy",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/shared/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}}}]);