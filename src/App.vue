<template>
  <header>
    <Navbar v-if="showNavbar"/>
    <div v-else></div>
  </header>

  <RouterView />

  <Footer v-if="showFooter"/>
  <div v-else></div>

  <CircleNavbar/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import CircleNavbar from '@/components/CircleNavbar.vue'
</script>

<script>
export default {
  data()
  {
    return {
      showNavbar: true,
      showFooter: true,
    }
  },
  watch: {
    $route(to)
    {
      if(to.fullPath !== '/')
      {
        this.showNavbar = false;
        this.showFooter = false;
      }
      else
      {
        this.showNavbar = true;
        this.showFooter = true;
      }
    }
  }
}
</script>

<style>
@import "@/assets/base.css"
  
</style>