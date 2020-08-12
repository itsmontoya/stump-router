import { Lookup } from "./lookupTable.js";
import { Route } from "./route.js";
import { getURLParts } from "./url.js";
import { action, event } from "stump";

console.log("Route state init")
let routesState = [],
	routesByName = {};

export function getRouteByName(name) {
	return routesByName[name]
}

export function getRouteMatch(url) {
	console.log("Getting route match for", url);
	console.log("state?", routesState);
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
	console.log("state set!", routesState);
}

export const pushURL = options => event((evt, dispatch) => {
	console.log("PUSH URL!", options);
	console.log("About to dispatch URL!", evt, dispatch, options)
	dispatchURL(options)(dispatch);
})

export const dispatchURL = ({ title = "", url = "" }) => dispatch => {
	history.pushState({}, title, url);
	dispatch(setCurrentRoute);
};

export const setRoute = match =>
	action(state =>
		setMatch(state, match));

export const setCurrentRoute = action(state => {
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
});

const setMatch = (state, match) => ({
	...state,
	currentRoute: match.route,
	currentParams: match.params
});