/**
 * location.hostnameにlocalhostが含まれていたらtrue
 * @returns {boolean}
 */

export default function checkLocal(hostname) {
    if (typeof hostname === 'undefined') {
        hostname = location.hostname;
    }
    return (hostname.indexOf('localhost') !== -1);
}