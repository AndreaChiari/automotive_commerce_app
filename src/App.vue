<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader,AppFooter },
};
</script>
<template>  
  <AppHeader></AppHeader>
  <div class="container mx-auto">
    <RouterView></RouterView>
  </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
.container{
  gap: 25px;
    overflow-y: hidden;
    min-height: calc(100vh)
}
</style>
