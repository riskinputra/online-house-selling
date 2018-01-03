<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      multi-line
      color="success"
    >
      <span>Add House successful!</span>
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
            <div class="input-group input-group--error input-group--required input-group--text-field error--text">
              <div class="input-group__input">
                <GmapAutocomplete name="location" id="location" required="" @place_changed="setPlace"></GmapAutocomplete>
              </div>
              <div class="input-group__details">
                <div class="input-group__messages">
                  <div class="input-group__error slide-y-transition-enter-to">This field is required
                  </div>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex xs12>
            <GmapMap id="map" :zoom="12" :center="center"
                :clickable="true">
              <GmapMarker v-for="(marker, index) in markers"
                :key="index"
                :position="marker.position"
              >
                <GmapInfoWindow>
                  {{content}}
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
        defaultForm
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.contactName &&
          this.form.contactNumber &&
          this.form.title &&
          this.form.description &&
          this.content &&
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
      setPlace (place) {
        console.log(place.address_components[3])
        this.city = `${place.address_components[2].long_name}, ${place.address_components[3].long_name}`
        console.log(this.city)
        this.content = place.formatted_address 
        this.lat = place.geometry.location.lat()
        this.lng = place.geometry.location.lng()
        this.form.address = place
        this.usePlace(place)
      },
      usePlace (place) {
        if (this.form.address) {
          this.markers.push({
            position: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }
          })
          this.center = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
          this.form.address = null
        }
      },
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        let newData = new FormData()
        newData.append('contactName', this.form.contactName)
        newData.append('contactNumber', this.form.contactNumber)
        newData.append('title', this.form.title)
        newData.append('description', this.form.description)
        newData.append('address', this.content)
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
        console.log(newData)
        axios.post('http://localhost:3000/houses', newData, 
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(result => {
          console.log(result)
          this.$router.replace('/')
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
