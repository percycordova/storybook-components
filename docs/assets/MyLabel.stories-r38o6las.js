import{j as x}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const C=({label:b,size:g="normal",allCaps:h=!1,color:v="primary",fontColor:z})=>x.jsx("span",{style:{color:z,textTransform:h?"uppercase":"none"},className:`${g} label  text-${v}`,children:b});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"Label color",defaultValue:{value:'"primary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const L={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:{type:"inline-radio",options:["normal","h1","h2","h3"]}},color:{control:{type:"select",options:["primary","secondary","tertiary"]}},fontColor:{control:"color"}}},e={args:{label:"Basic Label",size:"h2",fontColor:"#182964",allCaps:!1,color:"primary"}},a={args:{label:"All Caps",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",color:"secondary",size:"h2",allCaps:!1}},l={args:{label:"Custom label",fontColor:"#5517ac",color:"primary",allCaps:!1}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Basic Label",
    size: "h2",
    fontColor: "#182964",
    allCaps: false,
    color: "primary"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var t,c,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "All Caps",
    size: "normal",
    allCaps: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    color: "secondary",
    size: "h2",
    allCaps: false
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Custom label",
    fontColor: "#5517ac",
    color: "primary",
    allCaps: false
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,L as default};
