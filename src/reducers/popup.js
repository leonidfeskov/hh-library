export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

export const POPUP_ADD_BOOK = 'POPUP_ADD_BOOK';
export const POPUP_EDIT_BOOK = 'POPUP_EDIT_BOOK';
export const POPUP_BOOK_ADDED = 'POPUP_BOOK_ADDED';
export const POPUP_ERROR = 'POPUP_ERROR';

export function showPopup(popupName) {
    return {
        type: SHOW_POPUP,
        payload: popupName,
    }
}

export function hidePopup() {
    return {
        type: HIDE_POPUP,
        payload: '',
    }
}

export const popup = (state = '', action) => {
    switch (action.type) {
        case SHOW_POPUP:
            return action.payload;
        case HIDE_POPUP:
            return action.payload;
        default:
            return state
    }
};
