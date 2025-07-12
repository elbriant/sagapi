<script setup lang="ts">
import coolBackground from '~/components/coolBackground.vue';

// lazy randomness XD
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const url = useRequestURL();

const colors = [
    'bg-saga-light',
    'bg-saga-verylight',
    'bg-saga-yellow',
    'bg-saga-red',
];

const currentColorClass = ref(colors[0]);
const randomSagaSplash = ref("/splash/" + getRandomInt(1, 3) + ".png");
console.log(randomSagaSplash.value)

let intervalId: NodeJS.Timeout;
onMounted(() => {
    intervalId = setInterval(() => {
        const currentIndex = colors.indexOf(currentColorClass.value);
        const nextIndex = (currentIndex + 1) % colors.length;
        currentColorClass.value = colors[nextIndex];
    }, 3000); // Cambia cada 3 segundos (ajusta el tiempo)
});

// 4. Limpia el intervalo al desmontar el componente
onBeforeUnmount(() => {
    clearInterval(intervalId);
});

</script>

<template>
    <div class="w-full h-screen relative z-20">
        <coolBackground :color="currentColorClass" />
        <main class="  w-full h-screen grid grid-cols-2 grid-rows-2 gap-4 px-32 font-Montserrat overflow-hidden ">
            <div key="logo" class="col-start-1 row-start-1 col-span-1 row-span-1 flex justify-center items-center">
                <img src="public/sagapi_logo.webp" alt="" srcset="" class="max-w-md max-h-fit">
            </div>
            <div key="search-bar"
                class="col-start-1 row-start-2 col-span-1 row-span-1 flex flex-col justify-start items-center ">
                <p class="text-saga-light font-bold text-4xl mb-6 text-center">
                    Get <span
                        class="bg-gradient-to-br from-saga-yellow to-saga-red bg-clip-text text-transparent ">arknights</span>
                    resources easily</p>
                <div class="relative group">
                    <div
                        class="absolute -inset-0.5 bg-gradient-to-r from-saga-medium to-saga-verylight rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                    </div>
                    <div class="relative w-[480px] bg-saga-light rounded-2xl p-1.5">
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
            <img :src="randomSagaSplash" alt="one of saga's art"
                class="-z-10 max-w-[60vw] max-h-full absolute top-0 left-[45%]">
        </main>
    </div>
    <section id="1" class="w-full h-screen ">
        <coolBackground :inverse="true" :color="currentColorClass" />
        <div class="w-full h-screen font-Montserrat flex justify-center items-center px-24 py-7 gap-14 ">
            <div class="text-saga-verylight max-w-md">
                <h3
                    class="bg-gradient-to-r from-saga-yellow to-saga-red bg-clip-text text-transparent text-7xl leading-loose font-extrabold mb-6">
                    Easy to
                    use</h3>
                <p class="text-lg"> Get the Arknights operator data you need—quickly and effortlessly! With just a
                    single API request,
                    you can retrieve all the details of any operator, from stats and skills to voice lines and
                    promotions. No complex setup, no endless queries. Simple, fast, and reliable.</p>
            </div>
            <div class="bg-saga-light text-white rounded-lg w-full max-w-lg border-4 border-gray-300">
                <p class="text-saga-dark p-4 font-semibold"><span class="p-2 bg-green-300 rounded-full">GET</span>
                    /api/operator/{operator}
                </p>
                <aside class="bg-black text-white p-6 rounded-md w-full">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-1">
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        </div>
                        <p class="text-sm">cURL</p>
                    </div>
                    <div class="mt-4">
                        <p><span class="text-green-500">$</span> <span class="text-red-500">curl</span> -X GET -L
                            https://{{ url.hostname
                            }}/api/operator/saga</p>
                        <p>&rarrhk; &lbrace;</p>
                        <div class="pl-12">
                            <p> "name": "Saga"</p>
                            <p>...</p>
                        </div>
                    </div>
                </aside>
            </div>

        </div>
    </section>
    <section class="w-full h-screen flex items-center justify-center flex-col px-12 py-6">
        <h4 class="bg-gradient-to-tl from-saga-yellow to-saga-red bg-clip-text text-transparent text-7xl leading-loose
            font-extrabold mb-6">Made with love for Saga &hearts;</h4>
        <p class="text-saga-light text-xl text-center max-w-4xl mb-3">
            This API wasn’t built out of necessity—it was crafted out of pure admiration for Saga, the lively wandering
            monk from Higashi! Whether you're checking her stats, skills, or even her iconic food-themed battle cries,
            every piece of data here is a love letter to her infectious energy.</p>
        <p class="text-saga-light text-xl text-center max-w-4xl">
            From her accidental enrollment at Rhodes Island to her outgoing personality and bottomless appetite, this
            project is a tribute to Saga in all her delightful chaos. Enjoy! 🍜✨
        </p>
    </section>
    <hr class="my-6 mx-20 rounded">
    <footer class="px-8 py-12 h-32 flex justify-between items-center">
        <div>
            <h5 class="text-saga-light text-xl font-extrabold">Sagapi</h5>
        </div>
        <div class="text-saga-light text-lg">
            <div>
                <p>Made with</p>

            </div>
            <a href="https://github.com/elbriant/sagapi">Github</a>
        </div>
    </footer>

</template>