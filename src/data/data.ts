import Book, { Status } from '../models/book';
import BookCategory from '../models/book-category';
import bookImg from '../assets/images/book.png';

export const BOOK_CATEGORIES = [
    new BookCategory('Все книги', 'all', 157),
    new BookCategory('Бизнес-книги', 'business', 16),
    new BookCategory('Детективы', 'detectives', 8),
    new BookCategory('Детские книги', 'child', 14),
    new BookCategory('Зарубежная литература', 'foreign', 2),
    new BookCategory('История', 'history', 5),
    new BookCategory('Классическая литература', 'classic', 12),
    new BookCategory('Книги по психологии', 'psychology', 11),
    new BookCategory('Компьютерная литература', 'computer', 54),
    new BookCategory('Культура и искусство', 'art', 5),
    new BookCategory('Наука и образование', 'education', 2),
    new BookCategory('Публицистическая литература', 'journalism', 0),
    new BookCategory('Справочники', 'directories', 10),
    new BookCategory('Фантастика', 'fantasy', 12),
    new BookCategory('Юмористическая литература', 'humour', 8)
];

export const BOOKS = [
    new Book(
        'b1',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Available,
        []
    ),
    new Book(
        'b2',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        3,
        2019,
        Status.Available,
        [bookImg]
    ),
    new Book(
        'b3',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        5,
        2019,
        Status.Borrowed,
        [bookImg, bookImg],
        Date.now()
    ),
    new Book(
        'b4',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        1,
        2019,
        Status.Available,
        []
    ),
    new Book(
        'b5',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Ordered,
        []
    ),
    new Book(
        'b6',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Available,
        []
    ),
    new Book(
        'b7',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Available,
        []
    ),
    new Book(
        'b8',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Available,
        [bookImg]
    ),
    new Book(
        'b9',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Available,
        []
    ),
    new Book(
        'b10',
        'Компьютерная литература',
        'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        'Aдитья Бхаргава',
        0,
        2019,
        Status.Available,
        [bookImg, bookImg, bookImg, bookImg, bookImg, bookImg]
    )
];
