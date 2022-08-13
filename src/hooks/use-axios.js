import { Axios } from 'axios';
import { useContext } from 'react';

import { AuthorizationContext } from 'contexts/authorization-context';
import createApiUrl from 'utils/create-api-url';

export default function useAxios() {
    const token = useContext(AuthorizationContext);

    const axios = new Axios({
        baseURL: createApiUrl(),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return axios;
}
