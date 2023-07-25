const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals'

function getConnectionSpeed() {
    return 'connection' in navigator &&
        navigator['connection'] &&
        'effectiveType' in navigator['connection']
        ? navigator['connection']['effectiveType']
        : ''
}

export function sendToAnalytics(metric, options) {
    const page = Object.entries(options.params).reduce(
        (acc, [key, value]) => acc.replace(value, `[${key}]`),
        options.path
    )

    const body = {
        dsn: import.meta.env.VITE_PROJECT_ID, // qPgJqYH9LQX5o31Ormk8iWhCxZO
        id: metric.id, // v2-1653884975443-1839479248192
        page, // /blog/[slug]
        href: location.href, // https://{my-example-app-name-here}/blog/my-test
        event_name: metric.name, // TTFB
        value: metric.value.toString(), // 60.20000000298023
        speed: getConnectionSpeed() // 4g
    }

    if (options.debug) {
        console.log('[Analytics]', metric.name, JSON.stringify(body, null, 2))
    }

    const blob = new Blob([new URLSearchParams(body).toString()], {
        // This content type is necessary for `sendBeacon`
        type: 'application/x-www-form-urlencoded'
    })
    if (navigator.sendBeacon) {
        navigator.sendBeacon(vitalsUrl, blob)
    } else
        fetch(vitalsUrl, {
            body: blob,
            method: 'POST',
            credentials: 'omit',
            keepalive: true
        })
}
