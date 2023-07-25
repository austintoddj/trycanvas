import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'

import { sendToAnalytics } from './vitals'

function reportWebVitals(options) {
    try {
        onFID(metric => sendToAnalytics(metric, options))
        onTTFB(metric => sendToAnalytics(metric, options))
        onLCP(metric => sendToAnalytics(metric, options))
        onCLS(metric => sendToAnalytics(metric, options))
        onFCP(metric => sendToAnalytics(metric, options))
    } catch (err) {
        console.error('[Analytics]', err)
    }
}

export default reportWebVitals
