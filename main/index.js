import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react', // app name registered
    entry: '//localhost:8000',
    container: '#subapp-container',
    activeRule: '/react',
  },
  {
    name: 'vue',
    entry: '//localhost:8080',
    container: '#subapp-container',
    activeRule: '/vue',
  },
]);

start();