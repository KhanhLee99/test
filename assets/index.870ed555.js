import{r as N,A as y,a as E,s as b,x as v,b as e,j as p,I as i,B as A,d as j,U as C,o as F,y as M,z as P}from"./index.14a639b9.js";function k(){var l,c,m;const{setIsAuthenticated:g,setProfile:h}=N.exports.useContext(y),{register:r,handleSubmit:x,setError:f,formState:{errors:t}}=E({resolver:F(M)}),o=b({mutationFn:s=>P.registerAccount(s)}),w=x(s=>{o.mutate({email:s.email,password:s.password},{onSuccess:a=>{g(!0),h(a.data.data.user)},onError:a=>{var d;if(v(a)){const n=(d=a.response)==null?void 0:d.data.data;n&&Object.keys(n).forEach(u=>f(u,{message:n[u],type:"Server"}))}}})});return e("div",{className:"bg-orange",children:e("div",{className:"container",children:e("div",{className:"grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10",children:e("div",{className:"lg:col-span-2 lg:col-start-4",children:p("form",{className:"rounded bg-white p-10 shadow-sm",onSubmit:w,noValidate:!0,children:[e("div",{className:"text-2xl",children:"\u0110\u0103ng k\xFD"}),e(i,{className:"mt-8",type:"email",placeholder:"Email",name:"email",errorMessage:(l=t.email)==null?void 0:l.message,register:r}),e(i,{className:"mt-2",type:"password",placeholder:"Password",name:"password",autoComplete:"on",errorMessage:(c=t.password)==null?void 0:c.message,register:r}),e(i,{className:"mt-2",type:"password",placeholder:"Confirm Password",name:"confirm_password",autoComplete:"on",errorMessage:(m=t.confirm_password)==null?void 0:m.message,register:r}),e("div",{className:"mt-2",children:e(A,{type:"submit",className:"flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600",isLoading:o.isPending,disabled:o.isPending,children:"\u0110\u0103ng k\xFD"})}),p("div",{className:"mt-8 flex items-center justify-center",children:[e("span",{className:"text-gray-400",children:"B\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n?"}),e(j,{className:"ml-1 text-red-400",to:C.login,children:"\u0110\u0103ng nh\u1EADp"})]})]})})})})})}export{k as default};
