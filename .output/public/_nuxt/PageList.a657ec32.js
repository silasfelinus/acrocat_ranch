import{_ as m}from"./nuxt-link.c4d4bb6c.js";import{D as p,E as h,G as f,o as s,c as o,a as t,b as r,w as _,d as i,F as y,r as x,i as k,t as c,k as w}from"./entry.98fcb2f1.js";import{u as C}from"./asyncData.73fc02b4.js";const N=t("hr",null,null,-1),V=t("span",null,"🏠",-1),g=t("span",null,"🔗",-1),B={key:0},D=t("hr",null,null,-1),v=p({__name:"PageList",async setup(L){let n,a;const{find:u}=h().where({$not:{_path:"/"}}).sort({_id:1}),{data:d}=([n,a]=f(()=>C("pages-list",u)),n=await n,a(),n);return(A,E)=>{const l=m;return s(),o("div",null,[N,t("ul",null,[t("li",null,[V,r(l,{to:"/"},{default:_(()=>[i(" Home ")]),_:1})]),(s(!0),o(y,null,x(k(d),e=>(s(),o("li",{key:e._id},[g,r(l,{to:e._path},{default:_(()=>[i(c(e.title),1)]),_:2},1032,["to"]),e.gallery?(s(),o("span",B," - "+c(e.gallery),1)):w("",!0)]))),128))]),D])}}});export{v as default};
