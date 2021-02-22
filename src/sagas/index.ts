import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getFeaturedJobs } from "./featuredJobs.saga";

export function* watchers() {
    yield takeEvery(ActionTypes.FETCH_FEATURED_JOBS, getFeaturedJobs);
}