<template>
   <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1>{{detailHouse.title}}</h1>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md6 xs12 text-xs-center>
        <v-card>
          <v-card-title primary-title>
            <img :src="detailHouse.image" :alt="detailHouse.title" height="225px" width="100%">
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md6 xs12 text-xs-center>
        <v-card>
          <v-card-title primary-title>
            <GmapMap id="map" width="100%" :zoom="14" :center="center">
              <GmapMarker
                label="★"
                :position="{
                  lat: detailHouse.latitude,
                  lng: detailHouse.longtitude,
                }"
              >
                <GmapInfoWindow>
                  {{detailHouse.address}}
                </GmapInfoWindow>
              </GmapMarker>
            </GmapMap>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div style="padding-top:15px;">
              <h2>Deskripsi</h2>
              <v-divider></v-divider>
              <textarea v-model="detailHouse.description" xs12></textarea>
              <p><img style="float:left; padding-right:10px;" src="../../static/change.png" height="15px" alt="alamat">Rp {{detailHouse.price}}</p>
              <p><img style="float:left; padding-right:10px;" src="../../static/users.png" height="15px" alt="alamat"> {{detailHouse.contactName}}</p>
              <p><img style="float:left; padding-right:10px;" src="../../static/smartphone.png" height="15px" alt="alamat"> {{detailHouse.contactNumber}}</p>
              <p><img style="float:left; padding-right:10px;" src="../../static/placeholder.png" height="15px" alt="alamat"> {{detailHouse.address}}</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md6 xs12>
        <v-card>
          <v-card-title primary-title>
            <v-flex md6 xs6>
              <p>Kamar Tidur </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.kamarTidur}} </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>Kamar Mandi </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.kamarMandi}} </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>Lantai </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.lantai}} </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>Tahun Bangun </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.thnBangun}} </p>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md6 xs12>
        <v-card>
          <v-card-title primary-title>
            <v-flex md6 xs6>
              <p>Luas Bangunan </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.bangunan}} m<sup>2</sup></p>
            </v-flex>
            <v-flex md6 xs6>
              <p>Luas Tanah </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.tanah}} m<sup>2</sup></p>
            </v-flex>
            <v-flex md6 xs6>
              <p>Listrik </p>
            </v-flex>
            <v-flex md6 xs6>
              <p>: {{detailHouse.watt}} watt</p>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      detailHouse: '',
      center: {lat: 0, lng: 0}
    }
  },
  created () {
    let id = this.$route.params.id
    axios.get(`http://localhost:3000/houses/${id}`)
    .then(result => {
      this.detailHouse = result.data.data
      console.log(this.detailHouse)
      this.setPlace(this.detailHouse.latitude, this.detailHouse.longtitude)
    })
    .catch(err => console.log(err))
  },
  methods: {
    setPlace (lat, lng) {
      this.center = {lat: lat, lng: lng}
    }
  }
}
</script>

<style scoped>
  #map{
    width: 100%; 
    height: 225px;
  }
  textarea {
    resize: none; 
    width:150%; 
    height:300px
  }
  @media (max-width: 767px) {
    textarea {
      width:100%; 
    }
  }
</style>
