import { lookup } from "./lookupTable";
import { newRoute, route, match, getMatch } from "./route";
import { getURLParts } from "./url";
import { state, action, dispatch } from "stump";

let routesState: route[] = [],
	routesByName: { [key: string]: route } = {};

type urlOptions = {
	url: string,
	title: string
};

export function getRouteByName(name: string): route | undefined {
	return routesByName[name]
}

export function getRouteMatch(url: string): match | null {
	const parts = getURLParts(url);
	let match = null;
	routesState.some(route => {
		match = getMatch(route, parts);
		return match != null;
	});

	return match;
}

export function setRoutes(routes: route[]) {
	const prepared: route[] = [];
	// Set parts for each route
	routes.forEach((r: route) =>
		prepared.push(newRoute(r)));

	// Assign new lookup table to name lookup
	routesByName = lookup(prepared);
	// Assign prepared to r
	routesState = prepared;
}

export const pushURL = (options: urlOptions) =>
	(_: Event, dispatch: dispatch) =>
		dispatchURL(options)(dispatch)

export const dispatchURL = ({ title = "", url = "" }) =>
	(dispatch: dispatch) => {
		history.pushState({}, title, url);
		dispatch(setCurrentRoute);
	};

export const dispatchCurrentRoute = (dispatch: dispatch) =>
	dispatch(setCurrentRoute);

export const setRoute = (match: match) =>
	action((state: state) =>
		setMatch(state, match));

export const setCurrentRoute = (state: state) => {
	// Set path as current location path
	const path = document.location.pathname
	// Get route match for current path
	const match = getRouteMatch(path);

	// Check to see if match exists
	if (match === null) {
		// Route match not found, throw error
		throw (`404: cannot find route match for ${path}`)
	}

	const newState = setMatch(state, match);
	const onMatch = match.route.onMatch;
	if (!!onMatch) {
		return onMatch(newState);
	}

	return newState;
}

const setMatch = (state: state, match: match) => ({
	...state,
	currentRoute: match.route,
	currentParams: match.params
});