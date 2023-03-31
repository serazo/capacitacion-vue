<template>
  <div class="row">
    <div class="container">
      <ul class="nav justify-content-center">
        <li class="nav-item" v-for="(link, index) in navigation" :key="index">
          <router-link class="nav-link" :id="'link-numero-'+index" :to="{ name: link.to }">{{ link.name }}</router-link>
        </li>
        <template v-if="user.token">
          <li class="nav-item" >
            <p class="text-end" >{{ user.data.name }}</p>
          </li>
          <li class="nav-item">
            <button class="btn btn-warning" @click="logout()"> Salir </button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup>
import {ref, reactive, computed} from 'vue';
import {useStore} from 'vuex';
import { useRouter} from 'vue-router';
import menu from '../data/menu';

const navigation = menu.menu;
const store = useStore();
const router = useRouter();

const user = computed( () => store.state.user);

function logout(){
  store.dispatch('logout').then( () => {
    router.push({
      name: 'login',
    });
  })
}
</script>