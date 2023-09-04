<script>

// export product card
export default {
    name: 'ProductCard',
    props:{
        make: String,
        model: String,
        price: Number,
        id: Number
    }
  
    }

</script>
<template>
    <div class="product-card p-2 h-full col-lg-2 col-md-4 col-sm-12">
        <router-link :to="{name: 'DetailPage', params: { id: id }}" class="h-full">
            <h4>MAKE : <span class="text-white">{{ make }}</span></h4>
            <h4>MODEL : <span class="text-white">{{ model }}</span></h4>
            <h4>PRICE : <span class="text-white">{{ price }}</span></h4>
            <img class="logo-product" src="../assets/img/motork-logo-small.png" alt="">
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
a{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 10px;
    z-index: 4;
}
.logo-product{
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 3;
    position: absolute;
    bottom: 13px;
    left: 161px;
    max-width: 66px!important;
}
.product-card:hover .logo-product{
 opacity: 1;
}
.product-card{
    height: 130px;
    z-index: 5;
    position: relative;
    border-radius: 5px;
    color: white;
    background-color: #141414;
    h4{
        color:#F90032;
    }

}
.product-card:hover{
    border: 3px solid #F90032;
    transition: 0.1s ease-in-out;
}

// responsive section

@media screen and (max-width: 1440px){
.logo-product{
    left:118px ;
}}

@media screen and (max-width: 1024px){
.logo-product{
    left:88px ;
}}

@media screen and (max-width: 768px){

.logo-product{
    left: 135px;
}

}

@media screen and (max-width: 426px){
.logo-product{
    left:247px;
}}
</style>