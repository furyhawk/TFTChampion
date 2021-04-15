export const ADD_ITEM = 'ADD_ITEM'
export const GET_CHAMPIONS = 'GET_CHAMPIONS';

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const getChampions = () => ({
    type: GET_CHAMPIONS,
    payload: require('../../assets/champions.json')
})

