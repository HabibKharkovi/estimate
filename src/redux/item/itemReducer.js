import {ADD_ITEM, EDIT_ITEM} from './itemType';
const initialState = {
    itemList: [
        {
            id: 1,
            name: 'item a',
            rate: '234', 
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            textList: [
                {
                    tax_name: 'text 1',
                    tax_per: '5'
                },
                {
                    tax_name: 'text 2',
                    tax_per: '2'
                },
                {
                    tax_name: 'text 3',
                    tax_per: '3'
                },
            ]
        },
        {
            id: 2,
            name: 'item b',
            rate: '46', 
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            textList: [
                {
                    tax_name: 'text 1',
                    tax_per: '5'
                },
                {
                    tax_name: 'text 2',
                    tax_per: '2'
                }
            ]
        },
        {
            id: 3,
            name: 'item c',
            rate: '543', 
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            textList: [
                {
                    tax_name: 'text 1',
                    tax_per: '5'
                },
                {
                    tax_name: 'text 2',
                    tax_per: '2'
                },
                {
                    tax_name: 'text 3',
                    tax_per: '3'
                },
            ]
        }
    ]
}

export default function item(state = initialState, action){
    switch(action.type){
        case ADD_ITEM: 
            return {
                ...state,
                itemList: [...state.itemList, action.payLoad]
            }
        // case EDIT_ITEM: 
        //     const newState = state;
        //     const updateItem = state.filter(client => client.id)
        //     return {
                
        //         ...state,
        //         itemList: [...state.itemList, action.payLoad]
        //     }

        default :
            return state;

    }
}