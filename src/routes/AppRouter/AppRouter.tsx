import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { MainLayout } from '../../ui/layouts';
import { ROUTES } from '../routes';

import logo from '../../assets/images/logo-laba.png';
import userPhoto from '../../assets/images/user.png';
import type { IconPath } from '../../ui/copmonents';
import {ExamplesPage} from '../../pages/examples';
import { MainPage } from '../../pages';
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

    return (
        <Routes>
            <Route path={ROUTES.Main} element={
                <MainLayout sidebar={{
                    items: sidebatItems,
                    organization: {
                        logo: logo,
                        name: 'Gl-CO',
                        to: ROUTES.Main
                    },
                    profile: {
                        name: 'Brodyga',
                        photo: userPhoto,
                        role: 'Developer',
                        logout: () => {console.log('LOGOUT')},
                    },
                    openSettings: () => alert('Settings!')
                }} />
            }>
                <Route index element={<MainPage />} />
                <Route path={ROUTES.Examples} element={ <ExamplesPage /> } />
            </Route>
            <Route path='*' element={ <Navigate to={ROUTES.Main}></Navigate> } />
        </Routes>        
    );
};

export default AppRouter;