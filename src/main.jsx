import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './assets/App';


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './assets/AuthContext';
import { UserCart } from './assets/UserCart';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserCart>
    <AuthProvider>
      <App/>
    </AuthProvider>
    </UserCart></BrowserRouter>
  </StrictMode>,
);