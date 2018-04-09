<template>
<div>
  <head-nav :title='title1' :id="id"></head-nav>
  <load-ing v-show="DONE_LOADING"></load-ing>
  <div v-cloak class="summary" v-html="DONE_MOVIE_DETAIL"></div>
</div>
</template>
<script>
  import HeadNav from '../components/HeadNav'
  import {mapGetters} from 'vuex'
  import LoadIng from './LoadIng'
  export default{
    name:'MovieDetail',
    components:{
      LoadIng,
      HeadNav
    },
    computed: {
      ...mapGetters(['DONE_MOVIE_DETAIL', 'DONE_LOADING'])
    },
    data(){
      return{
        title:this.$route.params.title,
        id:this.$route.params.id,
        title1:this.title
      }
    },
    methods:{
      feachDetail(){
        console.log(this.$route.params)
        this.$store.dispatch('FEACH_MOVIE_DETAIL',this.$route.params.id);
        this.$nextTick(function(){
          this.title1 = this.$route.params.title
        })
      }
    },
    created: function() {

    },
    activated(){
      //keep-alive切换时 它的activated钩子函数将会被对应执行
      this.feachDetail()
    }
  }
</script>
<style scoped>
  [v-cloak] {
    display: none;
  }
  .summary{
    font-size: .4rem;
    padding: .2rem;
    border-bottom: 1px solid rgba(100,53,201,0.5);
    text-indent: .8rem;
  }
  .meun-box{
    display: none!important;
  }
</style>
