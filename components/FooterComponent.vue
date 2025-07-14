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
    <hr class="rounded
    mx-8 lg:mx-28">
    <footer class="py-4 flex justify-between items-center 
    px-4 lg:px-28">
        <div>
            <NuxtLink to="#main">
                <img src="public/sagapi_logo.webp" alt="" srcset="" class="w-44">
            </NuxtLink>
        </div>
        <div class="text-saga-light flex flex-col justify-center text-sm items-end gap-1">
            <p class="block sm:hidden">Made with</p>
            <div class="flex justify-end items-center
            gap-0.5 lg:gap-2">
                <p class="hidden sm:block">Made with</p>
                <a class="flex justify-center items-center" v-for="tech in techIcons" :href="tech.href" target="_blank">
                    <Icon :name="tech.icon" class="text-[1rem] lg:text-[1.5rem]" />
                </a>
                <Icon name="material-icon-theme:github-sponsors" class="text-[1rem] lg:text-[1.5rem]" />
            </div>
            <a class="text-lg flex justify-center items-center gap-2 opacity-75 hover:opacity-100"
                href="https://github.com/elbriant/sagapi" target="_blank">Github
                <Icon name="line-md:github-loop" class="text-[1rem] lg:text-[1.5rem]" />
            </a>
        </div>
    </footer>
</template>