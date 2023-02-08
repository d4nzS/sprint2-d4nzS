import { FC } from 'react';

import FooterToBottomContainer from '../components/UI/FooterToBottomContainer/FooterToBottomConainer';
import Header from '../components/Header/Header';
import BookLayout from '../components/BookLayout/BookLayout';
import Footer from '../components/Footer/Footer';

const BookPage: FC = () => {
    return (
        <FooterToBottomContainer>
            <Header/>
            <BookLayout/>
            <Footer/>
        </FooterToBottomContainer>
    );
};

export default BookPage;
