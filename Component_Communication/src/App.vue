<template>
  <div class="bg-black text pt-3">
      

  
      <div class="container">
        <div class="text-white float-end">
          Contact Owner Name: <input v-model="ownerName" />
        </div>
        <br/><br/>
          <AddContact @add-contact="onAddContact($event)"></AddContact>
          <div class="row">
            <div class="col-12" v-for="contact in contacts" :key="contact.name">
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
          <LuckyNumber :maxNumber="10"></LuckyNumber>
      </div>
  </div>
</template>

<script setup>
    import { reactive, ref } from "vue";
    import Contact from "./components/Contact.vue";
    import AddContact from "./components/AddContact.vue";
    import LuckyNumber from "./components/LuckyNumber.vue";
    const ownerName = ref("Yo");
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