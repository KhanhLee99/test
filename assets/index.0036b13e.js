import{u as C,r as h,j as s,e,k as y,B as P,A as O,c as T,o as G,d as A,s as V,y as Y,C as I,z as q,D as J,f as K}from"./index.322ed24b.js";import{B as Q}from"./Button.6d750c9c.js";import{I as j}from"./Input.0bc8aa88.js";import{u as _}from"./user.api.d8626113.js";import{I as X}from"./InputNumber.ae56bb74.js";function Z({value:a,onChange:c,errorMessage:u}){const{t:i}=C(),[m,l]=h.exports.useState({date:x.getDate(),month:x.getMonth(),year:x.getFullYear()});h.exports.useEffect(()=>{a&&l({date:a.getDate(),month:a.getMonth(),year:a.getFullYear()})},[a]);const o=r=>{const{value:d,name:b}=r.target,f={...m,[b]:d};l(f),c&&c(new Date(f.year,f.month,f.date))};return s("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[e("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:i("date of birth")}),s("div",{className:"sm:w-[80%] sm:pl-5",children:[s("div",{className:"flex justify-between",children:[s("select",{onChange:o,name:"date",className:"h-10 w-[32%] rounded-sm border border-black/10 px-3",value:(a==null?void 0:a.getDate())||m.date,children:[e("option",{disabled:!0,children:i("day")}),y.exports.range(1,32).map(r=>e("option",{value:r,children:r},r))]}),s("select",{onChange:o,name:"month",className:"h-10 w-[32%] rounded-sm border border-black/10 px-3",value:(a==null?void 0:a.getMonth())||m.month,children:[e("option",{disabled:!0,children:i("month")}),y.exports.range(0,12).map(r=>e("option",{value:r,children:r+1},r))]}),s("select",{onChange:o,name:"year",className:"h-10 w-[32%] rounded-sm border border-black/10 px-3",value:(a==null?void 0:a.getFullYear())||m.year,children:[e("option",{disabled:!0,children:i("year")}),y.exports.range(1950,2025).map(r=>e("option",{value:r,children:r},r))]})]}),e("div",{className:"mt-1 min-h-[1.25rem] text-sm text-red-600",children:u})]})]})}const H=1048576;function W({onChange:a}){const{t:c}=C(),u=h.exports.useRef(null),i=l=>{var o;l.preventDefault(),(o=u.current)==null||o.click()},m=l=>{var r;const o=(r=l.target.files)==null?void 0:r[0];o&&(o.size>=H||!o.type.includes("image"))?P.error("D\u1EE5ng l\u01B0\u1EE3ng file t\u1ED1i \u0111a 1 MB. \u0110\u1ECBnh d\u1EA1ng:.JPEG, .PNG",{position:"top-center"}):a&&a(o)};return s(h.exports.Fragment,{children:[e("input",{className:"hidden",type:"file",accept:".jpg,.jpeg,.png",ref:u,onChange:m,onClick:l=>l.target.value=null}),e("button",{className:"flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm",onClick:i,children:c("select image")})]})}const $=J.pick(["name","address","phone","date_of_birth","avatar"]),x=new Date(1990,0,1);function oe(){const{t:a}=C(),[c,u]=h.exports.useState(),i=h.exports.useMemo(()=>c?URL.createObjectURL(c):"",[c]),{setProfile:m}=h.exports.useContext(O),{control:l,register:o,handleSubmit:r,setValue:d,watch:b,formState:{errors:f,isValid:z}}=T({defaultValues:{name:"",phone:"",address:"",avatar:"",date_of_birth:x},resolver:G($),mode:"onBlur"}),D=A({mutationFn:_.updateProfile,onSuccess:n=>{P.success(n.data.message,{position:"top-center",autoClose:1e3})}}),S=A({mutationFn:_.uploadAvatar}),{data:N,refetch:k}=V({queryKey:["profile"],queryFn:_.getProfile}),t=N==null?void 0:N.data.data,E=b("avatar"),B=()=>{const{name:n,phone:v,address:p,date_of_birth:g}=b();return t&&n===t.name&&v===t.phone&&p===t.address&&E===t.avatar&&(g==null?void 0:g.toISOString())===t.date_of_birth},M=D.isPending||S.isPending,L=M||!z||B();h.exports.useEffect(()=>{t&&(d("name",t.name),d("phone",t.phone),d("address",t.address),d("avatar",t.avatar),d("date_of_birth",t.date_of_birth?new Date(t.date_of_birth):x))},[t]);const R=n=>{u(n),d("avatar",URL.createObjectURL(n))},U=r(async n=>{var v;try{let p=E;if(c){const F=new FormData;F.append("image",c),p=(await S.mutateAsync(F)).data.data,d("avatar",p)}const g=await D.mutateAsync({...n,avatar:p,date_of_birth:(v=n.date_of_birth)==null?void 0:v.toISOString()});m(g.data.data),Y(g.data.data),k()}catch(p){console.log(p)}}),w=n=>K(f,n);return s("div",{className:"rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20",children:[s("div",{className:"border-b border-b-gray-200 py-6",children:[e("h1",{className:"text-lg font-medium capitalize text-gray-900",children:a("my profile")}),e("div",{className:"mt-1 text-sm text-gray-700",children:a("protect account")})]}),s("form",{className:"mt-8 flex flex-col-reverse md:flex-row md:items-start",onSubmit:U,children:[s("div",{className:"mt-6 flex-grow md:mt-0 md:pr-12",children:[s("div",{className:"flex flex-col flex-wrap sm:flex-row",children:[e("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:a("email")}),e("div",{className:"sm:w-[80%] sm:pl-5",children:e("div",{className:"pt-3 text-gray-700",children:t==null?void 0:t.email})})]}),s("div",{className:"mt-6 flex flex-col flex-wrap sm:flex-row",children:[e("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:a("name")}),e("div",{className:"sm:w-[80%] sm:pl-5",children:e(j,{classNameInput:"w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm",name:"name",placeholder:a("name"),errorMessage:w("name"),setValue:d,register:o})})]}),s("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[e("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:a("phone")}),e("div",{className:"sm:w-[80%] sm:pl-5",children:e(I,{control:l,name:"phone",render:({field:n})=>e(X,{type:"text",placeholder:a("phone"),classNameInput:"w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm",errorMessage:w("phone"),...n,onChange:n.onChange})})})]}),s("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[e("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right",children:a("address")}),e("div",{className:"sm:w-[80%] sm:pl-5",children:e(j,{classNameInput:"w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm",name:"address",placeholder:a("address"),errorMessage:w("address"),setValue:d,register:o})})]}),e(I,{control:l,name:"date_of_birth",render:({field:n})=>e(Z,{errorMessage:w("date_of_birth"),value:n.value,onChange:n.onChange})}),s("div",{className:"mt-2 flex flex-col flex-wrap sm:flex-row",children:[e("div",{className:"truncate pt-3 capitalize sm:w-[20%] sm:text-right"}),e("div",{className:"sm:w-[80%] sm:pl-5",children:e(Q,{className:"flex h-9 items-center rounded-sm bg-orange px-5 text-center text-sm text-white hover:bg-orange/80",type:"submit",isLoading:M,disabled:L,children:a("save")})})]})]}),e("div",{className:"flex justify-center md:w-72 md:border-l md:border-l-gray-200",children:s("div",{className:"flex flex-col items-center",children:[e("div",{className:"my-5 h-24 w-24",children:e("img",{src:i||q(t==null?void 0:t.avatar),alt:"",className:"h-full w-full rounded-full border border-black/10 object-cover"})}),e(W,{onChange:R}),s("div",{className:"mt-3 text-gray-400",children:[e("div",{children:a("file size max")}),e("div",{children:a("file extension format")})]})]})})]})]})}export{oe as default};
