<script>
import { cars } from '../assets/data.js';
export default {
    name:'DetailPage',
  data() {
    return {
        cars: [] 
    };
    
  },
  created() {
    // get route id 
    const carId = this.$route.params.id;

    // find corresponding car using find method     
    this.cars = cars.find(car => car.id === Number(carId));
  }
};

</script>

<template>
<h1>{{ cars.make }} {{ cars.model }}</h1>
    <p>Price: {{ cars.price }}</p>
</template>