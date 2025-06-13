import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/variables.scss'
import './assets/scss/bot.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}