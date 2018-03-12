import axios from 'axios';
import { POPUP_BOOK_ADDED, POPUP_ERROR, showPopup } from './popup';


export const FETCH_BOOKS_LIST = 'FETCH_BOOKS_LIST';
export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const TAKE_BOOK = 'TAKE_BOOK';

export function fetchBooksList() {
    return (dispatch) => {
        axios.get('/books')
            .then((response) => {
                return dispatch({
                    type: FETCH_BOOKS_LIST,
                    payload: response.data,
                })
            })
            .catch((error) => {
                // TODO обработать ошибку
                dispatch(showPopup(POPUP_ERROR));
            })
    }
}

export function addBook(data) {
    return (dispatch) => {
        axios.post('/books', data)
            .then((response) => {
                dispatch(showPopup(POPUP_BOOK_ADDED));

                return dispatch({
                    type: ADD_BOOK,
                    payload: response.data,
                })
            })
            .catch((error) => {
                // TODO обработать ошибку
                dispatch(showPopup(POPUP_ERROR));
            })
    }
}

export function editBook(data, id) {
    return (dispatch) => {
        axios.put(`/book/${id}`, data)
            .then((response) => {
                dispatch(showPopup(POPUP_BOOK_ADDED));

                return dispatch({
                    type: EDIT_BOOK,
                    payload: response.data,
                })
            })
            .catch((error) => {
                // TODO обработать ошибку
                dispatch(showPopup(POPUP_ERROR));
            })
    }
}

export function takeBook(id) {
    return (dispatch) => {
        axios.post(`/reader/${id}`)
            .then((response) => {
                console.log(response);
                return dispatch({
                    type: TAKE_BOOK,
                    payload: id,
                })
            })
            .catch((error) => {
                console.log(error);
                // TODO обработать ошибку
                dispatch(showPopup(POPUP_ERROR));
            })
    }
}

export const booksList = (state = [], action) => {
    switch (action.type) {
        case FETCH_BOOKS_LIST:
            return action.payload;
        case ADD_BOOK:
            return [...state, action.payload];
        // case TAKE_BOOK:
        //     return state.map((book) => {
        //         if (book.id === action.payload) {
        //             return {
        //                 ...book,
        //                 readers: [...book.readers, action.payload]
        //             }
        //         }
        //         return book;
        //     });
        default:
            return state
    }
};
