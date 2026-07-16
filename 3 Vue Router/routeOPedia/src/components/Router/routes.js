import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../Home/HomePage.vue";
import Contact from "../Home/Contact.vue";
import ProductList from "../Product/ProductList.vue";
import ProductDetail from "../Product/ProductDetail.vue";
import NotFound from "../Layout/NotFound.vue";
import Login from "../Authentication/Login.vue";
import NotAccess from "../Layout/NotAccess.vue";

function isAdmin(){
    const isAdmin = false;
    if (isAdmin) {
        return true;
    }
    return {name: "noaccess"};
}
function isAuthenticated(){
    const isAuthenticated = true;
    if(isAuthenticated){
        return true;
    }
    return false;
}

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        { path:"/", component:HomePage, name: "home" },
        { path:"/contact-us", component:Contact, name:"contact" },
        { path:"/contact", redirect: {name: 'contact'} },
        { path:"/noaccess", component:NotAccess,name: 'noaccess' },
        { path:"/productList", component:ProductList, name: "productList", 
            // beforeEnter: (to, from) => {
            //     console.log("Before Enter per Route");
            //     console.log(to,from);
            //     const isAdmin = true;
            //     if(isAdmin){
            //         return true
            //     }
            //     return false;
            // }
            beforeEnter: [isAdmin, isAuthenticated],
         },
        { path:"/login", component: Login, name:"login" },
        {
            path:"/product/:productId/:category?", 
            component: ProductDetail, 
            name:"productDetail", 
            props: true },
        { path:"/product", component: ProductDetail },
        { path:"/:catchAll(.*)", component: NotFound }
    ],
    linkActiveClass: "active",
});

// router.beforeEach((to, from, next) => {
//     console.log("Global Before Each");
//     console.log(to, from);
//     next();
// });
router.beforeEach((to, from) => {
    console.log("Global Before Each");
    console.log(to, from);
    const isAuthenticated = true;
    if (!isAuthenticated && to.name !== 'login'){
        return {name: 'login'};
    }
    return true;
});
export default router;