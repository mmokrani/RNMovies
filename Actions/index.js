import * as types from '../Constants'

export const addToFavoris = (id) => {
    type: types.ADD_TO_FAVORIS,
    id
}
export const removeFromFavoris = (id) => {
    type: types.REMOVE_FROM_FAVORIS,
    id
}