import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

// import {fetchData} from './api';
// import { put, takeLatest, call} from 'redux-saga/effects';
// import {REQUEST_DATA_FROM_API, recieveDataFromApi} from "./actions";
//
// function* helloworld(action: any) {
//     try{
//         //do api call
//         const data = yield call(fetchData);
//         console.log(data);
//         yield put(recieveDataFromApi(data));
//
//     }catch (e) {
//         console.log(e);
//
//      }
// }
//
// export default function* mySaga() {
//     yield takeLatest(REQUEST_DATA_FROM_API, helloworld);
// }