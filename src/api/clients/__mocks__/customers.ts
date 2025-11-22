import { mockCustomers } from 'test/mocks/customerMocks';

export const fetchCustomers = jest.fn();

fetchCustomers.mockResolvedValue(mockCustomers);
