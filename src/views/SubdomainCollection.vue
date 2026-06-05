<template>
  <main class="flex-1 overflow-y-auto p-8 bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary w-full">
    
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-xl">
      <div class="flex gap-sm">
        <button class="bg-surface-container px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">公司分析模块</button>
        <button class="bg-primary text-on-primary px-md py-xs rounded-full font-label-caps text-label-caps">子域名收集模块</button>
        <button class="bg-surface-container px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">网站分析模块</button>
        <button class="bg-surface-container px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">智能对话</button>
      </div>
      <div class="flex gap-sm">
        <button class="bg-surface-container-high border border-outline-variant px-lg py-xs rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors" @click="openModal('添加扫描目标', '添加目标')">添加目标</button>
        <button class="bg-surface-container-high border border-outline-variant px-lg py-xs rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors" @click="openModal('选择有效目标', '常规')">选择有效目标</button>
      </div>
    </div>

    <section class="grid grid-cols-[auto_1fr] gap-md mb-lg">
      <div class="flex flex-col items-center justify-center bg-surface-container py-md px-sm rounded-xl border border-outline-variant [writing-mode:vertical-rl] gap-md">
        <span class="font-label-caps text-label-caps text-primary tracking-widest">网络资产收集整理</span>
      </div>
      <div class="tool-card p-xl rounded-xl relative overflow-hidden group">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div class="flex flex-col items-center text-center gap-md relative z-10">
          <h1 class="font-headline-xl text-headline-xl text-on-surface mb-xs">Amass Enum</h1>
          <p class="font-body-md text-body-md text-primary max-w-3xl">
            一个通过被动数据收集与主动探测技术，系统化地枚举目标子域名、相关 IP 地址及自治系统（ASN）等信息的工具
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-lg w-full max-w-4xl my-lg">
            <div class="flex flex-col border-l border-outline-variant pl-md text-left"><span class="font-label-caps text-label-caps text-on-surface-variant">扫描到的网页总数</span><span class="font-data-mono text-headline-md text-primary">1,247</span></div>
            <div class="flex flex-col border-l border-outline-variant pl-md text-left"><span class="font-label-caps text-label-caps text-on-surface-variant">活跃子域名数量</span><span class="font-data-mono text-headline-md text-secondary">289</span></div>
            <div class="flex flex-col border-l border-outline-variant pl-md text-left"><span class="font-label-caps text-label-caps text-on-surface-variant">唯一 IP 地址数</span><span class="font-data-mono text-headline-md text-tertiary">87</span></div>
            <div class="flex flex-col border-l border-outline-variant pl-md text-left"><span class="font-label-caps text-label-caps text-on-surface-variant">关联 ASN 数量</span><span class="font-data-mono text-headline-md text-on-surface">12</span></div>
          </div>
          <div class="flex flex-wrap justify-center gap-md">
            <button class="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all" @click="openModal('Amass 扫描记录', '结果')">扫描记录</button>
            <button class="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all" @click="openModal('全部记录', '结果')">全部记录</button>
            <button class="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all" @click="openModal('DNS 结果列表', '结果')">DNS结果</button>
            <button class="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all" @click="openModal('子域名详情', '结果')">子域名</button>
            <button class="bg-primary text-on-primary px-xl py-sm rounded-full font-label-caps text-label-caps shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all" @click="openModal('Amass 全量扫描', '扫描')">开始扫描</button>
          </div>
        </div>
        <div class="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
          <span class="material-symbols-outlined text-[200px]" style="font-variation-settings: 'FILL' 1;">security</span>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-[auto_1fr] gap-md mb-lg">
      <div class="flex flex-col items-center justify-center bg-surface-container py-md px-sm rounded-xl border border-outline-variant [writing-mode:vertical-rl] gap-md">
        <span class="font-label-caps text-label-caps text-primary tracking-widest">子域名收集</span>
      </div>
      <div class="grid grid-cols-1 gap-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div class="tool-card p-lg rounded-xl flex flex-col gap-md">
            <div class="flex justify-between items-start">
              <h2 class="font-headline-md text-headline-md">Subfinder</h2>
              <span class="bg-secondary-container/20 text-secondary px-sm py-xs rounded font-label-caps text-[10px]">PASSIVE ENUM</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant italic">一款高速被动子域名枚举工具，其核心功能是通过聚合大量公开数据源来发现目标域名的子域名</p>
            <div class="flex gap-lg border-y border-outline-variant py-sm">
              <div class="flex flex-col"><span class="text-label-caps font-label-caps text-on-surface-variant">子域名</span><span class="font-data-mono text-primary">578</span></div>
              <div class="flex flex-col"><span class="text-label-caps font-label-caps text-on-surface-variant">网页总数</span><span class="font-data-mono text-primary">6,782</span></div>
            </div>
            <div class="grid grid-cols-2 gap-sm pt-xs">
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('Subfinder 被动扫描', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('Subfinder 探测结果', '结果')">结果</button>
            </div>
          </div>
          <div class="tool-card p-lg rounded-xl flex flex-col gap-md">
            <div class="flex justify-between items-start">
              <h2 class="font-headline-md text-headline-md">one for all</h2>
              <span class="bg-primary-container/20 text-primary px-sm py-xs rounded font-label-caps text-[10px]">ALL-IN-ONE</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant italic">一款功能强大的子域名收集工具，其核心价值在于通过集成综合功能实现对目标资产的全面覆盖</p>
            <div class="flex gap-lg border-y border-outline-variant py-sm">
              <div class="flex flex-col"><span class="text-label-caps font-label-caps text-on-surface-variant">子域名</span><span class="font-data-mono text-primary">578</span></div>
              <div class="flex flex-col"><span class="text-label-caps font-label-caps text-on-surface-variant">网页总数</span><span class="font-data-mono text-primary">6,782</span></div>
            </div>
            <div class="grid grid-cols-2 gap-sm pt-xs">
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('OneForAll 深度探测', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('OneForAll 详细列表', '结果')">结果</button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div class="tool-card p-lg rounded-xl flex flex-col gap-md relative overflow-hidden">
            <h2 class="font-headline-md text-headline-md text-center">alterx</h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant text-center">一款基于模式的子域名生成器，通过智能生成高度定制化的排列组合字典</p>
            <div class="flex flex-col gap-md mt-auto">
              <button class="bg-surface-container-highest py-md rounded-lg font-label-caps text-label-caps border border-outline-variant hover:bg-surface-variant transition-all" @click="openModal('Alterx 模式生成', '添加字典')">生成</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('数据合并处理', '常规')">合并</button>
            </div>
          </div>
          <div class="tool-card p-lg rounded-xl flex flex-col gap-md">
            <h2 class="font-headline-md text-headline-md text-center">shuffledns</h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant text-center">一款高速子域名解析与爆破工具，专注于主动探测与验证</p>
            <div class="text-center py-xs border-b border-outline-variant/30">
              <span class="font-body-sm text-body-sm italic text-on-surface-variant">共 2,567 个有效子域名</span>
            </div>
            <div class="grid grid-cols-3 gap-sm mt-auto">
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('导入子域名爆破字典', '添加字典')">添加字典</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('Shuffledns 并发解析', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('有效解析记录', '结果')">扫描结果</button>
            </div>
            <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('解析结果合并', '常规')">合并结果</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div class="tool-card p-lg rounded-xl flex flex-col gap-md">
            <h2 class="font-headline-md text-headline-md text-center">gospider</h2>
            <p class="font-body-sm text-body-sm text-primary text-center">一款高速、智能的网络爬虫工具，快速、深入地从目标网站提取出所有可达的攻击入口</p>
            <div class="grid grid-cols-2 gap-sm mt-auto">
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('Gospider 深度爬取', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('爬虫抓取链接', '结果')">结果</button>
            </div>
          </div>
          <div class="tool-card p-lg rounded-xl flex flex-col gap-md">
            <h2 class="font-headline-md text-headline-md text-center">dnsx</h2>
            <p class="font-body-sm text-body-sm text-primary text-center">一款灵活、快速且高度可扩展的 DNS 工具包，执行从基础查询到高级探测的任务</p>
            <div class="grid grid-cols-2 gap-sm mt-auto">
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('DNSx 验证探测', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary" @click="openModal('DNS 记录分析', '结果')">结果</button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-lg">
          <div class="tool-card p-md rounded-xl flex flex-col gap-sm">
            <span class="font-headline-md text-headline-md text-center">naabu</span>
            <div class="flex flex-col gap-1 text-[10px] text-on-surface-variant font-data-mono">
              <span>存活主机：23</span><span>开放端口数：107</span><span>高危端口：34</span>
            </div>
            <div class="grid grid-cols-2 gap-xs pt-xs">
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('Naabu 端口扫描', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('开放端口明细', '结果')">结果</button>
            </div>
          </div>
          <div class="tool-card p-md rounded-xl flex flex-col gap-sm">
            <span class="font-headline-md text-headline-md text-center">nmap</span>
            <div class="flex flex-col gap-1 text-[10px] text-on-surface-variant font-data-mono overflow-hidden whitespace-nowrap">
              <span>识别服务：ssh, Apache</span><span>操作系统：Linux</span>
            </div>
            <div class="grid grid-cols-2 gap-xs pt-xs">
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('Nmap 服务识别', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('指纹识别结果', '结果')">结果</button>
            </div>
          </div>
          <div class="tool-card p-md rounded-xl flex flex-col gap-sm">
            <span class="font-headline-md text-headline-md text-center">httpx</span>
            <div class="flex flex-col gap-1 text-[10px] text-on-surface-variant font-data-mono">
              <span>探测域名：342</span><span>存活：280</span>
            </div>
            <div class="grid grid-cols-2 gap-xs pt-xs">
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('Httpx 存活探测', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('Web 存活详情', '结果')">结果</button>
            </div>
          </div>
          <div class="tool-card p-md rounded-xl flex flex-col gap-sm">
            <span class="font-headline-md text-headline-md text-center">observer_ward</span>
            <div class="flex flex-col gap-1 text-[10px] text-on-surface-variant font-data-mono">
              <span>指纹库：11,102</span><span>命中：112</span>
            </div>
            <div class="grid grid-cols-2 gap-xs pt-xs">
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('指纹识别分析', '扫描')">扫描</button>
              <button class="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary" @click="openModal('应用指纹统计', '结果')">结果</button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-lg pt-lg border-t border-outline-variant">
          <button class="bg-surface-container-highest py-md rounded-lg font-label-caps text-label-caps border border-outline-variant hover:bg-primary/10 hover:border-primary transition-all flex items-center justify-center gap-md" @click="openModal('全量资产汇总', '结果')">
            汇总
          </button>
          <button class="bg-surface-container-highest py-md rounded-lg font-label-caps text-label-caps border border-outline-variant hover:bg-secondary/10 hover:border-secondary transition-all flex items-center justify-center gap-md" @click="openModal('全量资产报告', '结果')">
            汇总结果
          </button>
        </div>
      </div>
    </section>

    <GlobalModal v-if="modal.isOpen" :title="modal.title" :action-type="modal.actionType" @close="modal.isOpen = false" />
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import GlobalModal from '../components/GlobalModal.vue';

// 弹窗状态管理中心
const modal = reactive({
  isOpen: false,
  title: '',
  actionType: ''
});

// 统一调度弹窗唤醒，保障传参对齐 GlobalModal 的各条件分支
const openModal = (title, type) => {
  modal.title = title;
  modal.actionType = type;
  modal.isOpen = true;
};
</script>

<style scoped>
.scan-pulse {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse-ring {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .5; transform: scale(1.05); }
}
.tool-card {
  background: #0F172A;
  border: 1px solid #1E293B;
  transition: all 0.2s ease;
}
.tool-card:hover {
  border-top: 2px solid #0EA5E9;
  transform: translateY(-2px);
}
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
  display: block;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #2d3449;
  border-radius: 10px;
}
</style>