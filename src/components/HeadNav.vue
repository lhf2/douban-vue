<template>
  <header class="head-box">
    <span v-show="id" class="return-btn" @click="back">返回</span>
    <span class="title">{{title}}</span>
  </header>
</template>
<script>
  export default{
    name:'HeadNav',
    props:['title','id'],
    data(){
      return{
        "title1":this.title
      }
    },
    //刷新后防止标题回去
    mounted(){
      if(location.href.indexOf('/top')>=0){
        this.title1='推荐电影'
      }else if(location.href.indexOf('/usa')>=0){
        this.title1='北美票房'
      }else if(location.href.indexOf('/search')>=0){
        this.title1='搜索'
      }else{
        this.title1='推荐电影'
      }
      return this.title1
    },
    methods:{
      back(){
        history.back()
      }
    }
  }
</script>
<style scoped>
  .head-box{
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .5rem;
    background: #fff;
    overflow: hidden;
    text-align: center;
    position: fixed;
    top:0;
  }
  .return-btn{
    float: left;
    margin-left: .2rem;
  }
  .title{
    margin-left: -.4rem;
  }
</style>
