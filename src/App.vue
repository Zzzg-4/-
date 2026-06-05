<template>
  <div class="min-h-screen bg-[#0b1326] text-[#dae2fd] font-sans flex flex-col w-full selection:bg-primary/30">
    
    <header class="sticky top-0 z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-[#3e4850] flex justify-between items-center w-full px-6 h-16 max-w-[1440px] mx-auto shrink-0">
      <div class="flex items-center gap-8">
        <router-link to="/enterprise" class="font-sans text-xl font-bold tracking-tight text-[#89ceff] cursor-pointer select-none">
          CYBERCORE
        </router-link>
        
        <nav class="hidden md:flex items-center gap-6">
          <router-link 
            to="/enterprise" 
            class="text-sm transition-all duration-200 pb-1"
            active-class="text-[#89ceff] border-b-2 border-[#89ceff]"
            inactive-class="text-[#bec8d2] hover:text-[#dae2fd]"
          >
            企业查询
          </router-link>

          <router-link 
            to="/subdomains" 
            class="text-sm transition-all duration-200 pb-1"
            active-class="text-[#89ceff] border-b-2 border-[#89ceff]"
            inactive-class="text-[#bec8d2] hover:text-[#dae2fd]"
          >
            子域名
          </router-link>

          <router-link 
            to="/analysis" 
            class="text-sm transition-all duration-200 pb-1"
            active-class="text-[#89ceff] border-b-2 border-[#89ceff]"
            inactive-class="text-[#bec8d2] hover:text-[#dae2fd]"
          >
            网站分析
          </router-link>

          <router-link 
            to="/ai" 
            class="text-sm transition-all duration-200 pb-1"
            active-class="text-[#89ceff] border-b-2 border-[#89ceff]"
            inactive-class="text-[#bec8d2] hover:text-[#dae2fd]"
          >
            AI 助手
          </router-link>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden lg:flex items-center bg-[#171f33] rounded-full px-4 py-1 border border-[#3e4850]">
          <span class="material-symbols-outlined text-[#bec8d2] text-[20px]">search</span>
          <input 
            class="bg-transparent border-none focus:ring-0 text-sm text-[#dae2fd] ml-2 w-48 outline-none" 
            placeholder="Quick target scan..." 
            type="text"
          />
        </div>
        <div class="flex items-center gap-2">
          <button class="material-symbols-outlined p-1 text-[#bec8d2] hover:text-[#89ceff] transition-colors">notifications</button>
          <button class="material-symbols-outlined p-1 text-[#bec8d2] hover:text-[#89ceff] transition-colors">settings</button>
          <button class="material-symbols-outlined p-1 text-[#bec8d2] hover:text-[#89ceff] transition-colors">account_circle</button>
        </div>
        <button class="bg-[#0ea5e9] text-[#003751] px-4 py-1 rounded-lg text-xs font-bold hover:brightness-110 active:scale-95 transition-all">
          Start Scan
        </button>
      </div>
    </header>

    <main class="flex-1 w-full overflow-hidden flex flex-col">
      <router-view />
    </main>

    <footer class="bg-[#060e20] border-t border-[#3e4850] w-full shrink-0">
      <div class="flex flex-col md:flex-row justify-between items-center w-full py-4 px-6 max-w-[1440px] mx-auto gap-4">
        <span class="text-xs font-mono text-[#bec8d2]">
          © 2026 CYBERCORE Vigilance Systems. All rights reserved.
        </span>
        <div class="flex gap-6">
          <a class="text-xs font-mono text-[#bec8d2] hover:text-[#89ceff] transition-colors" href="#">Documentation</a>
          <a class="text-xs font-mono text-[#bec8d2] hover:text-[#89ceff] transition-colors" href="#">API Status</a>
          <a class="text-xs font-mono text-[#bec8d2] hover:text-[#89ceff] transition-colors" href="#">Privacy Policy</a>
          <a class="text-xs font-mono text-[#bec8d2] hover:text-[#89ceff] transition-colors" href="#">Security Research</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
// 页面保持轻量：在 Vue Router 架构下，App.vue 作为主舞台无需编写复杂的切页状态代码。
</script>

<style>
/* 这里放置全局生效的基础样式复位 */
body {
  margin: 0;
  padding: 0;
  background-color: #0b1326;
}

/* 隐藏所有多余的全局原始滚动条，维持系统一体化的极客感 */
*::-webkit-scrollbar {
  display: none !important;
}
* {
  scrollbar-width: none !important;
}
</style>