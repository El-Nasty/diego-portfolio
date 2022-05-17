<template>
    <div class="grid grid-cols-1 place-items-center h-screen">
        <div class="flex flex-col justify-center items-center gap-5">
            <FontAwesomeIcon icon="sad-tear" class="text-[12rem]"/>
            <h1 class="!text-7xl font-semibold">Sorry, page not found.</h1>
            <RouterLink :to="{name: 'home'}">
                <CusButton>Back to home</CusButton>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import CusButton from '@/components/home-page/buttons/CusButton.vue'
</script>