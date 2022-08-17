import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useCallback, useEffect, useMemo } from 'react';

const { createContext } = require('react');

export const AuthorizationContext = createContext();

function getSavedToken() {
    if (typeof window === 'undefined') return undefined;
    return JSON.parse(window.localStorage.getItem('auth/token'));
}

function resetToken() {
    window.localStorage.removeItem('auth/token');
}

function saveToken(token) {
    window.localStorage.setItem('auth/token', JSON.stringify(token));
}

export function AuthorizationProvider({ children }) {
    const savedToken = useMemo(() => {
        return getSavedToken();
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

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

    const resetTokenAndRefresh = useCallback(() => {
        resetToken();
        navigate(0);
    }, [navigate]);

    return (
        <AuthorizationContext.Provider
            value={useMemo(
                () => ({ resetTokenAndRefresh, token }),
                [resetTokenAndRefresh, token],
            )}
        >
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
