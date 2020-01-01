// export const REQUEST_HELLO_WORLD ="REQUEST_HELLO_WORLD";
// export const RECEIVE_HELLO_WORLD ="RECIEVE_HELLO_WORLD";
// export const requestHelloworld =()=>({type: REQUEST_HELLO_WORLD});
// // @ts-ignore
// export const recieveHelloworld = text =>({type: RECEIVE_HELLO_WORLD, text});
//

export const REQUEST_DATA_FROM_API = "REQUEST_DATA_FROM_API";
export const RECEIVE_DATA_FROM_API = "RECEIVE_DATA_FROM_API";
export const POST_DATA_TO_API = "POST_DATA_TO_API";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_POST = "EDIT_POST";

export interface Contact {
    name: string;
    age: number;
}

export const  requestDataFromApi = () =>({
    type: REQUEST_DATA_FROM_API
});
// @ts-ignore
export const  recieveDataFromApi = (data) =>({
    type: RECEIVE_DATA_FROM_API,
    data
});

export const addContact = (contact: Contact) =>({
    type: POST_DATA_TO_API,
    contact

});
export const editContact = (contact: Contact) =>({
    type: EDIT_POST,
    contact

});
export const deleteContact = (id: number) =>({
    type: DELETE_CONTACT,
    id


});

