import useAxios from './use-axios';

export default function useFetcher(params) {
    const axios = useAxios();
    return (url) =>
        axios.get(url, { params }).then((response) => response.data);
}
