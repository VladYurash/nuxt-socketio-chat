<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.text">{{ msg.text }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    head() {
      return {
        title: `Комната ${this.user.room}`
      }
    },
    middleware: ['chat'],
    name: 'chat',
    computed: mapState(['user', 'messages']),
  }
</script>

<style scoped>

</style>
