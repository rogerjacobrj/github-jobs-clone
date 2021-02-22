
import { ActionTypes } from "./types";
import * as Types from "../types/jobs.types";

// Fetch featured jobs
export const initFetchJobs = (): Types.InitFetchJobs => {
    return {
        type: ActionTypes.FETCH_JOBS_LOADING,
    };
};

export const fetchJobs = (page: number, pageType: string): Types.FetchJobs => {
    return {
        type: ActionTypes.FETCH_JOBS,
        pageType: pageType,
        page: page
    };
};

export const fetchFetchJobsSuccess = (
    data: Types.FeaturedJobItem[], pageType: string
): Types.FetchJobsSuccess => {
    return {
        type: ActionTypes.FETCH_JOBS_SUCCESS,
        data: data,
        pageType: pageType
    };
};

export const fetchFetchJobsFailure = (
    message: string
): Types.FetchJobsError => {
    return {
        type: ActionTypes.FETCH_JOBS_ERROR,
        message: message,
    };
};