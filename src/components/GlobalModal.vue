<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
    <div class="w-full max-w-lg glass-panel rounded-xl shadow-2xl overflow-hidden border border-primary/30 active-glow flex flex-col max-h-[90vh]">
      
      <div class="px-6 py-4 bg-surface-container-high border-b border-outline-variant flex justify-between items-center shrink-0">
        <h3 class="font-headline-md text-body-lg text-primary font-bold flex items-center gap-2 tracking-wide uppercase">
          <span class="material-symbols-outlined text-md animate-pulse">terminal</span>
          {{ title }}
        </h3>
        <button class="p-1 text-on-surface-variant hover:text-error transition-colors rounded" @click="$emit('close')">
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 flex-1">
        
        <div v-if="actionType === '扫描'" class="space-y-3">
          <div class="flex items-center gap-2 text-xs font-label-caps text-secondary">
            <span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            ENGINE RUNNING: 正在执行自动化深度安全探测...
          </div>
          <div class="bg-surface-container-lowest font-data-mono text-xs p-4 rounded-lg border border-outline-variant/30 text-green-400 space-y-1 h-48 overflow-y-auto shadow-inner">
            <p class="text-outline-variant">[2026-06-04 14:02:11] CYBERCORE ADVANCED SCANNER RUNNING...</p>
            <p>[INFO] Target node mapped to internal subsystem.</p>
            <p>[INFO] Task thread pool spawned: 128 workers active.</p>
            <p class="text-primary">[DETECTED] Wildcard domain resolving test passed.</p>
            <p class="text-tertiary">[WARN] Passive OSINT intelligence feed synchronized.</p>
            <p class="text-secondary">[SUCCESS] Scanning profile generation completed.</p>
            <p class="animate-pulse">_</p>
          </div>
        </div>

        <div v-else-if="actionType === '添加字典'" class="space-y-4">
          <p class="text-xs text-on-surface-variant">选择或上传用于资产发现与目录暴破的自定义单词列表：</p>
          <div class="grid grid-cols-1 gap-2">
            <button class="w-full p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-lg text-left text-xs hover:border-primary transition-all flex items-center justify-between" @click="$emit('close')">
              <div>
                <p class="text-on-surface font-bold">🎯 top2000_subdomains.txt</p>
                <p class="text-outline text-[10px] mt-1">内置高频核心子域名字典 (大小: 18 KB)</p>
              </div>
              <span class="material-symbols-outlined text-secondary">check_circle</span>
            </button>
            <button class="w-full p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-lg text-left text-xs hover:border-primary transition-all flex items-center justify-between" @click="$emit('close')">
              <div>
                <p class="text-on-surface font-bold">🚀 directory_common_leak.txt</p>
                <p class="text-outline text-[10px] mt-1">敏感信息泄露靶向路由字典 (大小: 145 KB)</p>
              </div>
              <span class="material-symbols-outlined text-outline">radio_button_unchecked</span>
            </button>
          </div>
          <div class="border border-dashed border-outline-variant/50 rounded-lg p-6 text-center text-xs text-outline cursor-pointer hover:bg-primary/5 transition-colors">
            <span class="material-symbols-outlined text-2xl block mb-1 text-primary">cloud_upload</span>
            点击或拖拽上传本地密码本/字库
          </div>
        </div>

        <div v-else-if="actionType === '结果'" class="space-y-4">
          <p class="text-xs text-on-surface-variant">聚合引擎已成功收敛以下数据资产指纹快照：</p>
          <div class="border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-dim/40 text-xs font-data-mono">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-surface-container-high text-outline">
                  <th class="p-2.5 border-b border-outline-variant/30">核心参数指标</th>
                  <th class="p-2.5 border-b border-outline-variant/30">当前遥测快照</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant/20 text-on-surface-variant">
                <tr>
                  <td class="p-2.5 font-bold text-primary">Total Assets</td>
                  <td class="p-2.5">142 subdomains indexed</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-secondary">Alive Hosts</td>
                  <td class="p-2.5 text-secondary">38 web consoles active</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-error">Critical Risks</td>
                  <td class="p-2.5 text-error">0 critical risk detected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else-if="actionType === '精简根域名'" class="space-y-4">
          <p class="text-xs text-on-surface-variant">检测到多渠道情报汇聚出的冗余域名。请勾选确认要保留并归入通配符底座的独特根域名：</p>
          <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
            <label v-for="(domain, idx) in domainsList" :key="domain" class="flex items-center justify-between p-3 bg-surface-container-lowest rounded border border-outline-variant/30 cursor-pointer hover:bg-primary/5 transition-all group">
              <div class="flex items-center gap-3">
                <input type="checkbox" v-model="selectedDomains[idx]" class="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface-dim">
                <span class="text-xs font-data-mono text-on-surface group-hover:text-primary transition-colors">{{ domain }}</span>
              </div>
              <span class="text-[10px] font-label-caps px-2 py-0.5 rounded bg-surface-variant text-outline-variant">ROOT</span>
            </label>
          </div>
          <button class="w-full py-2.5 bg-primary text-on-primary font-bold rounded-lg text-xs transition-all shadow" @click="executeClean">
            清洗并归档根域名底座 (已选 {{ countSelected }} 个)
          </button>
        </div>

        <div v-else-if="actionType === '外部跳转确认'" class="space-y-4 text-center py-4">
          <span class="material-symbols-outlined text-4xl text-tertiary animate-bounce">language_us_east_auto</span>
          <div>
            <p class="text-xs text-on-surface font-bold">出站安全提醒：即将离开内网密封沙箱环境</p>
            <p class="text-[11px] text-on-surface-variant leading-relaxed max-w-sm mx-auto mt-2">
              您即将跳转前往第三方外部查册平台。请确保本地边界安全审计规则已允许该出站通信。
            </p>
          </div>
          <div class="flex gap-3 pt-2">
            <button class="flex-1 py-2 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30" @click="$emit('close')">取消</button>
            <button class="flex-1 py-2 bg-tertiary text-on-tertiary font-bold rounded text-xs shadow" @click="confirmJump">确认出站访问</button>
          </div>
        </div>

        <div v-else class="text-center py-6 space-y-4">
          <div class="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(78,222,163,0.1)]">
            <span class="material-symbols-outlined text-secondary text-2xl">check_circle</span>
          </div>
          <div>
            <h4 class="text-body-md font-bold text-on-surface">系统核心总线指令同步完成</h4>
            <p class="text-xs text-on-surface-variant mt-1">相关情报指纹已顺利合并，正在重新分发缓存空间。</p>
          </div>
          <button class="px-6 py-1.5 bg-surface-container-highest border border-outline-variant hover:border-primary rounded text-xs text-on-surface transition-all" @click="$emit('close')">确认</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

defineProps({
  title: { type: String, default: '系统控制中心' },
  actionType: { type: String, default: '常规' }
});

const emit = defineEmits(['close']);

// 模拟清洗数据
const domainsList = ref(['example.com', 'api.example.com', 'test.example.com', 'internal.target.net']);
const selectedDomains = ref(new Array(domainsList.value.length).fill(true));
const countSelected = computed(() => selectedDomains.value.filter(Boolean).length);

const executeClean = () => { alert('🧠 数据清洗成功，唯一根域名已重组入库！'); emit('close'); };
const confirmJump = () => { emit('close'); alert('🚀 正在请求外网网关，为您拉起外部查册浏览器窗口...'); };
</script>