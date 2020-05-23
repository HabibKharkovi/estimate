import {ADD_CLIENT, SELLECT_EDIT} from './clientType';

export const add_client = (client) => ({
    type: ADD_CLIENT,
    payLoad: client
})

export const select_client = (client) => ({
    type: SELLECT_EDIT,
    payLoad: client
})
