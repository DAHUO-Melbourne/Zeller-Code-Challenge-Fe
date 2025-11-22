import { fireEvent } from '../../test/utils/test-utils';
import { render, screen } from '../../test/utils/test-utils';
import { RadioSelector, RadioSelectorProps } from './RadioSelector';
import { theme } from '../../theme/theme';

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

  describe('Styles', () => {
    describe('Wrapper styles', () => {
      test('Renders the wrapper correctly with expected basic static styles', () => {
        renderRadioSelector();

        const wrapper = screen.getByTestId('radio-selector-role-admin');
        expect(wrapper).toHaveStyle('display: flex');
        expect(wrapper).toHaveStyle('align-items: center');
        expect(wrapper).toHaveStyle(`gap: ${theme.spacings.md}`);
        expect(wrapper).toHaveStyle(
          `padding: ${theme.spacings.sm} ${theme.spacings.md}`,
        );
        expect(wrapper).toHaveStyle('cursor: pointer');
        expect(wrapper).toHaveStyle(`border-radius: ${theme.borderRadius.md}`);
        expect(wrapper).toHaveStyle('transition: background-color 0.15s ease');
      });

      test('Render expected background-color when unChecked, including hover', () => {
        renderRadioSelector();

        const wrapper = screen.getByTestId('radio-selector-role-admin');

        expect(wrapper).toHaveStyle(
          `background-color: ${theme.colors.background.transparent};`,
        );

        expect(wrapper).toHaveStyleRule(
          'background-color',
          theme.colors.state.hoverPale,
          {
            modifier: ':hover',
          },
        );
      });

      test('Renders expected background-color when checked, including hover', () => {
        renderRadioSelector({ checked: true });

        const wrapper = screen.getByTestId('radio-selector-role-admin');
        expect(wrapper).toHaveStyle(
          `background-color: ${theme.colors.state.selected};`,
        );
        expect(wrapper).toHaveStyleRule(
          'background-color',
          theme.colors.state.hoverSelected,
          {
            modifier: ':hover',
          },
        );
      });
    });

    test('Renders the Radio with expected static styles', () => {
      renderRadioSelector({ checked: true });

      const radio = screen.getByRole('radio');
      expect(radio).toHaveStyle('width: 16px');
      expect(radio).toHaveStyle('height: 16px');
      expect(radio).toHaveStyle('margin: 0');
      expect(radio).toHaveStyle('cursor: pointer');
    });

    describe('LabelText styles', () => {
      test('Renders the LabelText correctly with expected static styles', () => {
        renderRadioSelector({ checked: true });

        const labelText = screen.getByText('Admin');
        expect(labelText).toHaveStyle(`font-size: ${theme.fontSizes.sm}`);
        expect(labelText).toHaveStyle(`color: ${theme.colors.text.primary}`);
      });

      test('Renders expected font-weight when unChecked', () => {
        renderRadioSelector();

        const labelText = screen.getByText('Admin');
        expect(labelText).toHaveStyle(
          `font-weight: ${theme.fontWeights.regular}`,
        );
      });

      test('Renders expected font-weight when checked', () => {
        renderRadioSelector({ checked: true });

        const labelText = screen.getByText('Admin');
        expect(labelText).toHaveStyle(
          `font-weight: ${theme.fontWeights.semiBold}`,
        );
      });
    });
  });

  test('Calls onChange with correct value when clicked', () => {
    renderRadioSelector();

    const wrapper = screen.getByTestId('radio-selector-role-admin');
    fireEvent.click(wrapper);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('admin');
  });
});
