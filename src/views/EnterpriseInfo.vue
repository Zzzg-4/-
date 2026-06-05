<template>
  <main class="flex-1 overflow-y-auto p-8 space-y-12 bg-[radial-gradient(circle_at_50%_50%,_#0e172a_0%,_#060e20_100%)] w-full">
    
    <!-- SECTION 1: 企业信息收集 -->
    <section class="flex flex-col md:flex-row gap-8">
      <!-- 侧边垂直标题 -->
      <div class="md:w-16 flex justify-center pt-8 shrink-0">
        <h2 class="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">企业信息收集</h2>
      </div>
      
      <!-- 右侧主内容区 -->
      <div class="flex-1 space-y-8">
        <!-- ENScan 核心总控大卡片 -->
        <div class="glass-card rounded-xl p-8 active-glow relative overflow-hidden group">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary opacity-5 blur-[120px] rounded-full"></div>
          <div class="text-center space-y-4 mb-10 relative z-10">
            <h3 class="font-headline-xl text-headline-xl text-on-surface tracking-wide">ENScan</h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">专注于国内企业信息、供应链、股权结构及APP/小程序资产收集的开源情报自动化整合引擎</p>
            
            <!-- 动态扫描状态指示器 -->
            <div class="mt-6 flex flex-col items-center gap-2">
              <div class="flex flex-wrap items-center justify-center gap-3 text-data-mono font-data-mono text-outline text-sm">
                <span>当前全局焦点目标:</span>
                <span class="text-primary-fixed-dim font-bold px-2 py-0.5 bg-surface-container rounded border border-primary/20">example.com</span>
                <span class="bg-surface-container-highest px-2 py-0.5 rounded text-xs text-on-surface-variant">(ASN: 15169)</span>
              </div>
              <div class="flex items-center gap-2 text-secondary font-data-mono text-sm mt-1">
                <span class="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_#4edea3] animate-pulse"></span>
                系统状态: 资产树数据已就绪 (2026-06-04 15:32:10)
              </div>
            </div>
          </div>
          
          <!-- 总控台按钮群 -->
          <div class="flex flex-wrap justify-center gap-4 relative z-10">
            <button class="flex items-center gap-2 px-8 py-3 bg-surface-container-highest border border-outline-variant hover:border-primary text-on-surface font-medium transition-all rounded-lg text-sm" @click="openModal('ENScan 历史快照日志', '历史记录')">
              <span class="material-symbols-outlined text-lg">history</span>历史记录
            </button>
            <button class="flex items-center gap-2 px-8 py-3 bg-surface-container-highest border border-outline-variant hover:border-primary text-on-surface font-medium transition-all rounded-lg text-sm" @click="openModal('新建企业资产穿透任务', '添加目标')">
              <span class="material-symbols-outlined text-lg">add_circle</span>添加目标
            </button>
            <button class="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary font-bold transition-all rounded-lg text-sm shadow-md" @click="openModal('ENScan 穿透式实时分析', '扫描')">
              <span class="material-symbols-outlined text-lg">radar</span>深度扫描
            </button>
            <button class="flex items-center gap-2 px-8 py-3 bg-secondary text-on-secondary font-bold transition-all rounded-lg text-sm shadow-md" @click="openModal('ENScan 股权资产树成果', '结果')">
              <span class="material-symbols-outlined text-lg">analytics</span>查看结果
            </button>
          </div>
        </div>

        <!-- 三大企业信息查询平台卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="company in companies" :key="company.name" class="glass-card rounded-lg p-5 flex flex-col items-center text-center hover:border-primary transition-colors">
            <h4 class="font-headline-md text-headline-md text-on-surface mb-1">{{ company.name }}</h4>
            <p class="text-[10px] font-label-caps text-outline mb-4 tracking-wider uppercase">{{ company.subTitle }}</p>
            
            <div class="text-left w-full space-y-1 mb-6 text-xs text-on-surface-variant font-data-mono bg-surface-dim/40 p-3 rounded border border-outline-variant/20">
              <p><span class="text-outline">跳转情况：</span>{{ company.jumpStatus }}</p>
              <p><span class="text-outline">数据添加：</span>{{ company.addStatus }}</p>
            </div>
            
            <div class="flex w-full gap-2 mt-auto">
              <button class="flex-1 py-1.5 bg-surface-container-highest text-xs rounded hover:bg-primary-container hover:text-on-primary-container transition-colors font-medium" @click="handleCompanyAction(company.name, '跳转')">跳转外链</button>
              <button class="flex-1 py-1.5 bg-surface-container-highest text-xs rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors font-medium" @click="handleCompanyAction(company.name, '添加')">整合资产</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 根域名收集 -->
    <section class="flex flex-col md:flex-row gap-8">
      <!-- 侧边垂直标题 -->
      <div class="md:w-16 flex justify-center pt-8 shrink-0">
        <h2 class="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">根域名收集</h2>
      </div>
      
      <!-- 右侧主内容区 -->
      <div class="flex-1 space-y-8">
        <!-- 工具联动卡片矩阵 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- amss-Intel 卡片 -->
          <div class="glass-card rounded-xl p-6 hover:shadow-2xl transition-all flex flex-col justify-between group border-l-4 border-l-primary">
            <div>
              <div class="flex justify-between items-start mb-4">
                <h3 class="font-headline-md text-headline-md text-on-surface">amss-Intel</h3>
                <span class="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded border border-primary/20 font-label-caps font-bold tracking-wider">OSINT</span>
              </div>
              <p class="text-xs text-on-surface-variant mb-6 h-10 overflow-hidden leading-relaxed">高级全网开源情报资产侦测引擎，专门用于根据企业权属反查 ASN、BGP IP 范围及核心根域名边界。</p>
              
              <!-- 动态日志输出插槽 -->
              <div class="bg-surface-dim/70 rounded-lg p-4 mb-6 text-xs font-data-mono border border-outline-variant/30 space-y-1.5 min-h-[76px]">
                <p class="text-secondary flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span> 发现关联资产: 3个核心 IP 范围、检测到新内网穿透点</p>
                <p class="text-tertiary flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 威胁情报: 发现 1 个中危资产暴露告警 (SSL 历史过期)</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <button class="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all font-medium" @click="openModal('amss-Intel 历史快照', '历史记录')">历史记录</button>
              <button class="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all font-medium" @click="openModal('amss-Intel 全量扫描中', '扫描')">执行扫描</button>
              <button class="bg-secondary text-on-secondary py-2 rounded text-xs hover:opacity-90 font-bold transition-all shadow" @click="openModal('amss-Intel 扫描数据透视', '结果')">情报结果</button>
            </div>
          </div>

          <!-- CRT 证书日志卡片 -->
          <div class="glass-card rounded-xl p-6 hover:shadow-2xl transition-all flex flex-col justify-between group border-l-4 border-l-secondary">
            <div>
              <div class="flex justify-between items-start mb-4">
                <h3 class="font-headline-md text-headline-md text-on-surface">CRT.sh</h3>
                <span class="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded border border-secondary/20 font-label-caps font-bold tracking-wider">CERTIFICATE</span>
              </div>
              <p class="text-xs text-on-surface-variant mb-6 h-10 overflow-hidden leading-relaxed">通过解析公开的 SSL/TLS 证书透明度日志（CT Logs），实时追踪并强制挖掘目标组织新注册的潜在影子根域名。</p>
              
              <!-- 动态日志输出插槽 -->
              <div class="bg-surface-dim/70 rounded-lg p-4 mb-6 text-xs font-data-mono border border-outline-variant/30 flex items-center min-h-[76px]">
                <p class="italic text-outline flex items-center gap-2"><span class="material-symbols-outlined text-sm text-outline">history_toggle_off</span> 近期更新: 2026-06-01 捕获新颁发证书 `*.newapi.target.com`</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <button class="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all font-medium" @click="openModal('CRT 历史审计流', '历史记录')">历史记录</button>
              <button class="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all font-medium" @click="openModal('CRT.sh 日志检索中', '扫描')">日志挖掘</button>
              <button class="bg-secondary text-on-secondary py-2 rounded text-xs hover:opacity-90 font-bold transition-all shadow" @click="openModal('CRT 捕获域名资产', '结果')">查看结果</button>
            </div>
          </div>

        </div>

        <!-- 自动化测绘语法生成卡片集群 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="syntax in syntaxes" :key="syntax.name" class="glass-card rounded-lg p-5 text-center border-t-2 border-primary/30 flex flex-col justify-between hover:border-primary/60 transition-colors">
            <div>
              <h4 class="text-body-md font-bold mb-2 capitalize text-on-surface flex items-center justify-center gap-1.5">
                <span class="material-symbols-outlined text-sm text-primary">terminal</span>
                {{ syntax.name }}
              </h4>
              <p class="text-[10px] text-on-surface-variant mb-5 leading-relaxed min-h-[32px]">{{ syntax.description }}</p>
            </div>
            <div class="flex gap-2">
              <button class="flex-1 py-1.5 bg-surface-container-highest text-[11px] rounded hover:bg-primary-container hover:text-on-primary-container transition-colors font-medium" @click="handleSyntaxAction(syntax.name, '生成')">构建语法</button>
              <button class="flex-1 py-1.5 bg-surface-container-highest text-[11px] rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors font-medium" @click="handleSyntaxAction(syntax.name, '添加')">下发规则</button>
            </div>
          </div>
        </div>

        <!-- 终极核心功能：资产整合洗涤数据面板 -->
        <div class="glass-card rounded-2xl p-10 border-2 border-primary/20 bg-gradient-to-b from-surface-container to-surface-dim relative overflow-hidden active-glow">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(78,222,163,0.05),_transparent_60%)] pointer-events-none"></div>
          
          <div class="text-center space-y-3 mb-12 relative z-10">
            <h3 class="font-headline-lg text-headline-lg text-on-surface">整合根域名资产库</h3>
            <p class="font-body-md text-on-surface-variant max-w-2xl mx-auto text-sm leading-relaxed">
              系统已在上方多路情报流中完成了测绘。现在您可以将各大模块提取的多组冗余域名，一键清洗、合并、收敛为全网唯一的资产底座，作为后期高并发子域名暴破与通配符泛解析扫描的目标。
            </p>
          </div>
          
          <!-- 大仪表盘状态器 -->
          <div class="flex justify-center gap-24 mb-12 relative z-10">
            <div class="text-center group cursor-pointer" @click="openModal('清洗过滤冲突目标', '精简根域名')">
              <div class="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-all shadow-[0_0_15px_rgba(137,206,255,0.1)]">
                <span class="text-4xl font-headline-xl text-primary font-bold">8</span>
              </div>
              <span class="font-label-caps text-label-caps text-on-surface-variant tracking-wider text-[11px]">排重根域名</span>
            </div>
            
            <div class="text-center">
              <div class="w-24 h-24 rounded-full border-2 border-outline/30 flex items-center justify-center mb-3 bg-surface-dim/20">
                <span class="text-4xl font-headline-xl text-outline/50 font-bold">0</span>
              </div>
              <span class="font-label-caps text-label-caps text-outline tracking-wider text-[11px]">通配符标记任务</span>
            </div>
          </div>
          
          <!-- 数据加工工作流控制组 -->
          <div class="flex flex-wrap justify-center gap-4 relative z-10">
            <button class="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-xs font-bold rounded-lg hover:border-primary text-on-surface transition-all" @click="openModal('手工清洗排重域名库', '精简根域名')">精简根域名</button>
            <button class="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-xs font-bold rounded-lg hover:border-primary text-on-surface transition-all" @click="openModal('资产收敛决策表', '结果')">收敛合并</button>
            <button class="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-xs font-bold rounded-lg hover:border-primary text-on-surface transition-all" @click="openModal('Whois 注册链深度侦透', '扫描')">Whois调查</button>
            <button class="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-xs font-bold rounded-lg hover:border-primary text-on-surface transition-all" @click="openModal('边缘主机探活率校验', '结果')">存活验证</button>
            <button class="px-8 py-2.5 bg-secondary text-on-secondary text-xs font-bold rounded-lg shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-2" @click="openModal('资产发布成功', '添加成功')">
              <span class="material-symbols-outlined text-sm font-bold">cloud_upload</span>生成通配符靶标
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- 全局状态处理层弹窗（按需拦截） -->
    <GlobalModal v-if="modal.isOpen" :title="modal.title" :action-type="modal.actionType" @close="modal.isOpen = false" />
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue';
import GlobalModal from '../components/GlobalModal.vue';

// 弹窗底层驱动状态
const modal = reactive({
  isOpen: false,
  title: '',
  actionType: ''
});

// 唤醒全局调度中心方法
const openModal = (title, type) => {
  modal.title = title;
  modal.actionType = type;
  modal.isOpen = true;
};

// 数据中心：全量补齐三大查册情报网络
const companies = ref([
  { name: '小蓝本', subTitle: 'SHI-ZHAN-CHA-KUN', jumpStatus: '即将授权跳转至外部高级API进行关联追溯', addStatus: '规则链已注入项目空间缓存区' },
  { name: '天眼查', subTitle: 'TIAN-YAN-OSINT', jumpStatus: '即将跳转到外部网站进行企业股权穿透审计', addStatus: '多链条控股数据已成功解析，等待整合' },
  { name: '爱企查', subTitle: 'AI-QI-DATA', jumpStatus: '即将跳转到百度开放企业知识图谱终端验证', addStatus: '子公司/软件著作权资产节点全量就绪' }
]);

// 数据中心：补齐三大空间资产搜索引擎推荐语法
const syntaxes = ref([
  { name: 'Google Hacking', description: '高级网页搜索指令，用于挖掘被搜索引擎抓取的隐藏后台、未授权目录及泄露文档。' },
  { name: 'Fofa 网络测绘', description: '针对国内最大的空间资产搜索设备，自动构建目标指纹（Icon/Header/Body）的检索组合。' },
  { name: 'Whoxy 反查引擎', description: '高精度 Whois 反向追踪工具，支持通过核心邮箱、注册人名称一键横向泛化潜在暗线域名。' }
]);

// 业务事件转发
const handleCompanyAction = (platform, type) => {
  if (type === '跳转') {
    openModal(`安全审计：正在出站访问到 [${platform}]`, '外部跳转确认');
  } else {
    openModal('企业情报库同步状态', '添加成功');
  }
};

const handleSyntaxAction = (syntaxName, type) => {
  if (type === '生成') {
    openModal(`语法发生器：[${syntaxName}] 测绘表达式编译中`, '扫描');
  } else {
    openModal('安全过滤检测规则链', '添加成功');
  }
};
</script>