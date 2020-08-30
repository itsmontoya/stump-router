import { params } from "./url";
import { response } from "stump";
export declare const newRoute: (r: route) => route;
export declare type route = {
    title: string;
    name: string;
    url: string;
    onMatch?: response;
    component: any;
    parts?: string[];
};
export declare type match = {
    route: route;
    params: params;
};
export declare function getMatch(route: route, parts: string[]): match;
