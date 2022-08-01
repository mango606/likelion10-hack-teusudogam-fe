import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BadgesPage from 'pages/badges';
import MainPage from 'pages/main';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/badges" element={<BadgesPage />} />
        </Routes>
    );
}

export default App;
