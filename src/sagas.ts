// @ts-ignore
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import "core-js/stable";
import "regenerator-runtime/runtime";

import { fetchData } from './api';
import { REQUEST_DATA_FROM_API, recieveDataFromApi } from "./actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// @ts-ignore
function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchData);

        yield put(recieveDataFromApi(data));
        console.log("saga", data);

    } catch (e) {
        console.log(e);
    }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    // @ts-ignore
    yield takeLatest(REQUEST_DATA_FROM_API, getApiData);
}