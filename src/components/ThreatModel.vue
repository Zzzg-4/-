<template>
  <div class="glass-panel rounded-xl p-8 border-primary/20">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-white tracking-tight">威胁建模分析</h2>
      <p class="text-primary text-sm mt-1 uppercase tracking-widest font-label-caps">Threat Modeling Analysis</p>
    </div>
    <div class="max-w-4xl mx-auto">
      <p class="text-on-surface-variant text-sm text-center mb-8 leading-relaxed">
        运用STRIDE方法进行全面的威胁建模，以识别六大类别中的安全威胁。STRIDE是由微软提出的一种威胁建模方法，能够帮助安全工程师有针对性地识别和评估系统架构中的潜在风险。
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
        <div v-for="item in strides" :key="item.title" class="flex justify-between items-center border-b border-white/5 pb-2">
          <span class="text-primary font-medium">{{ item.title }}</span>
          <span class="text-on-surface-variant text-xs">{{ item.desc }}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <button 
          v-for="btn in buttons" 
          :key="btn"
          @click="$emit('trigger-threat', btn)"
          class="bg-surface-container-highest hover:bg-primary-container/20 hover:border-primary/50 text-on-surface py-3 rounded-lg border border-outline-variant transition text-xs font-bold font-label-caps"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['trigger-threat']);

const strides = [
  { title: '欺骗行为 (Spoofing)', desc: '冒充用户、系统实体或第三方' },
  { title: '信息披露 (Information Disclosure)', desc: '暴露敏感信息' },
  { title: '篡改 (Tampering)', desc: '对数据或代码进行有意的改动' },
  { title: '服务中断 (Denial of Service)', desc: '阻止合法访问' },
  { title: '否认 (Repudiation)', desc: '对未进行适当记录的行为予以否认' },
  { title: '特权提升 (Elevation of Privilege)', desc: '未经授权进行特权提升' }
];

const buttons = ['威胁等级', 'STRIDE类别', '探测状态', '安全控制', '汇总分析'];
</script>