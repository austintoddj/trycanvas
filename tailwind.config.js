/** @type {import('tailwindcss').Config} */
export default {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        hoverOnlyWhenSupported: true
    },
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
