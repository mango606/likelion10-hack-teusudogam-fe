import PropTypes from 'prop-types';

import useAxios from '../hooks/use-axios';

import React, { useContext } from 'react';

const { createContext, useState, useEffect } = require('react');

export const MyInformationContext = createContext();

export function MyInformationProvider({ children }) {
    const axios = useAxios();

    const [myInformation, setMyInformation] = useState();

    useEffect(() => {
        (async () => {
            const result = await axios.get('/user');
            if (result.status === 200) {
                setMyInformation(result.data);
            }
        })();
    }, [axios]);

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
