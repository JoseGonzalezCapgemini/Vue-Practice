<template>
    <LCParentC>
        <p class="pt-2">We have two version for picking lucky number</p>
        <template v-slot:moreInfo>
            <p>Click the button to toggle between the two versions</p>
        </template>
        <template v-slot:learnSlot>
            <button @click="showMessage"> What will we learn?</button>
            <h4 class="text-success">{{ message }}</h4>
        </template>   
        <hr />
    </LCParentC>
</template>
<script setup>
    import LCParentC from './components/LCParentC.vue';
    import {ref} from "vue";
    const message = ref("");

    function showMessage(){
        message.value = "We will learn how to use slots";
    }
</script>