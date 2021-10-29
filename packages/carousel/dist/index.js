var y=Object.create;var e=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,S=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var c=(s,t,o)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,u=(s,t)=>{for(var o in t||(t={}))p.call(t,o)&&c(s,o,t[o]);if(l)for(var o of l(t))w.call(t,o)&&c(s,o,t[o]);return s};var d=s=>e(s,"__esModule",{value:!0});var v=(s,t)=>{d(s);for(var o in t)e(s,o,{get:t[o],enumerable:!0})},I=(s,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of m(t))!p.call(s,i)&&i!=="default"&&e(s,i,{get:()=>t[i],enumerable:!(o=C(t,i))||o.enumerable});return s},n=s=>I(d(e(s!=null?y(S(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);v(exports,{Carousel:()=>B});var r=n(require("react")),f=n(require("@neon-district/base-carousel")),x=n(require("@neon-district/button"));var a=n(require("@neon-district/system")),k=(0,a.default)("section")(({theme:s})=>({".slick-track, .slick-list":{display:"flex"},".slick-list":{margin:0-s.spaces[4]},".slick-prev":{left:-s.spaces[4]},".slick-next":{right:-s.spaces[4]},".slick-prev.slick-disabled, .slick-next.slick-disabled":{visibility:"hidden"},".slick-prev, .slick-next":{bottom:-17},".slick-dots":{listStyle:"none",display:"flex !important",alignItems:"center",justifyContent:"center",marginTop:s.spaces[8],li:{display:"flex",alignItems:"center",justifyContent:"center",width:s.spaces[2],height:s.spaces[2],margin:`0 ${s.spaces[1]}`,background:s.colors.pink1,borderRadius:s.radii.full,cursor:"pointer",transition:`box-shadow ${s.durations.fast}`,"&.slick-active":{background:s.colors.pink1},button:{opacity:0,width:s.spaces[2],height:s.spaces[2],cursor:"pointer"}}}})),b=(0,a.default)("article")(({theme:s})=>({position:"relative",height:190,display:"flex",justifyContent:"center",flex:"1 0 auto",margin:`0 ${s.spaces[4]}`,padding:s.spaces[8],border:`1px solid ${s.colors.white}`,button:{position:"absolute",bottom:50,textTransform:"uppercase"},img:{width:"100%",height:"100%",backgroundSize:"cover",objectFit:"cover"}}));var B=({items:s,settings:t})=>r.default.createElement(k,null,r.default.createElement(f.BaseCarousel,{settings:t||{dots:!0,slidesToShow:4,arrows:!0,infinite:!0,responsive:[{breakpoint:1375,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:570,settings:{slidesToShow:1}},{breakpoint:375,settings:{slidesToShow:1.1}}]}},s==null?void 0:s.map(i=>r.default.createElement(T,u({key:i.label},i))))),T=({src:s,alt:t,label:o})=>r.default.createElement(b,null,r.default.createElement("img",{src:s,alt:t}),r.default.createElement(x.Button,null,o));0&&(module.exports={Carousel});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQmFzZUNhcm91c2VsLFxuICBCYXNlQ2Fyb3VzZWxTZXR0aW5nc1xufSBmcm9tICdAbmVvbi1kaXN0cmljdC9iYXNlLWNhcm91c2VsJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG5lb24tZGlzdHJpY3QvYnV0dG9uJztcblxuaW1wb3J0IHsgSXRlbSwgV3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgQ2Fyb3VzZWxQcm9wcyA9IHtcbiAgLyoqXG4gICAqIEl0ZW1zIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIGl0ZW1zPzogQ2Fyb3VzZWxJdGVtUHJvcHNbXTtcbiAgLyoqXG4gICAqIFNldHRpbmdzIGZvciB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIHNldHRpbmdzPzogQmFzZUNhcm91c2VsU2V0dGluZ3M7XG59O1xuXG4vKipcbiAqIENhcm91c2VsIGNvbXBvbmVudFxuICpcbiAqIEBkZXNjcmlwdGlvbiB3cmFwcGVyIG9mIHRoZSBjYXJvdXNlbCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IENhcm91c2VsID0gKHsgaXRlbXMsIHNldHRpbmdzIH06IENhcm91c2VsUHJvcHMpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNldHRpbmdzOiBCYXNlQ2Fyb3VzZWxTZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMzc1LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA1NzAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDM3NSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEuMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QmFzZUNhcm91c2VsIHNldHRpbmdzPXtzZXR0aW5ncyB8fCBkZWZhdWx0U2V0dGluZ3N9PlxuICAgICAgICB7aXRlbXM/Lm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIGtleT17aXRlbS5sYWJlbH0gey4uLml0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9CYXNlQ2Fyb3VzZWw+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuLyoqXG4gKiBDYXJvdXNlbEl0ZW0gY29tcG9uZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIFVzZWQgdG8gZGlzcGxheSBhbiBpdGVtIGluIHRoZSBjYXJvdXNlbFxuICovXG50eXBlIENhcm91c2VsSXRlbVByb3BzID0ge1xuICAvKipcbiAgICogSW1hZ2Ugc291cmNlXG4gICAqL1xuICBzcmM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIGFsdD86IHN0cmluZztcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgaXRlbVxuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSAoeyBzcmMsIGFsdCwgbGFiZWwgfTogQ2Fyb3VzZWxJdGVtUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SXRlbT5cbiAgICAgIDxpbWcgc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxuXG4gICAgICA8QnV0dG9uPntsYWJlbH08L0J1dHRvbj5cbiAgICA8L0l0ZW0+XG4gICk7XG59O1xuIiwgImltcG9ydCBzdHlsZWQgZnJvbSAnQG5lb24tZGlzdHJpY3Qvc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAnLnNsaWNrLXRyYWNrLCAuc2xpY2stbGlzdCc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcblxuICAnLnNsaWNrLWxpc3QnOiB7XG4gICAgbWFyZ2luOiAwIC0gdGhlbWUuc3BhY2VzWzRdXG4gIH0sXG5cbiAgJy5zbGljay1wcmV2Jzoge1xuICAgIGxlZnQ6IC10aGVtZS5zcGFjZXNbNF1cbiAgfSxcblxuICAnLnNsaWNrLW5leHQnOiB7XG4gICAgcmlnaHQ6IC10aGVtZS5zcGFjZXNbNF1cbiAgfSxcblxuICAnLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQsIC5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkJzoge1xuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG5cbiAgJy5zbGljay1wcmV2LCAuc2xpY2stbmV4dCc6IHtcbiAgICBib3R0b206IC0xN1xuICB9LFxuXG4gICcuc2xpY2stZG90cyc6IHtcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCAhaW1wb3J0YW50JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZXNbOF0sXG5cbiAgICBsaToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2VzWzJdLFxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjZXNbMl0sXG4gICAgICBtYXJnaW46IGAwICR7dGhlbWUuc3BhY2VzWzFdfWAsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazEsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmZ1bGwsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246IGBib3gtc2hhZG93ICR7dGhlbWUuZHVyYXRpb25zLmZhc3R9YCxcblxuICAgICAgJyYuc2xpY2stYWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucGluazFcbiAgICAgIH0sXG5cbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2VzWzJdLFxuICAgICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNlc1syXSxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQoJ2FydGljbGUnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAxOTAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBmbGV4OiAnMSAwIGF1dG8nLFxuICBtYXJnaW46IGAwICR7dGhlbWUuc3BhY2VzWzRdfWAsXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNlc1s4XSxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLndoaXRlfWAsXG5cbiAgYnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiA1MCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9LFxuXG4gIGltZzoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgb2JqZWN0Rml0OiAnY292ZXInXG4gIH1cbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICJrMkJBQUEsNEJDQUEsTUFBa0Isb0JBRWxCLEVBR08sMkNBRVAsRUFBdUIsb0NDUHZCLE1BQW1CLG9DQUVOLEVBQVUsY0FBTyxXQUFXLENBQUMsQ0FBRSxXQUFhLEVBQ3ZELDRCQUE2QixDQUMzQixRQUFTLFFBR1gsY0FBZSxDQUNiLE9BQVEsRUFBSSxFQUFNLE9BQU8sSUFHM0IsY0FBZSxDQUNiLEtBQU0sQ0FBQyxFQUFNLE9BQU8sSUFHdEIsY0FBZSxDQUNiLE1BQU8sQ0FBQyxFQUFNLE9BQU8sSUFHdkIseURBQTBELENBQ3hELFdBQVksVUFHZCwyQkFBNEIsQ0FDMUIsT0FBUSxLQUdWLGNBQWUsQ0FDYixVQUFXLE9BQ1gsUUFBUyxrQkFDVCxXQUFZLFNBQ1osZUFBZ0IsU0FDaEIsVUFBVyxFQUFNLE9BQU8sR0FFeEIsR0FBSSxDQUNGLFFBQVMsT0FDVCxXQUFZLFNBQ1osZUFBZ0IsU0FDaEIsTUFBTyxFQUFNLE9BQU8sR0FDcEIsT0FBUSxFQUFNLE9BQU8sR0FDckIsT0FBUSxLQUFLLEVBQU0sT0FBTyxLQUMxQixXQUFZLEVBQU0sT0FBTyxNQUN6QixhQUFjLEVBQU0sTUFBTSxLQUMxQixPQUFRLFVBQ1IsV0FBWSxjQUFjLEVBQU0sVUFBVSxPQUUxQyxpQkFBa0IsQ0FDaEIsV0FBWSxFQUFNLE9BQU8sT0FHM0IsT0FBUSxDQUNOLFFBQVMsRUFDVCxNQUFPLEVBQU0sT0FBTyxHQUNwQixPQUFRLEVBQU0sT0FBTyxHQUNyQixPQUFRLGdCQU1ILEVBQU8sY0FBTyxXQUFXLENBQUMsQ0FBRSxXQUFhLEVBQ3BELFNBQVUsV0FDVixPQUFRLElBQ1IsUUFBUyxPQUNULGVBQWdCLFNBQ2hCLEtBQU0sV0FDTixPQUFRLEtBQUssRUFBTSxPQUFPLEtBQzFCLFFBQVMsRUFBTSxPQUFPLEdBQ3RCLE9BQVEsYUFBYSxFQUFNLE9BQU8sUUFFbEMsT0FBUSxDQUNOLFNBQVUsV0FDVixPQUFRLEdBQ1IsY0FBZSxhQUdqQixJQUFLLENBQ0gsTUFBTyxPQUNQLE9BQVEsT0FDUixlQUFnQixRQUNoQixVQUFXLFlEckRSLEdBQU0sR0FBVyxDQUFDLENBQUUsUUFBTyxjQW1DOUIsd0JBQUMsRUFBRCxLQUNFLHdCQUFDLGVBQUQsQ0FBYyxTQUFVLEdBbkNrQixDQUM1QyxLQUFNLEdBQ04sYUFBYyxFQUNkLE9BQVEsR0FDUixTQUFVLEdBQ1YsV0FBWSxDQUNWLENBQ0UsV0FBWSxLQUNaLFNBQVUsQ0FDUixhQUFjLElBR2xCLENBQ0UsV0FBWSxLQUNaLFNBQVUsQ0FDUixhQUFjLElBR2xCLENBQ0UsV0FBWSxJQUNaLFNBQVUsQ0FDUixhQUFjLElBR2xCLENBQ0UsV0FBWSxJQUNaLFNBQVUsQ0FDUixhQUFjLFNBU2YsaUJBQU8sSUFBSSxHQUNWLHdCQUFDLEVBQUQsR0FBYyxJQUFLLEVBQUssT0FBVyxPQTJCdkMsRUFBZSxDQUFDLENBQUUsTUFBSyxNQUFLLFdBRTlCLHdCQUFDLEVBQUQsS0FDRSx3QkFBQyxNQUFELENBQUssSUFBSyxFQUFLLElBQUssSUFFcEIsd0JBQUMsU0FBRCxLQUFTIiwKICAibmFtZXMiOiBbXQp9Cg==
