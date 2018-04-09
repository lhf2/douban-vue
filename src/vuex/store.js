import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'
import jsonp from 'jsonp'
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
     topMovies:'',
     usaMovies:'',
     loadflag:true,
     MovieDetail:{},
     searchMovie:''
  },
  getters:{
    [types.DONE_TOP_MOVIE]: state => {
      return state.topMovies
    },
    [types.DONE_USA_MOVIE]: state => {
      return state.usaMovies
    },
    [types.DONE_LOADING]: state => {
      return state.loadflag
    },
    [types.DONE_MOVIE_DETAIL]: state => {
      return state.MovieDetail
    },
    [types.DONE_SEARCH_MOVIE]: state => {
      return state.searchMovie
    }
  },
  mutations:{
    [types.TOGGLE_TOP_MOVIE](state,all){
       state.topMovies=all;
       state.loadflag=false
    },
    [types.TOGGLE_USA_MOVIE](state,all){
      state.usaMovies=all;
      state.loadflag=false
    },
    [types.TOGGLE_MOVIE_DETAIL](state,all){
      state.MovieDetail=all;
      state.loadflag=false
    },
    [types.TOGGLE_SEARCH_MOVIE](state,all){
      state.searchMovie=all;
      state.loadflag=false
    }
  },
  actions:{
    [types.FEACH_TOP_MOVIE]({state,commit}){
      state.loadflag=true;
      jsonp('https://api.douban.com/v2/movie/top250', null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          commit(types.TOGGLE_TOP_MOVIE, data.subjects);
        }
      });
    },
    [types.FEACH_USA_MOVIE]({state,commit}){
      state.loadflag=true;
      jsonp('https://api.douban.com/v2/movie/us_box', null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          commit(types.TOGGLE_USA_MOVIE, data.subjects);
        }
      });
    },
    [types.FEACH_MOVIE_DETAIL]({state,commit},id){
      state.loadflag=true;
      jsonp('https://api.douban.com/v2/movie/subject/'+id, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          commit(types.TOGGLE_MOVIE_DETAIL, data.summary);
        }
      });
    },
    [types.FEACH_SEARCH_MOVIE]({state,commit},text){
      state.loadflag=true;
      jsonp('https://api.douban.com/v2/movie/search?q='+text, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data.subjects);
          commit(types.TOGGLE_SEARCH_MOVIE, data.subjects);
        }
      });
    },
  }
})
export default store
