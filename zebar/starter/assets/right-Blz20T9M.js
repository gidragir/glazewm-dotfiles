import{r as h,j as e}from"./index-main.js";import{c as g}from"./index-Cex4FfrB.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=(...s)=>s.filter((a,r,i)=>!!a&&a.trim()!==""&&i.indexOf(a)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=h.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:o="",children:c,iconNode:l,...t},n)=>h.createElement("svg",{ref:n,...w,width:a,height:a,stroke:s,strokeWidth:i?Number(r)*24/Number(a):r,className:y("lucide",o),...t},[...l.map(([d,u])=>h.createElement(d,u)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(s,a)=>{const r=h.forwardRef(({className:i,...o},c)=>h.createElement(_,{ref:c,iconNode:a,className:y(`lucide-${p(s)}`,i),...o}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=m("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=m("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=m("Microchip",[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]]),f=g({glazewm:{type:"glazewm"},network:{type:"network"},cpu:{type:"cpu"},battery:{type:"battery"},memory:{type:"memory"},keyboard:{type:"keyboard"},weather:{type:"weather"}}),M=()=>{var l;const[a,r]=h.useState(f.outputMap);h.useEffect(()=>{f.onOutput(()=>r(f.outputMap))},[]);function i(t){var d,u;const n=((d=t.defaultGateway)==null?void 0:d.signalStrength)??0;switch((u=t.defaultInterface)==null?void 0:u.type){case"ethernet":return e.jsx("i",{className:"nf nf-md-ethernet_cable"});case"wifi":return n>=80?e.jsx("i",{className:"nf nf-md-wifi_strength_4"}):n>=65?e.jsx("i",{className:"nf nf-md-wifi_strength_3"}):n>=40?e.jsx("i",{className:"nf nf-md-wifi_strength_2"}):n>=25?e.jsx("i",{className:"nf nf-md-wifi_strength_1"}):e.jsx("i",{className:"nf nf-md-wifi_strength_outline"});default:return e.jsx("i",{className:"nf nf-md-wifi_strength_off_outline"})}}function o(t){const n=t.chargePercent;return n>90?e.jsx("i",{className:"nf nf-fa-battery_4"}):n>70?e.jsx("i",{className:"nf nf-fa-battery_3"}):n>40?e.jsx("i",{className:"nf nf-fa-battery_2"}):n>20?e.jsx("i",{className:"nf nf-fa-battery_1"}):e.jsx("i",{className:"nf nf-fa-battery_0"})}function c(t){switch(t.status){case"clear_day":return e.jsx("i",{className:"nf nf-weather-day_sunny"});case"clear_night":return e.jsx("i",{className:"nf nf-weather-night_clear"});case"cloudy_day":return e.jsx("i",{className:"nf nf-weather-day_cloudy"});case"cloudy_night":return e.jsx("i",{className:"nf nf-weather-night_alt_cloudy"});case"light_rain_day":return e.jsx("i",{className:"nf nf-weather-day_sprinkle"});case"light_rain_night":return e.jsx("i",{className:"nf nf-weather-night_alt_sprinkle"});case"heavy_rain_day":return e.jsx("i",{className:"nf nf-weather-day_rain"});case"heavy_rain_night":return e.jsx("i",{className:"nf nf-weather-night_alt_rain"});case"snow_day":return e.jsx("i",{className:"nf nf-weather-day_snow"});case"snow_night":return e.jsx("i",{className:"nf nf-weather-night_alt_snow"});case"thunder_day":return e.jsx("i",{className:"nf nf-weather-day_lightning"});case"thunder_night":return e.jsx("i",{className:"nf nf-weather-night_alt_lightning"})}}return e.jsxs("div",{className:"right",children:[a.glazewm&&e.jsxs(e.Fragment,{children:[a.glazewm.bindingModes.map(t=>e.jsx("button",{className:"binding-mode",children:t.displayName??t.name},t.name)),e.jsx("button",{className:`tiling-direction nf ${a.glazewm.tilingDirection==="horizontal"?"nf-md-swap_horizontal":"nf-md-swap_vertical"}`,onClick:()=>{var t;return(t=a.glazewm)==null?void 0:t.runCommand("toggle-tiling-direction")}})]}),a.network&&e.jsxs("div",{className:"icon-value-container",children:[i(a.network),(l=a.network.defaultGateway)==null?void 0:l.ssid]}),a.memory&&e.jsxs("div",{className:"icon-value-container",children:[e.jsx(j,{className:"lucide-icon",size:15}),Math.round(a.memory.usage),"%"]}),a.keyboard&&e.jsxs("div",{className:"icon-value-container",children:[e.jsx(k,{className:"lucide-icon",size:15}),a.keyboard.layout]}),a.cpu&&e.jsxs("div",{className:"icon-value-container",children:[e.jsx(x,{className:"lucide-icon",size:15}),e.jsxs("span",{className:a.cpu.usage>85?"high-usage":"",children:[Math.round(a.cpu.usage),"%"]})]}),a.battery&&e.jsxs("div",{className:"icon-value-container",children:[a.battery.isCharging&&e.jsx("i",{className:"nf nf-md-power_plug charging-icon"}),o(a.battery),Math.round(a.battery.chargePercent),"%"]}),a.weather&&e.jsxs("div",{className:"icon-value-container",children:[c(a.weather),Math.round(a.weather.celsiusTemp),"°C"]})]})};export{M as default};
