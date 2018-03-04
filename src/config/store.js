import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { booksList } from '../reducers/booksList';
import { popup } from '../reducers/popup';
import { editedBookId } from '../reducers/editedBookId';

const middlewares = [thunk, logger];

export default function configureStore() {
    return createStore(
        combineReducers({
            booksList,
            popup,
            editedBookId,
        }),
        applyMiddleware(...middlewares)
    );
}
