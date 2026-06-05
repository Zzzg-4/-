import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入刚才创建的路由
import './assets/main.css'; // 确保你的 Tailwind 样式生效

const app = createApp(App);

app.use(router); // 激活路由机制
app.mount('#app');