<template>
  <div class="flex-1 bg-background text-on-surface flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
    
    <div class="w-full md:w-80 bg-surface-container border-b md:border-b-0 md:border-r border-outline-variant flex flex-col p-md shrink-0">
      <div class="bg-surface-container-low rounded-xl p-md border border-outline-variant mb-md flex items-center gap-sm active-scan-pulse">
        <span class="material-symbols-outlined text-secondary text-[32px]">smart_toy</span>
        <div>
          <h3 class="font-headline-md text-body-md font-bold text-secondary">CyberCore-AI v2.6</h3>
          <p class="text-xs text-on-surface-variant flex items-center gap-xs">
            <span class="w-2 h-2 rounded-full bg-secondary inline-block animate-ping"></span>
            Agent 状态: 持续监听中...
          </p>
        </div>
      </div>

      <h4 class="font-label-caps text-label-caps text-on-surface-variant mb-sm tracking-wider">AI 联动扫描引擎</h4>
      <div class="space-y-xs overflow-y-auto flex-1 pr-1">
        <button class="w-full text-left bg-surface-container-high hover:bg-surface-bright border border-outline-variant p-sm rounded-lg transition-all flex items-start gap-sm group">
          <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">travel_explore</span>
          <div>
            <div class="text-sm font-semibold">分析当前目标资产</div>
            <div class="text-xs text-on-surface-variant mt-[2px]">联动企业查询，自动提取关联子域名。</div>
          </div>
        </button>

        <button class="w-full text-left bg-surface-container-high hover:bg-surface-bright border border-outline-variant p-sm rounded-lg transition-all flex items-start gap-sm group">
          <span class="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">security</span>
          <div>
            <div class="text-sm font-semibold">STRIDE 威胁建模</div>
            <div class="text-xs text-on-surface-variant mt-[2px]">对网站分析中的漏洞及暴露面进行自动化建模。</div>
          </div>
        </button>

        <button class="w-full text-left bg-surface-container-high hover:bg-surface-bright border border-outline-variant p-sm rounded-lg transition-all flex items-start gap-sm group">
          <span class="material-symbols-outlined text-error group-hover:scale-110 transition-transform">terminal</span>
          <div>
            <div class="text-sm font-semibold">PoC 漏洞利用链生成</div>
            <div class="text-xs text-on-surface-variant mt-[2px]">基于资产指纹信息，智能匹配漏洞检测脚本。</div>
          </div>
        </button>
      </div>

      <div class="mt-auto pt-md border-t border-outline-variant text-xs text-on-surface-variant">
        由大语言模型驱动，安全研判结果仅供内部参考。
      </div>
    </div>

    <div class="flex-1 flex flex-col h-full relative">
      <div class="flex-1 overflow-y-auto p-gutter space-y-md">
        
        <div class="flex gap-md max-w-[85%]">
          <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 border border-primary/20 shadow-md">
            <span class="material-symbols-outlined">smart_toy</span>
          </div>
          <div class="bg-surface-container rounded-xl rounded-tl-none p-md border border-outline-variant shadow-sm">
            <p class="text-sm leading-relaxed text-on-surface">
              欢迎使用 <span class="text-primary font-semibold">CYBERCORE AI 自动化安全助理</span>。我可以无缝联动系统中的**企业查询**、**子域名收集**和**网站分析（STRIDE 建模）**组件。<br><br>
              请告诉我你当前想要审计的域名或公司名称，我将为你激活全自动化的全栈侦察流。
            </p>
            <span class="text-[10px] text-on-surface-variant block mt-xs font-mono">02:29 AM</span>
          </div>
        </div>

        <div class="flex gap-md max-w-[85%] ml-auto flex-row-reverse">
          <div class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 border border-secondary/20 shadow-md">
            <span class="material-symbols-outlined">account_circle</span>
          </div>
          <div class="bg-primary/10 rounded-xl rounded-tr-none p-md border border-primary/20 shadow-sm">
            <p class="text-sm leading-relaxed text-primary-fixed-dim">
              帮我全面分析一下 example.com 这个目标，并建立全套威胁防御模型。
            </p>
            <span class="text-[10px] text-primary/60 block text-right mt-xs font-mono">02:30 AM</span>
          </div>
        </div>

        <div class="flex gap-md max-w-[85%]">
          <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 border border-primary/20 shadow-md">
            <span class="material-symbols-outlined">smart_toy</span>
          </div>
          <div class="bg-surface-container rounded-xl rounded-tl-none p-md border border-outline-variant shadow-sm w-full">
            <div class="flex items-center gap-sm text-secondary text-sm font-semibold mb-sm">
              <span class="material-symbols-outlined animate-spin text-[18px]">sync</span>
              Agent 正在多模块跨域联动...
            </div>
            <div class="space-y-xs bg-surface-container-low rounded-lg p-sm border border-outline-variant font-mono text-xs text-on-surface-variant">
              <div class="flex items-center justify-between"><span class="text-primary">[模块调取]</span> 正在调用企业数据中心... <span class="text-secondary">SUCCESS</span></div>
              <div class="flex items-center justify-between"><span class="text-primary">[子网枚举]</span> 触发 subdomains 模块反查子域名中... <span class="text-secondary">Running</span></div>
              <div class="flex items-center justify-between"><span class="text-primary">[资产同步]</span> 自动下发指纹解析至网站分析模块... <span class="text-outline">Waiting</span></div>
            </div>
          </div>
        </div>

      </div>

      <div class="p-gutter border-t border-outline-variant bg-surface/90 backdrop-blur-md">
        <div class="max-w-4xl mx-auto flex items-center bg-surface-container rounded-full px-md py-sm border border-outline-variant focus-within:border-primary transition-all shadow-lg">
          <span class="material-symbols-outlined text-on-surface-variant mr-xs">auto_awesome</span>
          <input 
            type="text" 
            placeholder="问问 AI 助手或下发自动化联动审计指令... (如：分析当前子域风险)" 
            class="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full outline-none"
          />
          <button class="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center hover:brightness-110 active:scale-95 transition-all ml-sm shrink-0 shadow-md">
            <span class="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// 这里可以预留用于发送消息或模拟状态联动的业务逻辑
</script>

<style scoped>
/* 针对局部组件动画的补充样式 */
@keyframes pulse-cyan {
  0%, 100% { box-shadow: 0 0 0 0 rgba(78, 222, 163, 0.2); }
  50% { box-shadow: 0 0 0 8px rgba(78, 222, 163, 0); }
}
.active-scan-pulse {
  animation: pulse-cyan 2s infinite;
}
</style>