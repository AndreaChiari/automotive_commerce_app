<script>
// import section
import { cars } from '../assets/data.js';
import ProductCard from '../components/ProductCard.vue'

export default {
    name:'HomePage',
    components: {ProductCard},
  data() {
    return {
      cars: [] 
    };
  },
  created() {
    // Assegno i dati importati all'array cars
    this.cars = cars;
  }
};

</script>
<template>
    <main class="container mx-auto row flex flex-wrap justify-center items-center">
        <div class="flex justify-center filter-container">
            <input id="filterinput" type="text" placeholder="Search for a car" class="mr-4">
            <button id="filterbutton"> GO</button>
        </div>     
        <ProductCard v-for="car in cars" :key="car.id" :make="car.make" :model="car.model" :price="car.price" :id="car.id"></ProductCard>
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
        padding-left: 2px;
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
