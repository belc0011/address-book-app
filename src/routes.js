import React from 'react';
import AddressBook from './AddressBook';
import Groups from './groups';
import ErrorPage from './ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddressBook />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default routes;