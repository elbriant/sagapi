<script setup lang="ts">
import type { NuxtError } from '#app'

const url = useRoute();

const props = defineProps({
    error: {
        type: Object as () => NuxtError,
        required: true
    }
})

</script>

<template>
    <div
        class="w-full h-screen bg-saga-verydark font-Montserrat flex flex-col justify-center items-center text-saga-light gap-4">
        <div
            class="h-8 fixed left-0 right-0 pointer-events-none bg-gradient-to-r from-saga-yellow via-saga-light to-saga-red spotlight">
        </div>
        <h1 class="text-6xl font-bold"> {{ error.statusCode }}</h1>

        <p class="text-lg">{{ error.message }}</p>

        <div class="max-w-44 max-h-44 object-contain">
            <img v-if="error.statusCode === 404" src="public/gif/saga_404.gif" alt="Saga 404 error gif" />
            <img v-else src="public/gif/saga_error.gif" alt="Saga error gif" />
        </div>

        <NuxtLink to="/"
            class="relative group inline-block p-px font-semibold leading-6 text-white bg-saga-dark shadow-2xl cursor-pointer rounded-xl shadow-saga-dark transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span
                class="absolute inset-0 rounded-xl bg-gradient-to-r from-saga-yellow via-saga-red to-saga-verylight p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div class="relative z-10 flex items-center space-x-2">
                    <span class="transition-all duration-500 group-hover:translate-x-1">Go back home</span>
                    <svg class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon"
                        aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fill-rule="evenodd"></path>
                    </svg>
                </div>
            </span>
        </NuxtLink>
    </div>
</template>

<style scoped>
.spotlight {
    bottom: -60vh;
    filter: blur(30vh);
    height: 60vh;
    opacity: .8
}
</style>