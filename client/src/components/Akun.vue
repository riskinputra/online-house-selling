<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <a href="#" id="nav" class="grey--text" dark slot="activator">Akun</a>
    <v-card>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <template>
              <v-tabs fixed centered>
                <v-tabs-bar id="tab-title" dark>
                  <v-tabs-slider class="blue"></v-tabs-slider>
                  <v-tabs-item
                    :href="'#tab-1'"
                  >
                    Login
                  </v-tabs-item>
                  <v-tabs-item
                    :href="'#tab-2'"
                  >
                    Daftar
                  </v-tabs-item>
                </v-tabs-bar>
                <v-tabs-items>
                  <v-tabs-content
                    :id="'tab-1'"
                  >
                    <v-card flat>
                      <v-card-text>
                        <akun-login></akun-login>
                      </v-card-text>
                    </v-card>
                  </v-tabs-content>
                  <v-tabs-content
                    :id="'tab-2'"
                  >
                    <v-card flat>
                      <v-card-text>
                        <akun-signup></akun-signup>
                      </v-card-text>
                    </v-card>
                  </v-tabs-content>
                </v-tabs-items>
              </v-tabs>
            </template>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AkunLogin from './Akun-Login'
import AkunSignup from './Akun-Signup'
export default {
  components: {
    'akun-login': AkunLogin,
    'akun-signup': AkunSignup
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
  #tab-title {
    background: #3a6186;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #89253e, #3a6186);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #89253e, #3a6186); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>


