"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[622],{8877:function(e,t,n){n.r(t);var a=n(7294);t.default=function(e){let{experience:t,filters:n,checkHandleHoverEnter:s,checkHandleHoverLeave:i}=e;const{0:r,1:l}=(0,a.useState)(!1),{0:c,1:o}=(0,a.useState)(!1);console.log("testtt",t);var h=null;return t&&(h=t.tag),(0,a.useEffect)((()=>{0===n.length?l(!0):Array.isArray(h)?h.findIndex((e=>e===n))>=0?l(!0):l(!1):l(h===n)}),[n]),a.createElement("div",{className:r||c?"right__sectionContent":"right__sectionContentDisabled",onMouseEnter:()=>{s(h),o(!0)},onMouseLeave:()=>{i(),o(!1)}},a.createElement("h4",{className:"right__sectionContentTitle"},t.title),a.createElement("h5",{className:"right__sectionContentInfo"},t.where,", ",t.when),t.task.map((e=>a.createElement("div",{className:"right__sectionContentDetailContainer"},a.createElement("p",{className:"right__sectionContentDetail"},"•"),a.createElement("p",{className:"right__sectionContentDetail"},e)))),t.hasOwnProperty("link")?a.createElement("div",{className:"right__sectionContentDetailContainer"},a.createElement("p",{className:"right__sectionContentLink"},"•"),a.createElement("p",{className:"right__sectionContentLink"},a.createElement("a",{href:t.link},t.link))):null)}}}]);
//# sourceMappingURL=component---src-pages-experience-js-7470866a99c30b358f42.js.map