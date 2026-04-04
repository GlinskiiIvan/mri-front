import React from 'react';
import { Block, IconButton, Page, Stack, Table, TBody, THead, type ColumnTable, type IconPath, type SortedColumn } from '../ui/copmonents';
import type { PageProps } from '../ui/copmonents/Page';
import { patientApi } from '../store/services/patient';

const pageProps: Partial<PageProps> = {
    title: 'Список всех пациентов' ,
    description: 'На этой странице представлены все пациенты которых ведет доктор.' ,
    decorativeIcon: 'INFO' as IconPath,
}

const PatientPage = () => {
    const {data: allData} = patientApi.useFindAllQuery({});
    const data = allData?.data || [];

    const columns: ColumnTable<typeof data[number]>[] = [
        {key: 'id', label: 'ID', sortable: true}, 
        {key: 'fullName', label: 'Имя', sortable: true}, 
        {key: 'gender', label: 'Пол', sortable: true}, 
        {key: 'note', label: 'Примечание', sortable: true}, 
    ];

    const [sortedColumn, setSortedColumn] = React.useState<SortedColumn<typeof data[number]>>();
    
    return (
        <Page
            {...pageProps} >
            <Block 
                title='Пациенты' 
                fullWidth 
                actions={
                    <Stack direction='row' gap='xs' justify='center' align='center'>
                        <IconButton icon={{name: 'ADD', color: 'tertiary', size: 'lg'}} />
                        <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} />
                        <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} />
                    </Stack>
                }>
                <Table maxHeight={400}>
                    <THead columns={columns} sorting={{sortedColumn, onchangeSortedColumn: setSortedColumn}} />
                    <TBody rowKey='id' columns={columns} data={data} />
                </Table>
            </Block>
        </Page>
    );
};

export default PatientPage;