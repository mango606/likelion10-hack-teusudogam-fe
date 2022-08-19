import PropTypes from 'prop-types';

import useAxios from '../hooks/use-axios';

import { AuthorizationContext } from './authorization-context';

import React, { useContext } from 'react';

const { createContext, useState, useEffect } = require('react');

export const MyInformationContext = createContext();

export function MyInformationProvider({ children }) {
    const axios = useAxios();

    const { token, resetTokenAndRefresh } = useContext(AuthorizationContext);
    const [myInformation, setMyInformation] = useState(null);

    useEffect(() => {
        if (token === null) return;
        (async () => {
            try {
                const result = await axios.get('/user');
                if (result.status === 200) {
                    setMyInformation(result.data);
                    return;
                }
            } catch (e) {
                // do nothing
            }

            resetTokenAndRefresh();
        })();
    }, [token, resetTokenAndRefresh, axios]);

    return (
        <MyInformationContext.Provider value={myInformation}>
            {children}
        </MyInformationContext.Provider>
    );
}

MyInformationProvider.propTypes = {
    children: PropTypes.node,
};

MyInformationProvider.defaultProps = {
    children: null,
};

export const MyInformationConsumer = MyInformationContext.Consumer;

export function useMyInformation() {
    return useContext(MyInformationContext);
}
