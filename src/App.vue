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
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>

