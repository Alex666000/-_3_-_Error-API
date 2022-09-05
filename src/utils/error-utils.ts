import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType, setErrorAC} from '../app/app-reducer';
import {Dispatch} from 'redux';
import {ResponseType} from '../api/todolists-api';

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some_error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: { message: string | null} , dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    dispatch(setErrorAC(error.message ? error.message : 'error'))
    dispatch(setAppStatusAC('failed'))
}