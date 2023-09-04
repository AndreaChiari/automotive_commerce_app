<script>
// import section
import { cars } from '../assets/data.js';
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'HomePage',
  components: { ProductCard },
  data() {
    return {
      termSearch: '', 
      cars: [],
      controlFilter: false
    };
  },
  computed: {
    filteredCars() {
        // setup a control to make sure filter is apllied only when clicking the button
      if (this.controlFilter) {
        const filter = this.termSearch.toLowerCase().trim();
        return this.cars.filter(car => {
          return (
            car.make.toLowerCase().includes(filter) ||
            car.model.toLowerCase().includes(filter)
          );
        });
      } else {
        
         // Show every cars if filter isn't applied
        return this.cars;
      }
    }
  },
  methods: {
    submitFilter() {
        this.controlFilter = true; 
    },

    // set up a function to empty the input field and set up the variable controlfilter to false, in this way we can properly filter the result by only clicking the go button
    inputChanged() {
      if (this.termSearch.trim() === '') {
        this.controlFilter = false;
      }
    }
  },
  created() {
    this.cars = cars;
  },
};

</script>
<template>
    <main class="container mx-auto row flex flex-wrap justify-center items-center">
        <div class="flex justify-center filter-container">
            <input autofocus v-model="termSearch" @input="inputChanged" @keydown.enter="submitFilter" type="text" placeholder="Search for make or model" class="mr-4">
            <button @click="submitFilter"> GO </button>
        </div>     
        <ProductCard v-for="car in filteredCars" :key="car.id" :make="car.make" :model="car.model" :price="car.price" :id="car.id"></ProductCard>
    </main>
</template>

<style lang="scss" scoped>
button:focus{
    outline-color: transparent;
}
main{
    padding-top: 150px;
    position: relative;
    gap: 25px;
    overflow-y: hidden;
    min-height: calc(100vh - 260px);
    .filter-container{
      position: fixed;
      top: 65px;
      left: 50%;
      z-index: 6;
      transform: translateX(-50%);
      padding: 10px 0px 10px 0px;
      background-color: white;
    }
    input{
       padding: 0 3px;
       border: 1px solid #F90032;
    }
    button{
      color: white;
      background: #F90032;
      border: 1px solid black;
      padding: 3px 6px;
    }
   
}
</style>
