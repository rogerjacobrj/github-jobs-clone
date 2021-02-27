import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/jobs.actions";
import { FeaturedJobItem, FetchJobs, FetchJobsByFilter } from "../types/jobs.types";

export function* getJobs(action: FetchJobs) {
    yield put(actions.initFetchJobs());

    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_SERVER_URL}/positions.json?page=${action.page}`);

        let data: FeaturedJobItem[] = response.data;

        yield put(actions.fetchFetchJobsSuccess(data, action.pageType, action.page));
    } catch (error) {
        yield put(actions.fetchFetchJobsFailure(error.message));
    }
}

// Fetch jobs by filter
export function* getJobsByFilter(action: FetchJobsByFilter) {
    yield put(actions.initFetchJobsByFilter());
    let url = `${process.env.REACT_APP_SERVER_URL}/positions.json?`;

    try {
        if (action.page) {
            url += `page=${action.page}`;
        }

        if (action.filters.description) {
            url += `&description=${action.filters.description}`;
        }

        if (action.filters.location) {
            url += `&location=${action.filters.location}`;
        }

        if (action.filters.roleType) {
            url += `&full_time=on`;
        }

        const response = yield axios.get(url);
        let data: FeaturedJobItem[] = response.data;

        yield put(actions.fetchFetchJobsByFilterSuccess(data, action.pageType, action.page));
    } catch (error) {
        yield put(actions.fetchFetchJobsByFilterFailure(error.message));
    }
}