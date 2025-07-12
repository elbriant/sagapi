import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
    // Get the runtimeconfig proxy url
    const proxyUrl = useRuntimeConfig().public.docsTarget as string;

    // change the path if need
    const path = event.path.replace(/^\/docs\//, '') // /docs/users -> users
    const target = joinURL(proxyUrl, path)

    // proxy it!
    return proxyRequest(event, target)
})