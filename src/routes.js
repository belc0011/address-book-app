import React from 'react';
import AddressBook from './AddressBook';
import Groups from './Groups';
import ErrorPage from './ErrorPage';


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
    ];
    
    export default routes;
    