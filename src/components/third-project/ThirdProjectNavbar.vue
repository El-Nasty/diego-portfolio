<template>
    <nav class="relative flex justify-between items-center pt-5 pb-3 lg:py-10">
        <RouterLink :to="{name: 'third-project'}"><h3 class="font-bold hover:opacity-50">Light</h3></RouterLink>
        <div class="hidden lg:flex justify-evenly min-w-2/5 ">
            <button class="px-10 py-5 hover:bg-gradient-to-r from-project3-light-purple to-project3-pink rounded-xl">Home</button>
            <button class="px-10 py-5 hover:bg-gradient-to-r from-project3-light-purple to-project3-pink rounded-xl">Company</button>
            <button class="px-10 py-5 hover:bg-gradient-to-r from-project3-light-purple to-project3-pink rounded-xl">Features</button>
            <button class="px-10 py-5 hover:bg-gradient-to-r from-project3-light-purple to-project3-pink rounded-xl">Sign Up</button>
        </div>

        <!-- Mobile menu button-->
        <div @click="showNavContent = !showNavContent" class="lg:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md bg-gradient-to-r from-project3-light-purple to-project3-pink focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!--
                Icon when menu is closed.

                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!--
                Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile menu content-->
        <div v-if="showNavContent" class="absolute top-[110%] right-0 left-0 lg:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-project1-light-black">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data()
    {
        return {
            showNavContent: false
        }
    }
}
</script>