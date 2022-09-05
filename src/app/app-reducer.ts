// initialState
export const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null
}


// reducer
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}

        default:
            return state
    }
}
// actions
export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error}) as const
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status}) as const


// types
export type InitialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type SetAppErrorActionType = ReturnType<typeof setErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

export type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType