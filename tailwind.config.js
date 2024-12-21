/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          hover: '#2563EB', // blue-600
          light: '#DBEAFE', // blue-100
          dark: '#1D4ED8', // blue-700
        },
        secondary: {
          DEFAULT: '#E5E7EB', // gray-200
          hover: '#D1D5DB', // gray-300
          light: '#F3F4F6', // gray-100
          dark: '#4B5563', // gray-600
        },
        background: {
          DEFAULT: '#F9FAFB', // gray-50
          dark: '#F3F4F6', // gray-100
        },
        text: {
          DEFAULT: '#111827', // gray-900
          secondary: '#4B5563', // gray-600
          light: '#6B7280', // gray-500
        },
        border: {
          DEFAULT: '#D1D5DB', // gray-300
          focus: '#3B82F6', // blue-500
        }
      },
    },
  },
  plugins: [],
} 