import{u as N,a as S,o as F,r as P,U as u,c as g,l as b,j as o,b as e,C as w,B as A,p as L,d as v,e as f,h as D,P as C,f as j,g as y,k as z}from"./index.14a639b9.js";import{P as G,p as R}from"./Product.b15989b4.js";import{I as E}from"./InputNumber.988847cc.js";function T({queryConfig:r}){var x;const n=N(),{control:t,handleSubmit:l,trigger:a,reset:c,formState:{errors:h}}=S({defaultValues:{price_min:r.price_min||"",price_max:r.price_max||""},resolver:F(L),shouldFocusError:!1});P.exports.useEffect(()=>{const{price_min:i,price_max:s}=r;!i&&!s&&c({price_min:"",price_max:""})},[r.price_min,r.price_max]);const m=l(i=>{const{price_min:s="",price_max:k=""}=i;n({pathname:u.productList,search:g(b.exports.omitBy({...r,price_min:s,price_max:k},B=>B==="")).toString()})});return o("form",{className:"mt-2",onSubmit:m,children:[o("div",{className:"flex items-start",children:[e(w,{control:t,name:"price_min",render:({field:i})=>e(E,{type:"text",className:"grow",placeholder:"\u20AB T\u1EEA",classNameInput:"p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",classNameError:"hidden",value:i.value,ref:i.ref,onChange:s=>{i.onChange(s),a("price_max")}})}),e("div",{className:"mx-2 mt-2 shrink-0",children:"-"}),e(w,{control:t,name:"price_max",render:({field:i})=>e(E,{type:"text",className:"grow",placeholder:"\u20AB \u0110\u1EBEN",classNameInput:"p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",classNameError:"hidden",value:i.value,ref:i.ref,onChange:s=>{i.onChange(s),a("price_min")}})})]}),e("div",{className:"mt-1 min-h-[1.25rem] text-center text-sm text-red-600",children:(x=h.price_min)==null?void 0:x.message}),e(A,{className:"flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80",children:"\xC1p d\u1EE5ng"})]})}function W({queryConfig:r}){const n=N(),t=l=>{n({pathname:u.productList,search:g({...r,rating_filter:String(l)}).toString()})};return e("ul",{className:"my-3",children:Array(5).fill(0).map((l,a)=>e("li",{className:"py-1 pl-2",children:o("div",{className:"flex cursor-pointer items-center text-sm",onClick:()=>t(5-a),tabIndex:0,role:"button","aria-hidden":"true",children:[Array(5).fill(0).map((c,h)=>h<5-a?o("svg",{viewBox:"0 0 9.5 8",className:"mr-1 h-4 w-4",children:[o("defs",{children:[o("linearGradient",{id:"ratingStarGradient",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[e("stop",{offset:0,stopColor:"#ffca11"}),e("stop",{offset:1,stopColor:"#ffad27"})]}),e("polygon",{id:"ratingStar",points:"14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"})]}),e("g",{fill:"url(#ratingStarGradient)",fillRule:"evenodd",stroke:"none",strokeWidth:1,children:e("g",{transform:"translate(-876 -1270)",children:e("g",{transform:"translate(155 992)",children:e("g",{transform:"translate(600 29)",children:e("g",{transform:"translate(10 239)",children:e("g",{transform:"translate(101 10)",children:e("use",{stroke:"#ffa727",strokeWidth:".5",xlinkHref:"#ratingStar"})})})})})})})]},h):o("svg",{viewBox:"0 0 30 30",className:"mr-1 h-4 w-4",children:[e("defs",{children:o("linearGradient",{id:"star__hollow",x1:"50%",x2:"50%",y1:"0%",y2:"99.0177926%",children:[e("stop",{offset:"0%",stopColor:"#FFD211"}),e("stop",{offset:"100%",stopColor:"#FFAD27"})]})}),e("path",{fill:"none",fillRule:"evenodd",stroke:"url(#star__hollow)",strokeWidth:2,d:"M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"})]},h)),a!==0&&e("span",{children:"Tr\u1EDF l\xEAn"})]})},a))})}function I({queryConfig:r,categories:n}){const{category:t}=r,l=N(),a=()=>{l({pathname:u.productList,search:g(b.exports.omit(r,["category","price_min","price_max","rating_filter"])).toString()})};return o("div",{className:"py-4",children:[o(v,{to:{pathname:u.productList,search:g(b.exports.omit(r,["category"])).toString()},className:f("flex items-center font-bold",{"text-orange":!t}),children:[e("svg",{viewBox:"0 0 12 10",className:"mr-3 h-4 w-3 fill-current",children:e("g",{fillRule:"evenodd",stroke:"none",strokeWidth:1,children:e("g",{transform:"translate(-373 -208)",children:e("g",{transform:"translate(155 191)",children:o("g",{transform:"translate(218 17)",children:[e("path",{d:"m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"}),e("path",{d:"m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"}),e("path",{d:"m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"})]})})})})}),"T\u1EA5t c\u1EA3 danh m\u1EE5c"]}),e("div",{className:"my-4 h-[1px] bg-gray-300"}),e("ul",{children:n.map(c=>{const h=t===c._id;return e("li",{className:"py-2 pl-2",children:o(v,{to:{pathname:u.productList,search:g({...r,category:c._id}).toString()},className:f("relative px-2",{"font-semibold text-orange":h}),children:[e("svg",{viewBox:"0 0 4 7",className:"absolute top-1 left-[-10px] h-2 w-2 fill-orange",children:e("polygon",{points:"4 3.5 0 0 0 7"})}),c.name]})},c._id)})}),o("div",{className:"mt-4 flex items-center font-bold uppercase",children:[e("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"mr-3 h-4 w-3 fill-current stroke-current",children:e("g",{children:e("polyline",{fill:"none",points:"5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})})}),"B\u1ED9 l\u1ECDc t\xECm ki\u1EBFm"]}),e("div",{className:"my-4 h-[1px] bg-gray-300"}),o("div",{className:"my-5",children:[e("div",{children:"Kho\u1EA3ng gi\xE1"}),e(T,{queryConfig:r})]}),e("div",{className:"my-4 h-[1px] bg-gray-300"}),e("div",{className:"text-sm",children:"\u0110\xE1nh gi\xE1"}),e(W,{queryConfig:r}),e("div",{className:"my-4 h-[1px] bg-gray-300"}),e(A,{className:"flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80",onClick:a,children:"X\xF3a t\u1EA5t c\u1EA3"})]})}const d={createdAt:"createdAt",view:"view",sold:"sold",price:"price"},_={asc:"asc",desc:"desc"};function K({queryConfig:r}){const n=N(),{sort_by:t=d.createdAt,order:l}=r,a=m=>t===m,c=m=>{n({pathname:u.productList,search:g(b.exports.omit({...r,sort_by:m},["order"])).toString()})},h=m=>{n({pathname:u.productList,search:g({...r,sort_by:d.price,order:m}).toString()})};return e("div",{className:"bg-gray-300/40 py-4 px-3",children:e("div",{className:"flex flex-wrap items-center justify-between gap-2",children:o("div",{className:"flex flex-wrap items-center gap-2",children:[e("div",{children:"S\u1EAFp x\u1EBFp theo"}),e("button",{onClick:()=>c(d.view),className:f("h-8 px-4 text-center text-sm capitalize ",{"bg-orange text-white hover:bg-orange/80":a(d.view),"bg-white text-black hover:bg-slate-100":!a(d.view)}),children:"Ph\u1ED5 bi\u1EBFn"}),e("button",{onClick:()=>c(d.createdAt),className:f("h-8 px-4 text-center text-sm capitalize ",{"bg-orange text-white hover:bg-orange/80":a(d.createdAt),"bg-white text-black hover:bg-slate-100":!a(d.createdAt)}),children:"M\u1EDBi nh\u1EA5t"}),e("button",{onClick:()=>c(d.sold),className:f("h-8 px-4 text-center text-sm capitalize ",{"bg-orange text-white hover:bg-orange/80":a(d.sold),"bg-white text-black hover:bg-slate-100":!a(d.sold)}),children:"B\xE1n ch\u1EA1y"}),o("select",{className:f("h-8  px-4 text-left text-sm capitalize  outline-none ",{"bg-orange text-white hover:bg-orange/80":a(d.price),"bg-white text-black hover:bg-slate-100":!a(d.price)}),value:l||"",onChange:m=>h(m.target.value),children:[e("option",{value:"",disabled:!0,className:"bg-white text-black",children:"Gi\xE1"}),e("option",{value:_.asc,className:"bg-white text-black",children:"Gi\xE1: Th\u1EA5p \u0111\u1EBFn cao"}),e("option",{value:_.desc,className:"bg-white text-black",children:"Gi\xE1: Cao \u0111\u1EBFn th\u1EA5p"})]})]})})})}const p=2;function M({queryConfig:r,pageSize:n}){const t=Number(r.page),l=()=>{let a=!1,c=!1;const h=x=>c?null:(c=!0,e("span",{className:"mx-2 rounded border bg-white px-3 py-2 shadow-sm",children:"..."},x)),m=x=>a?null:(a=!0,e("span",{className:"mx-2 rounded border bg-white px-3 py-2 shadow-sm",children:"..."},x));return Array(n).fill(0).map((x,i)=>{const s=i+1;if(t<=p*2+1&&s>t+p&&s<n-p+1)return m(i);if(t>p*2+1&&t<n-p*2){if(s<t-p&&s>p)return h(i);if(s>t+p&&s<n-p+1)return m(i)}else if(t>=n-p*2&&s>p&&s<t-p)return h(i);return e(v,{to:{pathname:u.productList,search:g({...r,page:s.toString()}).toString()},className:f("mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm",{"border-cyan-500":s===t,"border-transparent":s!==t}),children:s},i)})};return o("div",{className:"mt-6 flex flex-wrap justify-center",children:[t===1?e("span",{className:"mx-2 cursor-not-allowed rounded border bg-white/60 px-3 py-2  shadow-sm",children:"Prev"}):e(v,{to:{pathname:u.productList,search:g({...r,page:(t-1).toString()}).toString()},className:"mx-2 cursor-pointer rounded border bg-white px-3 py-2  shadow-sm",children:"Prev"}),l(),t===n?e("span",{className:"mx-2 cursor-not-allowed rounded border bg-white/60 px-3 py-2  shadow-sm",children:"Next"}):e(v,{to:{pathname:u.productList,search:g({...r,page:(t+1).toString()}).toString()},className:"mx-2 cursor-pointer rounded border bg-white px-3 py-2  shadow-sm",children:"Next"})]})}const H={getCategories(){return D.get(C.categories)}},Q=H;function V(){const r=j(),{data:n}=y({queryKey:["products",r],queryFn:()=>R.getProducts(r),placeholderData:z,staleTime:3*60*1e3}),{data:t}=y({queryKey:["categories"],queryFn:()=>Q.getCategories()});return e("div",{className:"bg-gray-200 py-6",children:e("div",{className:"container",children:o("div",{className:"grid grid-cols-12 gap-6",children:[e("div",{className:"col-span-3",children:e(I,{queryConfig:r,categories:(t==null?void 0:t.data.data)||[]})}),n&&o("div",{className:"col-span-9",children:[e(K,{queryConfig:r}),e("div",{className:"mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:n.data.data.products.map(l=>e("div",{className:"col-span-1",children:e(G,{product:l})},l._id))}),e(M,{queryConfig:r,pageSize:n.data.data.pagination.page_size})]})]})})})}export{V as default};