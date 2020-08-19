import { route } from "./route";
declare type lookupObj = {
    [key: string]: route;
};
export declare const lookup: (arr: route[]) => lookupObj;
export {};
