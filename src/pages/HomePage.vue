<script>
// import section
import { cars } from '../assets/data.js';
import ProductCard from '../components/ProductCard.vue'

export default {
    name:'HomePage',
    components: {ProductCard},
  data() {
    return {
        termSearch:'', 
      cars: [],
    };
    
  },
  
  computed:{
    FilterCars(){
        const filter = this.termSearch.toLowerCase();
        return this.cars.filter(car =>{
            return(            
                car.make.toLowerCase().includes(filter) ||
                car.model.toLowerCase().includes(filter)
            );
        });
    }
  },
  methods:{
    submitFilter(){

    }
  },
  created() {
    // assign imported data to cars array
    this.cars = cars;
  }
};

</script>
<template>
    <main class="container mx-auto row flex flex-wrap justify-center items-center">
        <div class="flex justify-center filter-container">
            <input v-model="termSearch" type="text" placeholder="Search for make or model" class="mr-4">
            <button @click="submitFilter"> GO </button>
        </div>     
        <ProductCard v-for="car in FilterCars" :key="car.id" :make="car.make" :model="car.model" :price="car.price" :id="car.id"></ProductCard>
    </main>
</template>

<style lang="scss" scoped>
main{
    gap: 25px;
    overflow-y: hidden;
    min-height: calc(100vh - 260px);
    .filter-container{
        padding: 0;
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
