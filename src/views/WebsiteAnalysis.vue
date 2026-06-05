<template>
  <main class="flex-1 overflow-y-auto p-8 space-y-12 bg-[radial-gradient(circle_at_50%_50%,_#0e172a_0%,_#060e20_100%)] w-full">
    
    <section class="flex flex-col md:flex-row gap-8">
      <div class="md:w-16 flex justify-center pt-8 shrink-0">
        <h2 class="vertical-text font-headline-lg text-headline-lg text-white uppercase tracking-[0.2em] opacity-80 select-none">内容发现</h2>
      </div>
      
      <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all border border-outline-variant/30 bg-surface-container-low/40 relative">
          <span class="w-2 h-2 rounded-full bg-secondary absolute top-4 right-4 shadow-[0_0_8px_#4edea3]"></span>
          <div>
            <h3 class="text-lg font-bold text-primary tracking-wide">feroxbuster</h3>
            <p class="text-[10px] text-outline mb-4">安全工具</p>
            
            <div class="space-y-1.5 font-data-mono text-xs text-on-surface-variant bg-surface-dim/30 p-3 rounded border border-outline-variant/10 mb-6">
              <p><span class="text-outline">目标:</span> https://example.com</p>
              <p><span class="text-outline">参数:</span> 线程[50] | 延时[5s] | 代码[404]</p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-primary/20 transition-all" @click="openModal('Feroxbuster 添加字典', '添加字典')">添加字典</button>
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-primary/20 transition-all" @click="openModal('Feroxbuster 扫描中...', '扫描')">扫描</button>
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-secondary/20 transition-all" @click="openModal('Feroxbuster 扫描结果', '结果')">结果</button>
          </div>
        </div>

        <div class="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all border border-outline-variant/30 bg-surface-container-low/40">
          <div>
            <h3 class="text-lg font-bold text-primary tracking-wide">Waybackurls</h3>
            <p class="text-[10px] text-outline mb-4">存档工具</p>
            
            <div class="space-y-1.5 font-data-mono text-xs text-on-surface-variant bg-surface-dim/30 p-3 rounded border border-outline-variant/10 mb-6">
              <p><span class="text-outline">目标:</span> https://example.com</p>
              <p><span class="text-outline">范围:</span> [全量] | [仅 2024+] | [反垃圾]</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-primary/20 transition-all" @click="openModal('Waybackurls 提取历史路径', '扫描')">扫描</button>
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-secondary/20 transition-all" @click="openModal('Waybackurls 成果导出', '结果')">结果</button>
          </div>
        </div>

        <div class="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all border border-outline-variant/30 bg-surface-container-low/40">
          <div>
            <h3 class="text-lg font-bold text-primary tracking-wide">dirsearch</h3>
            <p class="text-[10px] text-outline mb-4">目录暴破</p>
            
            <div class="space-y-1.5 font-data-mono text-xs text-on-surface-variant bg-surface-dim/30 p-3 rounded border border-outline-variant/10 mb-6">
              <p><span class="text-outline">目标:</span> https://example.com</p>
              <p><span class="text-outline">递归:</span> [3] | 单元数: [是]</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-primary/20 transition-all" @click="openModal('dirsearch 深度挖掘中', '扫描')">扫描</button>
            <button class="bg-surface-container-highest py-1.5 rounded text-xs text-on-surface hover:bg-secondary/20 transition-all" @click="openModal('dirsearch 泄露资产表', '结果')">结果</button>
          </div>
        </div>

      </div>
    </section>

    <section class="flex flex-col md:flex-row gap-8">
      <div class="md:w-16 flex justify-center pt-8 shrink-0">
        <h2 class="vertical-text font-headline-lg text-headline-lg text-white uppercase tracking-[0.2em] opacity-80 select-none">爬虫</h2>
      </div>
      
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all border border-outline-variant/30 bg-surface-container-low/40">
          <div>
            <h3 class="text-lg font-bold text-primary tracking-wide">gospider</h3>
            <p class="text-[10px] text-outline mb-4">JS 爬虫</p>
            
            <div class="space-y-1.5 font-data-mono text-xs text-on-surface-variant bg-surface-dim/30 p-3 rounded border border-outline-variant/10 mb-6">
              <p><span class="text-outline">目标:</span> https://example.com</p>
              <p><span class="text-outline">配置:</span> 深度[3] | 并发[5] | 延迟[500ms] | 解析JS[✓]</p>
              <p class="text-secondary flex items-center gap-1.5 mt-2 text-[11px]">
                <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> 当前扫描进行中
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="bg-surface-container-highest py-2 rounded text-xs text-on-surface hover:bg-primary/20 transition-all" @click="openModal('GoSpider 动静态关联爬取', '扫描')">扫描</button>
            <button class="bg-surface-container-highest py-2 rounded text-xs text-on-surface hover:bg-secondary/20 transition-all" @click="openModal('GoSpider 端点提取树', '结果')">结果</button>
          </div>
        </div>

        <div class="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all border border-outline-variant/30 bg-surface-container-low/40">
          <div>
            <h3 class="text-lg font-bold text-primary tracking-wide">katana</h3>
            <p class="text-[10px] text-outline mb-4">下一代爬虫</p>
            
            <div class="space-y-1.5 font-data-mono text-xs text-on-surface-variant bg-surface-dim/30 p-3 rounded border border-outline-variant/10 mb-6">
              <p><span class="text-outline">目标:</span> https://example.com</p>
              <p><span class="text-outline">配置:</span> 深度[5] | 表单填充[✓] | 自定义Header[✓] | 确定型[350%]</p>
              <p class="text-outline flex items-center gap-1.5 mt-2 text-[11px]">
                <span class="w-1.5 h-1.5 rounded-full bg-outline"></span> 等待系统并发
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="bg-surface-container-highest py-2 rounded text-xs text-on-surface hover:bg-primary/20 transition-all" @click="openModal('Katana 矩阵指纹追踪', '扫描')">扫描</button>
            <button class="bg-surface-container-highest py-2 rounded text-xs text-on-surface hover:bg-secondary/20 transition-all" @click="openModal('Katana 漏洞威胁暴露结果', '结果')">结果</button>
          </div>
        </div>

        <div class="md:col-span-2 glass-card rounded-xl p-8 border border-outline-variant/30 bg-surface-container-low/20 text-center space-y-6">
          <div class="space-y-1">
            <h3 class="text-xl font-bold tracking-wider text-on-surface">威胁建模分析</h3>
            <p class="text-[10px] font-data-mono text-primary font-bold tracking-widest uppercase">THREAT MODELING ANALYSIS</p>
            <p class="text-xs text-outline max-w-3xl mx-auto pt-2 leading-relaxed">
              运用STRIDE方法进行全面的威胁建模，以识别六大类别中的安全威胁。STRIDE是由微软提出的一种威胁建模方法，能够帮助安全工程师有针对性地识别和评估系统架构中的潜在风险。
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto text-left text-xs font-data-mono border-t border-b border-outline-variant/20 py-6 my-2">
            <div class="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <span class="text-primary font-bold">欺骗行为 (Spoofing)</span>
              <span class="text-outline">冒充用户、系统或其他第三方</span>
            </div>
            <div class="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <span class="text-primary font-bold">信息泄露 (Information Disclosure)</span>
              <span class="text-outline">暴露敏感信息</span>
            </div>
            <div class="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <span class="text-primary font-bold">篡改 (Tampering)</span>
              <span class="text-outline">对数据或代码进行恶意的改动</span>
            </div>
            <div class="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <span class="text-primary font-bold">服务中断 (Denial of Service)</span>
              <span class="text-outline">阻止合法访问</span>
            </div>
            <div class="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <span class="text-primary font-bold">否认 (Repudiation)</span>
              <span class="text-outline">对系统进行合法的行为予以否认</span>
            </div>
            <div class="flex justify-between items-center border-b border-outline-variant/10 pb-2">
              <span class="text-primary font-bold">特权提升 (Elevation of Privilege)</span>
              <span class="text-outline">未经授权执行特权操作</span>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-3 pt-2">
            <button class="px-6 py-2 bg-surface-container-highest border border-outline-variant/40 rounded text-xs font-medium hover:border-primary transition-colors text-on-surface" @click="openModal('矩阵策略: 威胁映射表', '结果')">威胁映射</button>
            <button class="px-6 py-2 bg-surface-container-highest border border-outline-variant/40 rounded text-xs font-medium hover:border-primary transition-colors text-on-surface" @click="openModal('微软模型: STRIDE 模型配置', '常规')">STRIDE模型</button>
            <button class="px-6 py-2 bg-surface-container-highest border border-outline-variant/40 rounded text-xs font-medium hover:border-primary transition-colors text-on-surface" @click="openModal('通道探测: 层面状态', '常规')">层面状态</button>
            <button class="px-6 py-2 bg-surface-container-highest border border-outline-variant/40 rounded text-xs font-medium hover:border-primary transition-colors text-on-surface" @click="openModal('策略下发: 安全控制拦截机制', '常规')">安全控制</button>
            <button class="px-6 py-2 bg-surface-container-highest border border-outline-variant/40 rounded text-xs font-medium hover:border-primary transition-colors text-on-surface" @click="openModal('全局数据: 汇总分析模型报告', '结果')">汇总分析</button>
          </div>
        </div>

      </div>
    </section>

    <GlobalModal v-if="modal.isOpen" :title="modal.title" :action-type="modal.actionType" @close="modal.isOpen = false" />
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import GlobalModal from '../components/GlobalModal.vue';

// 弹窗中控状态控制
const modal = reactive({
  isOpen: false,
  title: '',
  actionType: ''
});

// 激活弹窗
const openModal = (title, type) => {
  modal.title = title;
  modal.actionType = type;
  modal.isOpen = true;
};
</script>