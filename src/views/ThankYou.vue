<template>
    <div class="grid grid-cols-1 place-items-center h-screen">
        <div class="flex flex-col justify-center items-center gap-3">
            <FontAwesomeIcon icon="smile-beam" class="text-[12rem]"/>
            <h1 class="!text-7xl font-semibold">Thank you</h1>
            <RouterLink :to="{name: 'home'}">
                <CusButton>Home</CusButton>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import CusButton from '@/components/home-page/buttons/CusButton.vue'
</script>