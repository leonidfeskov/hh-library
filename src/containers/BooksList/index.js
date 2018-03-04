import React, { Component } from 'react';
import {connect} from 'react-redux';
import Book from '../Book';
import {fetchBooksList} from '../../reducers/booksList';


class BooksList extends Component {
    renderBooks = (books) => {
        if (books.length) {
            return books.map(book => <Book key={book.id} {...book} />)
        }
        return 'Книги не найдены';
    };

    componentDidMount() {
        this.props.fetchBooksList();
    }

    render() {
        const { booksList } = this.props;

        return(
            <div className="books">
                <h1>Книги</h1>
                {this.renderBooks(booksList)}
            </div>
        )
    }
}

export default connect(
    state => ({
        booksList: state.booksList,
    }),
    {
        fetchBooksList,
    }
)(BooksList);
