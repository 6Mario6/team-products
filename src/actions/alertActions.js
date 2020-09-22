import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

export function showAlert(alert) {
    return (dispatch) => {
        dispatch(createAlert(alert))
    }
}

const createAlert = alert => ({
    type:SHOW_ALERT,
    payload: alert
})

export function hideAlert() {
    return (dispatch) => {
        dispatch(hideAlertAction())
    }
}

const hideAlertAction = () => ({
    type:HIDE_ALERT
})