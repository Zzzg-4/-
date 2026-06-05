import { createRouter, createWebHistory } from 'vue-router';

// 1. 导入你的视图组件
import EnterpriseInfo from '../views/EnterpriseInfo.vue';
import SubdomainCollection from '../views/SubdomainCollection.vue';
import WebsiteAnalysis from '../views/WebsiteAnalysis.vue';
import AIAssistant from '../views/AIAssistant.vue'; // <-- 引入新页面

const routes = [
  {
    path: '/',
    redirect: '/enterprise'
  },
  {
    path: '/enterprise',
    name: 'EnterpriseInfo',
    component: EnterpriseInfo
  },
  {
    path: '/subdomains',
    name: 'Subdomains',
    component: SubdomainCollection
  },
  {
    path: '/analysis',
    name: 'WebsiteAnalysis',
    component: WebsiteAnalysis
  },
  {
    path: '/ai',
    name: 'AIAssistant',
    component: AIAssistant // <-- 注册 AI 助手页面
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
