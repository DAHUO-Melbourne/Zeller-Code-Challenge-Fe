import { render, screen, within } from 'test/utils/test-utils';
import { CustomerCard, CustomerCardProps } from './CustomerCard';

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
});
