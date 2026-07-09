<template>
  <button @click="increment">++</button>
  <button @click="decrement">--</button>
  <p>{{ count }}</p>

</template>
<script setup>
import {useCounter}  from '../composibles/useCounter';

const {count, increment, decrement} = useCounter(100, 10);
</script>