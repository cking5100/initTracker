import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './src/components/Welcome.vue'
import HelloWorld from './src/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: {name: 'Welcome'}},
        {path: '/Welcome', name: 'Welcome', component: Welcome},
        {path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld},
    ]
})