import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import './styles/styles.sass'

import Home from './pages/Home/Home';
import PageWrapper from './pages/PageWrapper';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageWrapper/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);