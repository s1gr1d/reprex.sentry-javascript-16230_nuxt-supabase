// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@sentry/nuxt/module', '@nuxtjs/supabase'],

  runtimeConfig: {
    public: { sentryDsn: process.env.NUXT_PUBLIC_SENTRY_DSN }
  },
})