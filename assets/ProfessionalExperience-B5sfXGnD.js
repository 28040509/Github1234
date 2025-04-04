import{u as g,r as c,j as e}from"./index-BT71aLWQ.js";const D=()=>{const x=g(),[a,d]=c.useState({company:"",roleName:"",location:"",startDate:"",endDate:"",description:"",currentlyWorking:!1}),[l,m]=c.useState({degreeType:"",qualification:"",school:"",fieldOfStudy:"",eduStartDate:"",eduEndDate:""}),[u,p]=c.useState([]),[h,j]=c.useState([]),s=t=>{const{name:o,value:r,type:i,checked:y}=t.target;d(v=>({...v,[o]:i==="checkbox"?y:r}))},n=t=>{const{name:o,value:r}=t.target;m(i=>({...i,[o]:r}))},f=()=>{a.company&&a.roleName&&a.startDate&&(p([...u,a]),d({company:"",roleName:"",location:"",startDate:"",endDate:"",description:"",currentlyWorking:!1}))},N=()=>{l.degreeType&&l.school&&l.fieldOfStudy&&(j([...h,l]),m({degreeType:"",qualification:"",school:"",fieldOfStudy:"",eduStartDate:"",eduEndDate:""}))},b=t=>{t.preventDefault(),console.log("Professional Experience:",u),console.log("Education:",h),x("/Skills-Training")};return e.jsx("div",{className:"container mt-4",children:e.jsxs("div",{className:"card shadow p-4",children:[e.jsx("h4",{className:"fw-bold",children:"Professional Experience"}),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Company *"}),e.jsx("input",{type:"text",name:"company",value:a.company,onChange:s,className:"form-control",placeholder:"Enter company name",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Role Name *"}),e.jsx("input",{type:"text",name:"roleName",value:a.roleName,onChange:s,className:"form-control",placeholder:"Enter role name",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Company Location *"}),e.jsx("input",{type:"text",name:"location",value:a.location,onChange:s,className:"form-control",placeholder:"Enter location",required:!0})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",children:"Start Date *"}),e.jsx("input",{type:"date",name:"startDate",value:a.startDate,onChange:s,className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",children:"End Date *"}),e.jsx("input",{type:"date",name:"endDate",value:a.endDate,onChange:s,className:"form-control",required:!a.currentlyWorking,disabled:a.currentlyWorking})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{name:"description",value:a.description,onChange:s,className:"form-control",placeholder:"Enter description",rows:"3"})]}),e.jsxs("div",{className:"form-check mb-3",children:[e.jsx("input",{type:"checkbox",name:"currentlyWorking",checked:a.currentlyWorking,onChange:s,className:"form-check-input"}),e.jsx("label",{className:"form-check-label",children:"I am currently working with this company"})]}),e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx("button",{type:"button",onClick:f,className:"btn btn-secondary mb-4",style:{backgroundColor:"#4A90E2"},children:"+ Add"})}),e.jsx("div",{children:e.jsx("h6",{className:"text-white p-2 rounded",style:{backgroundColor:"#4A90E2"},children:"Qualifications"})}),e.jsx("h5",{className:"mt-3",children:"Education"}),e.jsxs("div",{className:"row mb-3",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Degree Type *"}),e.jsxs("select",{name:"degreeType",value:l.degreeType,onChange:n,className:"form-control",required:!0,children:[e.jsx("option",{value:"",children:"Select degree type"}),e.jsx("option",{value:"High School",children:"High School"}),e.jsx("option",{value:"Bachelor's",children:"Bachelor's"}),e.jsx("option",{value:"Master's",children:"Master's"}),e.jsx("option",{value:"PhD",children:"PhD"})]})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Qualification *"}),e.jsx("input",{type:"text",name:"qualification",value:l.qualification,onChange:n,className:"form-control",placeholder:"Enter qualification",required:!0})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"School *"}),e.jsx("input",{type:"text",name:"school",value:l.school,onChange:n,className:"form-control",placeholder:"Enter school name",required:!0})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",children:"Field of Study *"}),e.jsx("input",{type:"text",name:"fieldOfStudy",value:l.fieldOfStudy,onChange:n,className:"form-control",placeholder:"Enter field of study",required:!0})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",children:"Start Date *"}),e.jsx("input",{type:"date",name:"eduStartDate",value:l.eduStartDate,onChange:n,className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",children:"End Date *"}),e.jsx("input",{type:"date",name:"eduEndDate",value:l.eduEndDate,onChange:n,className:"form-control",required:!0})]})]}),e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx("button",{type:"button",onClick:N,className:"btn btn-secondary mb-4",style:{backgroundColor:"#4A90E2"},children:"+ Add"})}),e.jsx("button",{type:"submit",className:"btn btn-primary",style:{backgroundColor:"#4A90E2"},children:"Next"})]})]})})};export{D as default};
