import {ADD_ITEM, EDIT_ITEM} from './itemType';

export const add_item = (item) => ({
    type: ADD_ITEM,
    payLoad: item
})

export const edit_item = (item) => ({
    type: EDIT_ITEM,
    payLoad: item
})