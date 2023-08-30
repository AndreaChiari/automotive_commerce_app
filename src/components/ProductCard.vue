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
        <router-link :to="{name: 'DetailPage', params: { id: id }}">
            <h4>MAKE : <span class="text-white">{{ make }}</span></h4>
            <h4>MODEL : <span class="text-white">{{ model }}</span></h4>
            <h4>PRICE : <span class="text-white">{{ price }}</span></h4>
        </router-link>
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