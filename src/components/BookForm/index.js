import React, { Component } from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import Select from '../Select';
import Option from '../Option';
import Button from '../Button';
import PseudoLink from '../PseudoLink';
import TAGS from '../../tags';


export default class BookForm extends Component {
    state = {
        authorsCount: this.props.authors ? this.props.authors.length : 1,
        isValid: true,
    };

    addAuthorField = () => {
        this.setState(prevState => {
            return {authorsCount: prevState.authorsCount + 1}
        })
    };

    handlerSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            this.setState({'isValid': false});
            return;
        }
        
        let bookData = {
            title: '',
            description: '',
            link: '',
            year: '',
            countTotal: 1,
        };

        Object.keys(bookData).forEach(key => {
            bookData[key] = form[key].value;
        });

        bookData.authors = [];
        for (let i = 0; i < this.state.authorsCount; i++) {
            const author = {
                name: form[`authors[${i}]`].value
            };
            if (author.name !== '') {
                bookData.authors.push(author);
            }
        }

        bookData.tags = [];
        for (let i = 0; i < form.tags.options.length; i++) {
            const option = form.tags.options[i];
            if (option.selected) {
                const tagId = option.value;
                bookData.tags.push({
                    id: tagId,
                    text: TAGS[tagId].text,
                });
            }
        }
        bookData.countCurrent = bookData.countTotal;

        this.props.submitAction(bookData, this.props.id);
    };

    render() {
        const { title, description, link, year, countTotal, authors, submitButtonText} = this.props;
        const { authorsCount, isValid } = this.state;

        let authorsInput = [];
        for (let i = 0; i < authorsCount; i++) {
            authorsInput.push(
                <div key={i} className="mb-1">
                    <Input name={`authors[${i}]`} value={authors[i] ? authors[i].name : ''} />
                </div>
            );
        }

        return (
            <form className={isValid ? '' : 'was-validated'}
                  noValidate
                  onSubmit={this.handlerSubmit}>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Название:</label>
                    <div className="col-sm-9">
                        <Input name="title" value={title} required />
                        <div className="invalid-feedback">Поле обязательно для заполнения</div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Описание:</label>
                    <div className="col-sm-9">
                        <Textarea name="description" value={description} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Ссылка:</label>
                    <div className="col-sm-9">
                        <Input name="link" value={link} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Год:</label>
                    <div className="col-sm-9">
                        <Input name="year" value={year} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Автор:</label>
                    <div className="col-sm-9">
                        {authorsInput}
                        <PseudoLink onClick={this.addAuthorField}>
                            <small>Добавить автора</small>
                        </PseudoLink>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Количество:</label>
                    <div className="col-sm-9">
                        <Input value={countTotal} name="countTotal" type="number" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-sm-3">Теги:</label>
                    <div className="col-sm-9">
                        <Select multiple name="tags">
                            {Object.keys(TAGS).map(tagId => {
                                return (
                                    <Option key={tagId}
                                            value={tagId}>
                                        {TAGS[tagId].text}
                                    </Option>
                                );
                            })}
                        </Select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-9 offset-sm-3">
                        <Button type="submit" kind="primary">{submitButtonText}</Button>
                    </div>
                </div>
            </form>
        )
    }
}

