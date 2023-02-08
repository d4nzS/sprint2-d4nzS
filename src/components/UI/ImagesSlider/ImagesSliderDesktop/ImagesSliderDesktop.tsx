import { FC, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import classes from './ImagesSliderDesktop.module.scss';
import ImagesSliderProps from '../images-slider-interface';
import Image from '../../Image/Image';

const ImagesSliderDesktop: FC<ImagesSliderProps> = ({ images, title, parentImgStyles }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    return (
        <div className={classes['swipers-container']}>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {images.map((imageUrl, index) => (
                    <SwiperSlide
                        data-test-id='slide-mini'
                        key={index}
                        className={classes['swiper-slide']}
                    >
                        <Image
                            url={imageUrl}
                            title={title}
                            imgStyles={parentImgStyles}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                data-test-id="slide-big"
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={classes['swiper-mini']}
            >
                {images.map((imageUrl, index) => (
                    <SwiperSlide
                        data-test-id='slide-mini'
                        key={index}
                    >
                        <Image
                            url={imageUrl}
                            title={title}
                            imgStyles={classes['swiper-mini__image']}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImagesSliderDesktop;
