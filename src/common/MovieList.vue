<template>
  <div class="movie-list" v-cloak>
    <div class="movie-img">
      <img v-lazy="movie.subject?movie.subject.images.large:movie.images.large" alt=""/>
    </div>
    <div class="movie-detail">
      <p class="movie-title">{{title}}</p>
      <p class="movie-Meta">{{original_title}}<span class="movie-year">({{year}})</span></p>
      <p class="movie-score">{{score}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    name:'MovieList',
    props:['movie'],
    data(){
      return{

      }
    },
    computed:{
      title:function(){
        if(this.movie.subject){
          return this.movie.subject.title
        }else{
          return this.movie.title
        }
      },
      original_title:function(){
        if(this.movie.subject){
          return this.movie.subject.original_title
        }else{
          return this.movie.original_title
        }
      },
      year:function(){
        if(this.movie.subject){
          return this.movie.subject.year
        }else{
          return this.movie.year
        }
      },
      score:function(){
        if(this.movie.subject){
          return this.movie.subject.rating.average
        }else{
          return this.movie.rating.average
        }
      }
    }
  }
</script>
<style scoped>
  [v-cloak] {
     display: none;
  }
  .movie-list{
    width: 100%;
    padding: 0.1rem 0;
    display: flex;
    border-bottom: 1px solid rgba(100,53,201,0.5);
    font-size: .4rem;
  }
  .movie-detail{
    font-family: 'Helvetical Neue';
    flex: 1;
    margin-top: .3rem;
    margin-left: .2rem;
  }
  .movie-img{
    height:80%;
    margin-left: .2rem;
  }
  .movie-img img{
    width: 3rem;
    height: 4.2rem;
  }
  .movie-title{
    color:#6435c9;
    margin-bottom: .3rem;
  }
  .movie-Meta{
    font-size: .35rem;
    color: #333;
  }
  .movie-score{
    color: #db2828;
    margin-top: .3rem;
  }
</style>
