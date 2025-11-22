import { render, screen, waitFor } from '../../test/utils/test-utils';
import { UsersList } from './UsersList';
import { fetchCustomers } from '../../api/clients/customers';
import { mockCustomers } from '../../test/mocks/customerMocks';

jest.mock('../../api/clients/customers');

const mockFetchCustomers = fetchCustomers as jest.Mock;

describe('UsersList Component', () => {
  beforeEach(() => {
    mockFetchCustomers.mockClear();
    mockFetchCustomers.mockResolvedValue(mockCustomers);
  });

  test('Only renders MANAGER users when api returns data successfully', async () => {
    render(<UsersList selectedRole='MANAGER' />);

    await waitFor(() => {
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    });

    expect(mockFetchCustomers).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Alice Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie Brown')).not.toBeInTheDocument();
  });

  test('Renders error message when api returns error', async () => {
    mockFetchCustomers.mockRejectedValue(new Error('API failed'));

    render(<UsersList selectedRole='MANAGER' />);

    await waitFor(() => {
      expect(
        screen.getByText('Failed to load customers. Please try again later.'),
      ).toBeInTheDocument();
    });
    expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
  });
});
