import { dispatcher } from "stump";
import { setCurrentRoute } from "./router";

export const onURLChange = dispatcher(dispatch => {
	addEventListener("popstate", _ => dispatch(setCurrentRoute));
});