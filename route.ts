import { params, getParams } from "./url"

export type route = {
	title: string,
	name: string,
	url: string,
	component: any,
	parts: string[]
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

function getParts(route: route, parts: string[]) {
	if (route.parts.length !== parts.length) {
		// The length of the parts differ, return
		return null;
	}

	const params: params = {};

	const iteratingFn = (routePart: string, i: number) =>
		appendParam(params, routePart, parts[i])

	const ended = route.parts
		.some(iteratingFn);

	if (ended) {
		return null;
	}

	return params;
}

function appendParam(params: params, routePart: string, part: string) {
	if (routePart === part) {
		// This is a direct match, return
		return;
	}

	if (routePart[0] === ":") {
		// Set key as the route part with the colon shifted off the front
		const key = routePart.substr(1)
		// Set part as the param value for the target key
		params[key] = part;
		return;
	}

	// This is not a match, end early
	return true;
}
