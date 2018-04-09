<template>
  <div id="app">
    <!--<head-nav :title="title"></head-nav>-->
    <transition name="fade">
      <keep-alive>
        <router-view class="content-list"></router-view>
      </keep-alive>
    </transition>
    <foot-nav @viewIn="changeTitle"></foot-nav>
  </div>
</template>
<script>
import HeadNav from './components/HeadNav'
import FootNav from './components/FootNav'
export default {
  name: 'app',
  components:{
    FootNav,
    HeadNav
  },
  data(){
    return{
      title:''
    }
  },
  methods:{
    changeTitle(value){
      this.title=value;
    }
  }
}
</script>

<style scoped>
.content-list{
  position: absolute;
  width:100%;
  padding-bottom: 1.2rem;
  padding-top: 1.2rem;
}
.fade-enter-active,.fade-leave-active{
  transition: all 0.3s linear;
}
.fade-enter,.fade-leave-active{
  opacity: 0;
  /*transform:translate(-100%,0);*/
}
</style>
