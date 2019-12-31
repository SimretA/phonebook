// @ts-ignore
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import "core-js/stable";
import "regenerator-runtime/runtime";

import {deleteData, fetchData, postData} from './api';
import {REQUEST_DATA_FROM_API, recieveDataFromApi, POST_DATA_TO_API, DELETE_CONTACT} from "./actions";
import data from "./reducers/data";

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
function* deleteApiData(id: number) {
    try {
        const dataResponse = yield call(deleteData, id.id);
        console.log(dataResponse);
        yield call(getApiData, null);
    }catch (e) {
        console.log(e)
    }
}

function* postApiData(contact) {

    let toPost = contact.contact;
    toPost.salary = 0;

    console.log("posting ", toPost);
    try{
        const dataRespons = yield call(postData, toPost);
        console.log(dataRespons);
        // yield put(recieveDataFromApi(dataRespons));
        yield call(getApiData, null);

    }catch (e) {
        console.log(e);
    }
}
export default function* mySaga() {
    // @ts-ignore
    yield takeLatest(REQUEST_DATA_FROM_API, getApiData);

    yield takeLatest(POST_DATA_TO_API, postApiData);

    yield takeLatest(DELETE_CONTACT, deleteApiData);
}