import {REMOVE_TEST, ADD_TEST, EDIT_PATIENT} from './patientType';
const initialState = {
    multipleSelector: [],
    editPatient: false
}

export default function patient(state = initialState, action){
    switch(action.type){
        case ADD_TEST: 
            return {
                ...state,
                multipleSelector: [...state.multipleSelector, action.payLoad]
            }
        case REMOVE_TEST:
            console.log(action.payLoad.id)
            const filter = state.multipleSelector.filter(item => item.id !== action.payLoad.id)
            console.log("filter", filter)
            console.log("state", state.multipleSelector)
            return {
                ...state,
                multipleSelector: filter
            }
        case EDIT_PATIENT: 
            return {
                ...state,
                editPatient: action.payLoad
            }

        default :
            return state;

    }
}