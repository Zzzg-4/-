<template>
  <div class="glass-card rounded-lg p-5 flex flex-col items-center text-center hover:border-primary transition-colors">
    <h4 class="font-headline-md text-headline-md text-on-surface mb-1">{{ name }}</h4>
    <p class="text-[10px] font-label-caps text-outline mb-4">{{ subTitle }}</p>
    
    <div class="text-left w-full space-y-1 mb-6 text-xs text-on-surface-variant font-data-mono">
      <p>跳转情况：{{ jumpStatus }}</p>
      <p>添加状况：{{ addStatus }}</p>
    </div>
    
    <div class="flex w-full gap-2 mt-auto">
      <button 
        class="flex-1 py-1.5 bg-surface-container-highest text-xs rounded hover:bg-primary-container transition-colors" 
        @click="$emit('action', { platform: name, type: '跳转' })"
      >
        跳转
      </button>
      <button 
        class="flex-1 py-1.5 bg-surface-container-highest text-xs rounded hover:bg-secondary-container transition-colors" 
        @click="$emit('action', { platform: name, type: '添加' })"
      >
        添加
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  subTitle: String,
  jumpStatus: String,
  addStatus: String
});
defineEmits(['action']);
</script>