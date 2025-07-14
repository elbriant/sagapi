<script setup lang="ts">
import Background from '~/components/Background.vue';
import FooterComponent from '~/components/FooterComponent.vue';
import MainComponent from '~/components/MainComponent.vue';
import MyLoveForSaga from '~/components/MyLoveForSaga.vue';

const colors = [
    'bg-saga-light',
    'bg-saga-verylight',
    'bg-saga-yellow',
    'bg-saga-red',
];

const currentColorClass = ref(colors[0]);

let intervalId: NodeJS.Timeout;
onMounted(() => {
    intervalId = setInterval(() => {
        const currentIndex = colors.indexOf(currentColorClass.value);
        const nextIndex = (currentIndex + 1) % colors.length;
        currentColorClass.value = colors[nextIndex];
    }, 3000);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});

</script>

<template>
    <div class="w-full h-screen relative z-20">
        <Background :color="currentColorClass" />
        <MainComponent />
    </div>
    <section id="1" class="w-full h-screen ">
        <Background :inverse="true" :color="currentColorClass" />
        <Example />
    </section>
    <MyLoveForSaga />
    <FooterComponent />

</template>