<template>
    <!-- Contenedor principal del efecto CRT -->
    <div class="crt-overlay fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-70">
        <!-- Líneas de escaneo (más sutiles) -->
        <div class="scanlines absolute inset-0 bg-[length:100%_2px]"></div>
        <!-- Brillo RGB (efecto "glow" sutil) -->
        <div class="rgb-glow absolute inset-0"></div>
        <!-- Distorsión de curvatura (como CRT real) -->
        <div class="screen-curvature"></div>
        <!-- Parpadeo aleatorio (más natural) -->
        <div class="random-flicker absolute inset-0"></div>
    </div>
</template>

<script setup>
// Props para personalización
defineProps({
    opacity: { type: Number, default: 0.7 },
    scanlineIntensity: { type: Number, default: 0.3 }
});
</script>

<style scoped>
/* Efecto principal: overlay con textura de pantalla */
.crt-overlay {
    background:
        radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.75) 100%),
        repeating-linear-gradient(0deg,
            rgba(255, 255, 255, 0.05) 0px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 2px);
    mix-blend-mode: overlay;
    pointer-events: none;
}

/* Líneas de escaneo animadas (más finas) */
.scanlines {
    background-image: repeating-linear-gradient(to bottom,
            rgba(255, 255, 255, v-bind(scanlineIntensity)) 0%,
            transparent 1%);
    animation: scan 4s linear infinite;
}

/* Brillo RGB sutil en bordes */
.rgb-glow {
    box-shadow:
        inset 0 0 30px rgba(255, 0, 0, 0.1),
        inset 0 0 20px rgba(0, 255, 0, 0.1),
        inset 0 0 10px rgba(0, 0, 255, 0.1);
}

/* Curvatura de pantalla (efecto 3D) */
.screen-curvature {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 85%, rgba(0, 0, 0, 0.5) 100%);
    transform: perspective(500px) rotateX(0.5deg);
}

/* Parpadeo aleatorio mejorado */
.random-flicker {
    animation: flicker 8s infinite alternate;
}

/* Animaciones clave */
@keyframes scan {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes flicker {

    0%,
    100% {
        opacity: 1;
    }

    2% {
        opacity: 0.95;
    }

    4% {
        opacity: 0.98;
    }

    8% {
        opacity: 0.99;
    }

    28% {
        opacity: 0.97;
    }

    30% {
        opacity: 1;
    }

    32% {
        opacity: 0.98;
    }

    48% {
        opacity: 0.99;
    }

    50% {
        opacity: 0.97;
    }

    60% {
        opacity: 0.94;
    }

    68% {
        opacity: 0.99;
    }

    72% {
        opacity: 0.98;
    }

    93% {
        opacity: 0.99;
    }
}
</style>