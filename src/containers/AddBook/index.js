import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookForm from '../../components/BookForm';
import { addBook } from '../../reducers/booksList';


class AddBook extends Component {
    bookData = {
        title: '',
        description: '',
        link: '',
        year: '',
        countTotal: 1,
        authors: [
            {name: ''},
        ],
    };

    render() {
        return (
            <BookForm {...this.bookData}
                      submitButtonText="Добавить книгу"
                      submitAction={this.props.addBook} />
        )
    }
}

export default connect(
    null,
    dispatch => ({
        addBook: (data) => dispatch(addBook(data)),
    })
)(AddBook);

