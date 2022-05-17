<template>
<div class="flex flex-col bg-project1-black min-h-screen">

  <div class="flex flex-col mt-10 px-10">
      <RouterLink :to="{name: 'first-project'}">
          <FontAwesomeIcon icon="chevron-left" class="text-3xl"/><span class="ml-2 text-3xl font-bold">Back</span>
      </RouterLink>
      <div class="order-2 md:order-1 md:block mt-3 md:mt-10">
        <div class="flex flex-col md:flex-row justify-between">
          <h4 @click="getBeef($event)" class="cursor-pointer hover:text-project1-orange">Beef</h4>
          <h4 @click="getSeafood()" class="cursor-pointer hover:text-project1-orange">Seafood</h4>
          <h4 @click="getChicken()" class="cursor-pointer hover:text-project1-orange">Chicken</h4>
          <h4 @click="getPork()" class="cursor-pointer hover:text-project1-orange">Pork</h4>
          <h4 @click="getVegetarian()" class="cursor-pointer hover:text-project1-orange">Vegetarian</h4>
        </div>
      </div>

      <div class="order-1 md:order-2 mt-2">
        <div class="h-1 w-full bg-project1-orange"></div>
        <h3 class="mt-5">What are you feeling today?</h3>
      </div>
  </div>

  <div class="mt-10 px-10">
    <h2>All this data is being pulled in from an api. <FontAwesomeIcon icon="circle-arrow-down"/></h2>
  </div>

  <div class="grid justify-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">

    <div v-for="item in food" :key="item.id" class="relative mt-20 text-center bg-project1-light-black w-[265px] h-[320px] rounded-2xl">
      <div class="absolute -top-10 left-0 right-0 px-2">
        <img :src="item.strMealThumb" alt="" class="mx-auto w-[187px] rounded-full">
        <h3 class="!text-xl">{{ item.strMeal }}</h3>
        <h4 class="mt-1" v-text="getRandomInt()"></h4>
        <h5 class="mt-1">11 Plates Available</h5>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data()
  {
     return {
       food: []
     }
  },
  mounted()
  {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => res.json())
      .then(data => this.food = data.meals)
      .catch(err => console.log(err.message))
  },
  methods: {
    getRandomInt() {
      let decimal = Math.floor(Math.random() * (1000 - 100) + 1000) / 100;
      let price = `$${decimal}`
      return price
    },
    getBeef(e)
    {
      console.log(e)
       fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
        .then(res => res.json())
        .then(data => this.food = data.meals)
        .catch(err => console.log(err.message))
    },
    getSeafood()
    {
       fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => this.food = data.meals)
        .catch(err => console.log(err.message))
    },
    getChicken()
    {
       fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
        .then(res => res.json())
        .then(data => this.food = data.meals)
        .catch(err => console.log(err.message))
    },
    getPork()
    {
       fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')
        .then(res => res.json())
        .then(data => this.food = data.meals)
        .catch(err => console.log(err.message))
    },
    getVegetarian()
    {
       fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
        .then(res => res.json())
        .then(data => this.food = data.meals)
        .catch(err => console.log(err.message))
    },
  }
}
</script>