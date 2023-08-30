<script>

// export product card
export default {
    name: 'ProductCard',
    props:{
        make: String,
        model: String,
        price: Number
    }
  
    }

</script>
<template>
    <div class="product-card p-2 h-full col-2">
        <h4>MAKE : <span class="text-white">{{ make }}</span></h4>
        <h4>MODEL : <span class="text-white">{{ model }}</span></h4>
        <h4>PRICE : <span class="text-white">{{ price }}</span></h4>
    </div>
</template>

<style lang="scss" scoped>
.product-card{
    color: white;
    background-color: #141414;
    h4{
        color:#F90032;
    }
}
</style>