import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/details.action";
import { JobItem, FetchJobDetails } from "../types/details.types";

export function* getJobDetails(action: FetchJobDetails) {
    yield put(actions.initFetchJobDetails());

    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_SERVER_URL}/positions/${action.id}.json`);

        let data: JobItem = response.data;

        yield put(actions.fetchFetchJobDetailsSuccess(data));
    } catch (error) {
        yield put(actions.fetchFetchJobDetailsFailure(error.message));
    }
}