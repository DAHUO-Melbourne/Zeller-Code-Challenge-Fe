import { useState } from 'react';
import { RadioSelector, SectionHeader, CustomersList } from './components';
import { toCapitalCase } from './utils/formatter';
import { CustomerRole } from './types/customer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

function App() {
  const [selectedRole, setSelectedRole] = useState<CustomerRole>('ADMIN');

  return (
    <PageWrapper>
      <main>
        <section aria-labelledby='customer-type-header'>
          <SectionHeader title='User Types' />
          <RadioSelector
            label='Admin'
            value='ADMIN'
            checked={selectedRole === 'ADMIN'}
            onChange={() => setSelectedRole('ADMIN')}
            name='customer-type'
          />
          <RadioSelector
            label='Manager'
            value='MANAGER'
            checked={selectedRole === 'MANAGER'}
            onChange={() => setSelectedRole('MANAGER')}
            name='customer-type'
          />
        </section>
        <section aria-labelledby='customer-list-header'>
          <SectionHeader title={`${toCapitalCase(selectedRole)} Users`} />
          <CustomersList selectedRole={selectedRole} />
        </section>
      </main>
    </PageWrapper>
  );
}

export default App;
