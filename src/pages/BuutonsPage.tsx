import React from 'react';
import { Block, Button, Page, Stack } from '../ui/copmonents';

const BuutonsPage: React.FC = () => {
    const testClickHandler = () => {
        alert('Test click on component!');
    };

    return (
        <Page 
            title='Демонстрация вариантов кнопок' 
            description='На этой странице представлены различные варианты кнопок, их состояния и стили. Используется для демонстрации и проверки компонентов интерфейса.' 
            decorativeIcon='INFO'>
            <Block title='Обычные кнопки'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button onClick={testClickHandler} variant='primary' intent='normal'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='normal'>Test button</Button>
                    <Button onClick={testClickHandler} variant='ghost' intent='normal'>Test button</Button>
                </Stack>
            </Block>
            <Block title='Обычные кнопки заблокированные'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button disabled onClick={testClickHandler} variant='primary' intent='normal'>Test button</Button>
                    <Button disabled onClick={testClickHandler} variant='secondary' intent='normal'>Test button</Button>
                    <Button disabled onClick={testClickHandler} variant='ghost' intent='normal'>Test button</Button>
                </Stack>
            </Block>
            <Block title='Опасные кнопки'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button onClick={testClickHandler} variant='primary' intent='destructive'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive'>Test button</Button>
                    <Button onClick={testClickHandler} variant='ghost' intent='destructive'>Test button</Button>
                </Stack>
            </Block>
            <Block title='Опасные кнопки заблокированные'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button disabled onClick={testClickHandler} variant='primary' intent='destructive'>Test button</Button>
                    <Button disabled onClick={testClickHandler} variant='secondary' intent='destructive'>Test button</Button>
                    <Button disabled onClick={testClickHandler} variant='ghost' intent='destructive'>Test button</Button>
                </Stack>
            </Block>
            <Block title='Обычные кнопки только иконка'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button onClick={testClickHandler} variant='primary' intent='normal' icon='LINK' />
                    <Button onClick={testClickHandler} variant='secondary' intent='normal' icon='LINK' />
                    <Button onClick={testClickHandler} variant='ghost' intent='normal' icon='LINK' />
                </Stack>
            </Block>
            <Block title='Опасные кнопки только иконка'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button onClick={testClickHandler} variant='primary' intent='destructive' icon='LINK' />
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive' icon='LINK' />
                    <Button onClick={testClickHandler} variant='ghost' intent='destructive' icon='LINK' />
                </Stack>
            </Block>
            <Block title='Обычные кнопки разных размеров'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button onClick={testClickHandler} variant='secondary' intent='normal' size='xl' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='normal' size='lg' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='normal' size='md' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='normal' size='sm' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='normal' size='xs' icon='IMAGE'>Test button</Button>
                </Stack>
            </Block>
            <Block title='Опасные кнопки разных размеров'>
                <Stack direction='row' gap='md' justify='center' align='center'>
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='xl' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='lg' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='md' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='sm' icon='IMAGE'>Test button</Button>
                    <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='xs' icon='IMAGE'>Test button</Button>
                </Stack>
            </Block>
        </Page>
    );
};

export default BuutonsPage;