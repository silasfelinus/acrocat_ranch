import{I as u,m,g as h,o as i,c as l,a as e,ae as g,b as p,w as _,q as f,F as b,r as y,t as v,af as w,i as k,ad as x,ag as C}from"./entry.ba3895ef.js";const T={class:"theme-selector"},S=["onKeydown"],B=e("span",{class:"theme-icon w-6 h-6"},null,-1),I=[B],K={class:"origin-top-right absolute right-0 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-200"},M={class:"py-1 theme-list grid grid-cols-3 gap-2 p-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},q=["onClick"],N=u({__name:"ThemeChange",setup(D){const t=m(!1),c=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"],n=()=>{t.value=!t.value},o=a=>{t.value=!1,document.documentElement.setAttribute("data-theme",a),localStorage.setItem("theme",a)};return h(()=>{const s=localStorage.getItem("theme")||"emerald";o(s)}),(a,s)=>(i(),l("div",T,[e("button",{tabindex:"0","aria-haspopup":"true","aria-label":"Change theme",class:"theme-btn bg-base-200 p-4 rounded-full focus:outline-none focus:ring focus:ring-primary shadow-md transform hover:scale-110 transition-all ease-in-out duration-200",onClick:n,onKeydown:g(C(n,["prevent"]),["space"])},I,40,S),p(x,{name:"theme-menu-fade"},{default:_(()=>[f(e("div",K,[e("div",M,[(i(),l(b,null,y(c,(r,d)=>e("button",{key:d,class:"theme-item block w-full text-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md",role:"menuitem",tabindex:"0",onClick:E=>o(r)},v(r),9,q)),64))])],512),[[w,k(t)]])]),_:1})]))}});export{N as _};
