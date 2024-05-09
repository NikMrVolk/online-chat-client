import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: '#4277E2',
            },
            gridTemplateColumns: {
                rootTemplate: 'minmax(6rem, 1fr) 14fr',
            },
        },
    },
    plugins: [],
}
export default config
