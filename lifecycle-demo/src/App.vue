<template>
  <h1>{{mssg}}</h1>
  <button @click="showMssg"> Show Message</button>
  <br />
  <h1>{{ count }}</h1>
  <button @click="count++">Clicked {{ count }} times</button>
  <ButtonCounter v-if="count==1" />
</template>
<script setup>
  import {ref} from "vue";
  import ButtonCounter from './components/ButtonCounter.vue';
  import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
  
  const mssg = ref("Hello Vue");
  const count = ref(0);

  const showMssg = () => {
    mssg.value = "Hello Vue from function";
  }
  onBeforeMount(() =>{
    console.log("onBeforeMount - App.vue");
  });
  onMounted(() =>{
    console.log("onMounted - App.vue");
  });
  onBeforeUpdate(() => {
    console.log("onBeforeUpdate - App.vue");
  });
  onUpdated(() => {
    console.log("onUpdated - App.vue");
  });
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount - App.vue");
  });
  onUnmounted(() => {
    console.log("onUnmounted - App.vue");
  });
</script>