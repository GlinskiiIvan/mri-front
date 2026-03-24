import React from 'react';

import {Sidebar, Stack, type IconPath} from '../ui/copmonents';
import { BadgesPage, ButtonsPage, CheckBoxesPage, FieldTriggersPage, FormFieldsPage, InfoListsPage, LabelsPage, MessageBoxesPage, ModalsPage, SelectsPage, TablesPage, TextFieldsPage } from '../pages/examples';
import logo from '../assets/images/logo-laba.png';
import userPhoto from '../assets/images/user.png';
const sidebatItems = [
    {
        links: [
            {
                to: '#',
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
                to: '#',
                label: 'analysis results',
                tooltip: 'analysis results',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#',
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
                to: '#',
                label: 'reagent consumption',
                tooltip: 'reagent consumption',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#',
                label: 'analysis standards',
                tooltip: 'analysis standards',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#',
                label: 'predefined results',
                tooltip: 'predefined results',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#',
                label: 'analyses',
                tooltip: 'analyses',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#',
                label: 'reagents',
                tooltip: 'reagents',
                icon: 'INFO' as IconPath,
            },
            {
                to: '#',
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
        logo={logo} 
        orgName='Gl-CO' 
        userName='Brodyga' 
        userPhoto={userPhoto} 
        userRole='Developer' 
        logout={() => {console.log('LOGOUT')}} />

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
