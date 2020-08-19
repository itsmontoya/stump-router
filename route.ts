import { params, getURLParts, getParams } from "./url"

export const newRoute = (r: route): route => ({
	title: r.title,
	name: r.name,
	url: r.url,
	component: r.component,
	parts: getURLParts(r.url),
});

export type route = {
	title: string,
	name: string,
	url: string,
	component: any,
	parts?: string[]
}

export type match = {
	route: route,
	params: params
}

export function getMatch(route: route, parts: string[]): match {
	const params = getParams(route, parts);
	if (params === null) {
		return null;
	}

	return { route, params };
}
