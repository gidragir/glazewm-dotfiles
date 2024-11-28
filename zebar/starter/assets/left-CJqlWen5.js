import{r as o,j as t}from"./index-main.js";import{c as u}from"./index-Cex4FfrB.js";import{c as m}from"./createLucideIcon-BTC7HJ-w.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=m("Grid2x2",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]),a=u({glazewm:{type:"glazewm"}}),x=({icon_size:i})=>{const[s,c]=o.useState(a.outputMap);return o.useEffect(()=>{a.onOutput(()=>c(a.outputMap))},[]),t.jsxs("div",{className:"left",children:[t.jsx(p,{size:i}),s.glazewm&&t.jsx("div",{className:"workspaces",children:s.glazewm.currentWorkspaces.map(e=>t.jsx("button",{className:`workspace ${e.hasFocus&&"focused"} ${e.isDisplayed&&"displayed"}`,onClick:()=>{var r;return(r=s.glazewm)==null?void 0:r.runCommand(`focus --workspace ${e.name}`)},children:e.displayName??e.name},e.name))})]})};export{x as default};
