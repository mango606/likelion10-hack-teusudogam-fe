import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useMemo } from 'react';

const { createContext } = require('react');

export const AuthorizationContext = createContext();

function getSavedToken() {
    if (typeof window === 'undefined') return undefined;
    return JSON.parse(window.localStorage.getItem('auth/token'));
}

function saveToken(token) {
    window.localStorage.setItem('auth/token', JSON.stringify(token));
}

export function AuthorizationProvider({ children }) {
    const savedToken = useMemo(() => {
        return getSavedToken();
    }, []);

    const location = useLocation();

    const token = useMemo(() => {
        const query = new URLSearchParams(location.search);
        const queriedToken = query.get('accessToken');
        return queriedToken ?? savedToken;
    }, [location.search, savedToken]);

    useEffect(() => {
        if (token !== null && token !== undefined) {
            saveToken(token);
        }
    }, [token]);

    return (
        <AuthorizationContext.Provider value={token}>
            {children}
        </AuthorizationContext.Provider>
    );
}

AuthorizationProvider.propTypes = {
    children: PropTypes.node,
};

AuthorizationProvider.defaultProps = {
    children: null,
};

export const AuthorizationConsumer = AuthorizationContext.Consumer;
