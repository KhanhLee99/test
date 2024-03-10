import{u as w,r as N,A as y,c as v,d as b,i as E,j as e,e as m,L as M,U as j,f as A,o as C,E as P,g as S}from"./index.857cbc1f.js";import{I as l}from"./Input.600b2eef.js";import{B as L}from"./Button.08d4118a.js";function B(){const{t:r}=w(),{setIsAuthenticated:p,setProfile:u}=N.exports.useContext(y),{register:t,handleSubmit:g,setError:h,formState:{errors:f}}=v({resolver:C(P)}),o=b({mutationFn:s=>S.registerAccount(s)}),x=g(s=>{o.mutate({email:s.email,password:s.password},{onSuccess:a=>{p(!0),u(a.data.data.user)},onError:a=>{var c;if(E(a)){const i=(c=a.response)==null?void 0:c.data.data;i&&Object.keys(i).forEach(d=>h(d,{message:i[d],type:"Server"}))}}})}),n=s=>A(f,s);return e("div",{className:"bg-orange",children:e("div",{className:"container",children:e("div",{className:"grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10",children:e("div",{className:"lg:col-span-2 lg:col-start-4",children:m("form",{className:"rounded bg-white p-10 shadow-sm",onSubmit:x,noValidate:!0,children:[e("div",{className:"text-2xl",children:r("sign up")}),e(l,{className:"mt-8",type:"email",placeholder:"Email",name:"email",errorMessage:n("email"),register:t}),e(l,{className:"mt-2",type:"password",placeholder:"Password",name:"password",autoComplete:"on",errorMessage:n("password"),register:t}),e(l,{className:"mt-2",type:"password",placeholder:"Confirm Password",name:"confirm_password",autoComplete:"on",errorMessage:n("confirm_password"),register:t}),e("div",{className:"mt-2",children:e(L,{type:"submit",className:"flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600",isLoading:o.isPending,disabled:o.isPending,children:r("sign up")})}),m("div",{className:"mt-8 flex items-center justify-center",children:[e("span",{className:"text-gray-400",children:r("have account")}),e(M,{className:"ml-1 text-red-400",to:j.login,children:r("login")})]})]})})})})})}export{B as default};
