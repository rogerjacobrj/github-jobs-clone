
import { ActionTypes } from "../actions/types";
import { JobStore, FetchFeaturedJobActions } from "../types/jobs.types";
import { dateToTime, setFeaturedCompany, getRandomJobs } from "../helpers/store";

const jobStore = {
    status: ActionTypes.NOT_LOADED,
    error: false,
    message: "",
    data: [],
    isEnd: false,
    company: {
        name: "",
        logo: "",
        jobCount: 0
    },
    loadMore: {
        status: ActionTypes.NOT_LOADED,
        error: false,
        message: "",
    }
};

export const jobs = (
    state: JobStore = jobStore,
    action: FetchFeaturedJobActions
) => {
    switch (action.type) {
        case ActionTypes.FETCH_JOBS_LOADING: {
            if (action.page === 1) {
                return {
                    ...state,
                    status: ActionTypes.IS_LOADING,
                    error: false,
                };
            } else {
                return {
                    ...state,
                    loadMore: {
                        ...state.loadMore,
                        status: ActionTypes.IS_LOADING,
                        error: false,
                    }
                };
            }

        }

        case ActionTypes.FETCH_JOBS_SUCCESS: {
            let isEnd = false;
            let data = state.data;

            for (let i = 0; i < action.data.length; i++) {
                let day = dateToTime(action.data[i].created_at).days;
                let mins = dateToTime(action.data[i].created_at).mins;
                let hours = mins / 60;

                if (hours >= 24) {
                    action.data[i].created_at = `${day} ${day === 1 ? "day" : "days"} ago`;
                } else {
                    action.data[i].created_at = `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
                }
            }

            let company = setFeaturedCompany(action.data);

            if (action.data.length < 50) {
                isEnd = true;
            }

            if (action.pageType === "home") {
                data = getRandomJobs(action.data);
            } else {
                if (action.page === 1) {
                    data = [];
                    data = data.concat(action.data);
                    return {
                        ...state,
                        status: ActionTypes.LOADED,
                        error: false,
                        data: data,
                        company: company,
                        isEnd: isEnd
                    };
                } else {
                    data = data.concat(action.data);
                    return {
                        ...state,
                        data: data,
                        company: company,
                        isEnd: isEnd,
                        loadMore: {
                            ...state.loadMore,
                            status: ActionTypes.LOADED,
                            error: false,
                        }
                    };
                }
            }

            return {
                ...state,
                status: ActionTypes.LOADED,
                error: false,
                data: data,
                company: company,
                isEnd: isEnd
            };
        }

        case ActionTypes.FETCH_JOBS_ERROR: {
            return {
                ...state,
                status: ActionTypes.LOADING_FAILED,
            };
        }

        case ActionTypes.FETCH_JOBS_BY_FILTER_LOADING: {
            return {
                ...state,
                loadMore: {
                    ...state.loadMore,
                    status: ActionTypes.IS_LOADING,
                    error: false,
                }
            };
        }

        case ActionTypes.FETCH_JOBS_BY_FILTER_SUCCESS: {
            let isEnd = false;
            let data = state.data;

            for (let i = 0; i < action.data.length; i++) {
                let day = dateToTime(action.data[i].created_at).days;
                let mins = dateToTime(action.data[i].created_at).mins;
                let hours = mins / 60;

                if (hours >= 24) {
                    action.data[i].created_at = `${day} ${day === 1 ? "day" : "days"} ago`;
                } else {
                    action.data[i].created_at = `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
                }
            }

            if (action.data.length < 50) {
                isEnd = true;
            }


            if (action.page === 1) {
                data = [];
            }

            data = data.concat(action.data);

            return {
                ...state,
                data: data,
                isEnd: isEnd,
                loadMore: {
                    ...state.loadMore,
                    status: ActionTypes.LOADED,
                    error: false,
                }
            };
        }

        case ActionTypes.FETCH_JOBS_BY_FILTER_ERROR: {
            return {
                ...state,
                loadMore: {
                    ...state.loadMore,
                    status: ActionTypes.NOT_LOADED,
                    error: false,
                }
            };
        }

        default: {
            return state;
        }
    }
};