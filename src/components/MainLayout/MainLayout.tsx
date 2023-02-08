import { FC } from 'react';

import classes from './MainLayout.module.scss';
import Navbar from '../Navbar/Navbar';

interface MainProps {
    parentStyles?: object;
    children: JSX.Element | JSX.Element[];
}

const MainLayout: FC<MainProps> = ({ parentStyles, children }) => {
    return (
        <div className={`${classes['main-layout']}`} style={parentStyles}>
            <Navbar/>
            <main className={classes['flex-item']}>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
