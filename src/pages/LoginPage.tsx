import React from 'react';
import { Block, Button, Page, Stack, TextField } from '../ui/copmonents';
import { testClickHandler } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { loginThunk, selectUser } from '../store/slices/auth';
import { addNotice } from '../store/slices/notices';
import { ROUTES } from '../routes';

type LoginData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const userData = useSelector(selectUser);

    
    const [loginInputs, setLoginInputs] = React.useState<LoginData>({
        email: '',
        password: '',
    });

    const loginHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await dispatch(loginThunk({email: loginInputs.email, password: loginInputs.password}));
    }

    React.useEffect(() => {
        if(userData.status === 'SUCCESS' && Boolean(userData.userData)) {
            dispatch(addNotice({type: 'success', message: 'Вы успешно авторизовались!'}));

            const originUrl = localStorage.getItem('originUrl');
            const to = (originUrl !== ROUTES.Login) ? (originUrl || ROUTES.Main) : ROUTES.Main;
            navigate(to);
        }
        if(userData.status === 'ERROR' && Boolean(userData.error)) {
            dispatch(addNotice({type: 'error', message: 'Ошбика при авторизации. Что то пошло не так...'}));
        }
    }, [userData.status]);

    return (
        <Page>
            <Block 
                decorativeIcon='INFO' title='Авторизация в системе'
                fullWidth style={{maxWidth: '50%'}}>
                <Stack direction='column' gap='md' justify='center' align='stretch'>
                    <TextField
                        label='Email' placeholder='Введите email...' 
                        validation={{status: 'default', messages: []}}
                        value={loginInputs.email} onChangeValue={(value: string) => setLoginInputs(prev => ({...prev, email: value}))} />
                    <TextField
                        type='password'
                        label='Пароль' placeholder='Введите пароль...' 
                        validation={{status: 'default', messages: []}}
                        value={loginInputs.password} onChangeValue={(value: string) => setLoginInputs(prev => ({...prev, password: value}))} />
                    <Button onClick={loginHandler} variant='primary' intent='normal' size='md'>Войти</Button>
                </Stack>
            </Block>
        </Page>
    );
};

export default LoginPage;