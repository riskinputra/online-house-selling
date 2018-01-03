<template>
  <v-list
    dense
    class="white lighten-4"
  >
    <template>
      <v-list-tile v-show="hide">
        <v-list-tile-action>
          <v-icon>account_circle</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="grey--text">
            Welcome, {{ username }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider dark class="my-4"></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#" id="nav" class="grey--text" @click="homeMenu">Home</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>description</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#house-list" id="nav" class="grey--text">House List</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-show="hide">
        <v-list-tile-action>
          <v-icon>store</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#" id="nav" class="grey--text" @click="sellHouse">Sell House</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <akun></akun>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider dark class="my-4"></v-divider>
      <v-list-tile v-show="hide">
        <v-list-tile-action>
          <v-icon>power_settings_new</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#" id="nav" @click="logout" class="grey--text">Logout</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import jwt_decode from 'jwt-decode'
import Akun from './Akun'

export default {
  components: {
    'akun': Akun
  },
  data () {
    return {
      username: 'Riski',
      hide: false
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')
      let decode = jwt_decode(token)
      console.log(decode)
      this.username = decode.username
      this.hide = true

    }
  },
  methods: {
    homeMenu () {
      this.$router.replace('/')
    },
    sellHouse () {
      this.$router.replace('/sell-house')
    },
    logout () {
      localStorage.clear()
      this.$router.replace('/')
      location.reload()
    }
  }  
}
</script>

