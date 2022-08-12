import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BadgeControlPage from 'pages/badge-control';
import BadgeForumPage from 'pages/badge-forum';
import BadgesPage from 'pages/badges';
import MainPage from 'pages/main';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/badges" element={<BadgesPage />} />
            <Route path="/badge-control" element={<BadgeControlPage />} />
            <Route path="/badge-forum" element={<BadgeForumPage />} />
        </Routes>
    );
}

export default App;
