import React from 'react';

import {Stack} from '../ui/copmonents';
import { BadgesPage, ButtonsPage, CheckBoxesPage, FieldTriggersPage, FormFieldsPage, InfoListsPage, LabelsPage, MessageBoxesPage, ModalsPage, SelectsPage, TablesPage, TextFieldsPage } from '../pages/examples';

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
