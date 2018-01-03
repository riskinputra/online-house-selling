import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

export const store = new Vuex.Store({
  strict: true,
  state: {
    houseLists: []
  },
  mutations: {
    setHouseLists (state, payload) {
      console.log('data di mutations setHouse payload', payload.data)
      state.houseLists = payload.data
    }
  },
  actions: {
    getAllHouse ({ commit }) {
      http.get('/houses')
      .then(({ data }) => {
        console.log('data dari getAllHouse', data)
        commit('setHouseLists', data)
      })
      .catch(err => console.log(err))
    },
    addUser ({ commit }, newUser) {
      http.post('/signup', newUser)
      .then(({data}) => {
        console.log('data hasil add user', data)
      })
      .catch(err => console.log(err))
    }
  }
})