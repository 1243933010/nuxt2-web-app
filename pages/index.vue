<template>
  <div class="container1">
    <div class="tab">
      <Row>
        <Col span="8">
        <Menu :theme="theme" @on-select="(e)=>{onSelect(e)}" @on-open-change="handleOpen">
          <template v-for="(item,index) in $store.state.tabRoute.tabList" >
            <MenuItem v-if="!item.grophBool" :name="item.path" > <Icon type="md-document" /> {{ item.title }}</MenuItem>
          <Submenu :name="item.path" v-if="item.grophBool">
            <template #title>
              <Icon type="ios-paper" />{{item.title}}</template>
           <MenuItem v-for="(val,ind) in item.child" :name="val.path">{{ val.title }}</MenuItem>
          </Submenu>
          </template>
         
        </Menu>
        </Col>
      </Row>
    </div>
    <div class="content">
      <div class="text-red-700 con-top">
        {{ $store.state.tabRoute.routeObject.title }}
      </div>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'IndexPage',
  data() {
    return {
      theme: 'light'
    };
  },
  asyncData(){
    // console.log(axios)
    return {title:'11111'}
  },
  beforeCreate(){
    console.log(this.$store,'---')
    this.$router.push({path:'/index'});
    this.$store.commit('tabRoute/updateRoute',{path:'/index',title:'首页'})
    this.$store.dispatch('tabRoute/timeOutUpdate',{})
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    onSelect(e){
      console.log(e)
      this.$store.commit('tabRoute/updateRoute',{path:'e',title:e})
      this.$router.push({path:e});
    }
  }
}
</script>


<style lang="scss">
.container1 {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .tab {
    // width: 250px;
    height: 100vh;
    background-color: #001529;

    .ivu-menu-light {
      background-color: #001529;
      color: white;
    }

    .ivu-menu {
      color: white;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    // background-color: red;
    height: 100vh;
    .con-top{
      // width: 100%;
    }
  }
}
</style>
