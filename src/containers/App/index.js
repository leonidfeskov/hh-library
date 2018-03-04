import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './app.css';
import BooksList from '../../containers/BooksList';
import Panel from '../../components/Panel';
import Popup from '../../components/Popup';
import AddBook from '../AddBook';
import EditBook from '../EditBook';
import { POPUP_ADD_BOOK, POPUP_EDIT_BOOK, POPUP_BOOK_ADDED, POPUP_ERROR, hidePopup } from '../../reducers/popup';


class App extends Component {
    getOverlayNode = (element) => {
        this.overlay = element;
    };

    overlayOnClickHandler = (e) => {
        if (e.target === this.overlay) {
            this.props.hidePopup();
        }
    };

    renderPopup = (popupName) => {
        const hidePopup = this.props.hidePopup;

        switch (popupName) {
            case POPUP_ADD_BOOK:
                return (
                    <Popup title="Добавить книгу"
                           size="m"
                           onClickByClose={hidePopup}>
                        <AddBook />
                    </Popup>
                );
                break;
            case POPUP_EDIT_BOOK:
                return (
                    <Popup title="Редактировать книгу"
                           size="m"
                           onClickByClose={hidePopup}>
                        <EditBook />
                    </Popup>
                );
                break;
            case POPUP_BOOK_ADDED:
                return (
                    <Popup size="s"
                           onClickByClose={hidePopup}>
                        <div className="alert alert-success">
                            Новая книга успешно добавлена
                        </div>
                    </Popup>
                );
                break;
            case POPUP_ERROR:
                return (
                    <Popup size="s"
                           onClickByClose={hidePopup}>
                        <div className="alert alert-danger">
                            Что-то пошло не так
                        </div>
                    </Popup>
                );
                break;
            default:
                return null;
                break;
        }
    };

    render() {
        const { popup } = this.props;

        return (
            <div className="app">
                <Panel />
                <main className="content">
                    <Route path="/" component={BooksList} />
                </main>
                {popup !== '' &&
                <div className="overlay"
                     onClick={this.overlayOnClickHandler}
                     ref={this.getOverlayNode}>
                    {this.renderPopup(popup)}
                </div>
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        popup: state.popup,
    }),
    {
        hidePopup,
    }
)(App);
