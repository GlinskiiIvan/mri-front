import React from 'react';
import { Badge, Block, Button, IconButton, InfoList, Page, Stack } from '../ui/copmonents';

const pageProps = {
    title: 'Демонстрация вариантов списка информации' ,
    description: 'На этой странице представлены различные варианты списка информации' ,
}

const cardInfoOptions = [
  {key: 'Patient name', value: 'John Doe'}, 
  {key: 'Patient ID', value: '63048393'},
  {key: 'Gender', value: 'Male'},
  {key: 'Age', value: '32 years'},
  {key: 'Date of birth', value: '12 Mar 1994'},
  {key: 'Status', value: <Badge text='Normal' size='sm' status='success' />},
];

const InfoListsPage: React.FC = () => {

    return (
        <Page 
            title={pageProps.title} 
            description={pageProps.description} 
            decorativeIcon='INFO' >
            <Block 
                title='Список с шириной по контенту' decorativeIcon='INFO'
                actions={
                    <Stack direction='row' gap='xs' justify='center' align='center'>
                        <IconButton icon={{name: 'ADD', color: 'tertiary', size: 'lg'}} />
                        <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} />
                        <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} />
                    </Stack>
                }
                footer={
                    <Stack direction='row' gap='md' justify='center' align='center'>
                        <Button variant='secondary' icon='EDIT'>Перейти к пациенту</Button>
                        <Button variant='primary' icon='ADD'>Обследование</Button>
                    </Stack>
                } >
                <InfoList oprions={cardInfoOptions} />
            </Block>

            <Block
                fullWidth
                style={{maxWidth: '700px'}} 
                title='Список с шириной 100% и ограниченной максимальной' decorativeIcon='INFO'
                actions={
                    <Stack direction='row' gap='xs' justify='center' align='center'>
                        <IconButton icon={{name: 'ADD', color: 'tertiary', size: 'inherit'}} />
                        <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} />
                        <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} />
                    </Stack>
                }
                footer={
                    <Stack direction='row' gap='md' justify='center' align='center'>
                        <Button variant='secondary' icon='EDIT'>Перейти к пациенту</Button>
                        <Button variant='primary' icon='ADD'>Обследование</Button>
                    </Stack>
                } >
                <Stack direction='row' gap='md' justify='stretch' align='center'>
                    <InfoList oprions={cardInfoOptions} />
                    <InfoList oprions={cardInfoOptions} />
                </Stack>
            </Block>

            <Block 
                fullWidth
                title='Список с шириной 100% без ограничений' decorativeIcon='INFO'
                actions={
                    <Stack direction='row' gap='xs' justify='center' align='center'>
                        <IconButton icon={{name: 'ADD', color: 'tertiary', size: 'inherit'}} />
                        <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} />
                        <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} />
                    </Stack>
                }
                footer={
                    <Stack direction='row' gap='md' justify='center' align='center'>
                        <Button variant='secondary' icon='EDIT'>Перейти к пациенту</Button>
                        <Button variant='primary' icon='ADD'>Обследование</Button>
                    </Stack>
                } >
                <Stack direction='row' gap='md' justify='stretch' align='center'>
                    <InfoList oprions={cardInfoOptions} />
                    <InfoList oprions={cardInfoOptions} />
                    <InfoList oprions={cardInfoOptions} />
                </Stack>
            </Block>
        </Page>
    );
};

export default InfoListsPage;