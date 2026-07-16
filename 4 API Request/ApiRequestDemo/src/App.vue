<template>
  <div v-if="destObj.isLoading" class="d-flex justify-content-center p-4">
    <Loader></Loader>
  </div>
  <div v-else class="container p-4 bg-white">
    <div><h1 class="text-success text-center">TravelOPedia</h1></div>
    <table class="table table-striped table-light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Days</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-light" v-for="dest in destObj.destList" :key="dest.id">
          <td>{{ dest.name }}</td>
          <td>{{ dest.days }}</td>
          <td>{{ dest.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
  import axios from "axios";
  import {reactive, onMounted} from 'vue';
import Loader from "./Components/Loader.vue";
  
  const destObj = reactive({
    destList:[],
    isLoading: false,
  });

  onMounted(()=>{
    loadDestination();
  })

  function loadDestination(){
    destObj.isLoading = true;
    axios.get('http://localhost:3000/destination')
    .then((response) => {
      new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        console.log(response.data);
        destObj.destList = response.data;
        destObj.isLoading = false;
      });
    });
    
  }

  // function loadUsersAx(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => {
  //     console.log(response.data);
  //     userObj.users = response.data;
  //   })
  // }

  // function loadUsersFe(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     console.log(data);
  //     userObj.users = data;
  //   })
  // }
</script>
<style scoped>
</style>
