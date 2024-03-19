import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './router';
// import App from './App';
// NODE_ENV区分模式：开发模式（development），打包模式（production）
// BASE_ENV区分业务环境：开发（dev），测试（test），预发布（pre），生生产（production）
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('BASE_ENV', process.env.BASE_ENV);
const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<Root />);
}
