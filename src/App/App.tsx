import React from 'react';

import {Stack} from '../ui/copmonents';
import BadgesPage from '../pages/BadgesPage';
import ButtonsPage from '../pages/ButtonsPage';
import InfoListsPage from '../pages/InfoListsPage';
import LabelsPage from '../pages/LabelsPage';
import MessageBoxesPage from '../pages/MessageBoxesPage';
import FormFieldsPage from '../pages/FormFieldsPage';
import FieldTriggersPage from '../pages/FieldTriggersPage';
import CheckBoxesPage from '../pages/CheckBoxesPage';
import TextFieldsPage from '../pages/TextFieldsPage';
import SelectsPage from '../pages/SelectsPage';
import ModalsPage from '../pages/ModalsPage';
import TablesPage from '../pages/TablesPage';



function App() {
  return (
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
  )
}

export default App
