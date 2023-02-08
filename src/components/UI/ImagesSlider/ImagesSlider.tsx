import { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import classes from './ImagesSlider.module.scss';
import ImagesSliderProps from './images-slider-interface';
import { useAppSelector } from '../../../store/hooks';
import ImagesSliderDesktop from './ImagesSliderDesktop/ImagesSliderDesktop';
import Image from '../Image/Image';

const ImagesSlider: FC<ImagesSliderProps> = props => {
    const { images, title, parentImgStyles } = props;
    const windowWidth = useAppSelector(state => state.ui.windowWidth);

    if (windowWidth >= 1440) {
        return <ImagesSliderDesktop {...props}/>;
    }

    return (
        <Swiper
            data-test-id="slide-big"
            pagination={true}
            modules={[Pagination]}
            className={classes.swiper}
            spaceBetween={30}
        >
            {images.map((imageUrl, index) => (
                <SwiperSlide
                    data-test-id="slide-mini"
                    key={index}
                >
                    <Image
                        url={imageUrl}
                        title={title}
                        imgStyles={`${parentImgStyles} ${classes['slide-image']}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ImagesSlider;
