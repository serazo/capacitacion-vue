<template>
  <div class="row">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card bg-white">
            <div class="card-body p-5">
              <form class="mb-3 mt-md-4">
                <h2 class="fw-bold mb-2 text-uppercase ">Bienvenido</h2>
                <div class="mb-3">
                  <label for="email" class="form-label ">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.username">
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label ">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="*******"  v-model="user.password" @keyup.enter="login()">
                </div>
                <div class="d-grid">
                  <button class="btn btn-outline-dark" type="button" @click="login()">Login</button>
                </div>
              </form>
              <div>
                <p class="mb-0  text-center">No tienes una cuenta? 
                  <router-link class="text-primary fw-bold" :to="{ name: 'register' }"> Regístrate</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter} from 'vue-router';
import Swal from "sweetalert2";

let toast = Swal.mixin({
  buttonsStyling: false,
  target: "#page-container",
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
});

const store = useStore();
const router = useRouter();

const user = reactive({
  username: null, 
  password: null,
})

function login(){
  store.dispatch('login', user).then( () => {
    router.push({
      name: 'dashboard',
    });
  }).catch( err => {
    toast.fire("Error", err.response.data.message, "error");
  })
}


</script>