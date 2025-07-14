<script setup>
const url = useRequestURL();
</script>

<template>
    <div id="example" class="w-full h-screen font-Montserrat flex flex-col justify-center items-center px-4 py-5 gap-4 
    lg:flex-row lg:px-24 lg:gap-14 ">
        <div class="text-saga-verylight max-w-md">
            <h3 class="bg-gradient-to-r from-saga-yellow to-saga-red bg-clip-text text-transparent text-5xl leading-loose font-extrabold mb-1
                lg:text-7xl lg:mb-6">
                Easy to
                use</h3>
            <p class="text-sm lg:text-lg"> Get the Arknights operator data you need—quickly and effortlessly! With just
                a
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
</template>
