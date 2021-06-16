import { ADD_ITEM, GET_CHAMPIONS, SEARCH } from './actions';

const initialState = {
    itemList: [], filteredList: []
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
                itemList: action.payload,
                filteredList: action.payload
            }
        case SEARCH: {
            const { value } = action;
            const filteredList = state.itemList.filter((val) => val.name.includes(value));
            return { ...state, value, filteredList: filteredList };
        }
        default:
            return state
    }
}

export default rootReducer


