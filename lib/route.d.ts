import { params } from "./url";
export declare type route = {
    title: string;
    name: string;
    url: string;
    component: any;
    parts: string[];
};
export declare type match = {
    route: route;
    params: params;
};
export declare function getMatch(route: route, parts: string[]): match;
