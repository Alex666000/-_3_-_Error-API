import {appReducer, InitialStateType, setErrorAC, setAppStatusAC} from './app-reducer';

let startState: InitialStateType;

beforeEach(() => {
      startState =
          { status: 'idle', error: null}
})

test('ошибка должна быть', () => {
    const endState = appReducer(startState,setErrorAC('some error'))

    expect(endState.error).toBe('some error')
})
test('статус должен быть установлен', () => {
    const endState = appReducer(startState,setAppStatusAC('loading'))

    expect(endState.status).toBe('loading')
})