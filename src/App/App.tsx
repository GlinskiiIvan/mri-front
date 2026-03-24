import React from 'react';

import {Sidebar, Stack, type IconPath} from '../ui/copmonents';
import { BadgesPage, ButtonsPage, CheckBoxesPage, FieldTriggersPage, FormFieldsPage, InfoListsPage, LabelsPage, MessageBoxesPage, ModalsPage, SelectsPage, TablesPage, TextFieldsPage } from '../pages/examples';
import logo from '../assets/images/logo-laba.png';
import userPhoto from '../assets/images/user.png';
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

function App() {
  return (
    <>
      <Sidebar 
        items={sidebatItems} 
        organization={{
            logo: logo,
            name: 'Gl-CO',
            to: '/'
        }}
        profile={{
            name: 'Brodyga',
            photo: userPhoto,
            role: 'Developer',
            logout: () => {console.log('LOGOUT')},
        }}
        openSettings={() => alert('Settings!')} />

      <Stack direction='column' gap='xl' justify='center' align='center'>
          <BadgesPage />
          <ButtonsPage />
          <InfoListsPage />
          <LabelsPage />
          <MessageBoxesPage />
          <FormFieldsPage />
          <FieldTriggersPage />
          <CheckBoxesPage />
          <TextFieldsPage />
          <SelectsPage />
          <ModalsPage />
          <TablesPage />
      </Stack>
    </>
  )
}

export default App
