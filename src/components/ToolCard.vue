<template>
  <div class="tool-card rounded-lg p-5 flex flex-col space-y-4">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-bold text-primary">{{ name }}</h3>
        <span class="text-[10px] text-slate-500 uppercase tracking-wider">{{ tag }}</span>
      </div>
      <div :class="['w-2 h-2 rounded-full', statusClass]"></div>
    </div>
    
    <div class="space-y-1 text-xs text-slate-400 font-mono">
      <p v-for="(val, key) in params" :key="key">
        {{ key }}: <span class="text-slate-200">{{ val }}</span>
      </p>
      <div v-if="extraStatus" class="flex items-center text-primary mt-1">
        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
        </svg>
        <span class="text-[10px]">{{ extraStatus }}</span>
      </div>
    </div>

    <div class="pt-4 flex gap-2" :class="isLargeBtn ? 'gap-4' : 'gap-2'">
      <button 
        v-for="action in actions" 
        :key="action"
        @click="$emit('trigger-action', { tool: name, action })"
        :class="[
          'flex-1 rounded transition font-medium',
          isLargeBtn ? 'text-sm py-2 rounded-md' : 'text-[10px] py-1.5',
          action === '扫描' 
            ? 'bg-primary/20 hover:bg-primary/30 text-primary border border-primary/20' 
            : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
        ]"
      >
        {{ action }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  tag: String,
  statusClass: { type: String, default: 'bg-slate-600' },
  params: Object,
  actions: Array,
  extraStatus: String,
  isLargeBtn: { type: Boolean, default: false }
});
defineEmits(['trigger-action']);
</script>