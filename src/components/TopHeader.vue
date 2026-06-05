<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-surface-container-low border-b border-outline-variant z-50">
    <div class="flex justify-between items-center w-full px-lg max-w-container-max mx-auto h-full">
      <div class="flex items-center gap-8">
        <h1 class="text-headline-md font-headline-md font-bold tracking-tighter text-primary">CYBERCORE</h1>
        <nav class="hidden lg:flex gap-6 items-center">
          <router-link to="/enscan" class="text-on-surface-variant font-medium hover:text-primary transition-colors pb-1" active-class="text-primary font-bold border-b-2 border-primary">企业查询</router-link>
          <router-link to="/analysis" class="text-on-surface-variant font-medium hover:text-primary transition-colors pb-1" active-class="text-primary font-bold border-b-2 border-primary">网站分析</router-link>
          <a class="text-on-surface-variant font-medium hover:text-primary transition-colors pb-1" href="#">子域名</a>
          <a class="text-on-surface-variant font-medium hover:text-primary transition-colors pb-1" href="#">AI 助手</a>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <div class="relative hidden sm:block">
          <input class="bg-surface-dim border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64 text-on-surface" placeholder="搜索资产..." type="text"/>
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">search</span>
        </div>
        <button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">notifications</span></button>
        <div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">JS</div>
      </div>
    </div>
  </header>
</template>