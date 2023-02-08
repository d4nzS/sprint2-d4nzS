import { FC, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import RulesPage from './pages/RulesPage';
import ContractPage from './pages/ContractPage';
import { useAppDispatch } from './store/hooks';
import { uiActions } from './store/ui-slice';

const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const clickBodyHandler = () => {
            dispatch(uiActions.hideNavbar());
        };

        const resizeWindowHandler = () => {
            dispatch(uiActions.getWindowWidth());
        };

        document.body.addEventListener('click', clickBodyHandler);
        window.addEventListener('resize', resizeWindowHandler);

        return () => {
            document.body.removeEventListener('click', clickBodyHandler);
            window.removeEventListener('resize', resizeWindowHandler);
        };
    }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/books/all"/>}/>
                <Route path="/books" element={<Navigate to="/books/all"/>}/>
                <Route path="/books/:category" element={<MainPage/>}/>
                <Route path="/books/:category/:bookId" element={<BookPage/>}/>
                <Route path="/terms" element={<RulesPage/>}/>
                <Route path="/contract" element={<ContractPage/>}/>
            </Routes>
        </HashRouter>
    );
};

export default App;
