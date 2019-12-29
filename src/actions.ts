// export const REQUEST_HELLO_WORLD ="REQUEST_HELLO_WORLD";
// export const RECEIVE_HELLO_WORLD ="RECIEVE_HELLO_WORLD";
// export const requestHelloworld =()=>({type: REQUEST_HELLO_WORLD});
// // @ts-ignore
// export const recieveHelloworld = text =>({type: RECEIVE_HELLO_WORLD, text});
//

export const REQUEST_DATA_FROM_API = "REQUEST_DATA_FROM_API";
export const RECEIVE_DATA_FROM_API = "RECEIVE_DATA_FROM_API";

export interface APIData {
    name: string;
    email: string;
}
export const  requestDataFromApi = () =>({
    type: REQUEST_DATA_FROM_API
});
// @ts-ignore
export const  recieveDataFromApi = (data) =>({
    type: RECEIVE_DATA_FROM_API,
    data
});