import{d as f,j as e}from"./index.4ec0e17d.js";function x({name:r,className:n,errorMessage:d,register:o,rules:a,setValue:t,classNameInput:i="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",classNameError:c="mt-1 text-red-600 min-h-[1.25rem] text-sm",...m}){const s=o&&r?o(r,a):null;return f("div",{className:n,children:[e("input",{className:i,...m,...s,onBlur:l=>{const u=l.target.value.trim();r&&t&&(t(r,u),l.target.value=u),s&&s.onBlur(l)}}),e("div",{className:c,children:d})]})}export{x as I};
