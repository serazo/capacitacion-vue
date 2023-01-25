<template>
  <div class="row">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'dashboard-tabla' }">Tabla</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>

</script>