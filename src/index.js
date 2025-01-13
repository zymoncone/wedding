import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import NavBar from './components/NavBar/NavBar';
import Poland from './components/Poland/Poland';
import Argentina from './components/Argentina/Argentina';
import RSVPFormContainer from './components/RSVPForm/RSVPFormContainer';
import Root from './components/Root/Root';
import PolandRoot from './components/PolandNav/PolandRoot';
import PolandMain from './components/PolandMain/PolandMain';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/poland",
    element: <PolandRoot />,
    children: [
      {
        path: "/poland",
        element: <PolandMain />,
      },
      {
        path: "/poland/rsvp",
        element: <RSVPFormContainer />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);