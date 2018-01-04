<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap id="house-list">
        <v-snackbar
          v-model="snackbar"
          absolute
          multi-line
          color="success"
        >
          <span>Delete House successful!</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      <v-flex xs12>
        <h1>House List</h1>
      </v-flex>
      <v-flex md4 xs12 v-for="item in myHouseList" :key="item.id">
        <v-card>
          <v-card-media :src="item.image" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h4 class="headline mb-0">{{item.title}}</h4>
              <div>{{item.city}}</div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-title primary-title >
            <div style="padding:0 10px;" align="center">
              <v-badge overlay left style="margin-right:25px;">
                <span slot="badge">{{item.kamarTidur}}</span>
                <img src="../../static/icons8-bedroom-50.png" alt="bedroom" height="30px" >
              </v-badge>
              <v-badge overlay left color="red" style="margin-right:20px;">
                <span slot="badge">{{item.kamarMandi}}</span>
                <img src="../../static/icons8-shower-50.png" alt="showe" height="30px" >
              </v-badge>
              <v-badge overlay color="purple" style="margin-right:20px; margin-left:5px;">
                <span slot="badge" style="font-size:9px;">{{item.bangunan}}</span>
                <img src="../../static/icons8-department-50.png" alt="bangunan" height="30px">
              </v-badge>
              <v-badge overlay color="orange">
                <span slot="badge" style="font-size:9px;">{{item.tanah}}</span>
                <img src="../../static/icons8-fit-to-width-50.png" alt="tanah" height="30px">
              </v-badge>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <div justify-center>
              <v-btn color="primary" dark @click="editMyHouse(item._id)">Edit</v-btn>
              <v-btn color="red" dark @click.native.stop="dialog = true">Delete</v-btn>
              <v-btn color="green" dark @click="detailHouse(item._id)">Detail</v-btn>
              <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                    <v-btn color="green darken-1" flat="flat" @click="deleteMyHouse(item._id)">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
  components: {
  },
  data () {
    return {
      snackbar: false,
      dialog: false
    }
  },
  computed: {
    ...mapState([
      'myHouseList'
    ])
  },
  methods: {
    editMyHouse (id) {
      console.log(id)
      axios.get(`http://localhost:3000/houses/${id}`)
      .then(result => {
        console.log(result.data.data._id)
        let id = result.data.data._id
        this.$router.replace(`/edit-house/${id}`)
      })
      .catch(err => console.log(err))
    },
    deleteMyHouse (id) {
      console.log(id)
      axios.delete(`http://localhost:3000/myHouses/${id}`)
      .then(result => {
        this.snackbar = true
        location.reload()
      })
      .catch(err => console.log(err))
    },
    detailHouse (id) {
      axios.get(`http://localhost:3000/houses/${id}`)
      .then(result => {
        console.log(result.data.data._id)
        let id = result.data.data._id
        this.$router.replace(`/detail-house/${id}`)
      })
      .catch(err => console.log(err))
    },
    ...mapActions([
      'getMyHouseList'
    ])
  },
  created () {
    this.getMyHouseList()
  }
}
</script>

<style scoped>
  #house-list h1 {
    font-size: 30px;
    padding: 15px 0;
  }
</style>

