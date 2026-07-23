import { createRouter, createWebHistory } from 'vue-router';
import AccessDenied from '@/view/auth/AccessDenied.vue';
import NotFound from '@/view/auth/NotFound.vue';
import SignIn from '@/view/auth/SignIn.vue';
import SignUp from '@/view/auth/SignUp.vue';
import ContactUs from '@/view/home/ContactUs.vue';
import Home from '@/view/home/Home.vue';
import ProductList from '@/view/product/ProductList.vue';
import ProductUpsert from '@/view/product/ProductUpsert.vue';
import { APP_ROUTE_NAMES } from '@/constants/routeNames';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:  '/',
      name: APP_ROUTE_NAMES.HOME,
      component: Home,
    },
    {
      path:  '/sign-in',
      name: APP_ROUTE_NAMES.SIGN_IN,
      component: SignIn,
    },
    {
      path:  '/sign-up',
      name: APP_ROUTE_NAMES.SIGN_UP,
      component: SignUp,
    },
    {
      path:  '/access-denied',
      name: APP_ROUTE_NAMES.ACCESS_DENIED,
      component: AccessDenied,
    },
    {
      path:  '/not-found',
      name: APP_ROUTE_NAMES.NOT_FOUND,
      component: NotFound,
    },
    {
      path:  '/contact-us',
      name: APP_ROUTE_NAMES.CONTACT_US,
      component: ContactUs,
    },
    {
      path:  '/product-list',
      name: APP_ROUTE_NAMES.PRODUCT_LIST,
      component: ProductList,
    },
  ],
})

export default router
