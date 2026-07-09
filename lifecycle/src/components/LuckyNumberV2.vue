<template>
    <div class="col-4 bg-white text-center">
        <h4 class="text-success">Random Number Generator</h4>
        <hr />
        Max Range :
        <input type="number" class="rounded" v-model.number="maxNumber">
        <br/><br/>
        <button class="btn btn-danger text-black"
            @click="generateLuckyNumber">
            <span v-if="luckyNumber === 0">Generate Lucky Number<br/>
            Range(1-100)</span>
            <span v-else>Lucky Number: {{ luckyNumber }}<br/>
            Click to generate a new lucky number</span>
        </button>
    </div>
</template>
<script setup>
import {ref} from "vue";
const luckyNumber = ref(0);
const maxNumber = ref(100)
function generateLuckyNumber() {
    luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
    console.log(luckyNumber.value)
}
</script>