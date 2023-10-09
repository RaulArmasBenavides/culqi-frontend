<template>
    <NavbarCulqi />
    <div class="logo-container">
        <img alt="culqi logo" src="./assets/culqi.png" class="culqi-logo">
    </div>
  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    NavbarCulqi: defineAsyncComponent(() => import(/* webpackChunkName: "NavbarCulqi" */ '@/modules/shared/components/NavbarCulqi'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.culqi-logo {
    width: 25%;  /* Esto reducirá la imagen a la tercera parte de su ancho original */
}
</style>
