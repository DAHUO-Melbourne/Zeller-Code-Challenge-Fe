import { render, screen, fireEvent } from 'test/utils/test-utils';
import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { CustomerRole } from 'types/customer';
import { ROLE_OPTIONS } from 'constants/constants';

const handleChange = jest.fn();

const renderRadioGroup = (props?: Partial<RadioGroupProps>) => {
  const defaultProps = {
    selectedValue: 'ADMIN' as CustomerRole,
    onChange: handleChange,
    options: ROLE_OPTIONS,
    checked: false,
    name: 'user-type',
    title: 'User Type',
  };

  render(<RadioGroup {...defaultProps} {...props} />);
};

describe('RadioGroup component', () => {
  test('renders fieldset and legend correctly', () => {
    renderRadioGroup();

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();

    const legend = screen.getByText('User Type');
    expect(legend.tagName.toLowerCase()).toBe('legend');
  });

  test('renders all radio options', () => {
    renderRadioGroup();

    expect(screen.getByLabelText('Admin')).toBeInTheDocument();
    expect(screen.getByLabelText('Manager')).toBeInTheDocument();

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
  });

  test('selects the correct radio based on selectedValue', () => {
    renderRadioGroup({ selectedValue: 'ADMIN' });

    const admin = screen.getByLabelText('Admin');
    const manager = screen.getByLabelText('Manager');

    expect(admin).toBeChecked();
    expect(manager).not.toBeChecked();
  });

  test('changes selected value when a radio is clicked', () => {
    renderRadioGroup({ selectedValue: 'ADMIN' });

    const managerRadio = screen.getByLabelText('Manager');

    fireEvent.click(managerRadio);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('MANAGER');
  });

  test('clicking admin radio triggers correct onChange value', () => {
    renderRadioGroup({ selectedValue: 'MANAGER' });

    const adminRadio = screen.getByLabelText('Admin');
    fireEvent.click(adminRadio);

    expect(handleChange).toHaveBeenCalledWith('ADMIN');
  });
});
