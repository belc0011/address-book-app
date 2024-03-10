import React from 'react';
import AddressBook from './AddressBook';
import Groups from './Groups';
import ErrorPage from './ErrorPage';
import Favorites from './Favorites';
import Form from './Form';

const routes = [
    {
        path: "/",
        element: <AddressBook />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/groups",
        element: <Groups />,
        errorElement: <ErrorPage />
      },
      {
        path: "/favorites",
        element: <Favorites />,
        errorElement: <ErrorPage />
      },
      {
        path: "/form",
        element: <Form />,
        errorElement: <ErrorPage />
      },
    ];
    
    export default routes;
    