import{E as A,a as P,e as C,f as I,h,i as M,n as w,p as S,q as G,r as N,t as x,u as T,v as _,w as j,x as B,y as O}from"./chunk-AUEWRM4R.js";import{$ as f,A as a,G as y,H as m,P as p,Pa as R,U as r,Ua as F,V as i,W as c,Wa as b,Ya as v,ia as g,k as s,z as u}from"./chunk-F52RLZ3D.js";var d=class t{constructor(o,e,n){this.router=o;this.route=e;this.formBuilder=n;this.createForm()}error;registerForm;isLoading=!1;displayPolicies=!1;displayCookies=!1;displayHelps=!1;ngOnInit(){}login(){this.registerForm.valid||Object.keys(this.registerForm.controls).forEach(o=>{this.registerForm.get(o)?.markAsTouched({onlySelf:!0})})}createForm(){this.registerForm=this.formBuilder.group({phonenumber:["",{validators:[w.required,w.pattern("^[0-9]{10}$")]}]})}resetPassword(){this.router.navigate(["/reset-password"],{relativeTo:this.route})}sendOtp(){this.router.navigate(["/verify-otp"],{relativeTo:this.route})}static \u0275fac=function(e){return new(e||t)(a(b),a(F),a(x))};static \u0275cmp=y({type:t,selectors:[["app-reset-password"]],standalone:!1,decls:16,vars:3,consts:[[1,"app-container"],[1,"content-box"],[1,"row","align-items-center"],[1,"col-md-12","mx-auto"],[1,"page-header","p-2"],[1,"page-helptext","p-2"],["novalidate","",3,"ngSubmit","formGroup"],[1,"col-md-12"],[1,"p-2"],[1,"pi","pi-phone"],["pInputText","","placeholder","Phone Number"],["label","Send OTP","styleClass","w-100","severity","info",3,"click","rounded"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),g(5," Reset Password "),i(),r(6,"div",5),g(7,`
Please enter your registered mobile number `),i(),r(8,"form",6),f("ngSubmit",function(){return n.login()}),r(9,"div",7)(10,"p-inputGroup",8)(11,"p-inputGroupAddon"),c(12,"i",9),i(),c(13,"input",10),i(),r(14,"div",8)(15,"p-button",11),f("click",function(){return n.sendOtp()}),i()()()()()()()()),e&2&&(p("@slideInOut",void 0),u(8),p("formGroup",n.registerForm),u(7),p("rounded",!0))},dependencies:[G,S,N,j,B,O,P],encapsulation:2,data:{animation:[C("slideInOut",[M(":enter",[h({marginLeft:"-100%"}),I("300ms",h({marginLeft:"0px"}))])])]}})};var L=[{path:"",component:d}],l=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=s({imports:[v.forChild(L),v]})};var E=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=s({imports:[R,l,_,A,T]})};export{E as ResetPasswordModule};
