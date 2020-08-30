import { getURLParts, getParams } from "./url";
export const newRoute = (r) => (Object.assign(Object.assign({}, r), { title: r.title || "", name: r.name || "", url: r.url, onMatch: r.onMatch, component: r.component, parts: getURLParts(r.url) }));
export function getMatch(route, parts) {
    const params = getParams(route, parts);
    if (params === null) {
        return null;
    }
    return { route, params };
}
//# sourceMappingURL=route.js.map