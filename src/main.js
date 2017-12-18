import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import fw from './fw.js'

import viewPage from './components/base/viewPage.vue'
import contentPage from './components/base/content-page.vue'
import {BarHeader} from './components/base/bar/index.vue'
import {List,Item} from './components/list/index.vue'

Vue.component('viewPage', viewPage)
Vue.component('contentPage', contentPage)
Vue.component('item', Item)
Vue.component('BarHeader', BarHeader)
Vue.component('item', Item)
Vue.component('List', List)


import drop from './services/backdrop/index.js'
import action from './services/actionsheet/index.js'

import Home from './components/home.vue'

import About from './components/About.vue'
import Profile from './components/Profile.vue'
import Product from './components/Product.vue'

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/': {
        component: Home
    },

    '/about': {
        component: About,
    },
    '/profile': {
        component: Profile,
    },

    '/product': {
        component: Product,
    }
});

router.beforeEach(fw.beforeEach)
router.afterEach(fw.afterEach)
router.start(App, "#app");
