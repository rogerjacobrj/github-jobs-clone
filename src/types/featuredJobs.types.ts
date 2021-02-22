import { ActionTypes } from "../actions/types";

export interface InitFetchFeaturedJobs {
    type: ActionTypes.FETCH_FEATURED_JOBS_LOADING;
}

export interface FetchFeaturedJobs {
    type: ActionTypes.FETCH_FEATURED_JOBS;
}

export interface FetchFeaturedJobsSuccess {
    type: ActionTypes.FETCH_FEATURED_JOBS_SUCCESS;
    data: FeaturedJobItem[];
}

export interface FetchFeaturedJobsError {
    type: ActionTypes.FETCH_FEATURED_JOBS_ERROR;
    message: string;
}

export type FetchFeaturedJobActions =
    | InitFetchFeaturedJobs
    | FetchFeaturedJobs
    | FetchFeaturedJobsSuccess
    | FetchFeaturedJobsError;

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
    name: string;
    logo: string;
    jobCount: number;
}

// Reducer state
export interface FeaturedJobStore {
    status: string;
    error: boolean;
    message: string;
    data: FeaturedJobItem[];
    company: Company;
}