import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BadgeForumBox from 'components/badge-forum/badge-forum-box';
import BadgeControlBox from 'components/badges/badge-control-box';
import BadgesPage from 'pages/badges';
import MainPage from 'pages/main';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/badges" element={<BadgesPage />} />
            <Route path="/badge-control" element={<BadgeControlBox />} />
            <Route path="/badge-forum" element={<BadgeForumBox />} />
        </Routes>
    );
}

export default App;
