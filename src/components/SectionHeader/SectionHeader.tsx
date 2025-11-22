import styled from 'styled-components';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  id?: string;
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.lg} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, id }) => {
  return (
    <Wrapper data-testid={`SectionHeader-wrapper-${title}`} id={id}>
      <Title>{title}</Title>
    </Wrapper>
  );
};
