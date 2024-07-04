// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  ssr:true,
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  tres:{
    modules: ['@tresjs/cientos'],
    devtools:true,
  },
  nitro:{
    routeRules:{
      '/':{ssr:false}
    }
  },
  compatibilityDate: "2024-07-03",
  modules: ["@nuxt/fonts", "@tresjs/nuxt"]
})