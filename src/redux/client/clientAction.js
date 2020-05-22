import {ADD_CLIENT} from './clientType';

export const add_client = (client) => ({
    type: ADD_CLIENT,
    payLoad: client
})

// export const remove_test = ({id, name, price}) => ({
//     type: REMOVE_TEST,
//     payLoad: {id, name, price}
// })

// export const edit_patient = (data) => ({
//     type: EDIT_PATIENT,
//     payLoad: data
// })