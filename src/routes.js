var Foo = {
    template: '<p>This is foo!</p>'
}

var Bar = {
    template: '<p>This is bar!</p>'
}

import Teste from './components/teste.vue'
import Teste2 from './components/teste2.vue'

export default{
    '/foo': { component: Foo },
    '/bar': { component: Bar  },
    '/teste': { component: Teste },
    '/teste2': { component: Teste2 }
}
