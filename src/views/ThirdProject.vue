<template>
    <div class="third-project px-5 lg:px-16">
        <ThirdProjectNavbar />

        <ThirdProjectHome />

        <ThirdProjectFooter />
    </div>
</template>

<script setup>
import ThirdProjectHome from '@/components/third-project/ThirdProjectHome.vue'
import ThirdProjectNavbar from '@/components/third-project/ThirdProjectNavbar.vue'
import ThirdProjectFooter from '@/components/third-project/ThirdProjectFooter.vue'
</script>

<style >
.third-project {
    min-height: 100vh;
    background: #16181B !important;
}
</style>