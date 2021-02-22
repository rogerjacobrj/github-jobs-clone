
import { ActionTypes } from "../actions/types";
import { FeaturedJobStore, FetchFeaturedJobActions } from "../types/featuredJobs.types";
import { dateToTime, setFeaturedCompany } from "../helpers/store";

const featuredJobStore = {
    status: ActionTypes.NOT_LOADED,
    error: false,
    message: "",
    data: [],
    company: {
        name: "",
        logo: "",
        jobCount: 0
    }
};

export const featuredJobs = (
    state: FeaturedJobStore = featuredJobStore,
    action: FetchFeaturedJobActions
) => {
    switch (action.type) {
        case ActionTypes.FETCH_FEATURED_JOBS_LOADING: {
            return {
                ...state,
                status: ActionTypes.IS_LOADING,
                error: false,
            };
        }

        case ActionTypes.FETCH_FEATURED_JOBS_SUCCESS: {

            for (let i = 0; i < action.data.length; i++) {
                let day = dateToTime(action.data[i].created_at);
                action.data[i].created_at = `${day} ${day === 1 ? "day" : "days"} ago`;
            }

            let company = setFeaturedCompany(action.data);

            return {
                ...state,
                status: ActionTypes.LOADED,
                error: false,
                data: state.data.concat(action.data),
                company: company
            };
        }

        case ActionTypes.FETCH_FEATURED_JOBS_ERROR: {
            return {
                ...state,
                status: ActionTypes.LOADING_FAILED,
            };
        }

        default: {
            return state;
        }
    }
};