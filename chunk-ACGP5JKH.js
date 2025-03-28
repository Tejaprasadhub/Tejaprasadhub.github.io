import{A as h,B as u,C as f,E,F as x,O as S,P as T,Q as I,R as N,T as A,W as L,Z as P,e as C,fa as F,g as c,ga as W,h as g,ha as B,ia as V,ja as O,l as s,o as D,p as _,q as m,r as p,s as e,t as i,u as d,v as M,y as n}from"./chunk-ISUXOO2R.js";function j(t,o){t&1&&(d(0,"img",25),n(1," Active Invoices "))}function z(t,o){t&1&&(d(0,"img",26),n(1," Total Upcoming Payments "))}function H(t,o){t&1&&(d(0,"img",27),n(1," Upcoming Payment "))}function U(t,o){t&1&&(d(0,"img",28),n(1," Previous Payment "))}function Y(t,o){t&1&&n(0," Payment Summary ")}function G(t,o){t&1&&n(0," Utilization Summary ")}function J(t,o){t&1&&n(0," Payment History ")}function q(t,o){t&1&&(e(0,"div",30)(1,"div",3)(2,"div",5),d(3,"img",31),i(),e(4,"div",4)(5,"span",32)(6,"strong"),d(7,"i",19),n(8,"77 Lakhs"),i(),e(9,"p",33),n(10,"Seller Name"),i()()(),e(11,"div",5)(12,"small",20),n(13,"Dec 31 2024"),i()()()())}function K(t,o){if(t&1&&m(0,q,14,0,"div",29),t&2){let l=o.$implicit;p("ngForOf",l)}}var b=class t{cities=[];custom=[];date1;selectedCity;selectedCustom;data;options;data1;options1;products=[];ngOnInit(){let o="#000";this.data1={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:["#3A4A61","#D1D9E7","#879EC0"],hoverBackgroundColor:["#3A4A61","#D1D9E7","#879EC0"]}]},this.options1={plugins:{legend:{labels:{usePointStyle:!0,color:o}}}},this.data={labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#3A4A61","#D1D9E7","#879EC0"],hoverBackgroundColor:["#3A4A61","#D1D9E7","#879EC0"]}]},this.options={cutout:"60%",plugins:{legend:{labels:{color:o}}}},this.cities=[{name:"All Sellers",code:""},{name:"Alpha Traders",code:"NY"},{name:"Bravo Mart",code:"RM"},{name:"Charlie Supplies",code:"LDN"},{name:"Delta Grocers",code:"IST"}],this.custom=[{name:"All Time",code:""},{name:"This Month",code:"NY"},{name:"Last Month",code:"NY"},{name:"Last 6 Months",code:"RM"},{name:"Last 12 Months",code:"RM"},{name:"Custom",code:"LDN"}],this.selectedCity=this.cities[0],this.selectedCustom=this.custom[5],this.products=[{image:"dashboard_payment.png"},{image:"dashboard_payment.png"},{image:"dashboard_payment.png"},{image:"dashboard_payment.png"},{image:"dashboard_payment.png"}]}static \u0275fac=function(l){return new(l||t)};static \u0275cmp=D({type:t,selectors:[["app-dashboard"]],standalone:!1,decls:85,vars:15,consts:[["dv",""],[1,"row","app-container"],[1,"col-md-12"],[1,"row","align-items-center"],[1,"col"],[1,"col-auto"],["icon","pi pi-plus","label","Create a New Invoice"],["optionLabel","name","placeholder","Select a City",3,"ngModelChange","options","ngModel"],["optionLabel","name","placeholder","Select Custom",3,"ngModelChange","options","ngModel"],["inputId","buttondisplay","placeholder","From Date",3,"ngModelChange","ngModel","showIcon","showOnFocus"],["inputId","buttondisplay","placeholder","To Date",3,"ngModelChange","ngModel","showIcon","showOnFocus"],["icon","pi pi-plus","label","Download Reports",1,"btn-secondary"],[1,"row"],["pTemplate","header"],[1,"row","align-items-baseline"],[1,"col-auto","pr-0"],[1,"value"],[1,"col","pl-0"],[1,"label"],[1,"pi","pi-indian-rupee"],[1,"small-label","pl-4"],["type","doughnut",3,"data","options"],["type","pie",3,"data","options"],[3,"value"],["pTemplate","list"],["alt","Card","src","/assets/icons/dashboard_receipt.png",1,"img-fluid"],["alt","Card","src","/assets/icons/dashboard_payment.png",1,"img-fluid"],["alt","Card","src","/assets/icons/dashboard_upcoming.png",1,"img-fluid"],["alt","Card","src","/assets/icons/dashboard_previous.png",1,"img-fluid"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],["alt","Card","src","/assets/icons/dashboard_payment_right.png",1,"img-fluid"],[1,"small-label"],[1,"mb-0"]],template:function(l,a){if(l&1){let y=M();e(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h4"),n(5,"Welcome, Buyer Name"),i()(),e(6,"div",5),d(7,"p-button",6),i()(),e(8,"div",3)(9,"div",4)(10,"p-dropdown",7),f("ngModelChange",function(r){return c(y),u(a.selectedCity,r)||(a.selectedCity=r),g(r)}),i()(),e(11,"div",4)(12,"p-dropdown",8),f("ngModelChange",function(r){return c(y),u(a.selectedCustom,r)||(a.selectedCustom=r),g(r)}),i()(),e(13,"div",4)(14,"p-calendar",9),f("ngModelChange",function(r){return c(y),u(a.date1,r)||(a.date1=r),g(r)}),i()(),e(15,"div",4)(16,"p-calendar",10),f("ngModelChange",function(r){return c(y),u(a.date1,r)||(a.date1=r),g(r)}),i()(),e(17,"div",5),d(18,"p-button",11),i()(),e(19,"div",12)(20,"div",4)(21,"p-card"),m(22,j,2,0,"ng-template",13),e(23,"div",14)(24,"div",15)(25,"span",16),n(26,"77"),i()(),e(27,"div",17)(28,"span",18),n(29,"Active"),i()()()()(),e(30,"div",4)(31,"p-card"),m(32,z,2,0,"ng-template",13),e(33,"div",14)(34,"div",15)(35,"span",16),d(36,"i",19),n(37,"7.77"),i()(),e(38,"div",17)(39,"span",18),n(40,"Crores"),i()()()()(),e(41,"div",4)(42,"p-card"),m(43,H,2,0,"ng-template",13),e(44,"div",14)(45,"div",15)(46,"span",16),d(47,"i",19),n(48,"77"),i()(),e(49,"div",17)(50,"span",18),n(51,"Lakhs"),i(),e(52,"small",20),n(53,"Jan 30 2024"),i()()()()(),e(54,"div",4)(55,"p-card"),m(56,U,2,0,"ng-template",13),e(57,"div",14)(58,"div",15)(59,"span",16),d(60,"i",19),n(61,"77"),i()(),e(62,"div",17)(63,"span",18),n(64,"Lakhs"),i(),e(65,"small",20),n(66,"Dec 31 2024"),i()()()()()(),e(67,"div",12)(68,"div",4)(69,"p-card"),m(70,Y,1,0,"ng-template",13),e(71,"div",14),d(72,"p-chart",21),i()()(),e(73,"div",4)(74,"p-card"),m(75,G,1,0,"ng-template",13),e(76,"div",14),d(77,"p-chart",22),i()()(),e(78,"div",4)(79,"p-card"),m(80,J,1,0,"ng-template",13),e(81,"div",14)(82,"p-dataView",23,0),m(84,K,1,1,"ng-template",24),i()()()()()()()}l&2&&(s(10),p("options",a.cities),h("ngModel",a.selectedCity),s(2),p("options",a.custom),h("ngModel",a.selectedCustom),s(2),h("ngModel",a.date1),p("showIcon",!0)("showOnFocus",!1),s(2),h("ngModel",a.date1),p("showIcon",!0)("showOnFocus",!1),s(56),p("data",a.data)("options",a.options),s(5),p("data",a.data1)("options",a.options1),s(5),p("value",a.products))},dependencies:[E,T,I,A,P,L,W,F,B,V],styles:[".p-card{padding:10px 0}  .p-card .p-card-header{padding:0 20px;color:var(--secondary);font-family:Inter;font-weight:500;font-size:13px;line-height:140%;letter-spacing:0%}  .p-card .p-card-header img{width:20px;height:20px;margin-right:10px}  .p-card .p-card-body{padding:0 20px}  .p-card .p-card-body .p-card-content{padding:0}  .p-card .p-card-body .p-card-content .value{font-family:Inter;font-weight:600;font-size:36px;line-height:44px;letter-spacing:0%;margin-right:10px}  .p-card .p-card-body .p-card-content .label{font-family:Inter;font-weight:400;font-size:18px;line-height:28px;letter-spacing:0%}  .p-card .p-card-body .p-card-content .small-label{color:var(--sub-title)}"]})};var Q=[{path:"dashboard",component:b}],v=class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=_({type:t});static \u0275inj=C({imports:[S.forChild(Q),S]})};var k=class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=_({type:t});static \u0275inj=C({imports:[x,N,O,v]})};export{k as HomeModule};
