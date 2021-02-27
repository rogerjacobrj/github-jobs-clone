import { ActionTypes } from "../actions/types";

export interface JobFilters {
    description?: string;
    location?: string;
    roleType?: boolean;
}

// Fetch featured job/list
export interface InitFetchJobs {
    type: ActionTypes.FETCH_JOBS_LOADING;
    page: number;
}

export interface FetchJobs {
    type: ActionTypes.FETCH_JOBS;
    pageType: string;
    page: number;
}

export interface FetchJobsSuccess {
    type: ActionTypes.FETCH_JOBS_SUCCESS;
    data: FeaturedJobItem[];
    pageType: string;
    page: number;
}

export interface FetchJobsError {
    type: ActionTypes.FETCH_JOBS_ERROR;
    message: string;
}

export interface ClearJobs {
    type: ActionTypes.CLEAR_JOBS;
}

// Fetch jobs by filters
export interface InitFetchJobsByFilter {
    type: ActionTypes.FETCH_JOBS_BY_FILTER_LOADING;
}

export interface FetchJobsByFilter {
    type: ActionTypes.FETCH_JOBS_BY_FILTER;
    pageType: string;
    page: number;
    filters: JobFilters;
}

export interface FetchJobsByFilterSuccess {
    type: ActionTypes.FETCH_JOBS_BY_FILTER_SUCCESS;
    data: FeaturedJobItem[];
    pageType: string;
    page: number;
}

export interface FetchJobsByFilterError {
    type: ActionTypes.FETCH_JOBS_BY_FILTER_ERROR;
    message: string;
}

export type FetchFeaturedJobActions =
    | InitFetchJobs
    | FetchJobs
    | FetchJobsSuccess
    | FetchJobsError
    | ClearJobs
    | InitFetchJobsByFilter
    | FetchJobsByFilter
    | FetchJobsByFilterSuccess
    | FetchJobsByFilterError;

// Job item
export interface FeaturedJobItem {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
    how_to_apply: string;
    company_logo: string;
}

// Company
export interface Company {
    name?: string;
    logo: string;
    jobCount?: number;
    link?: string;
}

// Reducer state
export interface JobStore {
    status: string;
    error: boolean;
    message: string;
    data: FeaturedJobItem[];
    company: Company;
    isEnd: boolean;
    loadMore: {
        status: string;
        error: boolean;
        message: string;
    }
}