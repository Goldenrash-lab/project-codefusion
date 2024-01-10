import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="project-codefusion">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
