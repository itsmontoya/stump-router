import { Lookup } from "./lookupTable.js";
import { Route } from "./route.js";
import { getURLParts } from "./url.js";
import { action, event, dispatcher } from "stump";

let routesState = [],
	routesByName = {};

export function getRouteByName(name) {
	return routesByName[name]
}

export function getRouteMatch(url) {
	const parts = getURLParts(url);
	let match = null;
	routesState.some(route => {
		match = route.getMatch(parts);
		return match != null;
	})

	return match;
}

export function setRoutes(routes) {
	const prepared = [];
	// Set parts for each route
	routes.forEach(route => prepared.push(new Route(route)))
	// Assign new lookup table to name lookup
	routesByName = Lookup(prepared, "name");
	// Assign prepared to r
	routesState = prepared;
}

export const pushURL = options =>
	event((_, dispatch) =>
		dispatchURL(options)(dispatch))

export const dispatchURL = ({ title = "", url = "" }) => dispatch => {
	history.pushState({}, title, url);
	dispatch(setCurrentRoute);
};

export const dispatchCurrentRoute = dispatcher(dispatch =>
	dispatch(setCurrentRoute));

export const setRoute = match =>
	action(state =>
		setMatch(state, match));

export const setCurrentRoute = state => {
	// Set path as current location path
	const path = document.location.pathname
	// Get route match for current path
	const match = getRouteMatch(path);

	// Check to see if match exists
	if (match === null) {
		// Route match not found, throw error
		throw (`404: cannot find route match for ${path}`)
	}

	return setMatch(state, match);
}

const setMatch = (state, match) => ({
	...state,
	currentRoute: match.route,
	currentParams: match.params
});