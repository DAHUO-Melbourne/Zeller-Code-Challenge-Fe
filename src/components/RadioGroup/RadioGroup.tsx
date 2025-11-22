import styled from 'styled-components';
import React from 'react';
import { RadioSelector } from '../RadioSelector/RadioSelector';
import { CustomerRole } from 'types/customer';

export interface RadioOption {
  label: string;
  value: CustomerRole;
}

export interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: CustomerRole;
  onChange: (value: CustomerRole) => void;
  name: string;
  title: React.ReactNode;
}

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StyledLegend = styled.legend`
  padding: 0;
  margin: 0;
`;

const RadioOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  name,
  title,
}) => {
  return (
    <StyledFieldset>
      <StyledLegend>{title}</StyledLegend>
      <RadioOptionsContainer>
        {options.map(({ label, value }) => (
          <RadioSelector
            key={value}
            label={label}
            value={value}
            checked={selectedValue === value}
            name={name}
            onChange={() => onChange(value)}
          />
        ))}
      </RadioOptionsContainer>
    </StyledFieldset>
  );
};
