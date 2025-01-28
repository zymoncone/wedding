import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import RSVPFormContainer from './components/RSVPForm/RSVPFormContainer';
import Root from './components/Root/Root';
import SubRoot from './components/SubRoot/SubRoot';
import Home from './components/Home/Home';
import OurStory from './components/OurStory/OurStory';
import TravelAndStay from './components/TravelAndStay/TravelAndStay';
import Blog from './components/Blog/Blog';
import Registry from './components/Registry/Registry';
import FAQ from './components/FAQ/FAQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/poland",
    element: <SubRoot lang={"EN"} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "rsvp",
        element: <RSVPFormContainer />,
      },
      {
        path: "story",
        element: <OurStory />,
      },
      {
        path: "travelandstay",
        element: <TravelAndStay />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "registry",
        element: <Registry />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/argentina",
    element: <SubRoot lang={"SP"} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "story",
        element: <OurStory />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);