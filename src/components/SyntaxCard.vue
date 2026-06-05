<template>
  <div class="glass-card rounded-lg p-5 text-center border-t-2 border-primary/30 flex flex-col justify-between">
    <div>
      <h4 class="text-body-md font-bold mb-2 capitalize">{{ name }}</h4>
      <p class="text-[10px] text-on-surface-variant mb-4 leading-relaxed">{{ description }}</p>
    </div>
    <div class="flex gap-2">
      <button class="flex-1 py-1.5 bg-surface-container-highest text-[10px] rounded hover:bg-primary-container" @click="$emit('syntax-action', { name, type: '生成' })">生成</button>
      <button class="flex-1 py-1.5 bg-surface-container-highest text-[10px] rounded hover:bg-secondary-container" @click="$emit('syntax-action', { name, type: '添加' })">添加</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String
});
defineEmits(['syntax-action']);
</script>