<template>
  <div class="row">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card bg-white">
            <div class="card-body p-5">
              <form class="mb-3 mt-md-4">
                <h2 class="fw-bold mb-2 text-uppercase ">Registro</h2>
                <div class="mb-3">
                  <label for="name" class="form-label ">Nombre</label>
                  <input type="text" class="form-control" id="name" placeholder="Nombre y Apellido" v-model="registro.name">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label ">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="correo@dominio.com" v-model="registro.email">
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label ">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="*******"  v-model="registro.password">
                </div>
                <div class="mb-3">
                  <label for="password_confirmation" class="form-label ">Confirmar Password</label>
                  <input type="password" class="form-control" id="password_confirmation" placeholder="*******"  v-model="registro.password_confirmation" @keyup.enter="register()">
                </div>
                <div class="d-grid">
                  <button class="btn btn-outline-dark" type="button" @click="register()">Registro</button>
                </div>
              </form>
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

const registro = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
  perfil_id: 1,
})

function register(){
  store.dispatch('register', registro).then( ( res ) => {
    toast.fire("BIenvenido!", res.data.message, "success");
    router.push({
      name: 'login',
    });
  }).catch( err => {
    toast.fire("Error", err.response.data.message, "error");
  })
}
</script>