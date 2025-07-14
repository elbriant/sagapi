<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps({
    inverse: Boolean,
    color: String
});

const positionClass = ref(props.inverse ? 'inverse' : '');

</script>

<template>
    <div class="wave overflow-hidden absolute -z-20 left-0 w-full h-full transition duration-700 [&>span]:bg-saga-verydark"
        :class="props.color, positionClass">
        <span></span>
        <span class="[&&]:bg-opacity-50"></span>
        <span class="[&&]:bg-opacity-50"></span>
    </div>
</template>

<style scoped>
.wave span {
    content: "";
    position: absolute;
    width: 325vh;
    height: 325vh;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
}

.wave.inverse span {
    width: 400vh;
    height: 400vh;
    top: 320%;
    transition-delay: 312ms;
}

.wave span:nth-child(1) {
    border-radius: 45%;
    animation: animate 5s linear infinite;
}

.wave span:nth-child(2) {
    border-radius: 40%;
    animation: animate 10s linear infinite;
}

.wave span:nth-child(3) {
    border-radius: 42.5%;
    animation: animate 15s linear infinite;
}

@keyframes animate {
    0% {
        transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -75%) rotate(360deg);
    }
}
</style>