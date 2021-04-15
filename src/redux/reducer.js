import { ADD_ITEM, GET_CHAMPIONS } from './actions';

const initialState = {
    itemList: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemList: state.itemList.concat({
                    championId: Math.random(),
                    name: action.payload
                })
            }
        case GET_CHAMPIONS:
            return {
                ...state,
                itemList: action.payload
            }
        default:
            return state
    }
}

export default rootReducer


