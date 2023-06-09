/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ] /* preCss plugin = purgecss เอา js jsx css ที่ไม่จำเป็นออกเพื่อลดขนาดไฟล์ ทำให้เว็บไวขึ้น */,
  mode: 'jit' /* just in time mode = manual config style */,
  theme: {
    extend: {
      colors: {
        primary: '#F3B866',
        secondary: '#F15D66',
        dimwhite: 'rgba(255,255,255,0.7)',
        dimbeige: 'rgba(222,197,181,0.5)',
        mahogred: 'rgba(63,12,9,1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
