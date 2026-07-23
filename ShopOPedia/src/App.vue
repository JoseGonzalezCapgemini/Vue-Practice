
<template>
    <div class="d-flex flex-column min-vh-100">
        <Header></Header>
        Hello
        <div class="flex-grow-1">
            <RouterView />
        </div>
        
    </div>
    

    <Footer></Footer>
</template>
<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped></style>
