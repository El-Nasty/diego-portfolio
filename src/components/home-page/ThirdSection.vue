<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div id="home-page-my-work-section" class="flex justify-center items-center flex-wrap">
        <div class="w-[70%]">
            <h2 class="mb-6 font-bold text-4xl text-center">My work</h2>
            <div class="flex flex-col items-center sm:flex-row justify-center gap-6 sm:gap-0">
                <!-- projects -->
                <RouterLink :to="{name: 'first-project'}" class="cus-card sm:-mr-16 backdrop-blur-sm bg-white/30 rounded-2xl shadow-sm flex flex-col cursor-pointer">
                    <img src="@/assets/img/home-page/my-work/restaurant.svg" alt="" class="w-[25rem]">
                    <div class="bg-gradient-to-r from-red1 to-red3 hover:bg-rose-100 mt-8 block w-full py-3 px-6 border border-none rounded-bl-2xl rounded-br-2xl text-center font-medium">Using Api's</div>
                </RouterLink>

                <a href="https://oldworldtech.com/" target="_blank" class="cus-card backdrop-blur-sm bg-white/30 rounded-2xl shadow-sm flex flex-col cursor-pointer">
                    <img src="@/assets/img/home-page/my-work/old-world-tech.svg" alt="" class="w-[25rem]">
                    <div class="bg-gradient-to-r from-red1 to-red3 hover:bg-rose-100 mt-8 block w-full py-3 px-6 border border-none rounded-bl-2xl rounded-br-2xl text-center font-medium">E-commerce</div>
                </a>

                <RouterLink :to="{name: 'third-project'}" class="cus-card sm:-ml-16 backdrop-blur-sm bg-white/30 rounded-2xl shadow-sm flex flex-col cursor-pointer">
                    <img src="@/assets/img/home-page/my-work/virtual-reality.svg" alt="" class="w-[25rem]">
                    <div class="bg-gradient-to-r from-red1 to-red3 hover:bg-rose-100 mt-8 block w-full py-3 px-6 border border-none rounded-bl-2xl rounded-br-2xl text-center font-medium">Brochure</div>
                </RouterLink>
                <!--  END - projects -->
            </div>
        </div>
    </div>
</template>

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