<script>
// import section
import { cars } from '../assets/data.js';
import ProductCard from '../components/ProductCard.vue'

export default {
    name:'HomePage',
    components: {ProductCard},
  data() {
    return {
      data: cars
    };
  }
};
</script>
<template>
    <main>
        <ProductCard></ProductCard>
    </main>
</template>

<style lang="scss" scoped>
main{
    overflow-y: hidden;
    min-height: calc(100vh - 275px)
}
</style>
