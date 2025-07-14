<script setup lang="ts">
import { NuxtLink } from '#components';

const techIcons = [
    {
        name: 'Nuxt',
        icon: 'material-icon-theme:nuxt',
        href: 'https://nuxt.com/'
    },
    {
        name: 'Vue',
        icon: 'material-icon-theme:vue',
        href: 'https://vuejs.org/'
    },
    {
        name: 'Tailwindcss',
        icon: 'material-icon-theme:tailwindcss',
        href: 'https://tailwindcss.com'
    },
    {
        name: 'Supabase',
        icon: 'material-icon-theme:supabase',
        href: 'https://supabase.com/'
    }
]

</script>

<template>
    <hr class=" mx-28 rounded">
    <footer class="py-4 px-28 flex justify-between items-center">
        <div>
            <NuxtLink to="#main">
                <img src="public/sagapi_logo.webp" alt="" srcset="" class="w-44">
            </NuxtLink>
        </div>
        <div class="text-saga-light flex flex-col justify-center text-sm items-end gap-1">
            <div class="flex justify-center items-center gap-2">
                <p>Made with</p>
                <a class="flex justify-center items-center" v-for="tech in techIcons" :href="tech.href" target="_blank">
                    <Icon :name="tech.icon" size="1.5rem" />
                </a>
                <Icon name="material-icon-theme:github-sponsors" size="1.5rem" />
            </div>
            <a class="text-lg flex justify-center items-center gap-2 opacity-75 hover:opacity-100"
                href="https://github.com/elbriant/sagapi" target="_blank">Github
                <Icon name="line-md:github-loop" size="1.5rem" />
            </a>
        </div>
    </footer>
</template>