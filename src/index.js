import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Components/CartContext';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import { AuthProvider } from './Components/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
            <App />
   
        </CartProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

