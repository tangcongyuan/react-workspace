import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Counter from './components/Counter';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
.render(
    <div>
        <Home />
        <Counter />
    </div>
);
