<template>
    <div v-if="contentSelected === 'general'" class="flex justify-center">
        <div id="home-page-about-me-section" class="relative h-[670px] w-[750px] bg-[url('@/assets/img/home-page/second-image.png')] bg-no-repeat bg-[length:100%_100%] bg-center">
            <div class="absolute top-[21%] left-[47%] right-[20%] bottom-[30%]">
                <h2 class="font-bold">About me</h2>
                <p>My name is Diego Fragoso, I love frontend development. I am familiar with the vue framework but if needed I can start learning another framework right away. I also really enjoy solving all kinds of problems that arise when working on projects.</p>
            </div>
        </div>
    </div>

    <!-- for mobile -->
    <div v-else id="home-page-about-me-section" class="mx-auto w-9/12 text-center">
        <h2 class="font-bold">About me</h2>
        <p>My name is Diego Fragoso, I love frontend development. I am familiar with the vue framework but if needed I can start learning another framework right away. I also really enjoy solving all kinds of problems that arise when working on projects.</p>
    </div>
</template>

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