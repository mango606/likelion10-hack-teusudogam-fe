import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BadgeControlPage from 'pages/badge-control';
import BadgeForumPage from 'pages/badge-forum';
import BadgeManagementPage from 'pages/badge-management';
import BadgeProductionPage from 'pages/badge-production';
import BadgesPage from 'pages/badges';
import MainPage from 'pages/main';
import StreamersPage from 'pages/streamers';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/badges" element={<BadgesPage />} />
            <Route path="/badge-control" element={<BadgeControlPage />} />
            <Route path="/badge-forum" element={<BadgeForumPage />} />
            <Route path="/badge-management" element={<BadgeManagementPage />} />
            <Route path="/badge-production" element={<BadgeProductionPage />} />
            <Route path="/streamers" element={<StreamersPage />} />
        </Routes>
    );
}

export default App;
