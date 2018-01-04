<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap id="house-list">
      <v-flex xs12>
        <h1>House List</h1>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          light
          solo
          v-model="search"
          prepend-icon="search"
          placeholder="Search"
          style="width: 100%; min-width: 128px"
        ></v-text-field>
        <v-divider></v-divider>
      </v-flex>
      <v-flex md4 xs12 v-for="item in filteredList" :key="item.id">
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
            <v-btn flat color="blue" @click="detailHouse(item._id)">Detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card v-if="filteredList.length === 0">
          <v-card-title primary-title>
            <p text-xs-center>Data Not Found</p>
          </v-card-title>
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
      search: ''
    }
  },
  computed: {
    ...mapState([
      'houseLists'
    ]),
    filteredList() {
      return this.houseLists.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
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
      'getAllHouse'
    ])
  },
  created () {
    this.getAllHouse()
  }
}
</script>

<style scoped>
  #house-list h1 {
    font-size: 30px;
    padding: 15px 0;
  }
</style>

