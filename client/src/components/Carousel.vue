<template>
  <v-layout justify-center align-center>
    <v-carousel dark hide-delimiters hide-controls>
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i">
        <div id="heading">
          <h1 class="text-xs-center">
            Sell Your House in Here
          </h1>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://cdn.skim.gs/images/ov7uggmwoalgjouqdkxa/interior-design-hacks-for-showing-your-house'
          },
          {
            src: 'https://houserepossession.co.uk/wp-content/uploads/Top-5-Reasons-to-Sell-Your-House-Fast.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #heading {
    background-color: rgba(206, 203, 203, 0.6);
    padding: 50px 40px;
    display: inline-flex;
  }
  #heading h1{
    padding-top: 15px; 
    font-family: 'Pacifico', cursive;
    color: rgb(253, 253, 253);
    font-size: 50px;
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
    #heading img {
      height: 50px;
    }
    #heading h1 {
      font-size: 14px;
    }
  }
</style>
