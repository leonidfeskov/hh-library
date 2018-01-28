import React, { Component } from 'react';
import {connect} from 'react-redux';
import Book from '../../components/Book';
import {fetchBooksList} from '../../actions';


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
                    booksList.map(book => {
                        return <Book key={book.id}
                                     title={book.title}
                                     description={book.description}
                                     year={book.year}
                                     link={book.link}
                                     authors={book.authors}
                                     tags={book.tags}
                                     countTotal={book.countTotal}
                                     countCurrent={book.countCurrent}/>
                    })
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
