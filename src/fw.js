import Vue from 'vue'
import sess from './sess.js'

var beforeEach = function(t){
    const to = t.to.path
    const from = t.from.path
    const scrollTop = pageContentScrollTop()

    const h = sess.get(to)

    if (h && h.history || (from && from.indexOf(to) === 0)) {
        nextDirection('back');
        h.history = false
        sess.set(to, h)
    } else {
        sess.set(from || '/', {
            history: true,
            scrollTop: scrollTop
        })
        nextDirection('forward');
    }
    t.next();
}

var afterEach = function(t){
    const to = t.to.path
    const from = t.from.path
    // [Custom Business] Never use history scrollTop when '/' => '/home'
    if (from == '/' && to == '/home') return

    const h = sess.get(t.to.path)
console.log(h)
    if (h && h.scrollTop) {
        Vue.nextTick(() => {
            pageContentScrollTop(h.scrollTop)
        })
    }
}

var nextDirection = function(direction){
    let el = document.querySelector('body');
    if (el){
        el.setAttribute('transition-direction', direction);
    }
}

var pageContentScrollTop = function(scrollTop){
    const root = document.querySelector('body')
    if (typeof scrollTop == 'number') {
        const content = root && root.querySelectorAll('.page .page-content')[1]
        if (content) {
            content.scrollTop = scrollTop
        }
    } else {
        return root && root.querySelector('.page .page-content')
        ? root.querySelector('.page .page-content').scrollTop
        : 0
    }
}


export default {
	beforeEach(t){
		beforeEach(t);
	},
	afterEach(t){
		afterEach(t);
	},
	nextDirection(direction){
		nextDirection(direction);
	},
	pageContentScrollTop(scrollTop){
		pageContentScrollTop(scrollTop);
	}
}