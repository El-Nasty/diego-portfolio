<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="flex justify-between items-center mx-10 lg:mx-[22rem] mt-[1rem] pt-5 pb-10">
  <div class="sm:items-stretch sm:justify-start">
      <RouterLink to="/" class="flex justify-center items-center w-10 h-10 rounded-full border-2 border-red1 hover:bg-red1">
          <h4 class="text-sm">DF</h4>
      </RouterLink>
  </div>

  <div class="ml-3">
      <a @click="goToMyWorkSection()" class="hover:bg-red1 px-3 py-2 rounded-md text-sm cursor-pointer">Work</a>

      <a @click="goToContactSection()" class="hover:bg-red1 px-3 py-2 rounded-md text-sm cursor-pointer">Contact</a>
  </div>
</nav>
</template>


<script>
export default {
  methods: {
    goToMyWorkSection()
    {
          document.getElementById("home-page-my-work-section").scrollIntoView({behavior: 'smooth'})
    },
    goToContactSection()
    {
          document.getElementById("home-page-contact-section").scrollIntoView({behavior: 'smooth'})
    }
  }
    }
</script>