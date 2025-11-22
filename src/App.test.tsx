import { render, screen, fireEvent } from './test/utils/test-utils';
import App from './App';

const getLabelWrapper = (label: string) => {
  const radioInput = screen.getByLabelText(label);
  return radioInput.parentElement;
};

jest.mock('./components/UsersList/UsersList', () => ({
  UsersList: (props: any) => (
    <div data-testid='mock-users-list' data-role={props.selectedRole}>
      Mock UsersList
    </div>
  ),
}));

describe('App', () => {
  test('Renders with default state ADMIN and correct components', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'User Type' }),
    ).toBeInTheDocument();

    const adminRadio = screen.getByLabelText('Admin');
    const managerRadio = screen.getByLabelText('Manager');
    expect(adminRadio).toBeChecked();
    expect(managerRadio).not.toBeChecked();

    expect(
      screen.getByRole('heading', { name: 'Admin Users' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock-users-list')).toHaveAttribute(
      'data-role',
      'ADMIN',
    );
  });

  test('Updates selectedRole to MANAGER when Manager radio is clicked', () => {
    render(<App />);

    const managerWrapper = getLabelWrapper('Manager');
    const adminRadio = screen.getByLabelText('Admin');
    const managerRadio = screen.getByLabelText('Manager');

    if (managerWrapper) {
      fireEvent.click(managerWrapper);
    } else {
      throw new Error('Manager wrapper not found');
    }

    expect(adminRadio).not.toBeChecked();
    expect(managerRadio).toBeChecked();

    expect(
      screen.getByRole('heading', { name: 'Manager Users' }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('mock-users-list')).toHaveAttribute(
      'data-role',
      'MANAGER',
    );
  });

  test('Allows switching back to ADMIN role', () => {
    render(<App />);

    const adminWrapper = getLabelWrapper('Admin');
    const managerWrapper = getLabelWrapper('Manager');
    const adminRadio = screen.getByLabelText('Admin');
    const managerRadio = screen.getByLabelText('Manager');

    if (managerWrapper) {
      fireEvent.click(managerWrapper);
    }

    if (adminWrapper) {
      fireEvent.click(adminWrapper);
    } else {
      throw new Error('Admin wrapper not found');
    }

    expect(adminRadio).toBeChecked();
    expect(managerRadio).not.toBeChecked();
    expect(
      screen.getByRole('heading', { name: 'Admin Users' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock-users-list')).toHaveAttribute(
      'data-role',
      'ADMIN',
    );
  });
});
