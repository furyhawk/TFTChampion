import { ADD_ITEM, GET_CHAMPIONS, GET_CHAMPION, SEARCH } from './actions';

const initialState = {
    itemList: [], filteredList: [], championUri: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemList: state.itemList.concat({
                    championId: Math.random(), //uuid/v4 uuidV4()
                    name: action.payload
                })
            }
        case GET_CHAMPIONS:
            return {
                ...state,
                itemList: action.payload,
                filteredList: action.payload
            }
        case GET_CHAMPION:
            const { championUri } = action;
            return {
                ...state,
                championUri
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


