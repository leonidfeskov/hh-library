import axios from 'axios';


export function fetchBooksList() {
    return (dispatch) => {
        axios.get('/books')
            .then((response) => {
                console.log(response.data);
                return dispatch({
                    type: 'FETCH_BOOKS_LIST',
                    data: response.data,
                })
            })
            .catch((error) => {
                return dispatch({
                    type: 'FETCH_BOOKS_LIST_FAIL',
                    error: error,
                })
            })
    }
}
