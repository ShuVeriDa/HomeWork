export const CHANGE_THEME = "CHANGE_THEME"

type initStateType = {
    themes: string[]
    value: string
}

const initState = {
    themes: ['dark', 'red', 'some'],
    value: 'red'
};

export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                value: action.theme
            }
        default: return state;
    }
};

export type ActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme: string) => {
   return {
       type: CHANGE_THEME,
       theme
   } as const
};