import styled from 'styled-components';
import React from 'react';

export interface RadioSelectorProps {
  label: string;
  value: string;
  checked: boolean;
  name: string;
  onChange: (value: string) => void;
}

const Wrapper = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md};
  padding: ${({ theme }) => theme.spacings.sm}
    ${({ theme }) => theme.spacings.md};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ checked, theme }) =>
    checked
      ? theme.colors.state.selected
      : theme.colors.background.transparent};
  transition: background-color 0.15s ease;
  &:hover {
    background-color: ${({ checked, theme }) =>
      checked
        ? theme.colors.state.hoverSelected
        : theme.colors.state.hoverPale};
  }
`;

const Radio = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0;
`;

const LabelText = styled.span<{ checked: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ checked, theme }) =>
    checked ? theme.fontWeights.semiBold : theme.fontWeights.regular};
`;

export const RadioSelector: React.FC<RadioSelectorProps> = ({
  label,
  value,
  checked,
  name,
  onChange,
}) => {
  const id = `${name}-${value}`;

  return (
    <Wrapper checked={checked} data-testid={`radio-selector-${name}-${value}`}>
      <Radio
        id={id}
        type='radio'
        value={value}
        checked={checked}
        name={name}
        onChange={() => onChange(value)}
      />
      <LabelText checked={checked}>{label}</LabelText>
    </Wrapper>
  );
};
