import{r as o,j as t}from"./index-D7cwOykR.js";import{c as n}from"./index-94UlVcn_.js";import{c as d}from"./createLucideIcon-e5bMHMnC.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],i=d("Calendar",p),e=n({date:{type:"date",formatting:"EEE d MMM t"}}),l=({icon_size:r})=>{var a;const[s,c]=o.useState(e.outputMap);return o.useEffect(()=>{e.onOutput(()=>c(e.outputMap))},[]),t.jsx("div",{className:"center",children:t.jsxs("div",{className:"icon-value-container",children:[t.jsx(i,{className:"lucide-icon",size:r}),(a=s.date)==null?void 0:a.formatted]})})};export{l as default};
