<script setup lang="ts">
// similar to https://supabase.nuxtjs.org/composables/usesupabaseclient#database-request
const client = useSupabaseClient()

const { data } = await useAsyncData('test', async () => {
  const { data } = await client.from('some_table').select('*')
  return data
})

console.log('data', data)

</script>


<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
