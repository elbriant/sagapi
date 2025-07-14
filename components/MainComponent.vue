<script setup lang="ts">
import { ref } from 'vue';


// lazy randomness XD
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomSagaSplash = ref("/splash/" + getRandomInt(1, 3) + ".png");
console.log(randomSagaSplash.value)

</script>

<template>
    <main id="main" class="w-full h-full gap-4 font-Montserrat overflow-hidden flex flex-col justify-center items-start py-12 px-4
        sm:px-12
        lg:px-32 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <div key="logo" class=" flex justify-center items-center w-full
            sm:w-auto
            lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-1">
            <img src="public/sagapi_logo.webp" alt="" srcset="" class="w-full sm:max-w-md max-h-fit">
        </div>
        <div key="search-bar" class="flex flex-col justify-start items-center w-full
            sm:w-auto
            lg:col-start-1 lg:row-start-2 lg:col-span-1 lg:row-span-1">
            <p class="text-saga-light font-bold text-4xl mb-6 text-center max-w-96">
                Get <span
                    class="bg-gradient-to-br from-saga-yellow to-saga-red bg-clip-text text-transparent ">arknights</span>
                resources easily</p>
            <div class="relative group">
                <div
                    class="absolute -inset-0.5 bg-gradient-to-r from-saga-medium to-saga-verylight rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                </div>
                <div class="relative sm:w-[480px] bg-saga-light rounded-2xl p-1.5">
                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-saga-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text"
                        class="w-full pl-8 pr-24 py-3 text-base text-saga-medium bg-transparent rounded-lg focus:outline-none"
                        placeholder="Search in the API docs..." />
                    <button
                        class="absolute right-1 top-1 bottom-1 px-6 bg-saga-medium group-hover:bg-saga-verylight text-saga-light font-medium rounded-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]">
                        Search
                    </button>
                </div>
            </div>

        </div>
        <img :src="randomSagaSplash" alt="one of saga's art" class="-z-10 h-screen object-contain absolute top-0
            max-w-[90%] opacity-45
            sm:max-w-[65%] sm:left-[35%] sm:opacity-100
            md:left-[45%] md:max-w-[55%]">
    </main>
</template>