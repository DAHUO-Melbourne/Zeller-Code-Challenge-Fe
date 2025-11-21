import { render, screen, within } from '@testing-library/react';
import { UserCard, UserCardProps } from './UserCard';

const renderUserCard = (props?: Partial<UserCardProps>) => {
  const defaultProps: UserCardProps = {
    name: 'John Smith',
    role: 'ADMIN',
  };

  return render(<UserCard {...defaultProps} {...props} />);
};

describe('UserCard component', () => {
  test('Renders UserCard with expected html tags and content', () => {
    renderUserCard();

    const card = screen.getByTestId('user-card-John Smith');
    const avatar = within(card).getByText('J');
    const nameLabel = screen.getByText('John Smith');
    const roleLabel = screen.getByText('Admin');

    expect(card.tagName.toLowerCase()).toBe('div');
    expect(avatar.tagName.toLowerCase()).toBe('div');
    expect(nameLabel.tagName.toLowerCase()).toBe('span');
    expect(roleLabel.tagName.toLowerCase()).toBe('span');
  });

  test('Renders correct initial letter in avatar', () => {
    renderUserCard({ name: 'Adam Muller' });

    const card = screen.getByTestId('user-card-Adam Muller');
    const avatar = within(card).getByText('A');

    expect(avatar).toBeInTheDocument();
  });

  describe('Styles', () => {
    test('Renders Card with expected layout styles', () => {
      renderUserCard();

      const card = screen.getByTestId('user-card-John Smith');

      expect(card).toHaveStyle('display: flex');
      expect(card).toHaveStyle('align-items: center');
      expect(card).toHaveStyle('gap: 8px');
      expect(card).toHaveStyle('padding: 12px 0');
      expect(card).toHaveStyle('background-color: #ffffff');
      expect(card).toHaveStyle('border-radius: 10px');
      expect(card).toHaveStyle('cursor: default');
    });

    test('Renders Avatar with expected styles', () => {
      renderUserCard();

      const card = screen.getByTestId('user-card-John Smith');
      const avatar = within(card).getByText('J');

      expect(avatar).toHaveStyle('width: 36px');
      expect(avatar).toHaveStyle('height: 36px');
      expect(avatar).toHaveStyle('border-radius: 8px');
      expect(avatar).toHaveStyle('background-color: #DBEAFE');
      expect(avatar).toHaveStyle('display: flex');
      expect(avatar).toHaveStyle('justify-content: center');
      expect(avatar).toHaveStyle('align-items: center');
      expect(avatar).toHaveStyle('color: #1d4ed8');
      expect(avatar).toHaveStyle('font-weight: 600');
      expect(avatar).toHaveStyle('font-size: 16px');
    });

    test('Renders NameLabel and RoleLabel with expected typography styles', () => {
      renderUserCard();

      const nameLabel = screen.getByText('John Smith');
      const roleLabel = screen.getByText('Admin');

      expect(nameLabel).toHaveStyle('font-size: 15px');
      expect(nameLabel).toHaveStyle('font-weight: 500');
      expect(nameLabel).toHaveStyle('color: #1f2937');

      expect(roleLabel).toHaveStyle('font-size: 12px');
      expect(roleLabel).toHaveStyle('font-weight: 500');
      expect(roleLabel).toHaveStyle('color: #6b7280');
    });
  });
});
