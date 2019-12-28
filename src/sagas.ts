// @ts-ignore
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import "core-js/stable";
import "regenerator-runtime/runtime";


import { REQUEST_HELLO_WORLD, recieveHelloworld } from "./actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// @ts-ignore
function* helloWorld(action) {
    try {
        // do api call
        // const user = yield call(Api.fetchUser, action.payload.userId);
        yield put(recieveHelloworld("Hello world from redux saga!"));

    } catch (e) {
        yield put(recieveHelloworld("Hello world from redux saga!"));
    }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}