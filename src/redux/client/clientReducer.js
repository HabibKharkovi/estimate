import {ADD_CLIENT} from './clientType';
const initialState = {
    clientList: []
}

export default function client(state = initialState, action){
    switch(action.type){
        case ADD_CLIENT: 
            return {
                ...state,
                clientList: [...state.clientList, action.payLoad]
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