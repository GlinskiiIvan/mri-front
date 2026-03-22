import React from 'react';
import { Block, Button, InfoList, Modal, Page, Stack } from '../ui/copmonents';
import { patientInfoList } from '../utils';

const pageProps = {
    title: 'Демонстрация вариантов модального окна' ,
    description: 'На этой странице представлены различные варианты модального окна' ,
}

const ModalsPage: React.FC = () => {
    const [modal, setVisibleModal] = React.useState(false);

    return (
        <Page 
            title={pageProps.title} 
            description={pageProps.description} 
            decorativeIcon='INFO' >
            <Block>
                <Stack direction='row' gap='md' justify='flex-start' align='center'>
                    <Button variant={'primary'} onClick={() => setVisibleModal(true)}>Open modal</Button>
                </Stack>
            </Block>

            <Modal  
                visible={modal} setVisible={setVisibleModal} 
                title='Test modal' footer={
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
                        <Button variant='primary' icon='ADD'>Обследование</Button>
                    </div>
                }>
                <InfoList oprions={patientInfoList} />
                <InfoList oprions={patientInfoList} />
                <InfoList oprions={patientInfoList} />
                <InfoList oprions={patientInfoList} />
            </Modal>
        </Page>
    );
};

export default ModalsPage;