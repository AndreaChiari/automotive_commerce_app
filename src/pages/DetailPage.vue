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
    <div class="detail-container container mx-auto">
        <h1 class="text-center">CAR SPECIFICS</h1>
        <img src="../assets/img/chip.png" alt="">
        <div class="flex flex-col mt-5 ms-5 info-detail-container p-4">
            <div>
                <h3>Make: <span>{{ cars.make }}</span></h3>
                <h3>Model: <span>{{ cars.model }}</span></h3>
                <h3>Price: <span>{{ cars.price }}</span></h3>
                <h3>Description: <span>{{ cars.description }}</span></h3>
            </div>
            <div>
                <h3>Features: {{ cars.features }}</h3>
                <h3>Mileage: {{ cars.mileage }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.detail-container{
    position: relative;
    min-height: calc(100vh - 260px);
   
    .info-detail-container{
        width: 50%;
        background-color:#9A99A4 ;
        border-radius: 5px;
       color: white;
    }
    img{
        opacity: 0.4;
        position: absolute;
        left: 926px;
        top: 80px;
    }
    h1{
        color:#F90032;
    }
}
</style>