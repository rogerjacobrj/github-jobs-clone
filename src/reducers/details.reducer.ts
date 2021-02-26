
import { ActionTypes } from "../actions/types";
import { JobDetailStore, FetchJobDetailsActions } from "../types/details.types";

const detailStore = {
    status: ActionTypes.NOT_LOADED,
    error: false,
    message: "",
    data: {
        id: "",
        type: "",
        url: "",
        created_at: "",
        company: "",
        company_url: "",
        location: "",
        title: "",
        description: "",
        how_to_apply: "",
        company_logo: "",
    },
};

export const details = (
    state: JobDetailStore = detailStore,
    action: FetchJobDetailsActions
) => {
    switch (action.type) {
        case ActionTypes.FETCH_JOB_DETAILS_LOADING: {
            return {
                ...state,
                status: ActionTypes.IS_LOADING,
                error: false,
            };
        }

        case ActionTypes.FETCH_JOB_DETAILS_SUCCESS: {
            return {
                ...state,
                status: ActionTypes.LOADED,
                error: false,
                data: action.data,
            };
        }

        case ActionTypes.FETCH_JOB_DETAILS_ERROR: {
            return {
                ...state,
                status: ActionTypes.LOADING_FAILED,
                error: true,
                message: action.message
            };
        }

        default: {
            return state;
        }
    }
};