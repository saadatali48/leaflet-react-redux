import ActionTypes from '../Constants/Action-Types'
const initialState = {
    states : [],
    cities : [],
    
}
const initialMapState  = {
    map :null

}

const DataReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_STATES:
            return state
            break;
        default:
            return state
            break;
    }

}
export const MapReducer  = (state=initialMapState,{type,payload})=>{
   switch (type) {
    case ActionTypes.SET_MAP:
            return {...state,map:payload}
            break;
        default:
            return state
    
   }
}

export default DataReducer