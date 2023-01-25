<template>
  <div class="row">
    <div class="container">
      <ul class="nav justify-content-center">
        <li class="nav-item" v-for="(link, index) in navigation" :key="index">
          <router-link class="nav-link" :id="'link-numero-'+index" :to="{ name: link.to }">{{ link.name }}</router-link>
        </li>
      </ul>
      <h4 class="text-end" v-if="usuario.token">{{ usuario.nombre }}</h4>
    </div>
  </div>
</template>
<script setup>
import {ref, reactive, computed} from 'vue';
import {useStore} from 'vuex';
import menu from '../data/menu';

const navigation = menu.menu;
const store = useStore();

const usuario = computed( () => store.state.user);
</script>