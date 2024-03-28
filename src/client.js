// client.js

import React from 'react';
import ReactDOM from 'react-dom';
import ClientApp from './ClientApp';

// 将根组件挂载到 DOM 上
ReactDOM.hydrate(<ClientApp />, document.getElementById('root'));
