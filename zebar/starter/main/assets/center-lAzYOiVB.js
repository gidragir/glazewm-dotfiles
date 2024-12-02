import{r,j as t}from"./index-MI_YR8rn.js";import{c as p}from"./index-CBleHQQ4.js";import{c as d}from"./createLucideIcon-oCXUueF5.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=d("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),e=p({date:{type:"date",formatting:"EEE d MMM t"}}),h=({icon_size:o})=>{var a;const[s,c]=r.useState(e.outputMap);return r.useEffect(()=>{e.onOutput(()=>c(e.outputMap))},[]),t.jsx("div",{className:"center",children:t.jsxs("div",{className:"icon-value-container",children:[t.jsx(n,{className:"lucide-icon",size:o}),(a=s.date)==null?void 0:a.formatted]})})};export{h as default};
