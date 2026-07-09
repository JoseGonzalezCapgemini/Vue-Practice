<template>
    <div class="bg-info rounded p-1 pb-4 m-1">
        <div class="row">
            <div class="col-12">
                <h3>Name: {{ name }}</h3>
                <p>Email: {{ email }}</p>
                <p>Phone: {{ phone }}</p>
            </div>
            <div class="col-3">
                <button 
                    @click="emit('update-favorite', {isFavorite: props.isFavorite, name: props.name})"
                    :class="[isFavorite ? 'btn btn-warning':'btn btn-success']"
                >
                    {{  isFavorite ? 'Remove from' : 'Add to' }} Favorite
                </button>
                <p> Is Favorite: {{ isFavorite }}</p>
            </div>
            <div class="col-3">
                <!-- <LuckyNumber :maxNumber="maxNumber"></LuckyNumber> -->
                 <LuckyNumber></LuckyNumber>
            </div>
        </div>
        <span class="float-end small" v-if="ownername">*This contact info belongs to {{ ownername }}</span>
    </div>
</template>

<script setup>
    import LuckyNumber from "./LuckyNumber.vue";
    import {ref, defineProps} from "vue";
    const props = defineProps ({
        name: {type: String, required: true},
        phone: Number,
        ownername: String,
        isFavorite: Boolean,
        email: {type: String, required: false, default:"-n/a-"},
        //maxNumber: Number,
    })

    const emit = defineEmits(["update-favorite"]);

    function toggleFavorite(){
        emit("update-favorite", {isFavorite: props.isFavorite, name: props.name});
    }
</script>