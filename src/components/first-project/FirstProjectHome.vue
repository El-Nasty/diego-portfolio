<template>
    <div class="flex flex-wrap justify-between">
        <div class="flex flex-col self-center">
            <h1 class="ml-10">Ambrosia Feast Like A God</h1>
            <div class="ml-10 h-0.5 bg-project1-orange"></div>
            <ButtonLg class="hidden sm:flex">Browse</ButtonLg>
        </div>
        <!-- images -->
        <div class="flex flex-wrap gap-6 lg:gap-0 justify-center lg:justify-between lg:w-full xl:w-1/2 lg:mr-5 mt-10 xl:mt-0 lg:px-5 xl:px-0">
            <RouterLink :to="{name: 'first-project-main-courses'}" class="hover:opacity-50 hover:-translate-y-4 ease-in duration-200">
                <div class="relative h-[576px] w-[300px] bg-[url('@/assets/img/first-project/steaks.png')] bg-no-repeat bg-center bg-contain cursor-pointer">
                    <div class="absolute bottom-16 w-3/5 px-1 pt-3.5 bg-black">
                        <h3 class="text-project1-orange">Main Courses</h3>
                    </div>
                </div>
            </RouterLink>

            <div class="relative h-[576px] w-[300px] bg-[url('@/assets/img/first-project/salads.png')] bg-no-repeat bg-center bg-contain grayscale">
                <div class="absolute bottom-16 w-1/2 px-4 pt-3.5 bg-black">
                    <h3 class="text-project1-orange">Salads</h3>
                </div>
            </div>

            <div class="relative h-[576px] w-[300px] bg-[url('@/assets/img/first-project/desserts.png')] bg-no-repeat bg-center bg-contain grayscale">
                <div class="absolute bottom-16 w-1/2 px-4 pt-3.5 bg-black">
                    <h3 class="text-project1-orange">Desserts</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonLg from '@/components/first-project/buttons/ButtonLg.vue'
</script>

<style scoped>
    .cus-card {
        transition: 0.2s;
    }
    .cus-card:hover {
        transform: translateY(-1rem);
        z-index: 10;
    }
    .cus-card:hover  ~ .cus-card {
        transform: translateX(50px);
    }
</style>