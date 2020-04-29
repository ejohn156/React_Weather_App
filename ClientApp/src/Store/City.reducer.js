import {CHANGE_CITY} from './City.action'

const initialState = {
    City : 'Charlotte'
}

function CityReducer (state = initialState, action) {
   switch(action.type) {
       case CHANGE_CITY: return Object.assign({}, state, {
           City : action.City
       })
   default: {
    return state
   }
}
}

export default CityReducer