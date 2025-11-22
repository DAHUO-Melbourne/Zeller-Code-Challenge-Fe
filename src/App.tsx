import { useState } from 'react';
import { RadioSelector, SectionHeader, UsersList } from './components';
import { toCapitalCase } from './utils/formatter';
import { UserRole } from './types/customer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

function App() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('ADMIN');

  return (
    <PageWrapper>
      <main>
        <section aria-labelledby='user-type-header'>
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
        </section>
        <section aria-labelledby='user-list-header'>
          <SectionHeader title={`${toCapitalCase(selectedRole)} Users`} />
          <UsersList selectedRole={selectedRole} />
        </section>
      </main>
    </PageWrapper>
  );
}

export default App;
