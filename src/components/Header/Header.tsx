import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';
import logoImg from '../../assets/images/logo.svg';
import avatarImg from '../../assets/images/avatar.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { uiActions } from '../../store/ui-slice';

const Header: FC = () => {
    const navbarIsShown = useAppSelector(state => state.ui.navbarIsShown);
    const dispatch = useAppDispatch();

    const toggleNavbarVisionHandler = (event: MouseEvent): void => {
        event.stopPropagation();

        dispatch(uiActions.toggleNavbar());
    };

    return (
        <header className={classes.header}>
            <Link to="/books/all">
                <img src={logoImg} alt="Logo" className={classes.logo}/>
            </Link>
            <div data-test-id="button-burger">
                <i
                    className={`${classes['menu-icon']} ${navbarIsShown ? classes['menu-icon_invisible'] : ''}`}
                    onClick={toggleNavbarVisionHandler}
                />
                <i
                    className={`${classes['menu-icon']} ${classes['menu-icon_active']} ${!navbarIsShown ? classes['menu-icon_invisible'] : ''}`}
                    onClick={toggleNavbarVisionHandler}
                />
            </div>
            <h2 className={classes.title}>Библиотека</h2>
            <div className={classes['user-info']}>
                <span>Привет, Иван!</span>
                <img src={avatarImg} alt="Avatar" className={classes['user-info__avatar']}/>
            </div>
        </header>
    );
};

export default Header;
