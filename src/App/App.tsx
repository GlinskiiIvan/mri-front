import React from 'react';
import styles from './App.module.css';
import {Badge, Button, CheckBox, FieldLayout, Icon, IconButton, Label, MessageBox, Select, TextField} from '../ui/copmonents';

interface Option {id: number, name: string};

const testMessages = ['message 1', 'message 2', 'message 3'];
const testOptions: Option[] = [{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}, {id: 3, name: 'Option 3'}, {id: 4, name: 'Option 4'},];
const testOptions2: string[] = ['Option2 1', 'Option2 2', 'Option2 3', 'Option2 4'];

function App() {

  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [option, setOption] = React.useState<Option>();
  const [option2, setOption2] = React.useState<string>();

  const testClickHandler = () => {
    alert('Test click on component!');
  };

  const testClearTextFieldHandler = () => {
    setEmail('');
  };

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
          <Badge text='Test badge xl' size='xl' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClickHandler} />} />
          <Badge text='Test badge lg' size='lg' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClickHandler} />} />
          <Badge text='Test badge md' size='md' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClickHandler} />} />
          <Badge text='Test badge sm' size='sm' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClickHandler} />} />
          <Badge text='Test badge xs' size='xs' status='info' action={<IconButton name='EDIT' size='inherit' onClick={testClickHandler} />} />
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <Button onClick={testClickHandler} variant='primary' intent='normal'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='normal'>Test button</Button>
          <Button onClick={testClickHandler} variant='ghost' intent='normal'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button disabled onClick={testClickHandler} variant='primary' intent='normal'>Test button</Button>
          <Button disabled onClick={testClickHandler} variant='secondary' intent='normal'>Test button</Button>
          <Button disabled onClick={testClickHandler} variant='ghost' intent='normal'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button onClick={testClickHandler} variant='primary' intent='destructive'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='destructive'>Test button</Button>
          <Button onClick={testClickHandler} variant='ghost' intent='destructive'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button disabled onClick={testClickHandler} variant='primary' intent='destructive'>Test button</Button>
          <Button disabled onClick={testClickHandler} variant='secondary' intent='destructive'>Test button</Button>
          <Button disabled onClick={testClickHandler} variant='ghost' intent='destructive'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button onClick={testClickHandler} variant='primary' intent='normal' icon='LINK' />
          <Button onClick={testClickHandler} variant='secondary' intent='normal' icon='LINK' />
          <Button onClick={testClickHandler} variant='ghost' intent='normal' icon='LINK' />
        </div>
        <div className='flex-row'>
          <Button onClick={testClickHandler} variant='primary' intent='destructive' icon='LINK' />
          <Button onClick={testClickHandler} variant='secondary' intent='destructive' icon='LINK' />
          <Button onClick={testClickHandler} variant='ghost' intent='destructive' icon='LINK' />
        </div>
        <div className='flex-row'>
          <Button onClick={testClickHandler} variant='secondary' intent='normal' size='xl' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='normal' size='lg' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='normal' size='md' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='normal' size='sm' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='normal' size='xs' icon='IMAGE'>Test button</Button>
        </div>
        <div className='flex-row'>
          <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='xl' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='lg' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='md' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='sm' icon='IMAGE'>Test button</Button>
          <Button onClick={testClickHandler} variant='secondary' intent='destructive' size='xs' icon='IMAGE'>Test button</Button>
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
          <MessageBox validation={{status: 'success', messages: testMessages}} />
          <MessageBox validation={{status: 'warning', messages: testMessages}} />
          <MessageBox validation={{status: 'danger', messages: testMessages}} />
          <MessageBox validation={{status: 'info', messages: testMessages}} />
        </div>
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
        <div className='flex-row'>
          <CheckBox label='Test check-box' value={checked} changeValue={setChecked} />
          <CheckBox label='Test check-box disabled' value={false} changeValue={setChecked} disabled />
          <CheckBox label='Test check-box disabled' value={true} changeValue={setChecked} disabled />
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex-row'>
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            validation={{status: 'default', messages: testMessages}} 
            value={email} onChangeValue={setEmail}
            decorativeIcon='INFO' actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: true}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            validation={{status: 'default', messages: testMessages}} 
            value={email} onChangeValue={setEmail}
            actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: true}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            validation={{status: 'default', messages: testMessages}} 
            value={email} onChangeValue={setEmail}
            decorativeIcon='INFO' />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            validation={{status: 'default', messages: testMessages}} 
            value={email} onChangeValue={setEmail} />
        </div>
        <div className='flex-row'>
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail}
            decorativeIcon='INFO' actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: !!email}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail}
            actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: !!email}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail}
            decorativeIcon='INFO' />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} />
        </div>
        <div className='flex-row'>
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} validation={{status: 'default', messages: testMessages}}
            decorativeIcon='INFO' actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: !!email}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} validation={{status: 'success', messages: testMessages}}
            actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: !!email}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} validation={{status: 'warning', messages: testMessages}}
            decorativeIcon='INFO' />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} validation={{status: 'danger', messages: testMessages}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} validation={{status: 'info', messages: testMessages}} />
        </div>
        <div className='flex-row'>
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} disabled={true}
            decorativeIcon='INFO' actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: true}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} disabled={true}
            actionIcon={{name: 'REMOVE', onClick: testClearTextFieldHandler, visible: true}} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} disabled={true}
            decorativeIcon='INFO' />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} disabled={true} />
        </div>
        <TextField 
            style={{maxWidth: '500px'}}
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} disabled={true} />
          <TextField 
            label='Test text field email' placeholder='Enter email...'
            value={email} onChangeValue={setEmail} disabled={true} />
      </div>

      <div className='flex-col ' style={{width: '700px'}}>
        <div className='flex-row' style={{width: '100%'}}>
          <Select
            label='Test select' options={testOptions} 
            getKey={(T) => T.id} getValue={(T) => T.name}
            value={option} onChangeValue={setOption} 
            placeholder='Select value...' decorativeIcon='FILTER'
            validation={{status: 'default', messages: []}} />

          <Select
            label='Test select' options={testOptions2} 
            value={option2} onChangeValue={setOption2} 
            placeholder='Select value...' decorativeIcon='FILTER'
            validation={{status: 'default', messages: []}} />
        </div>
      </div>
    </div>
  )
}

export default App
