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
  test('Renders CustomerCard with expected content', () => {
    renderCustomerCard();

    const card = screen.getByTestId(`customer-card-${name}`);
    expect(card).toBeInTheDocument();
    expect(within(card).getByText('J')).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  test('Renders correct initial letter in avatar', () => {
    renderCustomerCard({ name: 'Adam Muller' });

    const card = screen.getByTestId('customer-card-Adam Muller');
    const avatar = within(card).getByText('A');

    expect(avatar).toBeInTheDocument();
  });
});
