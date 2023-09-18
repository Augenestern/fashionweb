import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
 
import router from "./routes/index"; 
import { createPinia } from 'pinia' 
import * as echarts from 'echarts';
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueParticles from 'vue-particles'  
 

const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$echarts = echarts
app.use(pinia)
app.use(VueParticles)  
app.use(ElementPlus)
app.use(Vant)
app.use(router)
app.mount('#app')
