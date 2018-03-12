export const SET_EDITED_BOOK_ID = 'SET_EDITED_BOOK_ID';

export function setEditedBookId(id) {
    return {
        type: SET_EDITED_BOOK_ID,
        payload: id,
    };
}

export const editedBookId = (state = '', action) => {
    switch (action.type) {
        case SET_EDITED_BOOK_ID:
            return action.payload;
        default:
            return state
    }
};
