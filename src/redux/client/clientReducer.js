import {ADD_CLIENT, SELLECT_EDIT} from './clientType';
const initialState = {
    clientList: [
        {
            id: 1,
            name: 'jon',
            email: 'jon@gmail.com',
            phone_1: '23994386745',
            phone_2: '63346386745',
            address_1: 'address 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            address_2: 'address 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            city: 'jon city',
            state: 'jon state',
            postal_code: '3523'
        },
        {
            id: 2,
            name: 'smith',
            email: 'smith@gmail.com',
            phone_1: '62342386745',
            phone_2: '52525386745',
            address_1: 'address 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            address_2: 'address 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            city: 'smith city',
            state: 'smith state',
            postal_code: '5323'
        },
        {
            id: 3,
            name: 'Andrew',
            email: 'Andrew@gmail.com',
            phone_1: '24294386745',
            phone_2: '97452386745',
            address_1: 'address 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            address_2: 'address 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            city: 'Andrew city',
            state: 'Andrew state',
            postal_code: '7423'
        },
    ],
    selectedClient: {}
}

export default function client(state = initialState, action){
    switch(action.type){
        case ADD_CLIENT: 
            return {
                ...state,
                clientList: [...state.clientList, action.payLoad]
            }
        case SELLECT_EDIT: 
            return {
                ...state,
                selectedClient: action.payLoad
            }
        // case REMOVE_TEST:
        //     console.log(action.payLoad.id)
        //     const filter = state.multipleSelector.filter(item => item.id !== action.payLoad.id)
        //     console.log("filter", filter)
        //     console.log("state", state.multipleSelector)
        //     return {
        //         ...state,
        //         multipleSelector: filter
        //     }
        // case EDIT_PATIENT: 
        //     return {
        //         ...state,
        //         editPatient: action.payLoad
        //     }

        default :
            return state;

    }
}