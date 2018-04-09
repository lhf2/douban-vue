<template>
  <div>
    <head-nav title="搜索"></head-nav>
    <div class="search-box">
      <input type="text" placeholder="请输入你要搜索的内容" v-model="searchText" @keyup.enter="submitText"/>
      <button class="close" v-show="this.searchText" @click="clearText">X</button>
    </div>
    <div class="search-result">
      <load-ing v-show="this.loading&&this.flag"></load-ing>
      <div v-show="movies.length>0">
        <span class="result-title">搜索{{this.searchText}}的结果</span>
        <div v-for="movie in movies">
          <router-link :to="{name:'movie-detail',params:{id:movie.id,title:movie.title}}">
            <movie-list v-show="movies.length>0"  :key="movie" :movie="movie"></movie-list>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LoadIng from '../common/LoadIng'
  import MovieList from '../common/MovieList'
  import { mapGetters } from 'vuex'
  import HeadNav from './HeadNav'
  export default{
    name:'Search',
    data(){
     return{
       searchText:'',
       flag:false
     }
    },
    components:{
      LoadIng,
      MovieList,
      HeadNav
    },
    computed:{
      ...mapGetters({
        movies:'DONE_SEARCH_MOVIE',
        loading:'DONE_LOADING'
      })
    },
    methods:{
      submitText(){
        this.flag=true;
        if(this.searchText){
          this.$store.dispatch('FEACH_SEARCH_MOVIE',this.searchText);
        }
      },
      clearText(){
        this.searchText='';
        this.movies=[];
      }
    }
  }
</script>
<style scoped>
  .search-box{
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  input{
    display:block;
    width: 90%;
    height: 1rem;
    border: 0;
    border-bottom: 1px solid #333;
    margin: 0 auto;
    background: none;
    font-size: .5rem;
  }
  .close{
    position: absolute;
    top:0.25rem;
    right: 0.5rem;
    width: .5rem;
    height: .5rem;
    font-size: .4rem;
    line-height: .5rem;
    text-align: center;
  }
  .result-title{
    font-size: .5rem;
    margin-left: .2rem;
  }
</style>
