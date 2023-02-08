import { FC, MouseEvent, useLayoutEffect, useState } from 'react';

import classes from './Navbar.module.scss';
import { BOOK_CATEGORIES } from '../../data/data';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const Navbar: FC = () => {
    const { windowWidth, navbarIsShown } = useAppSelector(state => state.ui);
    const navigate = useNavigate();
    const location = useLocation();
    const bookShowcaseIsActive = location.pathname.startsWith('/books');
    const [showcaseListIsOpen, setShowcaseListIsOpen] = useState<boolean>(true);

    useLayoutEffect(() => {
        if (!bookShowcaseIsActive) {
            setShowcaseListIsOpen(false);
        }
    }, [location])

    const stopPropagationHandler = (event: MouseEvent): void => {
        event.stopPropagation();
    };

    const hideNavbarHandler = (): void => {
        document.body.dispatchEvent(new Event('click'));
    };

    const linkToBookShowcaseHandler = (event: MouseEvent): void => {
        event.preventDefault();

        if (!bookShowcaseIsActive) {
            navigate('/books/all');
            setShowcaseListIsOpen(true);
        }

        setShowcaseListIsOpen(prevState => !prevState);
    };

    const linkInsideBookShowcaseHandler = () => {
        hideNavbarHandler();

        setShowcaseListIsOpen(false);
    };

    return (
        <nav
            data-test-id="burger-navigation"
            className={`${classes.navbar} ${!navbarIsShown ? classes.navbar_invisible : ''}`}
            onClick={stopPropagationHandler}
        >
            <ul className={classes['main-list']}>
                <li className={classes['main-item']}>
                    <a
                        data-test-id={windowWidth > 768 ? 'navigation-showcase' : 'burger-showcase'}
                        href="#"
                        className={bookShowcaseIsActive ? classes['active-link'] : ''}
                        onClick={linkToBookShowcaseHandler}
                    >
                        <span>Витрина книг</span>
                        {bookShowcaseIsActive && (showcaseListIsOpen
                            ? <i className={classes['main-item__icon']}/>
                            : <i className={`${classes['main-item__icon']} ${classes['main-item__icon_hide']}`}/>)}
                    </a>
                    <ul className={`${classes['categories-list']} ${!showcaseListIsOpen ? classes.invisible : ''}`}>
                        {BOOK_CATEGORIES.map((category) => (
                            <li
                                key={category.path}
                                className={classes['category-item']}
                            >
                                <NavLink
                                    data-test-id={category.path === 'all'
                                        ? (windowWidth > 768
                                            ? 'navigation-books'
                                            : 'burger-books'
                                        )
                                        : undefined}
                                    to={`/books/${category.path}`}
                                    className={({ isActive }) => isActive ? classes['active-sublink'] : ''}
                                    onClick={linkInsideBookShowcaseHandler}
                                >
                                    <span
                                        className={classes['span-category']}>{category.title}</span><span
                                    className={classes['span-amount']}>{category.amount}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className={classes['main-item']}>
                    <NavLink
                        data-test-id={windowWidth > 768 ? 'navigation-terms' : 'burger-terms'}
                        to="/terms"
                        className={({ isActive }) => isActive ? classes['active-link'] : ''}
                        onClick={hideNavbarHandler}
                    >
                        Правила пользования
                    </NavLink>
                </li>
                <li className={classes['main-item']}>
                    <NavLink
                        data-test-id={windowWidth > 768 ? 'navigation-contract' : 'burger-contract'}
                        to="/contract"
                        className={({ isActive }) => isActive ? classes['active-link'] : ''}
                        onClick={hideNavbarHandler}
                    >
                        Договор оферты
                    </NavLink>
                </li>
                <div className={classes['additional-main-items-container']}>
                    <hr className={classes.hr}/>
                    <li className={classes['main-item']}>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => isActive ? classes['active-link'] : ''}
                        >
                            Профиль
                        </NavLink>
                    </li>
                    <li className={classes['main-item']}>
                        <NavLink
                            to="/exit"
                            className={({ isActive }) => isActive ? classes['active-link'] : ''}
                        >
                            Выход
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
