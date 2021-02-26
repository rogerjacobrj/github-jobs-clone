import { combineReducers } from "redux";
import { jobs } from "./jobs.reducer";
import { JobStore } from "../types/jobs.types";
import { details } from "./details.reducer";
import { JobDetailStore } from "../types/details.types";

export interface Store {
    jobs: JobStore
    details: JobDetailStore
}

export default combineReducers<Store>({
    jobs: jobs,
    details: details
});