<template>
  <v-app dark>
    <v-navigation-drawer app v-model="drawer">
      <v-list subheader>
        <v-subheader>Человеки в чате</v-subheader>
        <v-list-tile
          v-for="user in users"
          :key="user.id"
          @click.prevent
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon :color="user.id === 2 ? 'primary' : 'grey'">chat_bubble</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title> Чат комнаты {{ user.room }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div>
        <Nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    drawer: true,
    users: [
      {id: 1, name: 'User 1'},
      {id: 2, name: 'User 2'},
      {id: 3, name: 'User 3'},
    ]
  }),
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      this.$router.push('/?message=leftChat')
      this.clearData()
    }
  }
};
</script>
