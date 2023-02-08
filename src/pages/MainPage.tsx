import { FC, useState } from 'react';

import SearchMenu, { BooksDisplay } from '../components/SearchMenu/SearchMenu';
import BooksList from '../components/BooksList/BooksList';
import MainLayout from '../components/MainLayout/MainLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterToBottomContainer from '../components/UI/FooterToBottomContainer/FooterToBottomConainer';

const MainPage: FC = () => {
    const [booksDisplay, setBooksDisplay] = useState<BooksDisplay>(BooksDisplay.Grid);

    const switchBooksDisplay = (design: BooksDisplay): void => {
        setBooksDisplay(design);
    };

    return (
        <FooterToBottomContainer>
            <Header/>
            <MainLayout>
                <SearchMenu
                    activeButton={booksDisplay}
                    onSwitchDisplay={switchBooksDisplay}
                />
                <BooksList display={booksDisplay}/>
            </MainLayout>
            <Footer/>
        </FooterToBottomContainer>
    );
};

export default MainPage;
