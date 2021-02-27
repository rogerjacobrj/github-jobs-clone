import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/jobs.actions";
import { FeaturedJobItem, FetchJobs } from "../types/jobs.types";

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