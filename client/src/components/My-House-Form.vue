<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      multi-line
      color="success"
    >
      <span>Edit House successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form @submit.prevent="submit" ref="form">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Contact Name"
              required
              v-model="form.contactName"
              :rules="rules.contactName"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Contact Number"
              v-model="form.contactNumber"
              required
              :rules="rules.contactNumber"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              color="blue darken-2"
              label="Title"
              required
              v-model="form.title"
              :rules="rules.title"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              color="blue darken-2"
              required
              multi-line
              v-model="form.description"
              :rules="rules.description"
            >
              <div slot="label">
                Description*
              </div>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <GmapMap id="map" :zoom="12" :center="center"
                :clickable="true">
              <GmapMarker v-for="(marker, index) in markers"
                :key="index"
                :position="marker.position"
              >
                <GmapInfoWindow>
                  {{detailHouse.address}}
                </GmapInfoWindow>
              </GmapMarker>
              <GmapMarker
                v-if="this.form.address"
                label="★"
                :position="{
                  lat: this.form.address.geometry.location.lat(),
                  lng: this.form.address.geometry.location.lng(),
                }"
              />
            </GmapMap>
          </v-flex>
          <v-flex xs12>
            <VueImgInputer 
            v-model="form.image"
            :imgSrc="form.image"
            :rules="rules.address" 
            theme="light" style="width:100%; height:200px;"
            placeholder="Upload Image"
            bottomText="This Your Image">
            </VueImgInputer>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              color="blue darken-2"
              label="Price"
              required
              v-model="form.price"
              :rules="rules.price"
              suffix="Rp"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Kamar Tidur"
              required
              v-model="form.kamarTidur"
              :rules="rules.kamarTidur"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Kamar Mandi"
              required
              v-model="form.kamarMandi"
              :rules="rules.kamarMandi"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Luas Bangunan"
              required
              v-model="form.bangunan"
              :rules="rules.bangunan"
              suffix="m2"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Luas Tanah"
              required
              v-model="form.tanah"
              :rules="rules.tanah"
              suffix="m2"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Lantai"
              required
              v-model="form.lantai"
              :rules="rules.lantai"
              suffix="m2"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Listrik"
              required
              v-model="form.watt"
              :rules="rules.watt"
              suffix="watt"
              :mask="mask"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              color="blue darken-2"
              label="Tahun Bangun"
              required
              v-model="form.thnBangun"
              :rules="rules.thnBangun"
              :mask="mask"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          flat
          color="primary"
          type="submit"
          :disabled="!formIsValid"
        >Submit</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
  
</template>


<script>
  import jwt_decode from 'jwt-decode'
  import VueImgInputer from 'vue-img-inputer'
  import axios from 'axios'

  export default {
    components: {
      VueImgInputer
    },
    data () {
      const defaultForm = Object.freeze({
        contactName: '',
        contactNumber: '',
        title: '',
        description: '',
        address: '',
        image: '',
        price: null,
        kamarTidur: null,
        kamarMandi: null,
        bangunan: null,
        tanah: null,
        lantai: null,
        watt: null,
        thnBangun: null
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          contactName: [val => (val || '').length > 0 || 'This field is required'],
          contactNumber: [val => (val || '').length > 0 || 'This field is required'],
          title: [val => (val || '').length > 0 || 'This field is required'],
          address: [val => (val || '').length > 0 || 'This field is required'],
          description: [val => (val || '').length > 0 || 'This field is required'],
          image: [val => (val || '').length > 0 || 'This field is required'],
          price: [val => (val || '').length > 0 || 'This field is required'],
          kamarTidur: [val => (val || '').length > 0 || 'This field is required'],
          kamarMandi: [val => (val || '').length > 0 || 'This field is required'],
          bangunan: [val => (val || '').length > 0 || 'This field is required'],
          tanah: [val => (val || '').length > 0 || 'This field is required'],
          lantai: [val => (val || '').length > 0 || 'This field is required'],
          watt: [val => (val || '').length > 0 || 'This field is required'],
          thnBangun: [val => (val || '').length > 0 || 'This field is required']
        },
        mask: '##############################################################################',
        snackbar: false,
        center: {lat: -6.121435, lng: 106.774124},
        markers: [],
        content: null,
        lat: null,
        lng: null,
        city: null,
        userId: '',
        detailHouse: '',
        defaultForm
      }
    },
    created () {
      if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token')
        let decode = jwt_decode(token)
        this.userId = decode.id

        let id = this.$route.params.id
        axios.get(`http://localhost:3000/houses/${id}`)
        .then(result => {
          this.detailHouse = result.data.data
          this.center = {lat: this.detailHouse.latitude, lng: this.detailHouse.longtitude}
          this.markers.push({
            position: {
              lat: this.detailHouse.latitude,
              lng: this.detailHouse.longtitude
            }
          })
          this.form.contactName = this.detailHouse.contactName
          this.form.contactNumber = this.detailHouse.contactNumber
          this.form.title = this.detailHouse.title
          this.form.description = this.detailHouse.description
          this.form.price = this.detailHouse.price
          this.form.kamarTidur =  this.detailHouse.kamarTidur
          this.form.kamarMandi = this.detailHouse.kamarMandi
          this.form.bangunan = this.detailHouse.bangunan
          this.form.tanah = this.detailHouse.tanah
          this.form.watt = this.detailHouse.watt
          this.form.thnBangun = this.detailHouse.thnBangun
          this.form.image = this.detailHouse.image
          this.form.lantai = this.detailHouse.lantai
        })
        .catch(err => console.log(err))
        
      }
    },
    computed: {
      
      formIsValid () {
        return (
          this.form.contactName &&
          this.form.contactNumber &&
          this.form.title &&
          this.form.description &&
          this.form.image &&
          this.form.price &&
          this.form.kamarTidur &&
          this.form.kamarMandi &&
          this.form.bangunan &&
          this.form.tanah &&
          this.form.lantai &&
          this.form.watt &&
          this.form.thnBangun
        )
      }
    },
    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        let id = this.$route.params.id
        let newData = new FormData()
        newData.append('contactName', this.form.contactName)
        newData.append('contactNumber', this.form.contactNumber)
        newData.append('title', this.form.title)
        newData.append('description', this.form.description)
        newData.append('city', this.city)
        newData.append('latitude', this.lat)
        newData.append('longtitude', this.lng)
        newData.append('image', this.form.image)
        newData.append('price', this.form.price)
        newData.append('kamarTidur', this.form.kamarTidur)
        newData.append('kamarMandi', this.form.kamarMandi)
        newData.append('bangunan', this.form.bangunan)
        newData.append('tanah', this.form.tanah)
        newData.append('lantai', this.form.lantai)
        newData.append('watt', this.form.watt)
        newData.append('thnBangun', this.form.thnBangun)
        // console.log(newData)
        axios.put(`http://localhost:3000/myHouses/${id}`, newData, 
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(result => {
          console.log(result)
          this.$router.replace('/my-house')
        })
        .catch(err => {
            console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  #map{
    width: 100%; 
    height: 300px
  }
</style>
