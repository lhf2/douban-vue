<template>
  <footer class="meun-box" @click="viewIn">
      <router-link class="meun-list" v-for="meun in meuns" :key="meun" :to="meun.url">{{meun.text}}</router-link>
  </footer>
</template>
<script>
  export default{
    name:'FootNav',
    data(){
      return {
        meuns:[
          {url:'/top',text:'推荐电影'},{url:'/usa',text:'北美票房'},{url:'/search',text:'搜索'}
        ],
        activeTxt:''
      }
   },
  methods: {
    viewIn(){
      //获取选中的那个文本
      this.activeTxt=document.getElementsByClassName('router-link-active')[0].innerText;
      this.$emit('viewIn',this.activeTxt)
    }
  }
  }
</script>
<style scoped>
  .meun-box{
    background: #fff;
    width: 100%;
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    display: flex;
    font-size: 16px;
  }
  .meun-box .meun-list{
    flex: 1;
    text-align: center;
    line-height: 1.2rem;
    font-size: .4rem;
  }
  .meun-list.router-link-active,.meun-list.cur{
    color: #FAB06A;
  }
</style>
