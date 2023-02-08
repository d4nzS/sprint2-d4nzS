import { FC } from 'react';

import bookImg from '../../../assets/images/book.png';
import classes from './Image.module.scss';

interface ImageProps {
    url?: string;
    title: string;
    imgStyles: string;
    defaultIconStyles?: string;
}

const Image: FC<ImageProps> = ({ url, title, imgStyles, defaultIconStyles }) => {
    return (
        <>
            {url
                ? <img
                    src={bookImg}
                    alt={title}
                    className={imgStyles}
                />
                : (
                    <div className={`${classes['default-image']} ${imgStyles}`}>
                        <i className={`${classes['default-icon']} ${defaultIconStyles || ''}`}/>
                    </div>
                )}
        </>
    );
};

export default Image;
