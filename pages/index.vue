<template>
  <div class="container">
    <div class="tab">
      <Row>
        <Col span="8">
        <Menu :theme="theme" @on-select="onSelect" @on-open-change="handleOpen">
          
          <MenuItem name="/" > <Icon type="md-document" /> 主页</MenuItem>
          <Submenu name="2">
            <template #title>
              <Icon type="ios-paper" />商品</template>
           <MenuItem name="/shop/shopping">商品管理</MenuItem>
           <MenuItem name="/shop/shopClassification">商品分类</MenuItem>
            <MenuItem name="1-3">商品规格</MenuItem>
          </Submenu>
        </Menu>
        </Col>
      </Row>
    </div>
    <div class="content">
      <span class="text-red-500">ces</span>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      theme: 'light'
    };
  },
  beforeCreate(){

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    onSelect(e){
      console.log(e)
      this.$router.push({path:e});
    }
  }
}
</script>


<style lang="scss">
// @import '../assets/css/tailwind.min.css';

.container {
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
    flex: 1;
    // background-color: red;
    height: 100vh;
  }
}
</style>
