import { useState } from 'react';
import { SectionHeader, CustomersList } from './components';
import { toCapitalCase } from './utils/formatter';
import { CustomerRole } from './types/customer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { RadioGroup } from './components/RadioGroup/RadioGroup';
import { ROLE_OPTIONS } from './constants/constants';

function App() {
  const [selectedRole, setSelectedRole] = useState<CustomerRole>('ADMIN');

  return (
    <PageWrapper>
      <main>
        <section>
          <RadioGroup
            options={ROLE_OPTIONS}
            title={<SectionHeader title='User Types' />}
            selectedValue={selectedRole}
            onChange={(value: CustomerRole) => setSelectedRole(value)}
            name='customer-type'
          />
        </section>
        <section>
          <SectionHeader title={`${toCapitalCase(selectedRole)} Users`} />
          <CustomersList selectedRole={selectedRole} />
        </section>
      </main>
    </PageWrapper>
  );
}

export default App;
