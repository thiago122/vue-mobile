var Foo = {
    template: '<p>This is foo!</p>'
}

var Bar = {
    template: '<p>This is bar!</p>'
}




export default{
    '/foo': { component: Foo },
    '/bar': { component: Bar  },
}
