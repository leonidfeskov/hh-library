import React, { Component } from 'react';
import './book.css';
import Button from '../Button/index';


export default function Book({title, description, year, link, authors, tags}) {
    return(
        <div className="book">
            <div className="book__cover book__cover_back"></div>
            <div className="book__page book__page_1" />
            <div className="book__page book__page_2" />
            <div className="book__page book__page_3" />
            <div className="book__page book__page_4" />
            <div className="book__page book__page_5">
                <div className="book__description">{description}</div>
            </div>
            <div className="book__cover book__cover_front">
                <div className="book__cover-side-one">
                    <div className="book__title book__title_front">
                        <a href={link} className="book__title-link">{title}</a>
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
                </div>
                <div className="book__cover-side-two">
                    <div className="book__title">
                        <a href={link} className="book__title-link">{title}</a>
                    </div>
                    <div className="book__actions">
                        <Button type="primary">Взять книгу</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
