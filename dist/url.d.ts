import { route } from "./route";
export declare type params = {
    [key: string]: string;
};
export declare function getURLParts(url: string): string[];
export declare function getParams(route: route, parts: string[]): params;
