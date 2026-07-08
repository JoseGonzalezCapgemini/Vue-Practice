<template>
    <div class="container">
        <div>
            {{message}}
        </div>
        <!--Global Component-->
        <!-- <contact-us></contact-us> -->
        <!--Local Component-->
        <!-- <ButtonCounter></ButtonCounter> -->
        <ContactUs></ContactUs>
    </div>
</template>

<script setup>
    import ContactUs from "./components/ContactUs.vue";
    import ButtonCounter from "./components/ButtonCounter.vue";

    const message = "Hello Vue";
</script>

<style>

</style>