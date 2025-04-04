import{$ as m,u as x,r as j,j as r}from"./index-BT71aLWQ.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=m.createContext&&m.createContext(f),v=["attr","size","title"];function N(e,t){if(e==null)return{};var a=g(e,t),l,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)l=n[s],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}function g(e,t){if(e==null)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d.apply(this,arguments)}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,l)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?b(Object(a),!0).forEach(function(l){y(e,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))})}return e}function y(e,t,a){return t=w(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function w(e){var t=O(e,"string");return typeof t=="symbol"?t:t+""}function O(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,t);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p(e){return e&&e.map((t,a)=>m.createElement(t.tag,u({key:a},t.attr),p(t.child)))}function P(e){return t=>m.createElement(C,d({attr:u({},e.attr)},t),p(e.child))}function C(e){var t=a=>{var{attr:l,size:s,title:n}=e,i=N(e,v),o=s||a.size||"1em",c;return a.className&&(c=a.className),e.className&&(c=(c?c+" ":"")+e.className),m.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,l,i,{className:c,style:u(u({color:e.color||a.color},a.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),n&&m.createElement("title",null,n),e.children)};return h!==void 0?m.createElement(h.Consumer,null,a=>t(a)):t(f)}function E(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const D=()=>{const e=x(),[t,a]=j.useState({firstName:"",lastName:"",gender:"",position:"",about:"",mobileNumber:"",email:"",photo:null}),l=i=>{const{name:o,value:c}=i.target;a({...t,[o]:c})},s=i=>{const o=i.target.files[0];o&&a({...t,photo:URL.createObjectURL(o)})},n=i=>{i.preventDefault(),console.log("Form submitted:",t),e("/region-availability")};return r.jsx("div",{className:"container mt-5",children:r.jsxs("div",{className:"card shadow p-4",children:[r.jsx("div",{className:"col-md-12",children:r.jsx("h4",{className:"text-white p-3 rounded",style:{backgroundColor:"#4A90E2"},children:"Basic Details"})}),r.jsxs("form",{onSubmit:n,className:"mt-4",children:[r.jsxs("div",{className:"row mb-3",children:[r.jsxs("div",{className:"col-md-4",children:[r.jsxs("label",{className:"form-label fw-bold",children:["First Name ",r.jsx("span",{className:"text-danger",children:"*"})]}),r.jsx("input",{type:"text",name:"firstName",value:t.firstName,onChange:l,className:"form-control",placeholder:"Enter first name",required:!0}),r.jsxs("label",{className:"form-label fw-bold mt-3",children:["Gender ",r.jsx("span",{className:"text-danger",children:"*"})]}),r.jsxs("select",{name:"gender",value:t.gender,onChange:l,className:"form-select",required:!0,children:[r.jsx("option",{value:"",children:"Select Gender"}),r.jsx("option",{value:"Male",children:"Male"}),r.jsx("option",{value:"Female",children:"Female"}),r.jsx("option",{value:"Other",children:"Other"})]})]}),r.jsxs("div",{className:"col-md-4",children:[r.jsxs("label",{className:"form-label fw-bold",children:["Last Name",r.jsx("span",{className:"text-danger",children:"*"})]}),r.jsx("input",{type:"text",name:"lastName",value:t.lastName,onChange:l,className:"form-control",placeholder:"Enter last name",required:!0}),r.jsxs("label",{className:"form-label fw-bold mt-3",children:["Position ",r.jsx("span",{className:"text-danger",children:"*"})]}),r.jsx("input",{type:"text",name:"position",value:t.position,onChange:l,className:"form-control",placeholder:"Enter position",required:!0})]}),r.jsx("div",{className:"col-md-4",children:r.jsx("div",{className:" mb-4",children:r.jsxs("div",{className:"d-flex flex-column align-items-center",children:[r.jsx("label",{className:"fw-bold mb-2",children:"Upload Photo "}),r.jsxs("div",{className:"position-relative",children:[t.photo?r.jsx("img",{src:t.photo,alt:"Avatar Preview",className:"rounded-circle border border-primary",style:{width:"100px",height:"100px",objectFit:"cover"}}):r.jsx(E,{size:130,className:"text-secondary"}),r.jsx("input",{type:"file",accept:"image/*",onChange:s,className:"position-absolute w-100 h-100 opacity-0",style:{top:0,left:0,cursor:"pointer"},required:!0})]})]})})})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{className:"form-label fw-bold",children:"About"}),r.jsx("textarea",{name:"about",value:t.about,onChange:l,className:"form-control",placeholder:"Write here...",rows:"2"})]}),r.jsx("hr",{}),r.jsx("h5",{className:"fw-bold mb-3",children:"Contact"}),r.jsxs("div",{className:"row mb-4",children:[r.jsxs("div",{className:"col-md-6",children:[r.jsxs("label",{className:"form-label fw-bold",children:["Mobile Number ",r.jsx("span",{className:"text-danger",children:"*"})]}),r.jsx("input",{type:"text",name:"mobileNumber",value:t.mobileNumber,onChange:l,className:"form-control",placeholder:"Enter mobile number",required:!0})]}),r.jsxs("div",{className:"col-md-6",children:[r.jsxs("label",{className:"form-label fw-bold",children:["Email Address ",r.jsx("span",{className:"text-danger",children:"*"})]}),r.jsx("input",{type:"email",name:"email",value:t.email,onChange:l,className:"form-control",placeholder:"Enter email address",required:!0})]})]}),r.jsx("div",{className:"row mb-5",children:r.jsx("div",{className:"text-end",children:r.jsx("button",{type:"submit",className:"btn btn-primary px-4",style:{backgroundColor:"#4A90E2"},children:"Next"})})})]})]})})};export{D as default};
