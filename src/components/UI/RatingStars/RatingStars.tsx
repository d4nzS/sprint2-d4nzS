import { FC } from 'react';

import classes from './RatingStars.module.scss';

function createRatingWithStars(rating: number, additionalStyles: string): JSX.Element[] {
    const starsArr: JSX.Element[] = [];

    for (let i = 1; i <= 5; i++) {
        starsArr.push(<i
            key={i}
            className={`${classes['rating-star']} ${additionalStyles} ${rating < i
                ? classes['rating-star_empty']
                : ''}`}
        />);
    }

    return starsArr;
}

interface RatingStarsProps {
    rating: number;
    containerStyles: string;
    starStyles: string;
}

const RatingStars: FC<RatingStarsProps> = ({ rating, containerStyles, starStyles }) => {
    return (
        <div className={`${classes.rating} ${containerStyles}`}>
            {createRatingWithStars(rating, starStyles)}
        </div>
    );
};

export default RatingStars;
