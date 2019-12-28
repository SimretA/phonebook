import {RECEIVE_DATA_FROM_API} from "../actions";

// @ts-ignore
export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_DATA_FROM_API:
            return data;
        default:
            return state;
    }
};