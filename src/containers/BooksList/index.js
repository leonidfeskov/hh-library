import React, { Component } from 'react';
import {connect} from 'react-redux';
import Book from '../../components/Book';
import {fetchBooksList} from '../../reducers/booksList';


class BooksList extends Component {
    componentWillMount() {
        this.props.fetchBooksList();
    }

    render() {
        const { booksList } = this.props;
        return(
            <div className="books">
                <h1>Книги</h1>
                {!booksList.length ? (
                    'Книги не найдены'
                ) : (
                    booksList.map(book => <Book key={book.id} {...book}/>)
                )}
            </div>
        )
    }
}

export default connect(
    state => ({
        booksList: state.booksList,
    }),
    dispatch => ({
        fetchBooksList: () => {
            dispatch(fetchBooksList())
        }
    })
)(BooksList);
