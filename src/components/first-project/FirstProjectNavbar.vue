<template>
    <nav class="flex justify-between items-center px-10 py-10">
        <RouterLink :to="{name: 'first-project'}">
            <h3 class="text-project1-orange">Ambrosia</h3>
        </RouterLink>
        <div class="flex items-center justify-end w-full">
            <!-- <div>
                <input type="text">
                <FontAwesomeIcon icon="magnifying-glass" class="ml-2 text-project1-orange"/>
            </div> -->
            <div class="flex justify-between items-center w-[5rem]">
                <h4>cart</h4>
                <FontAwesomeIcon icon="cart-shopping"/>
                <h4 class="text-project1-orange">00</h4>
            </div>
        </div>
    </nav>
</template>