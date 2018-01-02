import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    houseLists: [
      {id: 0, title:'Kangooro', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 1, title:'Banteng', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 2, title:'Tiger', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 3, title:'Lion', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 4, title:'Cat', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 5, title:'Dog', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 6, title:'Rabbit', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'},
      {id: 7, title:'Turtle', desc:'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...', src:'http://pauk.property/wp-content/uploads/2017/10/reasons-your-house-might-not-be-selling.jpg'}
    ]
  }
})