
import { ActionTypes } from "./types";
import * as Types from "../types/details.types";

// Fetch job details
export const initFetchJobDetails = (): Types.InitFetchJobDetails => {
    return {
        type: ActionTypes.FETCH_JOB_DETAILS_LOADING,
    };
};

export const fetchJobDetails = (id: string): Types.FetchJobDetails => {
    return {
        type: ActionTypes.FETCH_JOB_DETAILS,
        id: id,
    };
};

export const fetchFetchJobDetailsSuccess = (
    data: Types.JobItem
): Types.FetchJobDetailsSuccess => {
    return {
        type: ActionTypes.FETCH_JOB_DETAILS_SUCCESS,
        data: data,
    };
};

export const fetchFetchJobDetailsFailure = (
    message: string
): Types.FetchJobDetailsError => {
    return {
        type: ActionTypes.FETCH_JOB_DETAILS_ERROR,
        message: message,
    };
};