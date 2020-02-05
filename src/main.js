import Vue from "vue";

Vue.config.productionTip = false;

const NewFirstComponent = {
  name: 'NewComponent',
    data() {
      return{
        MyColor:{
          color: '',
        },
    };
  },

  template: `
  <div>
    <h2 :style='MyColor'>Best IT guy in the world</h2>
    <label for="color">Change Color</label>
    <input name="color" id="color" v-model="MyColor.color"/>
  </div>
  `
};

new Vue({
  el: "#app",

  components: {
    NewFirstComponent,
  },

  data: {
    name: 'adam',
    MyColor: {
      color: 'green',
    }
  },
  methods:{
    handleClick(){
      alert("Hello world!!");
    },
  },
  template: 
  `
  <div>
    <h1 :style="MyColor">Hello {{name}}</h1>
    <NewFirstComponent/>
    <button v-on:click="handleClick">Hello</button>
  </div>
  `,
});


/*
v-bind:style="MyColor" --- :style="MyColor"
Dyrektywy 
v-on:click = @click -> wywoływanie zdarzeń
v-model -> spina on komponenty
*/