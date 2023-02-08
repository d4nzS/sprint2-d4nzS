import { FC } from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import Terms, { ContentView } from '../components/Terms/Terms';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterToBottomContainer from '../components/UI/FooterToBottomContainer/FooterToBottomConainer';

const RulesPage: FC = () => {
    return (
        <FooterToBottomContainer>
            <Header/>
            <MainLayout parentStyles={{ marginTop: '48px' }}>
                <Terms contentView={ContentView.Terms}/>
            </MainLayout>
            <Footer/>
        </FooterToBottomContainer>
    );
};

export default RulesPage;
