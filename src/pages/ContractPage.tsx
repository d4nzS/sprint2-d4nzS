import { FC } from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import Terms, { ContentView } from '../components/Terms/Terms';
import FooterToBottomContainer from '../components/UI/FooterToBottomContainer/FooterToBottomConainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ContractPage: FC = () => {
    return (
        <FooterToBottomContainer>
            <Header/>
            <MainLayout parentStyles={{ marginTop: '48px' }}>
                <Terms contentView={ContentView.Contract}/>
            </MainLayout>
            <Footer/>
        </FooterToBottomContainer>
    );
};

export default ContractPage;
