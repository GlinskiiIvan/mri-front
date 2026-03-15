import React from 'react';
import styles from './App.module.css';
import {Badge, Button, CheckBox, FieldLayout, Icon, IconButton, Label, MessageBox} from '../ui/copmonents';

function App() {

  const testClick = () => {
    alert('Test click on component!');
  };

  const testMessages = ['message 1', 'message 2', 'message 3'];

  const [checked, setChecked] = React.useState(false);

  return (
    <div className='flex-col'>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
        <Icon name='IMAGE' color='success' size='40' />
      </p>

      <div className='flex-col'>
        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' icon='INFO' status='default' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='default' />
          <Badge text='Test badge md' size='md' icon='INFO' status='default' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='default' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='default' />
        </div>

        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' icon='INFO' status='danger' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='danger' />
          <Badge text='Test badge md' size='md' icon='INFO' status='danger' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='danger' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='danger' />
        </div>

        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' icon='INFO' status='success' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='success' />
          <Badge text='Test badge md' size='md' icon='INFO' status='success' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='success' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='success' />
        </div>

        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' icon='INFO' status='warning' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='warning' />
          <Badge text='Test badge md' size='md' icon='INFO' status='warning' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='warning' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='warning' />
        </div>

        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' icon='INFO' status='info' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='info' />
          <Badge text='Test badge md' size='md' icon='INFO' status='info' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='info' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='info' />
        </div>


        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge lg' size='lg' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge md' size='md' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge sm' size='sm' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge xs' size='xs' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <Button onClick={testClick} variant='primary' intent='normal'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='normal'>Test button</Button>
          <Button onClick={testClick} variant='ghost' intent='normal'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button variant='primary' intent='destructive'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='destructive'>Test button</Button>
          <Button onClick={testClick} variant='ghost' intent='destructive'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button onClick={testClick} variant='primary' intent='normal' icon='LINK' />
          <Button onClick={testClick} variant='secondary' intent='normal' icon='LINK' />
          <Button onClick={testClick} variant='ghost' intent='normal' icon='LINK' />
        </div>
        <div className='flex-row'>
          <Button onClick={testClick} variant='primary' intent='destructive' icon='LINK' />
          <Button onClick={testClick} variant='secondary' intent='destructive' icon='LINK' />
          <Button onClick={testClick} variant='ghost' intent='destructive' icon='LINK' />
        </div>
        <div className='flex-row'>
          <Button onClick={testClick} variant='secondary' intent='normal' size='xl' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='normal' size='lg' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='normal' size='md' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='normal' size='sm' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='normal' size='xs' icon='IMAGE'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button onClick={testClick} variant='secondary' intent='destructive' size='xl' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='destructive' size='lg' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='destructive' size='md' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='destructive' size='sm' icon='IMAGE'>Test button</Button>
          <Button onClick={testClick} variant='secondary' intent='destructive' size='xs' icon='IMAGE'>Test button</Button>
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <Label size='xl'>Test label...</Label>
          <Label size='lg'>Test label...</Label>
          <Label size='md'>Test label...</Label>
          <Label size='sm'>Test label...</Label>
          <Label size='xs'>Test label...</Label>
        </div>
        <div className='flex-row'>
          <Label color='primary'>Test label...</Label>
          <Label color='secondary'>Test label...</Label>
          <Label color='tertiary'>Test label...</Label>
          <Label color='disabled'>Test label...</Label>
          <Label color='danger'>Test label...</Label>
          <Label color='success'>Test label...</Label>
          <Label color='warning'>Test label...</Label>
          <Label color='accent'>Test label...</Label>
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <MessageBox validation={{status: 'default', messages: testMessages}} size='xl' />
          <MessageBox validation={{status: 'default', messages: testMessages}} size='lg' />
          <MessageBox validation={{status: 'default', messages: testMessages}} size='md' />
          <MessageBox validation={{status: 'default', messages: testMessages}} size='sm' />
          <MessageBox validation={{status: 'default', messages: testMessages}} size='xs' />
        </div>
        <div className='flex-row'>
          <MessageBox validation={{status: 'default', messages: testMessages}} />
          <MessageBox validation={{status: 'default', messages: testMessages}} />
          <MessageBox validation={{status: 'default', messages: testMessages}} />
          <MessageBox validation={{status: 'default', messages: testMessages}} />
          <MessageBox validation={{status: 'default', messages: testMessages}} />
        </div>
        <div className='flex-row'></div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <FieldLayout label={{text: 'Test label', position: 'top'}} validation={{status: 'default', messages: testMessages}}>
            <span>test</span> 
          </FieldLayout>
          <FieldLayout label={{text: 'Test label', position: 'right'}} validation={{status: 'default', messages: testMessages}}>
            <span>test</span> 
          </FieldLayout>
          <FieldLayout validation={{status: 'default', messages: testMessages}}>
            <span>test no label</span> 
          </FieldLayout>
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <CheckBox label='Test check-box' validation={{status: 'default', messages: testMessages}} value={checked} changeValue={setChecked} />
          <CheckBox label='Test check-box disabled' validation={{status: 'default', messages: testMessages}} value={false} changeValue={setChecked} disabled />
          <CheckBox label='Test check-box disabled' validation={{status: 'default', messages: testMessages}} value={true} changeValue={setChecked} disabled />
        </div>
      </div>
    </div>
  )
}

export default App
