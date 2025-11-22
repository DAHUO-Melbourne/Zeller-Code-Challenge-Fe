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

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByLabelText('Admin')).toBeInTheDocument();
  });

  test('Calls onChange with correct value when clicked', () => {
    renderRadioSelector();

    fireEvent.click(screen.getByLabelText('Admin'));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('admin');
  });
});
