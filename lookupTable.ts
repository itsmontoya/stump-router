import { route } from "./route";

type lookupObj = { [key: string]: route };

export const lookup = (arr: route[]) => {
	const lookup: lookupObj = {};
	arr.forEach(item =>
		lookup[item.name] = item)

	return lookup;
};
