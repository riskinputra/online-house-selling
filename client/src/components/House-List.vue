<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap id="house-list">
      <v-flex xs12>
        <h1>House List</h1>
      </v-flex>
      <v-flex md3 xs12 v-for="item in houseLists" :key="item.id">
        <v-card>
          <v-card-media :src="item.src" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.desc}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue" @click="detailHouse(item.id)">Detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- <v-flex xs-12 class="text-xs-center">
        <v-pagination :length="pagination.pages" v-model="pagination.page" @input="next" circle></v-pagination>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
    
  },
  data () {
    return {
      nextId: 8,
      currentPage: 0,
      pageSize: 8,
      vissiblePage: []
    }
  },
  computed: {
    houseLists () {
      return this.$store.state.houseLists
    }
  },
  methods: {
    detailHouse (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
  #house-list h1 {
    font-size: 30px;
    padding: 15px 0;
  }
</style>

