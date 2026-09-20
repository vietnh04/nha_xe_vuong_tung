/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A1D24', // Xám than chì cao cấp (Charcoal)
          dark: '#0F1115',    // Đen Onyx sâu cho footer và commitment
          light: '#282D37',   // Xám than nhẹ cho surface và gradient
        },
        accent: {
          red: '#FF6B00',     // Màu cam chủ đạo theo logo
          orange: '#FF7A00',  // Cam sáng
          amber: '#F59E0B',   // Vàng hổ phách điểm nhấn
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
