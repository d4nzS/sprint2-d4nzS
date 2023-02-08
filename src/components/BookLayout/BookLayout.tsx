import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import classes from './BookLayout.module.scss';
import { BOOK_CATEGORIES, BOOKS } from '../../data/data';
import Button from '../UI/Button/Button';
import { Status } from '../../models/book';
import createBtnText from '../../utils/create-btn-text';
import Image from '../UI/Image/Image';
import RatingStars from '../UI/RatingStars/RatingStars';
import reviewAvatarImg from '../../assets/images/review-avatar.png';
import Navbar from '../Navbar/Navbar';
import ImagesSlider from '../UI/ImagesSlider/ImagesSlider';
import { useAppSelector } from '../../store/hooks';

const BookLayout: FC = () => {
    const { bookId } = useParams();
    const windowWidth = useAppSelector(state => state.ui.windowWidth);
    const [reviewsIsOpen, setReviewsIsOpen] = useState<boolean>();

    const book = BOOKS.find(book => book.id === bookId)!;
    const bookPath = BOOK_CATEGORIES.find(category => category.title === book.category)!.path;

    console.log(bookPath);

    const toggleReviewsHandler = (): void => {
        setReviewsIsOpen(prevState => !prevState);
    };

    const imagesContainer = (
        <>
            {book.imagesUrl.length > 1
                ? <ImagesSlider
                    images={book.imagesUrl}
                    title={book.title}
                    parentImgStyles={classes.image}
                />
                : <Image
                    url={book.imagesUrl[0]}
                    title={book.title}
                    imgStyles={classes.image}
                    defaultIconStyles={classes['default-icon']}
                />
            }
        </>
    );

    return (
        <>
            <div className={classes.invisible}>
                <Navbar/>
            </div>
            <main className={classes.main}>
                <div className={classes['general-info']}>
                    <div className={classes['general-info__content']}>
                        <Link to={`/books/${bookPath}`}>{book.category}</Link>
                        <i className={classes['general-info__slash']}/>
                        <span>{book.title}</span>
                    </div>
                </div>
                <div className={classes['main-flex-container']}>
                    {windowWidth >= 1440 && imagesContainer}
                    <div>
                        <section className={classes['main-info']}>
                            <div className={classes['main-info__content']}>
                                <h2 className={classes.title}>{book.title}</h2>
                                <span
                                    className={classes['author-year']}>{book.author}, {book.year}</span>
                                <Button
                                    disabled={book.status !== Status.Available}
                                    parentStyles={classes.button}
                                >
                                    {createBtnText(book.status, book.borrowedTill)}
                                </Button>
                            </div>
                        </section>
                        <section className={classes.about}>
                            <h3 className={classes.subtitle}>О книге</h3>
                            <article className={classes.article}>
                                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и
                                большинство
                                таких задач уже были кем-то решены, протестированы и проверены.
                                Можно,
                                конечно, погрузится в глубокую философию гениального Кнута, изучить
                                многостраничные фолианты с доказательствами и обоснованиями, но
                                хотите ли вы
                                тратить на это свое время?<br/>
                                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
                                алгоритмы — это просто. А грокать алгоритмы — это веселое и
                                увлекательное
                                занятие.
                            </article>
                        </section>
                    </div>
                </div>
                <div className={classes['invisible']}>
                    <section className={classes['main-info']}>
                        {windowWidth < 1440 && imagesContainer}
                        <div className={classes['main-info__content']}>
                            <h2 className={classes.title}>{book.title}</h2>
                            <span
                                className={classes['author-year']}>{book.author}, {book.year}</span>
                            <Button
                                disabled={book.status !== Status.Available}
                                parentStyles={classes.button}
                            >
                                {createBtnText(book.status, book.borrowedTill)}
                            </Button>
                        </div>
                    </section>
                    <section className={classes.about}>
                        <h3 className={classes.subtitle}>О книге</h3>
                        <article className={classes.article}>
                            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и
                            большинство
                            таких задач уже были кем-то решены, протестированы и проверены. Можно,
                            конечно, погрузится в глубокую философию гениального Кнута, изучить
                            многостраничные фолианты с доказательствами и обоснованиями, но хотите
                            ли вы
                            тратить на это свое время?<br/>
                            Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
                            алгоритмы — это просто. А грокать алгоритмы — это веселое и
                            увлекательное
                            занятие.
                        </article>
                    </section>
                </div>
                <section className={classes.rating}>
                    <h3 className={`${classes.subtitle} ${classes.rating__title}`}>Рейтинг</h3>
                    <div className={classes.rating__content}>
                        <RatingStars
                            rating={book.rating}
                            containerStyles={classes['rating__stars']}
                            starStyles={classes['rating__star']}
                        />
                        {book.rating
                            ? (
                                <span className={classes.rating__amount}>
                                {book.rating.toFixed(1)}
                            </span>
                            )
                            : (
                                <span>ещё нет оценок</span>
                            )}
                    </div>
                </section>
                <section className={classes['full-info']}>
                    <h3 className={`${classes.subtitle} ${classes['full-info__title']}`}>
                        Подробная информация
                    </h3>
                    <hr className={classes['full-info__hr']}/>
                    <div className={classes['flex-container']}>
                        <div
                            className={`${classes['full-info__content']} ${classes['full-info__content_left']}`}>
                            <span className={classes['full-info__prop']}>Издательство</span>
                            <span className={classes['full-info__value']}>Питер</span>
                            <span className={classes['full-info__prop']}>Год издания</span>
                            <span className={classes['full-info__value']}>2019</span>
                            <span className={classes['full-info__prop']}>Страниц</span>
                            <span className={classes['full-info__value']}>288</span>
                            <span className={classes['full-info__prop']}>Переплёт</span>
                            <span className={classes['full-info__value']}>Мягкая обложка</span>
                            <span className={classes['full-info__prop']}>Формат</span>
                            <span className={classes['full-info__value']}>70х100</span>
                        </div>
                        <div className={classes['full-info__content']}>
                        <span
                            className={`${classes['full-info__prop']} ${classes['full-info__prop_genre']}`}>
                            Жанр
                        </span>
                            <span
                                className={`${classes['full-info__value']} ${classes['full-info__value_genre']}`}>
                            Компьютерная литература
                        </span>
                            <span className={classes['full-info__prop']}>Вес</span>
                            <span className={classes['full-info__value']}>370 г</span>
                            <span className={classes['full-info__prop']}>ISBN</span>
                            <span className={classes['full-info__value']}>978-5-4461-0923-4</span>
                            <span
                                className={`${classes['full-info__prop']} ${classes['full-info__prop_restrictions']}`}>
                            Возрастные ограничения
                        </span>
                            <span
                                className={`${classes['full-info__value']} ${classes['full-info__value_restrictions']}`}>16+</span>
                            <span className={classes['full-info__prop']}>Изготовитель</span>
                            <span className={classes['full-info__value']}>ООО «Питер Мейл». РФ, 198 206,<br/>
                            г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                        </span>
                        </div>
                    </div>
                </section>
                <section className={classes.reviews}>
                    <h3 className={`${classes.subtitle} ${classes.reviews__title} ${!reviewsIsOpen ? classes.reviews__title_hidden : ''}`}>
                        Отзывы <span className={classes.reviews__amount}>2</span>
                        <button
                            data-test-id="button-hide-reviews"
                            type="button"
                            className={classes['reviews__toggle-button']}
                            onClick={toggleReviewsHandler}
                        >
                            {reviewsIsOpen
                                ?
                                <i className={`${classes.reviews__icon} ${classes.reviews__icon_hide}`}/>
                                : <i className={classes.reviews__icon}/>
                            }
                        </button>
                    </h3>
                    {reviewsIsOpen && (
                        <>
                            <div className={classes.review}>
                                <div className={classes['review__header']}>
                                    <img src={reviewAvatarImg} alt="Avatar"
                                         className={classes.review__avatar}/>
                                    <div className={classes['review__info']}>
                                        <div className={classes.review__name}>Иван Иванов</div>
                                        <div>5 января 2019</div>
                                    </div>
                                </div>
                                <RatingStars
                                    rating={5}
                                    containerStyles={classes.review__stars}
                                    starStyles={classes.review__star}
                                />
                                <div className={classes.review__text}>
                                    Учитывая ключевые сценарии поведения, курс на
                                    социально-ориентированный
                                    национальный проект не оставляет шанса для анализа существующих
                                    паттернов
                                    поведения. Для современного мира внедрение современных методик
                                    предоставляет
                                    широкие возможности для позиций, занимаемых участниками в
                                    отношении
                                    поставленных задач. Как уже неоднократно упомянуто, сделанные на
                                    базе
                                    интернет-аналитики выводы будут в равной степени предоставлены
                                    сами
                                    себе.
                                    Вот вам яркий пример современных тенденций — глубокий уровень
                                    погружения
                                    создаёт предпосылки для своевременного выполнения сверхзадачи. И
                                    нет
                                    сомнений, что акционеры крупнейших компаний, инициированные
                                    исключительно
                                    синтетически, превращены в посмешище, хотя само их существование
                                    приносит
                                    несомненную пользу обществу.
                                </div>
                            </div>
                            <div className={classes.review}>
                                <div className={classes['review__header']}>
                                    <img src={reviewAvatarImg} alt="Avatar"
                                         className={classes.review__avatar}/>
                                    <div className={classes['review__info']}>
                                        <div className={classes.review__name}>Иван Иванов</div>
                                        <div>5 января 2019</div>
                                    </div>
                                </div>
                                <RatingStars
                                    rating={4}
                                    containerStyles={classes.review__stars}
                                    starStyles={classes.review__star}
                                />
                            </div>
                        </>
                    )}
                    <Button disabled={false} parentStyles={classes['reviews__comment-button']}>
                        Оценить книгу
                    </Button>
                </section>
            </main>
        </>
    );
};

export default BookLayout;
