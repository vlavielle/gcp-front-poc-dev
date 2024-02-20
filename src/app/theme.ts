import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  
    fonts: {
      heading:  'var(--font-poppins)',
      body:     'var(--font-poppins)',
    },
    colors:{
      vtm_darkblue: '#244B5A',
      vtm_blue: '#008B97',
      vtm_lightblue: '#02B1B0',
      vtm_green: '#00AF3F',
      vtm_yellowgreen: '#8CC53E',
      vtm_yellow: '#DFDF00',
      vtm_white: '#FFFFFF',
      vtm_black: '#000000',
      vtm_light: '#e1dfdf',
      vtm_gray: '#EEEDEB',
    }
  
});