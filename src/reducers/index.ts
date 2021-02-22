import { combineReducers } from "redux";
import { jobs } from "./jobs.reducer";
import { JobStore } from "../types/jobs.types";

export interface Store {
    jobs: JobStore
}

export default combineReducers<Store>({
    jobs: jobs
});