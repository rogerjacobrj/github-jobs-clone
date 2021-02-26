import { ActionTypes } from "../actions/types";

export interface InitFetchJobDetails {
    type: ActionTypes.FETCH_JOB_DETAILS_LOADING;
}

export interface FetchJobDetails {
    type: ActionTypes.FETCH_JOB_DETAILS;
    id: string;
}

export interface FetchJobDetailsSuccess {
    type: ActionTypes.FETCH_JOB_DETAILS_SUCCESS;
    data: JobItem;
}

export interface FetchJobDetailsError {
    type: ActionTypes.FETCH_JOB_DETAILS_ERROR;
    message: string;
}

export type FetchJobDetailsActions =
    | InitFetchJobDetails
    | FetchJobDetails
    | FetchJobDetailsSuccess
    | FetchJobDetailsError;

// Job item
export interface JobItem {
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

// Reducer state
export interface JobDetailStore {
    status: string;
    error: boolean;
    message: string;
    data: JobItem;
}