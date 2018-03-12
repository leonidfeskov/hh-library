import React, { Component } from 'react';
import {connect} from 'react-redux';
import Book from '../Book';
import Spinner from '../../components/Spinner';
import {fetchBooksList} from '../../reducers/booksList';


class BooksList extends Component {
    renderBooks = (books) => {
        if (books.length) {
            return books.map(book => <Book key={book.id} {...book} />)
        }
        return <Spinner />
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
