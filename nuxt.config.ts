// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  routeRules: {
    "/" : {ssr:false}
  },
  devtools: { enabled: true },
  tres:{
    glsl:true
  },
  compatibilityDate: "2024-07-03",
  modules: ["@nuxt/fonts", "@tresjs/nuxt"]
})