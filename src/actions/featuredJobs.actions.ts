
import { ActionTypes } from "./types";
import * as Types from "../types/featuredJobs.types";

// Fetch featured jobs
export const initFetchFeaturedJobs = (): Types.InitFetchFeaturedJobs => {
    return {
        type: ActionTypes.FETCH_FEATURED_JOBS_LOADING,
    };
};

export const fetchFeaturedJobs = (): Types.FetchFeaturedJobs => {
    return {
        type: ActionTypes.FETCH_FEATURED_JOBS,
    };
};

export const fetchFetchFeaturedJobsSuccess = (
    data: Types.FeaturedJobItem[]
): Types.FetchFeaturedJobsSuccess => {
    return {
        type: ActionTypes.FETCH_FEATURED_JOBS_SUCCESS,
        data: data,
    };
};

export const fetchFetchFeaturedJobsFailure = (
    message: string
): Types.FetchFeaturedJobsError => {
    return {
        type: ActionTypes.FETCH_FEATURED_JOBS_ERROR,
        message: message,
    };
};