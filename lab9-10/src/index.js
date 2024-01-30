import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Catalog from './containers/Catalog/Catalog';
import ItemPage from './containers/ItemPage/ItemPage';
import CardPage from './containers/CartPage/CartPage';
import { Provider } from 'react-redux';
import store from './Redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/catalog',
    element: <Catalog />, 
  },
  {
    path: '/catalog/:id',
    element: <ItemPage />
  },
  {
    path: '/cart',
    element: <CardPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Route path="/" element={<App />} />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
