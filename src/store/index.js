import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state:{
    user:{
      nombre: 'Santiago Erazo',
      token: null,
      banner_id: null,
    },
    mensaje: '',
    establecimientos: [],
  },
  getters: {

  },
  actions: {
    getEstablecimientos( { commit }){
      return axiosClient.get('/establecimientos').then( (res) => {
        commit('setEstablecimientos', res.data.establecimientos);
      })
    }
  },
  mutations: {
    setEstablecimientos: (state, data) => {
      state.establecimientos = data;
    },
  }
});

export default store;
