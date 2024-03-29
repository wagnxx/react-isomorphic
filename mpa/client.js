// client.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


// 将根组件挂载到 DOM 上
// ReactDOM.hydrate(<App />, document.getElementById('root'));

ReactDOM.render(
    <App title={'App-client'} >

    </App>,
    document.getElementById('root')
  );
  
