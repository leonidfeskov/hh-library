export const booksList = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_LIST_FAIL':
            return action.error;
        case 'FETCH_BOOKS_LIST':
            return action.data;
        case 'ADD_BOOK':
            return [...state, action.book];
        default:
            return state
    }
};
