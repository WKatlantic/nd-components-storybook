var Z=Object.create;var d=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,oe=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(e,r,o)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,z=(e,r)=>{for(var o in r||(r={}))x.call(r,o)&&j(e,o,r[o]);if(g)for(var o of g(r))P.call(r,o)&&j(e,o,r[o]);return e};var C=e=>d(e,"__esModule",{value:!0});var B=(e,r)=>{var o={};for(var t in e)x.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&g)for(var t of g(e))r.indexOf(t)<0&&P.call(e,t)&&(o[t]=e[t]);return o};var te=(e,r)=>()=>(e&&(r=e(e=0)),r);var M=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),ne=(e,r)=>{C(e);for(var o in r)d(e,o,{get:r[o],enumerable:!0})},ae=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of re(r))!x.call(e,t)&&t!=="default"&&d(e,t,{get:()=>r[t],enumerable:!(o=ee(r,t))||o.enumerable});return e},m=e=>ae(C(d(e!=null?Z(oe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var c,i=te(()=>{c=typeof document=="undefined"?new(require("url")).URL("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("main.js",document.baseURI).href});var D=M(_=>{i();var ie=Object.create,y=Object.defineProperty,le=Object.getOwnPropertyDescriptor,se=Object.getOwnPropertyNames,de=Object.getPrototypeOf,ce=Object.prototype.hasOwnProperty,S=e=>y(e,"__esModule",{value:!0}),ue=(e,r)=>{S(e);for(var o in r)y(e,o,{get:r[o],enumerable:!0})},pe=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of se(r))!ce.call(e,t)&&t!=="default"&&y(e,t,{get:()=>r[t],enumerable:!(o=le(r,t))||o.enumerable});return e},fe=e=>pe(S(y(e!=null?ie(de(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);ue(_,{useMediaQuery:()=>be});var E=fe(require("react")),be=e=>{let[r,o]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{let t=window.matchMedia(e);t.matches!==r&&o(t.matches);let l=()=>o(t.matches);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[r,e]),r}});var T=M(F=>{i();var ge=Object.create,u=Object.defineProperty,me=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,ve=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,W=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,p=(e,r)=>{for(var o in r||(r={}))w.call(r,o)&&W(e,o,r[o]);if(v)for(var o of v(r))L.call(r,o)&&W(e,o,r[o]);return e},q=e=>u(e,"__esModule",{value:!0}),he=(e,r)=>{var o={};for(var t in e)w.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&v)for(var t of v(e))r.indexOf(t)<0&&L.call(e,t)&&(o[t]=e[t]);return o},xe=(e,r)=>{q(e);for(var o in r)u(e,o,{get:r[o],enumerable:!0})},we=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of ye(r))!w.call(e,t)&&t!=="default"&&u(e,t,{get:()=>r[t],enumerable:!(o=me(r,t))||o.enumerable});return e},H=e=>we(q(u(e!=null?ge(ve(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);xe(F,{Button:()=>Oe});var k=H(require("react")),ke=H(require("@neon-district/system")),h=e=>({variant:{primary:{background:e.colors.pink1,"&:hover":{background:e.colors.pink2},"&:focus":{borderColor:e.colors.teal1},"&:active":{background:e.colors.pink3},"&:disabled":{background:e.colors.grey1,color:e.colors.grey3}},secondary:{background:e.colors.grey4,"&:hover":{background:e.colors.grey5},"&:focus":{background:e.colors.grey5,borderColor:e.colors.teal1},"&:active":{background:e.colors.grey5},"&:disabled":{background:e.colors.grey1,color:e.colors.grey3}},destructive:{color:e.colors.red1,borderColor:e.colors.red1,"&:hover":{background:e.colors.red50},"&:focus":{borderColor:e.colors.teal1},"&:active":{background:e.colors.red50},"&:disabled":{color:e.colors.grey3,borderColor:e.colors.grey1,background:e.colors.grey50}},outline:{borderColor:e.colors.pink1,"&:focus":{borderColor:e.colors.teal1},"&:disabled":{color:e.colors.grey3,borderColor:e.colors.grey1}},naked:{color:e.colors.pink1,"&:hover":{color:e.colors.pink2,background:e.colors.pink50},"&:focus":{borderColor:e.colors.teal1},"&:active":{color:e.colors.pink2,background:"transparent"},"&:disabled":{color:e.colors.grey3,background:"transparent"}}},shape:{rounded:{squared:{borderRadius:0},borderRadius:e.radii.full}},size:{sm:{minWidth:32,height:32,fontSize:e.fontSizes.xs,padding:`0 ${e.spaces[4]}`},md:{minWidth:40,height:40,fontSize:e.fontSizes.sm,padding:`0 ${e.spaces[6]}`}},fluid:{width:e.sizes.full}}),$e=(0,ke.default)("button")(({theme:e,variant:r,size:o,fluid:t,shape:l})=>p(p(p(p({appearance:"none",border:"1px solid",borderColor:"transparent",background:"transparent",fontFamily:"inherit",outline:0,fontWeight:600,textTransform:"uppercase",color:e.colors.white,display:"flex",alignItems:"center",justifyContent:"center",gap:e.spaces[2],userSelect:"none",transition:e.durations.fast,"&:not(:disabled)":{cursor:"pointer"}},t&&h(e).fluid),h(e).variant[r]),h(e).shape[l]),h(e).size[o])),Oe=k.default.forwardRef((e,r)=>{var o=e,{type:t="button",variant:l="primary",size:f="md",shape:s="squared",icon:b,iconPosition:$="left",children:O}=o,Y=he(o,["type","variant","size","shape","icon","iconPosition","children"]);return k.default.createElement($e,p({ref:r,type:t,variant:l,size:f,shape:s},Y),b&&$==="left"&&b,O&&k.default.createElement("span",null,O),b&&$==="right"&&b)})});ne(exports,{PageHeading:()=>Pe});i();i();var a=m(require("react")),R=m(D()),V=m(T());i();var n=m(require("@neon-district/system")),N=n.default.div`
  ${({theme:e})=>n.css`
    text-transform: uppercase;
    font-weight: ${e.fontWeights.medium};
  `}
`,U=n.default.div`
  ${({theme:e})=>n.css`
    font-size: ${e.fontSizes["2xl"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 5px;
  `}
`,I=n.default.h1`
  ${({theme:e,haveButton:r})=>n.css`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${e.colors.white};
    font-size: 18px;
    font-weight: ${e.fontWeights.medium};
    margin: 0;
    line-height: 24px;
    letter-spacing: 0.1em;

    @media (max-width: ${e.breakpoints.md}) {
      ${r&&"justify-content: center;"}
    }
  `}
`,Q=n.default.div`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  align-items: center;
`,A=n.default.div`
  ${({theme:e,haveButton:r,haveDescription:o})=>n.css`
    height: 2px;
    background: red;
    width: 160px;
    position: absolute;
    bottom: -8px;

    background: ${e.colors.grey4};

    @media (max-width: ${e.breakpoints.md}) {
      ${r&&!o&&"display: none;"}
    }
  `}
`,G=n.default.div`
  ${({theme:e})=>n.css`
    color: ${e.colors.grey3};
    border-left: 2px solid;
    border-color: ${e.colors.grey4};
    padding-left: ${e.spaces[2]};
    margin-top: ${e.spaces[2]};

    @media (max-width: ${e.breakpoints.md}) {
      border: none;
    }
  `}
`,J=n.default.hr`
  ${({theme:e,haveButton:r,haveDescription:o})=>n.css`
    border-width: 0px 0px 1px;
    border-color: ${e.colors.grey4};
    border-style: solid;
    width: 100%;
    margin: 0;

    @media (max-width: ${e.breakpoints.md}) {
      ${r&&!o&&"border: none;"}
    }
  `}
`,K=n.default.div`
  ${({theme:e})=>n.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spaces[4]};
  `}
`;var Pe=l=>{var f=l,{description:e,children:r,title:o}=f,t=B(f,["description","children","title"]);let s=(0,R.useMediaQuery)("(max-width: 768px)");return a.default.createElement(N,z({},t),a.default.createElement(U,null,a.default.createElement(I,{haveButton:!!r},o),a.default.createElement(A,{haveButton:!!r,haveDescription:!!e}),a.default.createElement(Q,null,!s&&a.default.createElement(X,{children:r,isMobile:s}))),a.default.createElement(J,{haveButton:!!r,haveDescription:!!e}),a.default.createElement(K,null,e&&a.default.createElement(G,null,e),s&&a.default.createElement(X,{children:r,isMobile:s})))},X=({children:e,isMobile:r})=>a.default.createElement(a.default.Fragment,null,a.default.Children.map(e,o=>(o==null?void 0:o.type)===V.Button&&r?a.default.cloneElement(o,{fluid:!0}):o));0&&(module.exports={PageHeading});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzdXAvYXNzZXRzL2Nqc19zaGltcy5qcyIsICIuLi8uLi9ob29rcy9pbmRleC50cyIsICIuLi8uLi9ob29rcy9zcmMvdXNlTWVkaWFRdWVyeS50cyIsICIuLi8uLi9idXR0b24vaW5kZXgudHMiLCAiLi4vLi4vYnV0dG9uL3NyYy9pbmRleC50c3giLCAiLi4vLi4vYnV0dG9uL3NyYy9zdHlsZXMudHMiLCAiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgaW1wb3J0TWV0YVVybFNoaW0gPVxuICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgPyBuZXcgKHJlcXVpcmUoJ3UnICsgJ3JsJykuVVJMKSgnZmlsZTonICsgX19maWxlbmFtZSkuaHJlZlxuICAgIDogKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpIHx8XG4gICAgICBuZXcgVVJMKCdtYWluLmpzJywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZlxuIiwgImV4cG9ydCAqIGZyb20gJy4vc3JjJztcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJlYWN0IGhvb2sgdGhhdCB0cmFja3Mgc3RhdGUgb2YgYSBDU1MgbWVkaWEgcXVlcnlcbiAqXG4gKiBAcGFyYW0gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHRvIG1hdGNoXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgaWYgKG1lZGlhLm1hdGNoZXMgIT09IG1hdGNoZXMpIHtcbiAgICAgIHNldE1hdGNoZXMobWVkaWEubWF0Y2hlcyk7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4gc2V0TWF0Y2hlcyhtZWRpYS5tYXRjaGVzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpO1xuICB9LCBbbWF0Y2hlcywgcXVlcnldKTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn07XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvblN0eWxlZCB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBWYXJpYW50IHN0eWxlIG9mIHRoZSBidXR0b25cbiAgICogQGRlZmF1bHQgXCJwcmltYXJ5XCJcbiAgICovXG4gIHZhcmlhbnQ/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdkZXN0cnVjdGl2ZScgfCAnb3V0bGluZScgfCAnbmFrZWQnO1xuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgYnV0dG9uXG4gICAqIEBkZWZhdWx0IFwibWRcIlxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnO1xuICAvKipcbiAgICogaWYgYHRydWVgIGFkZCBcIndpZHRoOjEwMCVcIiB0byBidXR0b25cbiAgICogQGRlZmF1bHQgXCJmYWxzZVwiXG4gICAqL1xuICBmbHVpZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaGFwZSBvZiB0aGUgYnV0dG9uXG4gICAqIEBkZWZhdWx0IFwic3F1YXJlZFwiXG4gICAqL1xuICBzaGFwZT86ICdzcXVhcmVkJyB8ICdyb3VuZGVkJztcbiAgLyoqXG4gICAqIEFkZCBhbiBpY29uIGJlc2lkZSB0ZXh0XG4gICAqL1xuICBpY29uPzogUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICogUG9zaXRpb24gb2YgdGhlIGljb25cbiAgICogQGRlZmF1bHQgXCJsZWZ0XCJcbiAgICovXG4gIGljb25Qb3NpdGlvbj86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiBCdXR0b24gdGV4dFxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59ICYgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuXG4vKipcbiAqIEJ1dHRvbiBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gdXNlZCB0byB0cmlnZ2VyIGFuIGFjdGlvbiBvciBldmVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEJ1dHRvblByb3BzPihcbiAgKFxuICAgIHtcbiAgICAgIHR5cGUgPSAnYnV0dG9uJyxcbiAgICAgIHZhcmlhbnQgPSAncHJpbWFyeScsXG4gICAgICBzaXplID0gJ21kJyxcbiAgICAgIHNoYXBlID0gJ3NxdWFyZWQnLFxuICAgICAgaWNvbixcbiAgICAgIGljb25Qb3NpdGlvbiA9ICdsZWZ0JyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblN0eWxlZFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgc2hhcGU9e3NoYXBlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtpY29uICYmIGljb25Qb3NpdGlvbiA9PT0gJ2xlZnQnICYmIGljb259XG5cbiAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuXG4gICAgICAgIHtpY29uICYmIGljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiBpY29ufVxuICAgICAgPC9CdXR0b25TdHlsZWQ+XG4gICAgKTtcbiAgfVxuKTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmltcG9ydCB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgY29uc3QgdmFyaWFudHMgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gKHtcbiAgLyoqXG4gICAqIFZhcmlhbnQgdHlwZXNcbiAgICovXG4gIHZhcmlhbnQ6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazEsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazJcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnBpbmszXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmV5MSxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5M1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTQsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTVcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyZXk1LFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnRlYWwxXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTVcbiAgICAgIH0sXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyZXkxLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cnVjdGl2ZToge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5yZWQxLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5yZWQxLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnJlZDUwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMudGVhbDFcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5yZWQ1MFxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuZ3JleTUwXG4gICAgICB9XG4gICAgfSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnBpbmsxLFxuXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxXG4gICAgICB9XG4gICAgfSxcbiAgICBuYWtlZDoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5waW5rMSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucGluazIsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5waW5rNTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy50ZWFsMVxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5waW5rMixcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcbiAgICogU2hhcGUgdHlwZXNcbiAgICovXG4gIHNoYXBlOiB7XG4gICAgcm91bmRlZDoge1xuICAgICAgc3F1YXJlZDoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICAgIH0sXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmZ1bGxcbiAgICB9XG4gIH0sXG4gIC8qKlxuICAgKiBTaXplIHR5cGVzXG4gICAqL1xuICBzaXplOiB7XG4gICAgc206IHtcbiAgICAgIG1pbldpZHRoOiAzMixcbiAgICAgIGhlaWdodDogMzIsXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjZXNbNF19YFxuICAgIH0sXG4gICAgbWQ6IHtcbiAgICAgIG1pbldpZHRoOiA0MCxcbiAgICAgIGhlaWdodDogNDAsXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjZXNbNl19YFxuICAgIH1cbiAgfSxcbiAgZmx1aWQ6IHtcbiAgICB3aWR0aDogdGhlbWUuc2l6ZXMuZnVsbFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvblN0eWxlZCA9IHN0eWxlZCgnYnV0dG9uJyk8QnV0dG9uUHJvcHM+KFxuICAoeyB0aGVtZSwgdmFyaWFudCwgc2l6ZSwgZmx1aWQsIHNoYXBlIH0pID0+ICh7XG4gICAgLy8gcmVzZXRcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBvdXRsaW5lOiAwLFxuXG4gICAgLy8gYmFzZSBzdHlsZXNcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGdhcDogdGhlbWUuc3BhY2VzWzJdLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS5kdXJhdGlvbnMuZmFzdCxcblxuICAgICcmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9LFxuXG4gICAgLy8gY29uZGl0aW9uYWwgc3R5bGVzXG4gICAgLi4uKGZsdWlkICYmIHZhcmlhbnRzKHRoZW1lKS5mbHVpZCksXG5cbiAgICAvLyB2YXJpYW50IHN0eWxlc1xuICAgIC4uLnZhcmlhbnRzKHRoZW1lKS52YXJpYW50W3ZhcmlhbnQhXSxcbiAgICAuLi52YXJpYW50cyh0aGVtZSkuc2hhcGVbc2hhcGUhXSxcbiAgICAuLi52YXJpYW50cyh0aGVtZSkuc2l6ZVtzaXplIV1cbiAgfSlcbik7XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9zcmMnO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbmVvbi1kaXN0cmljdC9ob29rcyc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L2J1dHRvbic7XG5cbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIEZ1bGxMaW5lLFxuICBMaW5lLFxuICBEZXNjcmlwdGlvbixcbiAgSGVhZGluZ1N0eWxlZCxcbiAgRmxleEVuZCxcbiAgQm90dG9tLFxuICBUaXRsZVxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIFBhZ2VIZWFkaW5nUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGluZyA9ICh7XG4gIGRlc2NyaXB0aW9uLFxuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIC4uLmFyZ3Ncbn06IFBhZ2VIZWFkaW5nUHJvcHMpID0+IHtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA3NjhweCknKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHsuLi5hcmdzfT5cbiAgICAgIDxIZWFkaW5nU3R5bGVkPlxuICAgICAgICA8VGl0bGUgaGF2ZUJ1dHRvbj17ISFjaGlsZHJlbn0+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgIDxMaW5lIGhhdmVCdXR0b249eyEhY2hpbGRyZW59IGhhdmVEZXNjcmlwdGlvbj17ISFkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPEZsZXhFbmQ+XG4gICAgICAgICAgeyFpc01vYmlsZSAmJiAoXG4gICAgICAgICAgICA8Q2hpbGRyZW5CdXR0b25zIGNoaWxkcmVuPXtjaGlsZHJlbn0gaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleEVuZD5cbiAgICAgIDwvSGVhZGluZ1N0eWxlZD5cbiAgICAgIDxGdWxsTGluZSBoYXZlQnV0dG9uPXshIWNoaWxkcmVufSBoYXZlRGVzY3JpcHRpb249eyEhZGVzY3JpcHRpb259IC8+XG4gICAgICA8Qm90dG9tPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPn1cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8Q2hpbGRyZW5CdXR0b25zIGNoaWxkcmVuPXtjaGlsZHJlbn0gaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3R0b20+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxudHlwZSBDaGlsZHJlbkJ1dHRvbnNQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaXNNb2JpbGU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBDaGlsZHJlbkJ1dHRvbnMgPSAoeyBjaGlsZHJlbiwgaXNNb2JpbGUgfTogQ2hpbGRyZW5CdXR0b25zUHJvcHMpID0+IChcbiAgPD5cbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkPy50eXBlID09PSBCdXR0b24gJiYgaXNNb2JpbGUpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSl9XG4gIDwvPlxuKTtcbiIsICJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ0BuZW9uLWRpc3RyaWN0L3N5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWycyeGwnXX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxPHsgaGF2ZUJ1dHRvbj86IGJvb2xlYW4gfT5gXG4gICR7KHsgdGhlbWUsIGhhdmVCdXR0b24gfSkgPT4gY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5tZH0pIHtcbiAgICAgICR7aGF2ZUJ1dHRvbiAmJiAnanVzdGlmeS1jb250ZW50OiBjZW50ZXI7J31cbiAgICB9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleEVuZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXNbMV19O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuZGl2PHtcbiAgaGF2ZUJ1dHRvbj86IGJvb2xlYW47XG4gIGhhdmVEZXNjcmlwdGlvbj86IGJvb2xlYW47XG59PmBcbiAgJHsoeyB0aGVtZSwgaGF2ZUJ1dHRvbiwgaGF2ZURlc2NyaXB0aW9uIH0pID0+IGNzc2BcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC04cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5ncmV5NH07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5tZH0pIHtcbiAgICAgICR7aGF2ZUJ1dHRvbiAmJiAhaGF2ZURlc2NyaXB0aW9uICYmICdkaXNwbGF5OiBub25lOyd9XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuICAgIHBhZGRpbmctbGVmdDogJHt0aGVtZS5zcGFjZXNbMl19O1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2VzWzJdfTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLm1kfSkge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGdWxsTGluZSA9IHN0eWxlZC5ocjx7XG4gIGhhdmVCdXR0b24/OiBib29sZWFuO1xuICBoYXZlRGVzY3JpcHRpb24/OiBib29sZWFuO1xufT5gXG4gICR7KHsgdGhlbWUsIGhhdmVCdXR0b24sIGhhdmVEZXNjcmlwdGlvbiB9KSA9PiBjc3NgXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweDtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLm1kfSkge1xuICAgICAgJHtoYXZlQnV0dG9uICYmICFoYXZlRGVzY3JpcHRpb24gJiYgJ2JvcmRlcjogbm9uZTsnfVxuICAgIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAke3RoZW1lLnNwYWNlc1s0XX07XG4gIGB9XG5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjJtQ0FBQSxHQUFhLEdBQWIsVUFBTyxBQUFNLEVBQ1gsTUFBTyxXQUFhLFlBQ2hCLEdBQUssU0FBUSxRQUFZLElBQUssUUFBVSxZQUFZLEtBQ25ELFNBQVMsZUFBaUIsU0FBUyxjQUFjLEtBQ2xELEdBQUksS0FBSSxVQUFXLFNBQVMsU0FBUyxnbUJDSjNDLEdBQUEsRUFBQSxDQUFBLGNBQUEsSUFBQSxLQ0FBLEdBQUEsR0FBb0MsR0FBQSxRQUFBLFVBT3ZCLEdBQWlCLEdBQWtCLENBQzlDLEdBQU0sQ0FBQyxFQUFTLEdBQWMsR0FBQSxFQUFBLFVBQVMsSUFFdkMsTUFBQSxHQUFBLEVBQUEsV0FBVSxJQUFNLENBQ2QsR0FB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
