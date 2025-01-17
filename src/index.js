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
import PolandRoot from './components/PolandRoot/PolandRoot';
import PolandMain from './components/PolandMain/PolandMain';
import OurStory from './components/OurStory/OurStory';
import TravelAndStay from './components/TravelAndStay/TravelAndStay';
import Blog from './components/Blog/Blog';
import Registry from './components/Registry/Registry';

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
      },
      {
        path: "/poland/blog",
        element: <Blog />,
      },
      {
        path: "/poland/registry",
        element: <Registry />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);