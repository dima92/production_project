"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[694],{"./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"shared/ThemeSwitcher",component:__webpack_require__("./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx").O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};var Normal={args:{}},Dark={args:{},decorators:[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK)]};Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Normal.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}};let __namedExportsOrder=["Normal","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--primary-color);padding:6px 15px}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__clearInverted--DYECq{padding:0;border:none;background:none;outline:none;color:var(--inverted-primary-color)}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);color:var(--primary-color);background:none}.src-shared-ui-Button-Button-module__background--nXdyj{background:var(--bg-color);color:var(--primary-color);border:none}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACE,cAAA,CACA,0BAAA,CACA,gBAAA,CAGF,kDACE,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGF,0DACE,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,mCAAA,CAGF,oDACE,qCAAA,CACA,0BAAA,CACA,eAAA,CAGF,uDACE,0BAAA,CACA,0BAAA,CACA,WAAA,CAGF,+DACE,mCAAA,CACA,mCAAA,CACA,WAAA,CAGF,mDACE,SAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,sGACE,yBAAA,CACA,0BAAA,CAGF,mDACE,kBAAA,CAGF,mDACE,kBAAA,CAGF,oDACE,mBAAA",sourcesContent:[".Button {\r\n  cursor: pointer;\r\n  color: var(--primary-color);\r\n  padding: 6px 15px;\r\n}\r\n\r\n.clear {\r\n  padding: 0;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n}\r\n\r\n.clearInverted {\r\n  padding: 0;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  color: var(--inverted-primary-color);\r\n}\r\n\r\n.outline {\r\n  border: 1px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n  background: none;\r\n}\r\n\r\n.background {\r\n  background: var(--bg-color);\r\n  color: var(--primary-color);\r\n  border: none;\r\n}\r\n\r\n.backgroundInverted {\r\n  background: var(--inverted-bg-color);\r\n  color: var(--inverted-primary-color);\r\n  border: none;\r\n}\r\n\r\n.square {\r\n  padding: 0;\r\n}\r\n\r\n.square.size_m {\r\n  width: var(--font-line-m);\r\n  height: var(--font-line-m);\r\n}\r\n\r\n.square.size_l {\r\n  width: var(--font-line-l);\r\n  height: var(--font-line-l);\r\n}\r\n\r\n.square.size_xl {\r\n  width: var(--font-line-xl);\r\n  height: var(--font-line-xl);\r\n}\r\n\r\n.size_m {\r\n  font: var(--font-m);\r\n}\r\n\r\n.size_l {\r\n  font: var(--font-l);\r\n}\r\n\r\n.size_xl {\r\n  font: var(--font-xl);\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",clearInverted:"src-shared-ui-Button-Button-module__clearInverted--DYECq",outline:"src-shared-ui-Button-Button-module__outline--pxBl_",background:"src-shared-ui-Button-Button-module__background--nXdyj",backgroundInverted:"src-shared-ui-Button-Button-module__backgroundInverted--EXVU3",square:"src-shared-ui-Button-Button-module__square--pKS1A",size_m:"src-shared-ui-Button-Button-module__size_m--xvXQX",size_l:"src-shared-ui-Button-Button-module__size_l--rsm7T",size_xl:"src-shared-ui-Button-Button-module__size_xl--WJ8He"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},additional=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[cls].concat(_to_consumable_array(additional.filter(Boolean)),_to_consumable_array(Object.entries(mods).filter(function(param){var _param=_sliced_to_array(param,2);return _param[0],!!_param[1]}).map(function(param){return _sliced_to_array(param,1)[0]}))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,qE:()=>ButtonSize,bn:()=>ButtonTheme});var ButtonTheme,ButtonSize,react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Button_module.Z,options);let Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}!function(ButtonTheme){ButtonTheme.CLEAR="clear",ButtonTheme.CLEAR_INVERTED="clearInverted",ButtonTheme.OUTLINE="outline",ButtonTheme.BACKGROUND="background",ButtonTheme.BACKGROUND_INVERTED="backgroundInverted"}(ButtonTheme||(ButtonTheme={})),function(ButtonSize){ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.XL="size_xl"}(ButtonSize||(ButtonSize={}));var Button=function(props){var _obj,className=props.className,children=props.children,theme=props.theme,square=props.square,_props_size=props.size,otherProps=_object_without_properties(props,["className","children","theme","square","size"]),mods=(_define_property(_obj={},Button_Button_module[theme],!0),_define_property(_obj,Button_Button_module.square,square),_define_property(_obj,Button_Button_module[void 0===_props_size?"size_m":_props_size],!0),_obj);return react.createElement("button",_object_spread({type:"button",className:(0,classNames.A)(Button_Button_module.Button,mods,[className])},otherProps),children)};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"clearInverted"'},{value:'"outline"'},{value:'"background"'},{value:'"backgroundInverted"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"size_m"'},{value:'"size_l"'},{value:'"size_xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ThemeSwitcher});var _path,_path2,_path3,theme_dark_path,theme_dark_path2,react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let theme_light=function(props){return react.createElement("svg",_extends({width:40,height:41,fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react.createElement("path",{d:"M33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4Z",fill:"#FFC700"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.56 6.955 2.92 1.832-1.007-3.29 2.663-2.226-3.412-.06L18.402 0l-1.144 3.25-3.451.237 2.741 2.089-.828 3.349 2.84-1.97Zm-5.878 7.506L14.97 15.9l-.789-2.581 2.072-1.715-2.683-.059-1.006-2.502-.887 2.542-2.683.177 2.15 1.635-.67 2.601 2.208-1.537Z",fill:"#FFC700"})),_path3||(_path3=react.createElement("path",{d:"M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",fill:"#FFC700"})))};function theme_dark_extends(){return(theme_dark_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let theme_dark=function(props){return react.createElement("svg",theme_dark_extends({width:40,height:41,fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),theme_dark_path||(theme_dark_path=react.createElement("path",{d:"M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",fill:"#0115C6"})),theme_dark_path2||(theme_dark_path2=react.createElement("path",{d:"m14.97 15.9-2.288-1.439-2.209 1.537.671-2.6-2.15-1.636 2.683-.177.887-2.542 1.006 2.502 2.683.06-2.072 1.714.79 2.58ZM21.48 8.787l-2.92-1.832-2.84 1.97.828-3.35-2.741-2.088 3.451-.236L18.402 0l1.322 3.211 3.412.06-2.663 2.226 1.006 3.29ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4ZM33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58Z",fill:"#0115C6"})))};var Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),ThemeSwitcher=function(param){var className=param.className,_useTheme=(0,ThemeProvider.Fg)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme;return react.createElement(Button.zx,{theme:Button.bn.CLEAR,className:(0,classNames.A)("",{},[className]),onClick:toggleTheme},theme===ThemeProvider.Q2.DARK?react.createElement(theme_dark,null):react.createElement(theme_light,null))};try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}}}]);