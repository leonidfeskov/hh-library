import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book.css';
import Button from '../../components/Button/index';
import { POPUP_EDIT_BOOK, showPopup } from '../../reducers/popup';
import { takeBook } from '../../reducers/booksList';
import { setEditedBookId } from '../../reducers/editedBookId';


class Book extends Component {
    bookClick = (e) => {
        e.currentTarget.classList.add('book_opened');
    };

    bookMouseLeave = (e) => {
        e.currentTarget.classList.remove('book_opened');
    };

    showPopupEditBook = () => {
        this.props.setEditedBookId(this.props.id);
        this.props.showPopup(POPUP_EDIT_BOOK);
    };

    handlerTakeBook = () => {
        this.props.takeBook(this.props.id);
    };

    render() {
        const {title, description, year, link, authors, tags, readers} = this.props;

        return (
            <div className="book" onClick={this.bookClick} onMouseLeave={this.bookMouseLeave}>
                <div className="book__cover book__cover_back"></div>
                <div className="book__page book__page_1"/>
                <div className="book__page book__page_2"/>
                <div className="book__page book__page_3"/>
                <div className="book__page book__page_4"/>
                <div className="book__page book__page_5">
                    <div className="book__description">{description}</div>
                </div>
                <div className="book__cover book__cover_front">
                    <div className="book__cover-side-one">
                        <div className="book__title book__title_front">
                            <a href={link}
                               target="_blank"
                               className="book__title-link">
                                {title}
                            </a>
                        </div>
                        <div className="book__date">{year} г.</div>
                        <ul className="book__authors">
                            {authors.map(author => {
                                return (
                                    <li key={author.id} className="book__author">{author.name}</li>
                                )
                            })}
                        </ul>
                        <ul className="book__tags">
                            {tags.map(tag => {
                                return (
                                    <li key={tag.id} className="book__tag">{tag.text}</li>
                                )
                            })}
                        </ul>
                        {readers.map(reader => {
                            return reader.id;
                        })}
                    </div>
                    <div className="book__cover-side-two">
                        <div className="book__title">
                            <a href={link}
                               target="_blank"
                               className="book__title-link">
                                {title}
                            </a>
                        </div>
                        <div className="book__actions">
                            <div className="mt-1">
                                <Button kind="primary"
                                        onClick={this.handlerTakeBook}>
                                    Взять
                                </Button>
                            </div>
                            <div className="mt-1">
                                <Button kind="secondary"
                                        onClick={this.showPopupEditBook}>
                                    Редактировать
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    {
        showPopup,
        setEditedBookId,
        takeBook,
    }
)(Book);
