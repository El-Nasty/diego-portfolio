<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="m-0 bg-red3 mt-[7rem]">
  <div class="max-w-[98%] mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="w-full lg:w-[60%] mx-auto flex flex-wrap justify-evenly lg:justify-between " aria-label="Footer">

      <div @click="goToTopOfPage()" class="px-5 py-2 hover:text-red1 cursor-pointer">
        <div class="flex justify-between items-center">
            <FontAwesomeIcon icon="house"/>
            <h4 class="ml-5 text-base"> Home </h4>
        </div>
      </div>

      <div @click="goToAboutMeSection()" class="px-5 py-2 hover:text-red1 cursor-pointer">
        <div class="flex justify-between items-center">
            <FontAwesomeIcon icon="user"/>
            <h4 class="ml-5 text-base"> About me </h4>
        </div>
      </div>

      <div @click="goToMyWorkSection()" class="px-5 py-2 hover:text-red1 cursor-pointer">
        <div class="flex justify-between items-center">
            <FontAwesomeIcon icon="suitcase"/>
            <h4 class="ml-5 text-base"> Work </h4>
        </div>
      </div>

      <div @click="goToContactSection()" class="px-5 py-2 hover:text-red1 cursor-pointer">
        <div class="flex justify-between items-center">
            <FontAwesomeIcon icon="phone"/>
            <h4 class="ml-5 text-base"> Contact </h4>
        </div>
      </div>
    </nav>

    <div class="mt-32 h-1 bg-red1"></div>

    <p class="mt-8 text-right text-base">&copy; 2022</p>
  </div>
</footer>
</template>

<script>
export default {
  methods: {
    goToTopOfPage()
    {
          document.getElementById("home-page-top-of-page").scrollIntoView({behavior: 'smooth'})
    },
    goToAboutMeSection()
    {
          document.getElementById("home-page-about-me-section").scrollIntoView({behavior: 'smooth'})
    },
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