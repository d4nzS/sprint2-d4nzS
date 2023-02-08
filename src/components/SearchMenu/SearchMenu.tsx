import { FC, useState } from 'react';

import classes from './SearchMenu.module.scss';
import { useAppSelector } from '../../store/hooks';
import button from '../UI/Button/Button';

export enum BooksDisplay { Grid, List }

interface SearchMenuProps {
    activeButton: BooksDisplay;

    onSwitchDisplay(design: BooksDisplay): void;
}

const SearchMenu: FC<SearchMenuProps> = ({ activeButton, onSwitchDisplay }) => {
    const windowWidth = useAppSelector(state => state.ui.windowWidth);
    const [inputIsShown, setInputIsShown] = useState<boolean>(false);

    const showInputHandler = (): void => {
        if (windowWidth >= 768) {
            return;
        }

        setInputIsShown(true);
    };

    const hideInputHandler = (): void => {
        setInputIsShown(false);
    };

    return (
        <section className={classes['search-menu']}>
            <div className={(windowWidth >= 768 || inputIsShown) ? classes['form-controller'] : ''}>
                {/*{!(inputIsShown && windowWidth < 768) && (*/}
                {/*    <button*/}
                {/*        data-test-id="button-search-open"*/}
                {/*        type="button"*/}
                {/*        className={`${classes.button} ${classes.button_search}`}*/}
                {/*        onClick={showInputHandler}*/}
                {/*    >*/}
                {/*        <i className={`${classes.icon} ${classes.icon_search}`}/>*/}
                {/*    </button>*/}
                {/*)}*/}
                {/*{(inputIsShown || windowWidth >= 768) && (*/}
                {/*    <>*/}
                {/*        <input*/}
                {/*            data-test-id="input-search"*/}
                {/*            type="text"*/}
                {/*            placeholder="Поиск книги или автора…"*/}
                {/*            className={classes.input}*/}
                {/*        />*/}
                {/*        {windowWidth < 768 && (*/}
                {/*            <button*/}
                {/*                type="button"*/}
                {/*                className={`${classes.button} ${classes['button_cross']}`}*/}
                {/*                onClick={hideInputHandler}*/}
                {/*            >*/}
                {/*                <i className={`${classes.icon} ${classes.icon_cross}`}/>*/}
                {/*            </button>*/}
                {/*        )}*/}
                {/*    </>*/}
                {/*)}*/}


                <button
                    data-test-id="button-search-open"
                    type="button"
                    className={`${classes.button} ${classes.button_search} ${(inputIsShown && windowWidth < 768) ? classes.invisible : ''}`}
                    onClick={showInputHandler}
                >
                    <i className={`${classes.icon} ${classes.icon_search}`}/>
                </button>
                <input
                    data-test-id="input-search"
                    type="text"
                    placeholder="Поиск книги или автора…"
                    className={`${classes.input} ${!(inputIsShown || windowWidth >= 768) ? classes.invisible : ''}`}
                />
                <button
                    data-test-id="button-search-close"
                    type="button"
                    className={`${classes.button} ${classes['button_cross']} ${!(inputIsShown && windowWidth < 768) ? classes.invisible : ''}`}
                    onClick={hideInputHandler}
                >
                    <i className={`${classes.icon} ${classes.icon_cross}`}/>
                </button>
            </div>
            {!(inputIsShown && windowWidth < 768) && (
                <>
                    <button
                        type="button"
                        className={`${classes.button} ${classes.button_rating}`}
                    >
                        <i className={`${classes.icon} ${classes.icon_rating}`}/>
                        <span className={classes['button-text']}>По рейтингу</span>
                    </button>
                    <button
                        data-test-id="button-menu-view-window"
                        type="button"
                        onClick={() => onSwitchDisplay(BooksDisplay.Grid)}
                        className={`${classes.button} ${classes.button_grid} ${activeButton === BooksDisplay.Grid && classes.button_active}`}
                    >
                        <i className={`${classes.icon} ${classes.icon_grid}`}/>
                    </button>
                    <button
                        data-test-id="button-menu-view-list"
                        type="button"
                        onClick={() => onSwitchDisplay(BooksDisplay.List)}
                        className={`${classes.button} ${classes.button_list} ${activeButton === BooksDisplay.List && classes.button_active}`}
                    >
                        <i className={`${classes.icon} ${classes.icon_list}`}/>
                    </button>
                </>
            )}
        </section>
    );
};

export default SearchMenu;
