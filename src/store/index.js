import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state:{
    user:{
      data: JSON.parse(sessionStorage.getItem('USER_DATA')),
      token: sessionStorage.getItem('TOKEN'),
    },
    mensaje: '',
    establecimientos:  JSON.parse(localStorage.getItem('establecimientos')),
  },
  getters: {

  },
  actions: {
    getEstablecimientos( { commit }){
      return axiosClient.get('/establecimientos').then( (res) => {
        commit('setEstablecimientos', res.data.establecimientos);
      })
    },
    login( { commit}, login ){
      return axiosClient.post('/login', login).then( (res) => {
        commit('setUserLogin', res.data);
      })
    },
    logout( { commit }){
      return axiosClient.get('/logout').then( (res) => {
        commit('clearUser');
      })
    },
    register( { commit }, register){
      return axiosClient.post('/register', register).then( (res) => {
        return res;
      })
    }
  },
  mutations: {
    setEstablecimientos: (state, data) => {
      state.establecimientos = data;
      localStorage.setItem('establecimientos', JSON.stringify(data));
    },
    clearEstablecimientos: (state) => {
      state.establecimientos = null;
    },
    setUserLogin: (state, data) => {
      state.user.data = data.user;
      state.user.token = data.token;

      sessionStorage.setItem('USER_DATA', JSON.stringify(data.user));
      sessionStorage.setItem('TOKEN', data.token);

    },
    clearUser: ( state ) => {
      state.user.data = null;
      state.user.token = null;

      sessionStorage.clear();
      localStorage.clear();
    }
  }
});

export default store;
