import { FC } from 'react';

import classes from './FooterToBottomConainer.module.scss';

interface ContainerProps {
    children: JSX.Element[]
}

const FooterToBottomContainer: FC<ContainerProps> = ({ children }) => {
    return <div className={classes.container}>{children}</div>;
};

export default FooterToBottomContainer;
