"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[622],{8877:function(e,t,n){n.r(t);var a=n(7294);t.default=function(e){let{experience:t,filters:n,checkHandleHoverEnter:s,checkHandleHoverLeave:i}=e;const{0:r,1:c}=(0,a.useState)(!1),{0:l,1:o}=(0,a.useState)(!1);if(t){tags=t.tag;const e=()=>{0===n.length?c(!0):Array.isArray(tags)?tags.findIndex((e=>e===n))>=0?c(!0):c(!1):tags===n?c(!0):c(!1)};return(0,a.useEffect)((()=>{e()}),[n]),a.createElement("div",{className:r||l?"right__sectionContent":"right__sectionContentDisabled",onMouseEnter:()=>{s(tags),o(!0)},onMouseLeave:()=>{i(),o(!1)}},a.createElement("h4",{className:"right__sectionContentTitle"},t.title),a.createElement("h5",{className:"right__sectionContentInfo"},t.where,", ",t.when),t.task.map((e=>a.createElement("div",{className:"right__sectionContentDetailContainer"},a.createElement("p",{className:"right__sectionContentDetail"},"•"),a.createElement("p",{className:"right__sectionContentDetail"},e)))),t.hasOwnProperty("link")?a.createElement("div",{className:"right__sectionContentDetailContainer"},a.createElement("p",{className:"right__sectionContentLink"},"•"),a.createElement("p",{className:"right__sectionContentLink"},a.createElement("a",{href:t.link},t.link))):null)}}}}]);
//# sourceMappingURL=component---src-pages-experience-js-171bd6880ac79a7e1749.js.map