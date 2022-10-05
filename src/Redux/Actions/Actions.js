import ActionTypes from '../Constants/Action-Types'
export const setStates = (statesData) => {
    return {
        type : ActionTypes.SET_STATES,
        payload: statesData
    }
}
export const setCities = (citiessData) => {
    return {
        type : ActionTypes.SET_CITY,
        payload: citiessData
    }
}

export const setMap = (map) => {
    return {
        type : ActionTypes.SET_MAP,
        payload: map
    }
}
