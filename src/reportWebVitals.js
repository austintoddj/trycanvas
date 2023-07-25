import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        try {
            onCLS(onPerfEntry)
            onFID(onPerfEntry)
            onFCP(onPerfEntry)
            onLCP(onPerfEntry)
            onTTFB(onPerfEntry)
        } catch (err) {
            console.error('[Analytics]', err)
        }
    }
}

export default reportWebVitals
