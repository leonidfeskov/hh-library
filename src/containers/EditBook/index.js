import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookForm from '../../components/BookForm';
import { editBook } from '../../reducers/booksList';


class EditBook extends Component {
    render() {
        const { booksList, editedBookId } = this.props;

        let editedBook;
        booksList.forEach(book => {
            if (book.id === editedBookId) {
                editedBook = book;
            }
        });

        return (
            <BookForm {...editedBook}
                      submitButtonText="Редактировать книгу"
                      submitAction={this.props.editBook} />
        )
    }
}

export default connect(
    state => ({
        booksList: state.booksList,
        editedBookId: state.editedBookId,
    }),
    dispatch => ({
        editBook: (data, id) => dispatch(editBook(data, id)),
    })
)(EditBook);

