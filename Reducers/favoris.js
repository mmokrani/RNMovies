import * as types from '../Constants'

export const favoris = (state=[], {type, id}) => {
    switch (type) {
        case types.ADD_TO_FAVORIS:

            return [...state, id];
        case types.REMOVE_FROM_FAVORIS:
            return state.filter(item => item !== id);
        default :
            return state;        
    }
}