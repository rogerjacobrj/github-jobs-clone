import { combineReducers } from "redux";
import { featuredJobs } from "./featuredJobs.reducer";
import { FeaturedJobStore } from "../types/featuredJobs.types";

export interface Store {
    featuredJobs: FeaturedJobStore
}

export default combineReducers<Store>({
    featuredJobs: featuredJobs
});