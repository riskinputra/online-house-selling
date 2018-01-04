<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.width > 1264"
      v-model="drawer"
      class="white lighten-4"
      app
    >
      <navList></navList>
    </v-navigation-drawer>
    <v-toolbar fixed color='gradient' dark app absolute clipped-left>
      <v-toolbar-side-icon v-if="$vuetify.breakpoint.width <= 1264" @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title"><img src="../assets/image/logo.png" alt="logo" id="logo">&nbsp;<span class="text">Online House Selling</span></span>
    </v-toolbar>
    <v-content>
      <v-container class="grey lighten-4">
        <section>
          <house-detail></house-detail>
        </section>
      </v-container>
    </v-content>
    <v-footer class="pa-5" id="footer">
      <v-spacer></v-spacer>
      <div>
        <p align="center">© copyright 2017 - Riski Nugroho Putra</p>
        <p align="center" class="text-footer">Online House Selling</p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
  import NavList from './NavList.vue'
  import HouseDetail from './House-detail-content.vue'
  
  export default {
    data: () => ({
      drawer: null
    }),
    components: {
      'navList': NavList,
      'house-detail': HouseDetail
    },
    props: {
      source: String
    }
  }
</script>

<style>
  #inspire {
    font-family: 'Quicksand', sans-serif;
    font-size: 14;
    font-weight: 100;
  }
  #keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
    padding-top: 2vh;
    font-family: 'Pacifico', cursive;
  }
  .text-footer {
    font-family: 'Pacifico', cursive;
  }
  .welcome-user{
    font-size: 12px;
    float: right; 
  }
  .title {
    display: inline-flex
  }
  #logo {
    height: 50px;
  }
  .gradient {
    background: #3a6186;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #89253e, #3a6186);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #89253e, #3a6186); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  #footer {
    background: #3a6186;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #89253e, #3a6186);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #89253e, #3a6186); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  #footer {
    width: auto !important;
    color: #fff;
  }
  a#nav {
    text-decoration: none;
  }
  /* Visibility */
  /* Desktop and bigger */
  @media (min-width: 960px) {
    .visible-small {
      display: none !important;
    }
    .visible-medium {
      display: none !important;
    }
    .hidden-large {
      display: none !important;
    }
  }
  /* Tablets portrait */
  @media (min-width: 768px) and (max-width: 959px) {
    .visible-small {
      display: none !important;
    }
    .visible-large {
      display: none !important ;
    }
    .hidden-medium {
      display: none !important;
    }
  }
  /* Phone landscape and smaller*/
  @media (max-width: 767px) {
    .visible-medium {
      display: none !important;
    }
    .visible-large {
      display: none !important;
    }
    .hidden-small {
      display: none !important;
    }
    #footer p {
      font-size: 12px
    }
  }
</style>