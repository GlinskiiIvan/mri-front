import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { MainLayout } from '../../ui/layouts';
import { ROUTES } from '../routes';

import logo from '../../assets/images/logo-laba.png';
import userPhoto from '../../assets/images/user.png';
import type { IconPath } from '../../ui/copmonents';
import {ExamplesPage} from '../../pages/examples';
import App from '../../App';
const sidebatItems = [
    {
        links: [
            {
                to: '#sdg',
                label: 'about',
                tooltip: 'about',
                icon: 'INFO' as IconPath,
            }
        ]
    },
    {
        section: 'journals',
        links: [
            {
                to: '#dfg',
                label: 'analysis results',
                tooltip: 'analysis results',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#dfgdfg',
                label: 'daily reagent consumption',
                tooltip: 'daily reagent consumption',
                icon: 'INFO' as IconPath,
            }
        ]
    },
    {
        section: 'settings',
        links: [
            {
                to: '#ghgh',
                label: 'reagent consumption',
                tooltip: 'reagent consumption',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#dfhh',
                label: 'analysis standards',
                tooltip: 'analysis standards',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#fgjh',
                label: 'predefined results',
                tooltip: 'predefined results',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#fgh',
                label: 'analyses',
                tooltip: 'analyses',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#fghj',
                label: 'reagents',
                tooltip: 'reagents',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#ghjk',
                label: 'gost',
                tooltip: 'gost',
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
                        to: '/'
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
                <Route index element={<App />} />
                <Route path={ROUTES.Examples} element={ <ExamplesPage /> } />
            </Route>
            <Route path='*' element={ <Navigate to={ROUTES.Main}></Navigate> } />
        </Routes>        
    );
};

export default AppRouter;