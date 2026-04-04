import React from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { MainLayout } from '../../ui/layouts';
import { ROUTES } from '../routes';

import logo from '../../assets/images/logo-laba.png';
import userPhoto from '../../assets/images/user.png';
import type { IconPath } from '../../ui/copmonents';
import {ExamplesPage} from '../../pages/examples';
import { MainPage } from '../../pages';
import RequireAuth from '../../ui/app/RequireAuth';
import { checkThunk, logoutThunk, selectIsAuth, selectUserData } from '../../store/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import LoginPage from '../../pages/LoginPage';
const sidebatItems = [
    // {
    //     links: [
    //         {
    //             to: '#sdg',
    //             label: 'about',
    //             tooltip: 'about',
    //             icon: 'INFO' as IconPath,
    //         }
    //     ]
    // },
    {
        // section: 'journals',
        links: [
            {
                to: ROUTES.Main,
                label: 'Главная',
                tooltip: 'Главная',
                icon: 'INFO' as IconPath,
            },
            {
                to: ROUTES.Patients,
                label: 'Пациенты',
                tooltip: 'Пациенты',
                icon: 'INFO' as IconPath,
            },
            {
                to: ROUTES.Studies,
                label: 'Исследования',
                tooltip: 'Исследования',
                icon: 'INFO' as IconPath,
            },
            {
                to: ROUTES.Examples,
                label: 'UI компоненты',
                tooltip: 'UI компоненты',
                icon: 'INFO' as IconPath,
            },
        ]
    }
];

const AppRouter: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userData = useSelector(selectUserData);

    const logoutHandler = () => {
        dispatch(logoutThunk());
    }
    
    React.useEffect(() => {        
        dispatch(checkThunk());
    }, []);

    return (
        <Routes>
            <Route path={ROUTES.Login} element={ <LoginPage /> } />
            <Route path={ROUTES.Main} element={
                <RequireAuth>
                    <MainLayout sidebar={{
                    items: sidebatItems,
                    organization: {
                        logo: logo,
                        name: 'Gl-CO',
                        to: ROUTES.Main
                    },
                    profile: {
                        name: userData?.email,
                        photo: userPhoto,
                        role: userData?.roles?.join(', '),
                        logout: logoutHandler,
                    },
                    openSettings: () => alert('Settings!')
                }} />
                </RequireAuth>
                
            }>
                <Route index element={<MainPage />} />
                <Route path={ROUTES.Examples} element={ <ExamplesPage /> } />
            </Route>
            <Route path='*' element={ <Navigate to={ROUTES.Main}></Navigate> } />
        </Routes>        
    );
};

export default AppRouter;
