import {UserType} from "../HW8";

type ActionType = {
    type: string,
    [key: string]: string | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newSort = [...state]
            const newState = newSort.sort((a: UserType , b:UserType ) => a.name < b.name ? -1 : 1)
            return action.payload === 'up' ? newState : newState.reverse()

        }
        case 'check': {
            // need to fix
            const newSort = [...state]
            return newSort.filter(f => f.age >= 18 )
        }
        default: return state
    }
}
