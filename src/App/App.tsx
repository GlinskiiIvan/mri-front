import React from 'react';
import styles from './App.module.css';
import {Badge, Block, Button, CardInfo, CheckBox, FieldLayout, Icon, IconButton, Label, MessageBox, Modal, Select, Stack, Table, TBody, TextField, THead, type ColumnTable, type SortedColumn} from '../ui/copmonents';

interface Option {id: number, name: string};

const testMessages = ['message 1', 'message 2', 'message 3'];
const testOptions: Option[] = [{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}, {id: 3, name: 'Option 3'}, {id: 4, name: 'Option 4'},];
const testOptions2: string[] = ['Option2 1', 'Option2 2', 'Option2 3', 'Option2 4'];

const cardInfoOptions = [
  {key: 'Patient name', value: 'John Doe'}, 
  {key: 'Patient ID', value: '63048393'},
  {key: 'Gender', value: 'Male'},
  {key: 'Age', value: '32 years'},
  {key: 'Date of birth', value: '12 Mar 1994'},
  {key: 'Status', value: <Badge text='Normal' size='sm' status='success' />},
];

const companies = [
  {
      id: 1,
      COMPANIES: 'Chakra Vision UI Version',
      MEMBERS: 'Ryan Tompson',
      BUDGET: {test: 23, many: '$14,000'},
      COMPLETION: '60',
  },
  {
      id: 2,
      COMPANIES: 'Add Progress Track',
      MEMBERS: 'Alexander Smith',
      BUDGET: {test: 23, many: '$3,000'},
      COMPLETION: '10',
  },
  {
      id: 3,
      COMPANIES: 'Fix Platform Errors',
      MEMBERS: 'Jessica Doe',
      BUDGET: {test: 23, many: 'Not set'},
      COMPLETION: '100',
  },
  {
      id: 4,
      COMPANIES: 'Launch our Mobile App',
      MEMBERS: 'Romina Hadid',
      BUDGET: {test: 23, many: '$20,500'},
      COMPLETION: '100',
  },
  {
      id: 5,
      COMPANIES: 'Add the New Pricing Page',
      MEMBERS: 'Alexander Smith',
      BUDGET: {test: 23, many: '$500'},
      COMPLETION: '25',
  },
  {
      id: 6,
      COMPANIES: 'Redesign New Online Shop',
      MEMBERS: 'Ryan Tompson',
      BUDGET: {test: 23, many: '$2,000'},
      COMPLETION: '40',
  }
]

const columns: ColumnTable<typeof companies[number]>[] = [
  {key: 'COMPANIES', label: 'Companies', sortable: true}, 
  {key: 'MEMBERS', label: 'Members', sortable: false}, 
  {key: 'BUDGET', label: 'Budget', sortable: true, render: (item) => (<Badge text={String(item.BUDGET.many)} status={'success'} size={'sm'} />)}, 
  {key: 'COMPLETION', label: 'Completion', sortable: true},
];

const columnsFixed: ColumnTable<typeof companies[number]>[] = [
  {key: 'COMPANIES', label: 'Companies', sortable: true, width: '300px'}, 
  {key: 'MEMBERS', label: 'Members', sortable: false, width: '200px'}, 
  {key: 'BUDGET', label: 'Budget', sortable: true, width: '200px', render: (item) => (<Badge text={String(item.BUDGET.many)} status={'success'} size={'sm'} />)}, 
  {key: 'COMPLETION', label: 'Completion', sortable: true, width: '200px'},
];

function App() {

  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [option, setOption] = React.useState<Option>();
  const [option2, setOption2] = React.useState<string>();
  const [modal, setVisibleModal] = React.useState(false);
  const [modal2, setVisibleModal2] = React.useState(false);
  const [sortedColumn, setSortedColumn] = React.useState<SortedColumn<typeof companies[number]>>();
  const [selectedRow, setSelectedRow] = React.useState<typeof companies[number]>();

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
        <Icon name='IMAGE' color='success' size='xl' />
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
          <Badge text='Test badge xl' size='xl' status='info' action={{icon: 'EDIT', onClick: testClickHandler}} />
          <Badge text='Test badge lg' size='lg' status='info' action={{icon: 'EDIT', onClick: testClickHandler}} />
          <Badge text='Test badge md' size='md' status='info' action={{icon: 'EDIT', onClick: testClickHandler}} />
          <Badge text='Test badge sm' size='sm' status='info' action={{icon: 'EDIT', onClick: testClickHandler}} />
          <Badge text='Test badge xs' size='xs' status='info' action={{icon: 'EDIT', onClick: testClickHandler}} />
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

      <Block
        style={{maxWidth: '500px'}} 
        title='Результаты обследования' decorativeIcon='INFO'
        actions={
          <Stack direction='row' gap='xs' justify='center' align='center'>
            <IconButton icon={{name: 'ADD', color: 'tertiary', size: 'lg'}} />
            <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} />
            <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} />
          </Stack>
        }
        footer={
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
            <Button variant='secondary' icon='EDIT'>Перейти к пациенту</Button>
            <Button variant='primary' icon='ADD'>Обследование</Button>
          </div>
        } >
        <div style={{display: 'flex', gap: '32px'}}>
          <CardInfo oprions={cardInfoOptions} />
        </div>
      </Block>

      <Block
        style={{maxWidth: '1000px', width: '100%'}} 
        title='Результаты обследования' decorativeIcon='INFO'
        actions={
          <Stack direction='row' gap='xs' justify='center' align='center'>
            <IconButton icon={{name: 'ADD', color: 'tertiary', size: 'inherit'}} />
            <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} />
            <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} />
          </Stack>
        }
        footer={
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
            <Button variant='secondary' icon='EDIT'>Перейти к пациенту</Button>
            <Button variant='primary' icon='ADD'>Обследование</Button>
          </div>
        } >
        <div style={{display: 'flex', gap: '32px'}}>
          <CardInfo oprions={cardInfoOptions} />
          <CardInfo oprions={cardInfoOptions} />
        </div>
      </Block>

      <Block 
        style={{width: '100%'}}
        title='Результаты обследования' decorativeIcon='INFO'
        footer={
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
            <Button variant='secondary' icon='EDIT'>Перейти к пациенту</Button>
            <Button variant='primary' icon='ADD' onClick={() => setVisibleModal(true)}>Обследование</Button>
          </div>
        } >
        <div style={{display: 'flex', gap: '32px'}}>
          <CardInfo oprions={cardInfoOptions} />
          <CardInfo oprions={cardInfoOptions} />
          <CardInfo oprions={cardInfoOptions} />
        </div>
      </Block>

      <Modal  
        visible={modal} setVisible={setVisibleModal} 
        title='Test modal' footer={
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
            <Button variant='primary' icon='ADD' onClick={() => setVisibleModal2(true)}>Обследование</Button>
          </div>
        }>
        <CardInfo oprions={cardInfoOptions} />
        <CardInfo oprions={cardInfoOptions} />
        <CardInfo oprions={cardInfoOptions} />
        <CardInfo oprions={cardInfoOptions} />
      </Modal>

      <Modal title='Test modal 2' visible={modal2} setVisible={setVisibleModal2}>
        test modal 2
      </Modal>

      <Block title='Test table'style={{width: '600px'}}>
        <Table fixedColumnWidth maxHeight={400}>
          <THead columns={columnsFixed} sorting={{sortedColumn, onchangeSortedColumn: setSortedColumn}} />
          <TBody rowKey='id' rowClick={(row) => alert(`row: ${row.MEMBERS}`)} columns={columnsFixed} data={[...companies, ...companies, ...companies, ...companies]} />
        </Table>
      </Block>

      <Block title='Test table' style={{width: '100%'}}>
        <Table maxHeight={400}>
          <THead columns={columns} sorting={{sortedColumn, onchangeSortedColumn: setSortedColumn}} />
          <TBody rowKey='id' columns={columns} data={companies} select={{selectedRow, onChange: setSelectedRow}} />
        </Table>
      </Block>

      <Block title='Test table' style={{width: '100%'}}>
        <Table maxHeight={400}>
          <THead columns={columns} sorting={{sortedColumn, onchangeSortedColumn: setSortedColumn}} />
          <TBody rowKey='id' columns={columns} data={companies} />
        </Table>
      </Block>

    </div>
  )
}

export default App
