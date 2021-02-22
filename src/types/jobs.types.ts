import { ActionTypes } from "../actions/types";

export interface InitFetchJobs {
    type: ActionTypes.FETCH_JOBS_LOADING;
}

export interface FetchJobs {
    type: ActionTypes.FETCH_JOBS;
    page: number;
}

export interface FetchJobsSuccess {
    type: ActionTypes.FETCH_JOBS_SUCCESS;
    data: FeaturedJobItem[];
}

export interface FetchJobsError {
    type: ActionTypes.FETCH_JOBS_ERROR;
    message: string;
}

export type FetchFeaturedJobActions =
    | InitFetchJobs
    | FetchJobs
    | FetchJobsSuccess
    | FetchJobsError;

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
export interface JobStore {
    status: string;
    error: boolean;
    message: string;
    data: FeaturedJobItem[];
    company: Company;
    isEnd: boolean;
}