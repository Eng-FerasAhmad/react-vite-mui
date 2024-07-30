/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                light: {
                    background: '#ffffff',
                    text: '#000000',
                    primary: '#1D4ED8', // Blue
                    secondary: '#9333EA', // Purple
                },
                dark: {
                    background: '#1E1E1E',
                    text: '#ffffff',
                    primary: '#3B82F6', // Blue
                    secondary: '#8B5CF6', // Purple
                },
            },
        },
    },
    plugins: [],
};
