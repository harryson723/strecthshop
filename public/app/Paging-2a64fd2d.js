import{_ as p,A as l}from"./index-278cccc9.js";import{r as g,o as n,c as s,b as d,h as a,a as m}from"./sett-4d48a041.js";const _={data(){return{current:1,perPage:l.TABLE_PER_PAGE,order:"is-centered",size:"is-small",isSimple:!1,isRounded:!0}},props:{bottom:Boolean,total:{type:Number,required:!0}},created:function(){},methods:{pagingChanged:function(t){this.current=t,this.$parent.setActivePage(t)}}},h={key:0},f={key:0},b=m("button",{class:"button"},"Load More ...",-1),P=[b];function v(t,o,r,C,e,i){const c=g("o-pagination");return r.total>e.perPage?(n(),s("section",h,[d(c,{total:r.total,current:e.current,"onUpdate:current":o[0]||(o[0]=u=>e.current=u),order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage,onChange:i.pagingChanged,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},null,8,["total","current","order","size","simple","rounded","per-page","onChange"]),r.bottom==!0?(n(),s("div",f,P)):a("v-if",!0)])):a("v-if",!0)}const B=p(_,[["render",v],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/global/Paging.vue"]]);export{B as P};
