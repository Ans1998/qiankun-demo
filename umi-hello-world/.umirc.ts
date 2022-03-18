import { defineConfig } from 'umi';

export default defineConfig({
  base: '/react',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test' },
  ],
  fastRefresh: {},
});
