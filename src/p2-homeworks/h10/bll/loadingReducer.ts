type initStateType = {
    loadingOn: boolean
}

const initState = {
    loadingOn: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingReducerAC): initStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {
                ...state,
                loadingOn: action.loadingOn
            }
        }
        default: return state
    }
}

type loadingReducerAC = loadingACType
type loadingACType = {
    type: 'SET-LOADING',
    loadingOn: boolean
}

export const loadingAC = (loadingOn: boolean): loadingACType => {
    return {
        type: 'SET-LOADING',
        loadingOn
    } as const
}