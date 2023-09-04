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
    margin-top: 100px;
    position: relative;
    min-height: calc(100vh - 260px);
   
    .info-detail-container{
        width: 50%;
        background-color:#03001B ;
        border-radius: 5px;
        color: white;
    }
    img{
        position: absolute;
        left: 926px;
        top: 80px;
    }
    h1{
        color:#F90032;
    }
}
// responsive section

@media screen and (max-width: 1440px){

img{
    left: 743px!important;
    top: 20px!important;
}

}

@media screen and (max-width: 1024px){

img{
    left: 488px!important;
    top: 34px!important;
}
    
h1{
    margin-bottom: 50px;
}

}

@media screen and (max-width: 426px){
h1{
    margin-bottom: 155px!important;
}
img{
    display: none;
}

.info-detail-container{
    width: 76%!important;
}
}
</style>