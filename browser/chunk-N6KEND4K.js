import{B as v,C as l,D as P,E as b,F as S,G,H as I,I as N,J as R,K as j,M as k,P as E,Q as x,S as w,T as A,X as B,Z as O,c as m,g as s,h as p,j as h,k as d,l as a,m as t,n as r,o as i,p as C,q as g,t as y,x as F,z as M}from"./chunk-IAH5HP5P.js";import"./chunk-IMPBB4AK.js";var u=class o{constructor(n,e,f){this.router=n;this.route=e;this.formBuilder=f;this.createForm()}error;loginForm;isLoading=!1;displayPolicies=!1;displayCookies=!1;displayHelps=!1;ngOnInit(){}login(){this.loginForm.valid||Object.keys(this.loginForm.controls).forEach(n=>{this.loginForm.get(n)?.markAsTouched({onlySelf:!0})})}createForm(){this.loginForm=this.formBuilder.group({phonenumber:["",{validators:[l.required,l.pattern("^[0-9]{10}$")]}],password:["",l.required]})}resetPassword(){this.router.navigate(["/reset-password"],{relativeTo:this.route})}static \u0275fac=function(e){return new(e||o)(p(M),p(F),p(G))};static \u0275cmp=h({type:o,selectors:[["app-change-password"]],standalone:!1,decls:21,vars:5,consts:[[1,"app-container"],[1,"content-box"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"col-md-6","mx-auto"],[1,"page-header","p-2"],[1,"page-subheader","p-2"],["novalidate","",3,"ngSubmit","formGroup"],[1,"col-md-12"],[1,"p-2"],[1,"pi","pi-lock"],["placeholder","New Password",1,"w-100",3,"toggleMask"],["placeholder","Re-enter New Password",1,"w-100",3,"toggleMask"],["label","Save Password","styleClass","w-100","severity","info",3,"rounded"]],template:function(e,f){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),i(3,"div",3),t(4,"div",4)(5,"div",5),g(6," Create a New Password "),r(),t(7,"div",6),g(8," Set a new password to login to your account. "),r(),t(9,"form",7),C("ngSubmit",function(){return f.login()}),t(10,"div",8)(11,"p-inputGroup",9)(12,"p-inputGroupAddon"),i(13,"i",10),r(),i(14,"p-password",11),r(),t(15,"p-inputGroup",9)(16,"p-inputGroupAddon"),i(17,"i",10),r(),i(18,"p-password",12),r(),t(19,"div",9),i(20,"p-button",13),r()()()()()()()),e&2&&(a("@slideInOut",void 0),s(9),a("formGroup",f.loginForm),s(5),a("toggleMask",!0),s(4),a("toggleMask",!0),s(2),a("rounded",!0))},dependencies:[b,P,S,R,j,k,B],encapsulation:2,data:{animation:[E("slideInOut",[A(":enter",[w({marginLeft:"-100%"}),x("300ms",w({marginLeft:"0px"}))])])]}})};var L=[{path:"",component:u}],c=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=d({type:o});static \u0275inj=m({imports:[v.forChild(L),v]})};var T=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=d({type:o});static \u0275inj=m({imports:[y,c,N,O,I]})};export{T as ChangePasswordModule};
