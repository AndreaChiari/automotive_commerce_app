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
        <ProductCard v-for="car in cars" :key="car.id" :make="car.make" :model="car.model" :price="car.price"></ProductCard>
    </main>
</template>

<style lang="scss" scoped>
main{
    gap: 25px;
    overflow-y: hidden;
    min-height: calc(100vh - 260px)
}
</style>
