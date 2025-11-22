import { fireEvent } from 'test/utils/test-utils';
import { render, screen } from 'test/utils/test-utils';
import { RadioSelector, RadioSelectorProps } from './RadioSelector';

const handleChange = jest.fn();

const renderRadioSelector = (props?: Partial<RadioSelectorProps>) => {
  const defaultProps = {
    label: 'Admin',
    value: 'admin',
    checked: false,
    name: 'role',
    onChange: handleChange,
  };

  return render(<RadioSelector {...defaultProps} {...props} />);
};

describe('RadioSelector component', () => {
  beforeEach(() => {
    handleChange.mockClear();
  });

  test('Renders the RadioSelector component correctly with expected html tags', () => {
    renderRadioSelector();

    const radio = screen.getByRole('radio');
    const wrapper = screen.getByTestId('radio-selector-role-admin');
    const labelText = screen.getByText('Admin');

    expect(wrapper?.tagName.toLowerCase()).toBe('label');
    expect(radio.tagName.toLowerCase()).toBe('input');
    expect(labelText.tagName.toLowerCase()).toBe('span');
  });

  test('Calls onChange with correct value when clicked', () => {
    renderRadioSelector();

    const wrapper = screen.getByTestId('radio-selector-role-admin');
    fireEvent.click(wrapper);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('admin');
  });
});
