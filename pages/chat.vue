<template>
  <div class="c-wrap">
    <div class="c-chat">
      <AppMessage
        v-for="msg in messages"
        :key="msg.text"
        :name="msg.name"
        :text="msg.text"
        :owner="msg.id === user.id"
      />
    </div>
    <div class="c-form">
      <ChatForm />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import AppMessage from '@/components/AppMessage'
  import ChatForm from '@/components/ChatForm'

  export default {
    head() {
      return {
        title: `Комната ${this.user.room}`
      }
    },
    middleware: ['chat'],
    name: 'chat',
    components: {
      AppMessage,
      ChatForm,
    },
    computed: mapState(['user', 'messages']),
  }
</script>

<style scoped>
  .c-wrap {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .c-chat {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    padding: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .c-chat::-webkit-scrollbar {
    width: 5px;
    background-color: #ffffff;
  }

  .c-chat::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #000;
  }

  .c-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding: 1rem;
    background-color: #212121;
  }

</style>
