import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import components from '@/components/ui'
import directives from '@/derectives'
import router from '@/router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

components.forEach((component) => {
  app.component(component.name!, component)
})

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app.mount('#app')
