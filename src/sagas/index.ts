import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getJobs } from "./jobs.saga";
import { getJobDetails } from "./details.saga";

export function* watchers() {
    yield takeEvery(ActionTypes.FETCH_JOBS, getJobs);
    yield takeEvery(ActionTypes.FETCH_JOB_DETAILS, getJobDetails);
}