import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import MainPage from './pages/main';

const app = document.getElementById('app');

const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        blackText: '#333333',
        whiteText: '#ffffff',
        primary1: '#7262A8',
        primary2: '#3E355C',
        primary3: '#282436',
    },
};

const root = createRoot(app);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <MainPage />
        </ThemeProvider>
    </React.StrictMode>,
);
