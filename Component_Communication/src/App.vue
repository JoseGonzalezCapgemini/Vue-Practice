<template>
  <div class="bg-black text pt-3" :style="{height:'100vh'}">
      <h1 class="text-center text-success">ContactOPedia</h1>

  
      <div class="container">
        <div class="row text-white p-2 mb-2">
          <div class="col-6">
            Owner Name: <input v-model="ownerName" />
          </div>
          <div class="col-6 text-end">Max Lucky Number: <input v-model.number="maxNumber" /></div>
        </div>
        <br/><br/>
          <AddContact :onAddContact="onAddContact"></AddContact>
          <div class="row">
            <div class="col-12" v-for="contact in contacts" :key="contact.name">
                <!-- <Contact
                  :name="contact.name"
                  :phone="contact.phone"
                  :ownername="contact.ownername"
                  :email="contact.email"
                  :isFavorite="contact.isFavorite"
                  :maxNumber="maxNumber"
                  @update-favorite="contact.isFavorite = onUpdateFavorite($event, contact.phone)"
                ></Contact> -->
                <Contact
                  :name="contact.name"
                  :phone="contact.phone"
                  :ownername="contact.ownername"
                  :email="contact.email"
                  :isFavorite="contact.isFavorite"
                  @update-favorite="contact.isFavorite = onUpdateFavorite($event, contact.phone)"
                ></Contact>
            </div>
          </div>
      </div>
  </div>
</template>

<script setup>
    import { reactive, ref, provide } from "vue";
    import Contact from "./components/Contact.vue";
    import AddContact from "./components/AddContact.vue";
    const ownerName = ref("Yo");
    const maxNumber = ref(100);
    provide("maxLuckyNumber", maxNumber);
    const contacts = reactive([     
        {
          name: "Juan Pérez",
          phone: 4491234567,
          ownername: ownerName,
          isFavorite: true,
          email: "juan.perez@email.com",
        },
        {
          name: "Ana García",
          phone: 4497654321,
        },
        {
          name: "Carlos López",
          ownername: ownerName,
          email: "carlos.lopez@email.com",
        },
        {
          name: "Sofía Martínez",
          isFavorite: true,
        },
        {
          name: "Luis Hernández",
          phone: 5512345678,
          email: "luis.h@email.com",
        },
        {
          name: "Tecno Solutions",
          ownername: ownerName,
        },
        {
          name: "Mónica Díaz",
          phone: 3311122233,
          isFavorite: false,
        },
        {
          name: "Distribuidora Central",
          email: "contacto@distribuidoracentral.com",
        },
        {
          name: "Pedro Castillo",
          phone: 8188877766,
          ownername: ownerName,
          isFavorite: true,
        },
        {
          name: "Grupo Altavista",
        },
    ]);

    function onAddContact(contact){
      contact.ownername = ownerName.value;
      contact.isFavorite = false;
      contacts.push(contact);
    }
    function onUpdateFavorite(oldValuesFC, phoneNum){
      console.log(oldValuesFC);
      console.log(phoneNum);
      return !oldValuesFC.isFavorite;
    }
</script>

<style>

</style>