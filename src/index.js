import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Poland from './components/Poland/Poland';
import Argentina from './components/Argentina/Argentina';
import RSVPFormContainer from './components/RSVPForm/RSVPFormContainer';
import Root from './components/Root/Root';
import PolandRoot from './components/PolandNav/PolandRoot';
import PolandMain from './components/PolandMain/PolandMain';
import OurStory from './components/OurStory/OurStory';
import TravelAndStay from './components/TravelAndStay/TravelAndStay';

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
      },
      {
        path: "/poland/story",
        element: <OurStory />,
      },
      {
        path: "/poland/travelandstay",
        element: <TravelAndStay />,
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