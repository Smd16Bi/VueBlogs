import { createApp } from 'vue'
import App from './App.vue'
import Vintersection from './components/directives/Vintersection'
import router from './components/router/router'
import  components from './components/UI'
import  directives from './components/directives'
import store from './components/store'
const app = createApp(App)

components.forEach( component => {
    app.component(component.name, component)
})
directives.forEach( directive => {
    app.component(directive.name, directive)
})

console.log(directives);

app.directive('intersection', Vintersection)

app
    .use(store)
    .use(router)
    .mount('#app')
