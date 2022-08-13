import axios from 'axios';
import { useContext, useMemo } from 'react';

import { AuthorizationContext } from 'contexts/authorization-context';
import createApiUrl from 'utils/create-api-url';

export default function useAxios() {
    const token = useContext(AuthorizationContext);

    return useMemo(
        () =>
            axios.create({
                baseURL: createApiUrl(),
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        [token],
    );
}
