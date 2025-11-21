import styled from 'styled-components';

interface SectionHeaderProps {
  title: string;
}

const Wrapper = styled.div`
  padding: 24px 0;
  border-top: 1px solid #e5e7eb;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <Wrapper data-testid={`SectionHeader-wrapper-${title}`}>
      <Title>{title}</Title>
    </Wrapper>
  );
};
