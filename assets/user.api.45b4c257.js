import{k as r}from"./index.2787eb53.js";const e={getProfile(){return r.get("me")},updateProfile(t){return r.put("user",t)},uploadAvatar(t){return r.post("user/upload-avatar",t,{headers:{"Content-Type":"multipart/form-data"}})}},u=e;export{u};