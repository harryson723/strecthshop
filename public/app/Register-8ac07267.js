import{G as x}from"./GoogleRecaptcha-52ad0668.js";import{r as g,c as m,a as s,i as I,G as a,L as n,S as w,F as T,d as U,h as b,b as F,f as y,e as k,o as u,t as C,Y as S,Z as N}from"./sett-4d48a041.js";import{_ as R}from"./index-278cccc9.js";import"./edit-e2caae93.js";const D={name:"UsersRegister",components:{"google-recaptcha":x},computed:{useRecaptcha:function(){var i,t,r;return((r=(t=(i=this.$store.state)==null?void 0:i.coredata)==null?void 0:t.settings)==null?void 0:r.formVerif)==="recaptcha"}},data(){return{sent:!1,user:{username:"",email:"",email2:"",password:"",password2:"",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",state:"",country:"",phone:"",companyName:"",companyOrgId:"",companyTaxId:"",companyTaxVatId:""}}},created:function(){},methods:{userRegister:function(){let i=null;const t=["username","email","password"],r=["email","password"],d=this;if(i=this.$helpers.propertiesRequiredConfirm(this.user,t,r),i.result){const e={user:{username:this.user.username,email:this.user.email,password:this.user.password}};this.$store.state.language&&this.$store.state.language.code&&this.$store.state.currency&&this.$store.state.currency.code&&(e.user.settings={language:this.$store.state.language.code,currency:this.$store.state.currency.code});const c=this.checkFillAddress();c&&(e.user.addresses=[],e.user.addresses.push(c));const _=this.checkFillCompany();_&&(e.user.company=[],e.user.company.push(_)),this.$helpers.secureForm("register",this.$refs.recaptcha).then(f=>{f&&this.$httpc.post("users/register",e,{timeout:5e3,tokenize:!0}).then(function(o){d.sent=!0;const h=d.$el.querySelector(".field.");Object.keys(h).forEach(function(p){d.$helpers.undecorateFormField(p,"danger")})}).catch(function(o){o.response&&o.response.data&&o.response.data.errors&&Object.keys(o.response.data.errors).length>0&&Object.keys(o.response.data.errors).forEach(function(h){const p=d.$el.querySelector(".field."+h);if(p){const v=p.querySelector('.form-messages .form-message[data-message="'+o.response.data.errors[h]+'"]');if(v&&v!==null){const V=v.innerText;d.$helpers.decorateFormField(p,V,"danger")}}})}).then(function(){})})}else i&&i.fields&&i.errors?(this.$el.querySelector(".field."+i.fields[0]).scrollIntoView({behaviour:"smooth",block:"start",inline:"nearest"}),this.$helpers.formUndecorateAndDecorateFields(i.fields,i.errors)):(this.$el.querySelector(".field."+t.fields[0]).scrollIntoView({behaviour:"smooth",block:"start",inline:"nearest"}),this.$helpers.formUndecorateAndDecorateFields(t,[]))},checkFillAddress:function(){let i=null;const t=["nameFirst","nameLast","street","street2","zip","city","state","country","phone"],r={};let d=!1;const e=this;return t.forEach(function(c){e.user[c].trim()!==""&&(r[c]=e.user[c].trim(),d=!0)}),d&&(r.type="invoice",i=r),i},checkFillCompany:function(){let i=null;const t=["companyName","companyOrgId","companyTaxId","companyTaxVatId"],r={};let d=!1;const e=this;return t.forEach(function(c){e.user[c].trim()!==""&&(r[c]=e.user[c].trim(),d=!0)}),d&&(i=r),i}}},l=i=>(S("data-v-380a0d0a"),i=i(),N(),i),E={class:"container users-login"},q=l(()=>s("div",{class:"columns"},[s("div",{class:"column"},[s("h1",{class:"title is-1",translate:"yes"},"Register")])],-1)),O={class:"columns"},L={key:0,class:"column is-half is-offset-one-quarter"},P={class:"simple-wrapper"},A=l(()=>s("div",{class:"columns is-variable is-2 is-centered"},[s("div",{class:"column is-12",translate:"yes"}," Required Fields ")],-1)),z={class:"columns is-variable is-2 is-centered"},B={class:"column is-12"},G={class:"field username"},j=l(()=>s("label",{class:"label",translate:"yes"},"Username",-1)),M={class:"control"},Z=l(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty")],-1)),Y={class:"columns is-variable is-2 is-centered"},H={class:"column is-6"},J={class:"field email"},K=l(()=>s("label",{class:"label",translate:"yes"},"Email",-1)),Q={class:"control"},W=l(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty"),s("div",{class:"form-message","data-message":"exists",translate:"yes"},"This email already exists")],-1)),X={class:"column is-6"},$={class:"field email2"},ss=l(()=>s("label",{class:"label"},"Email Confirm",-1)),es={class:"control"},ts=l(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty"),s("div",{class:"form-message","data-message":"not confirmed",translate:"yes"},"Values do not match")],-1)),os={class:"columns is-variable is-2 is-centered"},ls={class:"column is-6"},is={class:"field password"},as=l(()=>s("label",{class:"label"},"Password",-1)),ns={class:"control"},cs=l(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty")],-1)),rs={class:"column is-6"},ds={class:"field password2"},us=l(()=>s("label",{class:"label"},"Password Confirm",-1)),ms={class:"control"},ps=l(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty"),s("div",{class:"form-message","data-message":"not confirmed",translate:"yes"},"Values do not match")],-1)),_s=l(()=>s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1)),hs={class:"columns is-variable is-2"},fs={class:"column is-6"},vs={class:"field"},ys=l(()=>s("label",{class:"label"},"First Name",-1)),gs={class:"control"},bs={class:"column is-6"},Vs={class:"field"},xs=l(()=>s("label",{class:"label"},"Last Name",-1)),Is={class:"control"},ws={class:"columns is-variable is-2"},Ts={class:"column is-12"},Us={class:"field"},Fs=l(()=>s("label",{class:"label"},"Street",-1)),ks={class:"control"},Cs={class:"columns is-variable is-2"},Ss={class:"column is-12"},Ns={class:"field"},Rs=l(()=>s("label",{class:"label"},"Street 2",-1)),Ds={class:"control"},Es={class:"columns is-variable is-2"},qs={class:"column is-4"},Os={class:"field"},Ls=l(()=>s("label",{class:"label"},"ZIP",-1)),Ps={class:"control"},As={class:"column is-8"},zs={class:"field"},Bs=l(()=>s("label",{class:"label"},"City",-1)),Gs={class:"control"},js={class:"columns is-variable is-2"},Ms={class:"column is-6"},Zs={class:"field"},Ys=l(()=>s("label",{class:"label"},"State",-1)),Hs={class:"control"},Js={class:"column is-6"},Ks={class:"field"},Qs=l(()=>s("label",{class:"label"},"Country",-1)),Ws={class:"control select"},Xs=["value"],$s={class:"columns is-variable is-2 is-centered"},se={class:"column is-6"},ee={class:"field"},te=l(()=>s("label",{class:"label"},"Phone",-1)),oe={class:"control"},le={class:"simple-wrapper"},ie=l(()=>s("div",{class:"columns is-variable is-2 is-centered"},[s("div",{class:"column is-12",translate:"yes"}," If you are company ")],-1)),ae={class:"columns is-variable is-2 is-centered"},ne={class:"column is-12"},ce={class:"field companyName"},re=l(()=>s("label",{class:"label",translate:"yes"},"Company Name",-1)),de={class:"control"},ue={class:"columns is-variable is-2 is-centered"},me={class:"column is-6"},pe={class:"field companyOrgId"},_e=l(()=>s("label",{class:"label",translate:"yes"},"Organisation ID",-1)),he={class:"control"},fe={class:"columns is-variable is-2 is-centered"},ve={class:"column is-6"},ye={class:"field companyTaxId"},ge=l(()=>s("label",{class:"label"},"Company Tax ID",-1)),be={class:"control"},Ve={class:"column is-6"},xe={class:"field companyTaxVatId"},Ie=l(()=>s("label",{class:"label"},"Company VAT ID",-1)),we={class:"control"},Te=l(()=>s("hr",null,null,-1)),Ue={class:"button is-success"},Fe={key:1,class:"column is-half is-offset-one-quarter"},ke=l(()=>s("h2",{class:"title is-2",translate:"yes"},[y("Your registration was successfull,"),s("br"),y("we are sending you an email")],-1)),Ce=l(()=>s("p",{translate:"yes"},"Check your mailbox for verification email (if not found check, also you spam folder).",-1)),Se=[ke,Ce];function Ne(i,t,r,d,e,c){const _=g("font-awesome-icon"),f=g("google-recaptcha");return u(),m("div",E,[q,s("div",O,[e.sent?(u(),m("div",Fe,Se)):(u(),m("div",L,[s("form",{onSubmit:t[18]||(t[18]=I((...o)=>c.userRegister&&c.userRegister(...o),["prevent"]))},[s("div",P,[A,s("div",z,[s("div",B,[s("div",G,[j,s("div",M,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>e.user.username=o),placeholder:"Username"},null,512),[[n,e.user.username]])]),Z])])]),s("div",Y,[s("div",H,[s("div",J,[K,s("div",Q,[a(s("input",{class:"input",type:"email","onUpdate:modelValue":t[1]||(t[1]=o=>e.user.email=o),placeholder:"Email"},null,512),[[n,e.user.email]])]),W])]),s("div",X,[s("div",$,[ss,s("div",es,[a(s("input",{class:"input",type:"email","onUpdate:modelValue":t[2]||(t[2]=o=>e.user.email2=o),placeholder:"Email Confirm"},null,512),[[n,e.user.email2]])]),ts])])]),s("div",os,[s("div",ls,[s("div",is,[as,s("div",ns,[a(s("input",{class:"input",type:"password","onUpdate:modelValue":t[3]||(t[3]=o=>e.user.password=o),placeholder:"Password"},null,512),[[n,e.user.password]])]),cs])]),s("div",rs,[s("div",ds,[us,s("div",ms,[a(s("input",{class:"input",type:"password","onUpdate:modelValue":t[4]||(t[4]=o=>e.user.password2=o),placeholder:"Password Confirm"},null,512),[[n,e.user.password2]])]),ps])])])]),_s,s("div",hs,[s("div",fs,[s("div",vs,[ys,s("div",gs,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[5]||(t[5]=o=>e.user.nameFirst=o),placeholder:"First Name"},null,512),[[n,e.user.nameFirst]])])])]),s("div",bs,[s("div",Vs,[xs,s("div",Is,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[6]||(t[6]=o=>e.user.nameLast=o),placeholder:"Last Name"},null,512),[[n,e.user.nameLast]])])])])]),s("div",ws,[s("div",Ts,[s("div",Us,[Fs,s("div",ks,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[7]||(t[7]=o=>e.user.street=o),placeholder:"Street"},null,512),[[n,e.user.street]])])])])]),s("div",Cs,[s("div",Ss,[s("div",Ns,[Rs,s("div",Ds,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[8]||(t[8]=o=>e.user.street2=o),placeholder:"Street 2"},null,512),[[n,e.user.street2]])])])])]),s("div",Es,[s("div",qs,[s("div",Os,[Ls,s("div",Ps,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[9]||(t[9]=o=>e.user.zip=o),placeholder:"ZIP"},null,512),[[n,e.user.zip]])])])]),s("div",As,[s("div",zs,[Bs,s("div",Gs,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[10]||(t[10]=o=>e.user.city=o),placeholder:"City"},null,512),[[n,e.user.city]])])])])]),s("div",js,[s("div",Ms,[s("div",Zs,[Ys,s("div",Hs,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[11]||(t[11]=o=>e.user.state=o),placeholder:"State"},null,512),[[n,e.user.state]])])])]),s("div",Js,[s("div",Ks,[Qs,s("div",Ws,[i.$store.state.coredata&&i.$store.state.coredata.countries?a((u(),m("select",{key:0,"onUpdate:modelValue":t[12]||(t[12]=o=>e.user.country=o)},[(u(!0),m(T,null,U(i.$store.state.coredata.countries,o=>(u(),m("option",{value:o.code,key:o.code},C(o.name),9,Xs))),128))],512)),[[w,e.user.country]]):b("v-if",!0)])])])]),s("div",$s,[s("div",se,[s("div",ee,[te,s("div",oe,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[13]||(t[13]=o=>e.user.phone=o),placeholder:"Phone"},null,512),[[n,e.user.phone]])])])])]),s("div",le,[ie,s("div",ae,[s("div",ne,[s("div",ce,[re,s("div",de,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[14]||(t[14]=o=>e.user.companyName=o),placeholder:"Company Name"},null,512),[[n,e.user.companyName]])])])])]),s("div",ue,[s("div",me,[s("div",pe,[_e,s("div",he,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[15]||(t[15]=o=>e.user.companyOrgId=o),placeholder:"Organisation ID"},null,512),[[n,e.user.companyOrgId]])])])])]),s("div",fe,[s("div",ve,[s("div",ye,[ge,s("div",be,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[16]||(t[16]=o=>e.user.companyTaxId=o),placeholder:"Company Tax ID"},null,512),[[n,e.user.companyTaxId]])])])]),s("div",Ve,[s("div",xe,[Ie,s("div",we,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":t[17]||(t[17]=o=>e.user.companyTaxVatId=o),placeholder:"Company VAT ID"},null,512),[[n,e.user.companyTaxVatId]])])])])])]),Te,s("button",Ue,[F(_,{icon:"check"}),y("   Register ")]),c.useRecaptcha?(u(),k(f,{key:0,ref:"recaptcha"},null,512)):b("v-if",!0)],32)]))])])}const Oe=R(D,[["render",Ne],["__scopeId","data-v-380a0d0a"],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/Register.vue"]]);export{Oe as default};
