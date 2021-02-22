import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/featuredJobs.actions";
import { FeaturedJobItem, FetchFeaturedJobs } from "../types/featuredJobs.types";

export function* getFeaturedJobs(action: FetchFeaturedJobs) {
    yield put(actions.initFetchFeaturedJobs());

    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_SERVER_URL}/positions.json?featured=true`);

        let data: FeaturedJobItem[] = response.data;

        yield put(actions.fetchFetchFeaturedJobsSuccess(data));
    } catch (error) {
        yield put(actions.fetchFetchFeaturedJobsFailure(error.message));
    }
}