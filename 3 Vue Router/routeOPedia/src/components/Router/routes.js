import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../Home/HomePage.vue";
import Contact from "../Home/Contact.vue";
import ProductList from "../Product/ProductList.vue";
import ProductDetail from "../Product/ProductDetail.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {path:"/", component:HomePage},
        {path:"/contact-us", component:Contact, name:"contact"},
        {path:"/productList", component:ProductList},
        {path:"/product/:productId/:category?", component: ProductDetail, name:"productDetail", props: true },
        {path:"/product", component: ProductDetail },
    ],
});

export default router;