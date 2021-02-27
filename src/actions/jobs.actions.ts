
import { ActionTypes } from "./types";
import * as Types from "../types/jobs.types";

// Fetch featured jobs
export const initFetchJobs = (page: number): Types.InitFetchJobs => {
    return {
        type: ActionTypes.FETCH_JOBS_LOADING,
        page: page
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
    data: Types.FeaturedJobItem[], pageType: string, page: number
): Types.FetchJobsSuccess => {
    return {
        type: ActionTypes.FETCH_JOBS_SUCCESS,
        data: data,
        pageType: pageType,
        page: page
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

export const clearJobs = (): Types.ClearJobs => {
    return {
        type: ActionTypes.CLEAR_JOBS,
    };
};

// Fetch jobs based on filters
export const initFetchJobsByFilter = (): Types.InitFetchJobsByFilter => {
    return {
        type: ActionTypes.FETCH_JOBS_BY_FILTER_LOADING,
    };
};

export const fetchJobsByFilter = (
    pageType: string, page: number, filters: Types.JobFilters,
): Types.FetchJobsByFilter => {
    return {
        type: ActionTypes.FETCH_JOBS_BY_FILTER,
        pageType: pageType,
        page: page,
        filters: filters
    };
};

export const fetchFetchJobsByFilterSuccess = (
    data: Types.FeaturedJobItem[], pageType: string, page: number
): Types.FetchJobsByFilterSuccess => {
    return {
        type: ActionTypes.FETCH_JOBS_BY_FILTER_SUCCESS,
        data: data,
        pageType: pageType,
        page: page
    };
};

export const fetchFetchJobsByFilterFailure = (
    message: string
): Types.FetchJobsByFilterError => {
    return {
        type: ActionTypes.FETCH_JOBS_BY_FILTER_ERROR,
        message: message,
    };
};