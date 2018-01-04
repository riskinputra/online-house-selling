<template>
  <v-list
    dense
    class="white lighten-4"
  >
    <template>
      <v-list-tile v-show="hide">
        <v-list-tile-action>
          <v-icon color="blue">account_circle</v-icon>
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
          <v-icon color="blue">home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#" id="nav" class="grey--text" @click="homeMenu">Home</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon color="blue">description</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#house-list" id="nav" class="grey--text">House List</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-show="hide">
        <v-list-tile-action>
          <v-icon color="blue">store</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#" id="nav" class="grey--text" @click="sellHouse">Sell House</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-show="hide">
        <v-list-tile-action>
          <v-icon color="blue">account_balance</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a href="#" id="nav" class="grey--text" @click="myHouse">My House</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-show="akun">
        <v-list-tile-action>
          <v-icon color="blue">assignment_ind</v-icon>
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
          <v-icon color="blue">power_settings_new</v-icon>
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
      hide: false,
      akun: true
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')
      let decode = jwt_decode(token)
      console.log(decode)
      this.username = decode.username
      this.hide = true
      this.akun = false
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
    },
    myHouse () {
      this.$router.replace('/my-house')
    }
  }  
}
</script>

