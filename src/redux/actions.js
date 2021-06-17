export const ADD_ITEM = 'ADD_ITEM'
export const GET_CHAMPIONS = 'GET_CHAMPIONS';
export const GET_CHAMPION = 'GET_CHAMPION';
export const SEARCH = 'SEARCH';

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const getChampions = () => ({
    type: GET_CHAMPIONS,
    payload: require('../../assets/champions.json')
})

export const getChampion = (champion) => ({
  type: GET_CHAMPION,
  payload: require('../../assets/champions/' + champion.championId + '.png')
})

export function search(value) {
  return {type: SEARCH, value};
}
