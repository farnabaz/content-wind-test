import{j as D,W as M,p as I,x as B,_ as j,Z as z,o as T,b as S,C as W,F as H,f as u,h as x,e as N,w as A,T as R,G as V,a2 as y,K as O,a3 as Z,y as K,D as G,E as Q,a as X,M as Y,$ as q,a4 as ee,a5 as $,B as E,a6 as te,a7 as U,a8 as ne,a9 as ie,aa as se,ab as F}from"./entry.04b8a896.js";import{r as J}from"./asyncData.66a91554.js";/* empty css                               */const ae=(r=[],v,m)=>{const h=[...v||[]],s=[...m||[]],c=JSON.parse(JSON.stringify(r));for(const e of h)if(e.oldPath)if(s.splice(s.findIndex(a=>a.path===e.oldPath),1),h.find(a=>a.path===e.oldPath))c.push({path:e.path,parsed:e.parsed});else{const a=c.find(w=>w.path===e.oldPath);a&&(a.path=e.path,e.parsed?a.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(w=>{a.parsed[w]=e.pathMeta[w]}))}else if(e.new)c.push({path:e.path,parsed:e.parsed});else{const i=c.find(a=>a.path===e.path);i&&Object.assign(i,{path:e.path,parsed:e.parsed})}for(const e of s)c.splice(c.findIndex(i=>i.path===e.path),1);const l=new Intl.Collator(void 0,{numeric:!0});return c.sort((e,i)=>l.compare(e.path,i.path)),c},P=r=>(G("data-v-8b0ae7cd"),r=r(),Q(),r),oe=P(()=>u("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[u("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),re=P(()=>u("span",null,"Preview mode enabled",-1)),ce={key:0},le=P(()=>u("div",{id:"__preview_background"},null,-1)),ue=P(()=>u("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[u("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),pe=P(()=>u("p",null,"Initializing the preview...",-1)),de={key:0},ve=P(()=>u("div",{id:"__preview_background"},null,-1)),fe={id:"__preview_loader"},we=D({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(r){const v=r,m=["__nuxt_preview","__preview_enabled"],h=M(),s=I(!0),c=I(!1),l=I(!1),e=I("");let i;const a=async()=>{y("previewToken").value="",O().query.preview="",await Z(O().path),K(()=>{J()}),s.value=!1,e.value="",document.body.classList.remove(...m)},w=async g=>{const _=await v.syncPreview(g);if(l.value!==!0){if(!_){setTimeout(()=>w(g),1e3);return}l.value=!0,h.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&i.disconnect()}};return B(async()=>{i=(await j(()=>import("./index.9fea434a.js"),[],import.meta.url)).connect(`${v.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:v.previewToken.value}});let _;i.on("connect",()=>{_=setTimeout(()=>{l.value||(_=setTimeout(()=>{e.value="Preview sync timed out",l.value=!1},3e4),i.emit("draft:requestSync"))},3e4)});const k=()=>{_&&(clearTimeout(_),_=null)};i.on("draft:sync",async C=>{if(k(),!C){try{i.once("draft:ready",()=>{i.emit("draft:requestSync")}),await v.requestPreviewSyncAPI()}catch(b){switch(k(),b.response.status){case 404:e.value="Preview draft not found",l.value=!1;break;default:e.value="An error occurred while syncing preview",l.value=!1}}return}w(C)}),i.on("draft:unauthorized",()=>{k(),e.value="Unauthorized preview token",l.value=!1}),i.on("disconnect",()=>{k()}),document.body.classList.add(...m),i.on("draft:update",C=>{c.value=!0,v.syncPreview(C),c.value=!1})}),z(()=>{document.body.classList.remove(...m)}),(g,_)=>(T(),S("div",null,[s.value?(T(),S("div",{key:0,id:"__nuxt_preview",class:W({__preview_ready:l.value,__preview_refreshing:c.value})},[l.value?(T(),S(H,{key:0},[oe,re,u("button",{onClick:a}," Close ")],64)):x("",!0)],2)):x("",!0),N(R,{name:"preview-loading"},{default:A(()=>[s.value&&!l.value&&!e.value?(T(),S("div",ce,[le,u("div",{id:"__preview_loader"},[ue,pe,u("button",{onClick:a}," Cancel ")])])):x("",!0)]),_:1}),N(R,{name:"preview-loading"},{default:A(()=>[e.value?(T(),S("div",de,[ve,u("div",fe,[u("p",null,V(e.value),1),u("button",{onClick:a}," Exit preview ")])])):x("",!0)]),_:1})]))}}),_e=X(we,[["__scopeId","data-v-8b0ae7cd"]]),me=ee(()=>JSON.parse(JSON.stringify(E()))),ke=()=>{const r=M(),v=Y().public.studio||{},m=me();let h;const s=q("studio-client-db",()=>null),c=q("studio-preview-db-files",()=>[]);r.hook("content:storage",t=>{s.value=t});const l=async(t,n,o=!0)=>{const p=y("previewToken",{sameSite:"none",secure:!0}),f=await t.getKeys(`${p.value}:`);await Promise.all(f.map(d=>t.removeItem(d))),await t.setItem(`${p.value}$`,JSON.stringify({ignoreBuiltContents:o})),await Promise.all(n.map(d=>{var L;return t.setItem(`${p.value}:${(L=d.parsed)==null?void 0:L._id}`,JSON.stringify(d.parsed))}))},e=t=>{const n=$(r,E);te(n,U(t,m)),t||ne(n,m)},i=t=>{var o,p,f,d;const n=(d=(f=(p=(o=r==null?void 0:r.vueApp)==null?void 0:o._context)==null?void 0:p.config)==null?void 0:f.globalProperties)==null?void 0:d.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(h||(h=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),$(r,n.updateTheme,[U(t,h)]))},a=async t=>{if(c.value=t.files=t.files||c.value||[],!s.value)return!1;const n=ae(t.files,t.additions,t.deletions),o=n.filter(d=>!d.path.startsWith(se));await l(s.value,o,(t.files||[]).length!==0);const p=n.find(d=>d.path===F.appConfig);e(p==null?void 0:p.parsed);const f=n.find(d=>d.path===F.tokensConfig);return i(f==null?void 0:f.parsed),b(),!0},w=async()=>{const t=y("previewToken",{sameSite:"none",secure:!0});await $fetch("api/projects/preview/sync",{baseURL:v.apiURL,method:"POST",params:{token:t.value}})},g=()=>{const t=y("previewToken",{sameSite:"none",secure:!0}),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),ie(_e,{previewToken:t,apiURL:v.apiURL,syncPreview:a,requestPreviewSyncAPI:w}).mount(n)},_=async t=>{var p,f;const n=y("previewToken",{sameSite:"none",secure:!0});if(!t)return null;t=t.replace(/\/$/,"");let o=await((p=s.value)==null?void 0:p.getItem(`${n.value}:${t}`));return o||(o=await((f=s.value)==null?void 0:f.getItem(t))),o},k=t=>{var o;const n=y("previewToken",{sameSite:"none",secure:!0});s.value&&s.value.setItem(`${n.value}:${(o=t.parsed)==null?void 0:o._id}`,JSON.stringify(t.parsed))},C=async t=>{var o;const n=y("previewToken",{sameSite:"none",secure:!0});await((o=s.value)==null?void 0:o.removeItem(`${n.value}:${t}`))},b=()=>{$(r,J)};return{apiURL:v.apiURL,contentStorage:s,syncPreviewFiles:l,syncPreviewAppConfig:e,syncPreviewTokensConfig:i,requestPreviewSynchronization:w,mountPreviewUI:g,findContentWithId:_,updateContent:k,removeContentWithId:C,requestRerender:b}};export{ke as useStudio};
