import { route } from "./route";

export type params = { [key: string]: string }

export function getURLParts(url: string) {
	return url.split("/")
		.filter((part) =>
			part.length > 0);
}

export function getParams(route: route, parts: string[]): params {
	if (route.parts.length !== parts.length) {
		return null;
	}

	var params: params = {};
	const ended = route.parts
		.some(getParam(parts, params))

	if (ended) {
		return null;
	}

	return params;
}

const getParam = (parts: string[], params: params) => (routePart: string, i: number) => {
	const part = parts[i];
	if (routePart === part) {
		return;
	}

	if (routePart[0] === ":") {
		params[routePart.substr(1)] = part;
		return;
	}

	return true;
}