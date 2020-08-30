import { route, match } from "./route";
import { state, dispatch } from "stump";
declare type urlOptions = {
    url: string;
    title: string;
};
export declare function getRouteByName(name: string): route | undefined;
export declare function getRouteMatch(url: string): match | null;
export declare function setRoutes(routes: route[]): void;
export declare const pushURL: (options: urlOptions) => (_: Event, dispatch: dispatch) => void;
export declare const dispatchURL: ({ title, url }: {
    title?: string;
    url?: string;
}) => (dispatch: dispatch) => void;
export declare const dispatchCurrentRoute: (dispatch: dispatch) => void;
export declare const setRoute: (match: match) => (event: Event, dispatch: dispatch) => void;
export declare const setCurrentRoute: (state: state) => state;
export {};
