import styled from 'styled-components';
import React from 'react';
import { toCapitalCase } from 'utils/formatter';
import { CustomerRole } from 'types/customer';

export interface CustomerCardProps {
  name: string;
  role: CustomerRole;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
  justify-content: start;
  padding: ${({ theme }) => theme.spacings.md}
    ${({ theme }) => theme.spacings.md};
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: default;
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.state.selected};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const NameLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RoleLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const CustomerCard: React.FC<CustomerCardProps> = React.memo(
  ({ name, role }) => {
    const firstLetter = name[0].toUpperCase();

    return (
      <Card data-testid={`customer-card-${name}`}>
        <Avatar>{firstLetter}</Avatar>
        <CustomerInfo>
          <NameLabel>{name}</NameLabel>
          <RoleLabel>{toCapitalCase(role)}</RoleLabel>
        </CustomerInfo>
      </Card>
    );
  },
);
