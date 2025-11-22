import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacings.md};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacings.sm};
  }
`;
