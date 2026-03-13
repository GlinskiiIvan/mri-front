import styles from './App.module.css';
import {Badge, Icon, IconButton} from '../ui/copmonents';

function App() {

  const testClick = () => {
    alert('Test click on component!');
  };

  return (
    <>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
        <Icon name='IMAGE' color='success' size='40' />
      </p>

      <div className='flex-col'>
        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' icon='INFO' status='primary' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='primary' />
          <Badge text='Test badge md' size='md' icon='INFO' status='primary' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='primary' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='primary' />
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
          <Badge text='Test badge xl' size='xl' icon='INFO' status='accent' />
          <Badge text='Test badge lg' size='lg' icon='INFO' status='accent' />
          <Badge text='Test badge md' size='md' icon='INFO' status='accent' />
          <Badge text='Test badge sm' size='sm' icon='INFO' status='accent' />
          <Badge text='Test badge xs' size='xs' icon='INFO' status='accent' />
        </div>


        <div className='flex-row'>
          <Badge text='Test badge xl' size='xl' status='accent' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge lg' size='lg' status='accent' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge md' size='md' status='accent' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge sm' size='sm' status='accent' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
          <Badge text='Test badge xs' size='xs' status='accent' action={<IconButton name='EDIT' size='inherit' onClick={testClick} />} />
        </div>
      </div>
    </>
  )
}

export default App
