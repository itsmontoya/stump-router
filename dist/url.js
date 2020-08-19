export function getURLParts(url) {
    return url.split("/")
        .filter((part) => part.length > 0);
}
export function getParams(route, parts) {
    if (route.parts.length !== parts.length) {
        return null;
    }
    var params = {};
    const ended = route.parts
        .some(getParam(parts, params));
    if (ended) {
        return null;
    }
    return params;
}
const getParam = (parts, params) => (routePart, i) => {
    const part = parts[i];
    if (routePart === part) {
        return;
    }
    if (routePart[0] === ":") {
        params[routePart.substr(1)] = part;
        return;
    }
    return true;
};
//# sourceMappingURL=url.js.map