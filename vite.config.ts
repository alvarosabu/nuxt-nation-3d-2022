import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [

    Unocss({
      /* options */
      
      configFile: 'unocss.config.ts',
    }),
  ],
})
