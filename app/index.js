import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todos from './Component/Todos';

const App = () => {
  return (
    <React.StrictMode>
      <Todos />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
