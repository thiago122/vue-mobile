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
Vue.component('ListList', List)


import drop from './services/backdrop/index.js'
import action from './services/actionsheet/index.js'

import Home from './components/home.vue'
import Teste from './components/teste.vue'
import Teste2 from './components/teste2.vue'
import Index from './components/index.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/': {
        component: Home
    },
    '/teste2': {
        component: Teste2
    },
    '/teste': {
        component: Teste,
    },
    '/index2': {
        component: Index,
    },
    '/about': {
        component: About,
    },
    '/profile': {
        component: Profile,
    }
});

router.beforeEach(fw.beforeEach)
router.afterEach(fw.afterEach)
router.start(App, "#app");
