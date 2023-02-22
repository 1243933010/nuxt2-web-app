export const state = ()=>({
    tabList:[
        {title:'首页',grophBool:false,child:[],path:'/index'},
        {title:'商品',grophBool:true,
        child:[{title:'商品管理',grophBool:false,child:[],path:'/shop/shopping'},
            {title:'商品分类',grophBool:false,child:[],path:'/shop/shopClassification'},],
        path:'string'},

    ],
    routeObject:{}
})

export const mutations = {
    updateRoute(state,obj){
        state.routeObject = obj;
    }
}

export const actions = {
    timeOutUpdate({commit},object){
        setTimeout(()=>{
            commit('updateRoute',object)
        },1000)
    }
}