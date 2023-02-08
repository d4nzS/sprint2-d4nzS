import { FC } from 'react';

import classes from './BookItem.module.scss';
import Book, { Status } from '../../../models/book';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import Image from '../../UI/Image/Image';
import createBtnText from '../../../utils/create-btn-text';
import RatingStars from '../../UI/RatingStars/RatingStars';
import { BooksDisplay } from '../../SearchMenu/SearchMenu';

interface BooksItemProps extends Book {
    display: BooksDisplay;
}

const BookItem: FC<BooksItemProps> = ({
                                          id,
                                          category,
                                          title,
                                          author,
                                          rating,
                                          year,
                                          status,
                                          imagesUrl,
                                          borrowedTill,
                                          display
                                      }) => {
    const ratingEl = (
        <div>
            {!rating
                ? <span
                    className={`${classes['no-rating']} ${display === BooksDisplay.List && classes['no-rating_list-type']}`}>
                    ещё нет оценок
                </span>
                : <RatingStars
                    rating={rating}
                    containerStyles={`${classes.rating} ${display === BooksDisplay.List && classes['rating_list-type']}`}
                    starStyles={`${classes['rating-star']} ${display === BooksDisplay.List && classes['rating-star_list-type']}`}
                />
            }
        </div>
    );

    return (
        <li data-test-id="card">
            <Link
                to={id}
                className={`${classes['book-item']} ${display === BooksDisplay.List && classes['book-item_list-type']}`}
            >
                {display === BooksDisplay.Grid && <>
                    <Image
                        url={imagesUrl[0]}
                        title={title}
                        imgStyles={classes.image}
                        defaultIconStyles={classes['default-icon']}
                    />
                    {ratingEl}
                    <h3 className={classes.title}>{title}</h3>
                    <span className={classes.info}>{author}, {year}</span>
                    <Button
                        parentStyles={classes['button']}
                        disabled={status !== Status.Available}
                    >
                        {createBtnText(status, borrowedTill)}
                    </Button>
                </>}
                {display === BooksDisplay.List && <>
                    <Image
                        url={imagesUrl[0]}
                        title={title}
                        imgStyles={`${classes.image} ${classes['image_list-type']}`}
                        defaultIconStyles={classes['default-icon']}
                    />
                    <div className={display === BooksDisplay.List && classes['list-container']}>

                        <h3 className={`${classes.title} ${display === BooksDisplay.List && classes['title_list-type']}`}>{title}</h3>
                        <span className={`${classes.info} ${display === BooksDisplay.List && classes['info_list-type']}`}>
                            {author}, {year}
                        </span>
                        <div className={classes['rating-btn-container']}>
                            {display === BooksDisplay.List && ratingEl}
                            <Button
                                parentStyles={`${classes['button']} ${display === BooksDisplay.List && classes['button_list-type']}`}
                                disabled={status !== Status.Available}
                            >
                                {createBtnText(status, borrowedTill)}
                            </Button>
                        </div>
                    </div></>
                   }
            </Link>
        </li>
    );
};

export default BookItem;
