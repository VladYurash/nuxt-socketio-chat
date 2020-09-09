<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <p class="text-xs-center">{{ text }}</p>
      <hr>
    </div>
    <div v-else class="wrap">
      <div class="message" :class="{'message--owner': owner}">
        <strong>{{ name }}</strong>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppMessage',
    props: {
      name: String,
      text: String,
      owner: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .message {
    position: relative;
    width: 60%;
    margin: 0 1rem 1rem;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
    background-color: #1976d2;
  }

  .message p {
    margin-bottom: 0;
  }

  .message--owner {
    background-color: #fff;
    color: #000;
    align-self: flex-end;
  }

  .system {
    margin-bottom: 1rem;
  }

  .system p {
    margin-bottom: 1rem;
  }

  .wrap {
    display: flex;
    flex-direction: column;
  }
</style>
