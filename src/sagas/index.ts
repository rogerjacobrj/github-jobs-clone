import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getJobs } from "./jobs.saga";

export function* watchers() {
    yield takeEvery(ActionTypes.FETCH_JOBS, getJobs);
}