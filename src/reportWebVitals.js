import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals'

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        try {
            onCLS(onPerfEntry)
            onFID(onPerfEntry)
            onFCP(onPerfEntry)
            onLCP(onPerfEntry)
            onTTFB(onPerfEntry)
        } catch (err) {
            throw new Error(err)
        }
    }
}

export default reportWebVitals
