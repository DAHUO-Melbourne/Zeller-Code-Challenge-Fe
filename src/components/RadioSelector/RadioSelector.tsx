import styled from 'styled-components';

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
  gap: 12px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${({ checked }) => (checked ? '#DBEAFE' : 'transparent')};
  transition: background-color 0.15s ease;
  &:hover {
    background-color: ${({ checked }) => (checked ? '#BFDBFE' : '#EFF6FF')};
  }
`;

const Radio = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0;
`;

const LabelText = styled.span<{ checked: boolean }>`
  font-size: 14px;
  color: #1f2937;
  font-weight: ${({ checked }) => (checked ? 600 : 400)};
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
    <Wrapper
      checked={checked}
      htmlFor={id}
      data-testid={`radio-selector-${name}-${value}`}
    >
      <Radio
        id={id}
        type='radio'
        value={value}
        checked={checked}
        name={name}
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        onChange={() => onChange(value)}
      />
      <LabelText id={`${id}-label`} checked={checked}>
        {label}
      </LabelText>
    </Wrapper>
  );
};
