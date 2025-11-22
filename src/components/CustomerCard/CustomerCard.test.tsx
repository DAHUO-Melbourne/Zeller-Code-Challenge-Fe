import { render, screen, within } from '../../test/utils/test-utils';
import { CustomerCard, CustomerCardProps } from './CustomerCard';
import { theme } from '../../theme/theme';

const name = 'John Smith';

const renderCustomerCard = (props?: Partial<CustomerCardProps>) => {
  const defaultProps: CustomerCardProps = {
    name,
    role: 'ADMIN',
  };

  return render(<CustomerCard {...defaultProps} {...props} />);
};
describe('CustomerCard component', () => {
  test('Renders CustomerCard with expected html tags and content', () => {
    renderCustomerCard();

    const card = screen.getByTestId(`customer-card-${name}`);
    const avatar = within(card).getByText('J');
    const nameLabel = screen.getByText(name);
    const roleLabel = screen.getByText('Admin');

    expect(card?.tagName.toLowerCase()).toBe('div');
    expect(avatar.tagName.toLowerCase()).toBe('div');
    expect(nameLabel.tagName.toLowerCase()).toBe('span');
    expect(roleLabel.tagName.toLowerCase()).toBe('span');
  });

  test('Renders correct initial letter in avatar', () => {
    renderCustomerCard({ name: 'Adam Muller' });

    const card = screen.getByTestId('customer-card-Adam Muller');
    const avatar = within(card).getByText('A');

    expect(avatar).toBeInTheDocument();
  });

  describe('Styles', () => {
    test('Renders Card with expected layout styles', () => {
      renderCustomerCard();

      const card = screen.getByTestId(`customer-card-${name}`);

      expect(card).toHaveStyle('display: flex');
      expect(card).toHaveStyle('align-items: center');
      expect(card).toHaveStyle(`gap: ${theme.spacings.xs}`);
      expect(card).toHaveStyle(
        `padding: ${theme.spacings.md} ${theme.spacings.md}`,
      );
      expect(card).toHaveStyle(
        `background-color: ${theme.colors.background.default}`,
      );
      expect(card).toHaveStyle(`border-radius: ${theme.borderRadius.lg}`);
      expect(card).toHaveStyle('cursor: default');
    });

    test('Renders Avatar with expected styles', () => {
      renderCustomerCard();

      const card = screen.getByTestId(`customer-card-${name}`);
      const avatar = within(card).getByText('J');

      expect(avatar).toHaveStyle('width: 36px');
      expect(avatar).toHaveStyle('height: 36px');
      expect(avatar).toHaveStyle(`border-radius: ${theme.borderRadius.md}`);
      expect(avatar).toHaveStyle(
        `background-color: ${theme.colors.state.selected}`,
      );
      expect(avatar).toHaveStyle('display: flex');
      expect(avatar).toHaveStyle('justify-content: center');
      expect(avatar).toHaveStyle('align-items: center');
      expect(avatar).toHaveStyle(`color: ${theme.colors.brand.primary}`);
      expect(avatar).toHaveStyle(`font-weight: ${theme.fontWeights.semiBold}`);
      expect(avatar).toHaveStyle(`font-size: ${theme.fontSizes.lg}`);
    });

    test('Renders NameLabel and RoleLabel with expected typography styles', () => {
      renderCustomerCard();

      const nameLabel = screen.getByText(name);
      const roleLabel = screen.getByText('Admin');

      expect(nameLabel).toHaveStyle(`font-size: ${theme.fontSizes.md}`);
      expect(nameLabel).toHaveStyle(`font-weight: ${theme.fontWeights.medium}`);
      expect(nameLabel).toHaveStyle(`color: ${theme.colors.text.primary}`);

      expect(roleLabel).toHaveStyle(`font-size: ${theme.fontSizes.xs}`);
      expect(roleLabel).toHaveStyle(`font-weight: ${theme.fontWeights.medium}`);
      expect(roleLabel).toHaveStyle(`color: ${theme.colors.text.secondary}`);
    });
  });
});
