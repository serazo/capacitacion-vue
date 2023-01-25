import { createStore } from "vuex";

const store = createStore({
  state:{
    mensaje: 'Hola mundo',
  },
  getters: {

  },
  actions: {
    
  },
  mutations: {
    setMensaje: (state, string) => {
      state.mensaje = string;
    }
  }
});

export default store;
