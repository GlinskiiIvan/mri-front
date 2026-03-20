import React from 'react';
// import styles from './App.module.css';
import {Badge, Block, Button, InfoList, CheckBox, Modal, Select, Stack, Table, TBody, TextField, THead, type ColumnTable, type SortedColumn} from '../ui/copmonents';
import BadgesPage from '../pages/BadgesPage';
import ButtonsPage from '../pages/ButtonsPage';
import InfoListsPage from '../pages/InfoListsPage';
import LabelsPage from '../pages/LabelsPage';
import MessageBoxesPage from '../pages/MessageBoxesPage';
import FielsLayoutsPage from '../pages/FielsLayoutsPage';

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

  const testClearTextFieldHandler = () => {
    setEmail('');
  };

  return (
    <Stack direction='column' gap='xl' justify='center' align='center'>
        <BadgesPage />
        <ButtonsPage />
        <InfoListsPage />
        <LabelsPage />
        <MessageBoxesPage />
        <FielsLayoutsPage />

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

      <Modal  
        visible={modal} setVisible={setVisibleModal} 
        title='Test modal' footer={
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
            <Button variant='primary' icon='ADD' onClick={() => setVisibleModal2(true)}>Обследование</Button>
          </div>
        }>
        <InfoList oprions={cardInfoOptions} />
        <InfoList oprions={cardInfoOptions} />
        <InfoList oprions={cardInfoOptions} />
        <InfoList oprions={cardInfoOptions} />
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

      <Block title='Test table' fullWidth>
        <Table maxHeight={400}>
          <THead columns={columns} sorting={{sortedColumn, onchangeSortedColumn: setSortedColumn}} />
          <TBody rowKey='id' columns={columns} data={companies} select={{selectedRow, onChange: setSelectedRow}} />
        </Table>
      </Block>

      <Block title='Test table' fullWidth>
        <Table maxHeight={400}>
          <THead columns={columns} sorting={{sortedColumn, onchangeSortedColumn: setSortedColumn}} />
          <TBody rowKey='id' columns={columns} data={companies} />
        </Table>
      </Block>

    </Stack>
  )
}

export default App
