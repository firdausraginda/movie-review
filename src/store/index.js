import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state:{
      film: {}
    },
    mutations: {
      setFilm(state, data){
        state.film = data
      }
    }
  })
}

export default store
