<template>
  <div>
    <head-nav :title="title"></head-nav>
    <div class="topmovie-box">
      <load-ing v-show="this.loading"></load-ing>
      <div v-for="movie in movies">
        <router-link :to="{name:'movie-detail',params:{id:movie.subject.id,title:movie.subject.title}}">
          <movie-list v-show="movies.length>0"  :key="movie" :movie="movie"></movie-list>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import MovieList from '../common/MovieList'
  import LoadIng from '../common/LoadIng'
  import HeadNav from './HeadNav'
  export default{
    name:'TopMovie',
    components:{
      MovieList,
      LoadIng,
      HeadNav
    },
    data(){
    return {
      movie:{},
      title:'北美票房'
    }
  },
  computed:{
  ...mapGetters({
      movies:'DONE_USA_MOVIE',
      loading:'DONE_LOADING'
    })
  },
  created:function(){
    this.$store.dispatch('FEACH_USA_MOVIE');
    console.log(this.$store.state.loadflag)
  }
  }
</script>

