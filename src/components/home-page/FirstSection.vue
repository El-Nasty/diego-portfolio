<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="contentSelected === 'general'" class="flex justify-center">
        <div id="home-page-top-of-page" class="relative h-[670px] w-[1224px] bg-[url('@/assets/img/home-page/first-image.png')] bg-no-repeat bg-[length:100%_100%] bg-center">
            <div class="absolute top-[25%] bottom-[17%] left-[9%] right-[24%]">
                <h1 class="w-full lg:w-full lg:!text-[60px] font-bold">Excellent UI Developer, Excelente UI Developer, Based in La Porte</h1>
            </div>
        </div>
    </div>

    <!-- for mobile -->
    <div v-else class="flex justify-center mx-auto w-9/12">
        <div id="home-page-top-of-page">
            <h1 class="w-full lg:w-full text-center md:text-left !text-[2rem] lg:!text-[60px] font-bold">Excellent UI Developer, Excelente UI Developer, Based in La Porte</h1>
        </div>
    </div>
</template>

<script setup>
    import CusButton from '@/components/home-page/buttons/CusButton.vue'
    import ButtonGradient from '@/components/home-page/buttons/ButtonGradient.vue'
</script>

<script>
export default {
    data() 
    {
        return {
            contentSelected: "general",
            widthOfScreen: ''
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.widthOfScreen = screen.width
        })
    },
    watch: {
        widthOfScreen(newWidth)
        {
            if(newWidth < 767)
            {
                this.contentSelected = 'mobile';
            }
            else
            {
                this.contentSelected = 'general'
            }
        }
    }
}
</script>