import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"
import { joinURL } from 'ufo'

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path.startsWith('/docs')) {
        // Get the runtimeconfig proxy url
        const proxyUrl = useRuntimeConfig().public.docsTarget as string;

        // change the path if need
        const path = to.path.replace(/^\/docs\//, '') // /docs/users -> users
        const target = joinURL(proxyUrl, path)

        // proxy it!
        return navigateTo(target, { redirectCode: 301, external: true })
    }
})
