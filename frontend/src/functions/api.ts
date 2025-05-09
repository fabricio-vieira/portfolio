const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string, options: RequestInit = {}) {
    const response = await fetch(normalizeUrl(`${baseURL}/${url}`), {
        ...options,
        cache: options.cache || 'default',
    })
    return response.json()
}

function normalizeUrl(url: string) {
    const protocolo = url.split('://')[0]
    const restante = url.split('://')[1]
    return `${protocolo}://${restante.replaceAll(/\/{2,}/g, '/')}`
}
