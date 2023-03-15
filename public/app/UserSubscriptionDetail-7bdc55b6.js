import{r as v,c as o,a as s,b as _,w as h,f as l,t as n,F as f,d as g,h as u,n as k,o as r,Y as S,Z as D}from"./sett-4d48a041.js";import{_ as C}from"./index-278cccc9.js";import"./edit-e2caae93.js";const x={name:"userSubscriptionDetail",data(){return{subscription:null}},created:function(){this.getSubscription(this.$route.params.id)},computed:{userIsAdmin:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&this.$store.state.user.profile.type==="admin")}},methods:{getSubscription(e){const a=this,b={timeout:3e3,needsAuth:!0},y={query:{_id:e},limit:1};this.$httpc.post("subscription/list",y,b).then(function(t){t&&t.data&&t.data&&t.data.results&&t.data.results.length===1&&(a.subscription=t.data.results[0])}).catch(function(t){console.error(t)}).then(function(){a.eventBus.emit("translateContent",a.$store.getters.getTranslates)})},splitTitle(e){return[e.slice(0,6),e.slice(6)]},splitDate(e){return e.split("T")},actionsSuspend:function(){const e=this;e.$httpc.post("/subscription/suspend/"+e.subscription._id,{},{timeout:1e4}).then(a=>{console.debug("subscription/suspend response:",a)})},actionsActivate:function(){const e=this;e.$httpc.post("/subscription/reactivate/"+e.subscription._id,{},{timeout:1e4}).then(a=>{console.debug("subscription/activate response:",a)})},getPaymentProviderName:function(){if(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename){const e=this.order.data.paymentData.codename.split("_");if(e.constructor===Array&&e.length>0)return e[e.length-1]}return"paypal"},actionsPaid:function(){const e=this;e.$httpc.get("/order/payment/"+e.getPaymentProviderName()+"/adminsubscriptionpaid?paymentId="+e.subscription.data.agreementId+"&ba_token=run_by_admin",{timeout:1e4}).then(a=>{console.debug("cycle paid response:",a),window.location.reload()})},statusClass:function(e){return e==="active"?"has-text-success":e==="suspended"?"has-text-danger":""}}},i=e=>(S("data-v-3efb503e"),e=e(),D(),e),I={id:"userSubscriptionDetail"},w={key:0},z={class:"container"},A={class:"columns is-variable is-centered"},N={class:"column is-8"},O={class:"breadcrumb","aria-label":"breadcrumbs"},P=i(()=>s("span",{translate:"yes"},"Subscriptions",-1)),T={class:"is-active"},U={"aria-current":"page"},B=i(()=>s("span",{class:"subscription-word",id:"subscription-breadcrumb",translate:"yes"}," Subscription ",-1)),E={class:"subscription-title"},V={class:"title is-2"},F=i(()=>s("span",{id:"subscription-detail-title",translate:"yes",class:"is-size-3"},"Subscription",-1)),L=i(()=>s("br",null,null,-1)),M={class:"subscription-title"},Y={class:"container subscription-detail-data"},q={class:"columns is-variable is-centered"},H={class:"column is-8"},R={class:"columns is-variable is-centered"},G={class:"column is-6"},Q={key:0},Z=i(()=>s("h4",{class:"title is-4",translate:"yes"},"History",-1)),j={class:"is-size-7"},J={key:0},K=i(()=>s("span",{translate:"yes"},"Related order",-1)),W={class:"column is-6"},X=i(()=>s("h4",{class:"title is-4",translate:"yes"},"Main info",-1)),$={class:"info info-settings"},ss=i(()=>s("span",{translate:"yes"},"Status",-1)),ts=i(()=>s("span",{translate:"yes"},"Price & Period",-1)),es=i(()=>s("span",{translate:"yes"},"Cycles",-1)),is={key:0,id:"subscriptionCyclesInfinity",translate:"yes"},ns={key:1},os={class:"info info-dates"},rs={key:0},as=i(()=>s("span",{translate:"yes"},"Next payment",-1)),cs={class:"is-size-7"},ls={key:1},us=i(()=>s("span",{translate:"yes"},"Last payment",-1)),ds={class:"is-size-7"},ps={key:2},_s=i(()=>s("span",{translate:"yes"},"Created",-1)),hs={class:"is-size-7"},bs={key:3},ys=i(()=>s("span",{translate:"yes"},"Started",-1)),ms={class:"is-size-7"},vs={class:"info info-more"},fs=i(()=>s("span",{translate:"yes"},"Original order",-1)),gs={key:0},ks=i(()=>s("h4",{class:"title is-5",translate:"yes"},"Available Actions",-1)),Ss={key:0},Ds=i(()=>s("p",{class:"is-size-7 has-text-grey-dark"}," Makes your subscription active again with related payment applying. You receive e-mail when your subscription and related services are re-activated. ",-1)),Cs={key:1},xs=i(()=>s("span",{translate:"yes"},"Admin Actions",-1)),Is=i(()=>s("p",{class:"is-size-7 has-text-grey-dark",translate:"yes"}," Mark next cycle as paid. For cases when payment system failed but customer paid other way. ",-1)),ws={key:0},zs=i(()=>s("p",{class:"is-size-7 has-text-grey-dark",translate:"yes"}," Suspends subscription and its payment. You receive e-mail when your subscription and related services are paused. ",-1)),As={key:1,class:"container"},Ns={class:"columns is-variable is-centered"},Os={class:"column is-8"},Ps=i(()=>s("h1",{class:"title is-1",translate:"yes"},"Unauthorized",-1)),Ts=i(()=>s("span",{translate:"yes"},"To see order detail, you may need to",-1));function Us(e,a,b,y,t,c){const p=v("router-link");return r(),o("div",I,[t.subscription?(r(),o("div",w,[s("div",z,[s("div",A,[s("div",N,[s("nav",O,[s("ul",null,[s("li",null,[_(p,{to:{name:"userSubscriptions"}},{default:h(()=>[P]),_:1})]),s("li",T,[s("a",U,[B,l("  "),s("span",E,[l("   #"),s("strong",null,n(c.splitTitle(t.subscription._id)[0]),1),l(n(c.splitTitle(t.subscription._id)[1]),1)])])])])])])])]),s("h2",V,[F,l(),L,s("strong",M,n(t.subscription.orderItemName),1)]),s("div",Y,[s("div",q,[s("div",H,[s("div",R,[s("div",G,[t.subscription.history?(r(),o("div",Q,[Z,s("ol",null,[(r(!0),o(f,null,g(e.$helpers.reverseArrayItems(t.subscription.history),(d,m)=>(r(),o("li",{key:m},[s("div",j,n(d.date),1),s("div",null,[s("div",null,[s("strong",null,n(d.action),1)]),d.relatedOrder?(r(),o("div",J,[K,l(": "),_(p,{to:{name:"userOrderDetail",params:{id:d.relatedOrder}}},{default:h(()=>[l(n(d.relatedOrder),1)]),_:2},1032,["to"])])):u("v-if",!0)])]))),128))])])):u("v-if",!0)]),s("div",W,[X,s("div",$,[s("ul",null,[s("li",null,[ss,s("strong",{class:k(c.statusClass(t.subscription.status))},n(t.subscription.status),3)]),s("li",null,[ts,s("strong",null,n(t.subscription.price)+" / "+n(t.subscription.duration)+" "+n(t.subscription.period),1)]),s("li",null,[es,s("strong",null,[t.subscription.cycles<=1?(r(),o("span",is,"Infinity")):(r(),o("span",ns,n(t.subscription.cycles),1))])])])]),s("div",os,[s("ul",null,[t.subscription&&t.subscription.dates&&t.subscription.dates.dateOrderNext?(r(),o("li",rs,[as,s("strong",null,n(c.splitDate(t.subscription.dates.dateOrderNext)[0]),1),s("span",cs,n(c.splitDate(t.subscription.dates.dateOrderNext)[1]),1)])):u("v-if",!0),t.subscription&&t.subscription.dates&&t.subscription.dates.dateEnd?(r(),o("li",ls,[us,s("strong",null,n(c.splitDate(t.subscription.dates.dateEnd)[0]),1),s("span",ds,n(c.splitDate(t.subscription.dates.dateEnd)[1]),1)])):u("v-if",!0),t.subscription&&t.subscription.dates&&t.subscription.dates.dateCreated?(r(),o("li",ps,[_s,s("strong",null,n(c.splitDate(t.subscription.dates.dateCreated)[0]),1),s("span",hs,n(c.splitDate(t.subscription.dates.dateCreated)[1]),1)])):u("v-if",!0),t.subscription&&t.subscription.dates&&t.subscription.dates.dateStart?(r(),o("li",bs,[ys,s("strong",null,n(c.splitDate(t.subscription.dates.dateStart)[0]),1),s("span",ms,n(c.splitDate(t.subscription.dates.dateStart)[1]),1)])):u("v-if",!0)])]),s("div",vs,[s("ul",null,[s("li",null,[fs,s("strong",null,[_(p,{to:{name:"userOrderDetail",params:{id:t.subscription.orderOriginId}}},{default:h(()=>[l(n(t.subscription.orderOriginId),1)]),_:1},8,["to"])])]),t.subscription&&t.subscription.status?(r(),o("li",gs,[ks,t.subscription.status==="suspended"?(r(),o("div",Ss,[s("button",{onClick:a[0]||(a[0]=d=>c.actionsActivate()),class:"button",translate:"yes"},"Re-activate"),Ds])):u("v-if",!0)])):u("v-if",!0),c.userIsAdmin?(r(),o("li",Cs,[xs,s("div",null,[s("button",{onClick:a[1]||(a[1]=d=>c.actionsPaid()),class:"button",translate:"yes"},"Cycle Paid"),Is]),t.subscription.status==="active"?(r(),o("div",ws,[s("button",{onClick:a[2]||(a[2]=d=>c.actionsSuspend()),class:"button",translate:"yes"},"Suspend"),zs])):u("v-if",!0)])):u("v-if",!0)])])])])])])])])):(r(),o("div",As,[s("div",Ns,[s("div",Os,[Ps,s("p",null,[Ts,l("   "),_(p,{to:{name:"login"},tag:"a",class:"","active-class":"is-active",translate:"yes"},{default:h(()=>[l("Log in")]),_:1}),l(". ")])])])]))])}const Fs=C(x,[["render",Us],["__scopeId","data-v-3efb503e"],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/UserSubscriptionDetail.vue"]]);export{Fs as default};