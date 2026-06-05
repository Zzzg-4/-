<template>
  <div class="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow flex flex-col justify-between">
    <div>
      <div class="flex justify-between items-start mb-4">
        <h3 class="font-headline-md text-headline-md text-on-surface">{{ name }}</h3>
        <span :class="tagClass">{{ tag }}</span>
      </div>
      <p class="text-xs text-on-surface-variant mb-6 h-10 overflow-hidden">{{ description }}</p>
      
      <div class="bg-surface-dim/50 rounded-lg p-4 mb-6 text-xs font-data-mono border border-outline-variant/30">
        <slot name="log"></slot>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-2">
      <button class="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all" @click="$emit('tool-action', { name, type: '历史记录' })">历史记录</button>
      <button class="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all" @click="$emit('tool-action', { name, type: '扫描' })">扫描</button>
      <button class="bg-secondary text-on-secondary py-2 rounded text-xs hover:opacity-90 font-bold transition-all" @click="$emit('tool-action', { name, type: '结果' })">结果</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  tag: String,
  tagClass: String,
  description: String
});
defineEmits(['tool-action']);
</script>