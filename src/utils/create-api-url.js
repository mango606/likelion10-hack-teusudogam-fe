export default function createApiUrl(path) {
    return `https://api.teusubox.shop/${path?.replace(/^\/+/, '') ?? ''}`;
}
