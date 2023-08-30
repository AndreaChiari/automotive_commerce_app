<script>
import HomePage from "./pages/HomePage.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, HomePage, AppFooter },
};
</script>
<template>
  <div class="container mx-auto">
    <AppHeader></AppHeader>
    <RouterView></RouterView>
    <AppFooter></AppFooter>
  </div>
</template>
