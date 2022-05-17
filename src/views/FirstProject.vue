<template>
    <div class="first-project">
        <FirstProjectNavbar />

        <FirstProjectHome />

        <FirstProjectFooter />
    </div>
</template>

<script setup>
import FirstProjectHome from '@/components/first-project/FirstProjectHome.vue'
import FirstProjectNavbar from '@/components/first-project/FirstProjectNavbar.vue'
import FirstProjectFooter from '@/components/first-project/FirstProjectFooter.vue'
</script>

<style scoped>
.first-project {
    min-height: 100vh;
    background: #16181B;
}
</style>