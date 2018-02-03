import axios from 'axios';


export const FETCH_BOOKS_LIST = 'FETCH_BOOKS_LIST';
export const  FETCH_BOOKS_LIST_FAIL = ' FETCH_BOOKS_LIST_FAIL';

export function fetchBooksList() {
    return (dispatch) => {
        axios.get('/books')
            .then((response) => {
                console.log(response.data);
                return dispatch({
                    type: FETCH_BOOKS_LIST,
                    data: response.data,
                })
            })
            .catch((error) => {
                return dispatch({
                    type: FETCH_BOOKS_LIST_FAIL,
                    error: error,
                })
            })
    }
}

export const booksList = (state = [], action) => {
    switch (action.type) {
        case FETCH_BOOKS_LIST:
            return action.data;
        default:
            return state
    }
};
