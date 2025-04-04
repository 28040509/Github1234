import{u as h,r as u,j as e}from"./index-BT71aLWQ.js";const b=()=>{const r=h(),[a,i]=u.useState({primaryResidence:"",Country:"",State:"",City:"",additionalResidence:"",Country:"",State:"",City:"",selectedRegions:[]}),d=["United States","Canada","Mexico","Asia","Middle East","Africa","United Kingdom","Oceania"],t=s=>{const{name:l,value:n}=s.target;i({...a,[l]:n})},o=s=>{const{value:l,checked:n}=s.target;i(c=>({...c,selectedRegions:n?[...c.selectedRegions,l]:c.selectedRegions.filter(x=>x!==l)}))},m=s=>{s.preventDefault(),console.log("Submitted Data:",a),r("/experience")};return e.jsx("div",{className:"container mt-4",children:e.jsxs("div",{className:"card shadow p-4",children:[e.jsx("h4",{className:"text-white p-3 rounded",style:{backgroundColor:"#4A90E2"},children:"Region Availability"}),e.jsxs("form",{onSubmit:m,className:"mt-3",children:[e.jsx("h4",{className:"text-black  rounded",children:"Primary Residence"}),e.jsx("p",{className:"text-muted",children:"List the primary city that you work as a local."}),e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"form-label fw-bold",children:["Country ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"Country",value:a.Country,onChange:t,className:"form-control",placeholder:"Enter country",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"form-label fw-bold",children:["State ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"State",value:a.State,onChange:t,className:"form-control",placeholder:"Enter state",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"form-label fw-bold",children:["City ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"City",value:a.City,onChange:t,className:"form-control",placeholder:"Enter city",required:!0})]})]}),e.jsx("hr",{}),e.jsx("h4",{className:"text-black  rounded",children:"Additional Residences"}),e.jsx("p",{className:"text-muted",children:"List the cities where you can work without requiring travel or housing expenses."}),e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"form-label fw-bold",children:["Country ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"Country",value:a.Country,onChange:t,className:"form-control",placeholder:"Enter country",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"form-label fw-bold",children:["State ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"State",value:a.State,onChange:t,className:"form-control",placeholder:"Enter state",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"form-label fw-bold",children:["City ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"City",value:a.City,onChange:t,className:"form-control",placeholder:"Enter city",required:!0}),e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx("button",{type:"submit",className:"btn btn-secondary mb-4 text-align center ",style:{backgroundColor:"#4A90E2"},children:"+  Add"})})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{className:"form-label fw-",children:[e.jsx("h4",{children:"  Additional Regions of Experience "}),e.jsx("p",{classname:"text muted",children:"Areas you are willing to work with some relevant experience"})]}),e.jsx("div",{className:"row",children:d.map((s,l)=>e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-check p-2",children:[e.jsx("input",{type:"checkbox",id:s,name:"selectedRegions",value:s,checked:a.selectedRegions.includes(s),onChange:o,className:"form-check-input"}),e.jsx("label",{htmlFor:s,className:"form-check-label",children:s})]})},l))})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[e.jsx("button",{type:"button",onClick:()=>r("/"),className:"btn btn-secondary",children:"Back"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Next"})]})]})]})})};export{b as default};
