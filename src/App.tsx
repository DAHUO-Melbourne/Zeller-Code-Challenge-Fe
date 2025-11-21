import { useState } from 'react';
import { RadioSelector, SectionHeader, UsersList } from './components';
import { toCapitalCase } from './utils/formatter';
import { UserRole } from './types/customer';

function App() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('ADMIN');

  return (
    <div className='App'>
      <SectionHeader title='User Type' />
      <RadioSelector
        label='Admin'
        value='ADMIN'
        checked={selectedRole === 'ADMIN'}
        onChange={() => setSelectedRole('ADMIN')}
        name='user-type'
      />
      <RadioSelector
        label='Manager'
        value='MANAGER'
        checked={selectedRole === 'MANAGER'}
        onChange={() => setSelectedRole('MANAGER')}
        name='user-type'
      />
      <SectionHeader title={`${toCapitalCase(selectedRole)} Users`} />
      <UsersList selectedRole={selectedRole} />
    </div>
  );
}

export default App;
