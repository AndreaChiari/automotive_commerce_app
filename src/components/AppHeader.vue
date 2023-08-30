<script></script>
<template>
   <header>
    <router-link :to="{name: 'home'}" class="flex justify-between items-center container mx-auto">
        <img class="h-full w-48" src="../assets/img/MOTORK-logo-2048x463.png" alt="MOTORK-logo-2048x463.png">
        <div class="p-1">
            <h4 class="text-center font-sans font-semibold">MOTORK <br> CONCESSIONARY</h4>
        </div>
    </router-link>
   </header>
</template>

<style lang="scss" scoped>
header{
    div{
        background-color: #F90032;
        h4{
            color: white;
            font-size: 25px;
        }
    }
}
</style>
