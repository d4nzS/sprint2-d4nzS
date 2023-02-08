import { FC } from 'react';

import classes from './BooksList.module.scss';
import { BOOKS } from '../../data/data';
import BookItem from './BookItem/BookItem';
import { BooksDisplay } from '../SearchMenu/SearchMenu';

interface BooksListProps {
    display: BooksDisplay;
}

const BooksList: FC<BooksListProps> = ({ display }) => {
    return (
        <section className={classes.books}>
            <ul className={`${classes.list} ${display === BooksDisplay.List && classes['list_list-type']}`}>
                {BOOKS.map(book => <BookItem
                    key={book.id}
                    display={display}
                    {...book}
                />)}
            </ul>
        </section>
    );
};

export default BooksList;
