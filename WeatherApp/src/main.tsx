import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SavedPage from './pages/SavedPage';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/SearchPage';
import SearchApi from './components/SearchApi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/saved",
    element: <SavedPage></SavedPage>,
  },
  {
    path: "/search/:query",
    element: <SearchApi></SearchApi>,
  },
  {
    path: "/search",
    element: <SearchPage></SearchPage>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
)
