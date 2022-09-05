import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {setErrorAC} from '../../app/app-reducer';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ErrorSnackbar() {
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        // если кликнем мимо ошибка исчезает
        if (reason === 'clickaway') {
            return;
        }
// если нажали на крестик - закроется
        dispatch(setErrorAC(null))
    };
    const isOpen = error !== null

    return (
        /* закрывается по open, но нам надо контролируемо сделать из вне - должен показаться если пришел error*/
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="error">
                <span>{error}</span>
            </Alert>
        </Snackbar>

    );
}