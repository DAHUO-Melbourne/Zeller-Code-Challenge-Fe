import { useState } from 'react';
import {
  SectionHeader,
  CustomersList,
  PageWrapper,
  RadioGroup,
  PageTitle,
  PageSection,
} from 'components';
import { toCapitalCase } from 'utils/formatter';
import { CustomerRole } from 'types/customer';
import { ROLE_OPTIONS } from 'constants/constants';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { GlobalStyles } from 'theme/GlobalStyles';

function App() {
  const [selectedRole, setSelectedRole] = useState<CustomerRole>('ADMIN');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        <PageTitle>Zeller Customer Management Portal</PageTitle>
        <main>
          <PageSection>
            <RadioGroup
              options={ROLE_OPTIONS}
              title={<SectionHeader title='User Types' />}
              selectedValue={selectedRole}
              onChange={(value: CustomerRole) => setSelectedRole(value)}
              name='customer-type'
            />
          </PageSection>
          <PageSection>
            <SectionHeader title={`${toCapitalCase(selectedRole)} Users`} />
            <CustomersList selectedRole={selectedRole} />
          </PageSection>
        </main>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
