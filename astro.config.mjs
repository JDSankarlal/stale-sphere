// @ts-check
import { defineConfig, fontProviders } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    fonts:[{
        provider: fontProviders.fontsource(),
        name:"Public Sans",
        cssVariable: "--font-public",
    },
    {
        provider: fontProviders.fontsource(),
        name: "Source Sans 3",
        cssVariable: "--source-sans-3",
    },
]

});
