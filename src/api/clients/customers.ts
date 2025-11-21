import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers } from '../graphql-query/queries';
import { UserRole } from '../../types/customer';

export interface Customer {
  id: string;
  name: string;
  role: UserRole;
}

interface ListCustomersResponse {
  listZellerCustomers: {
    items: Customer[];
  };
}

export async function fetchCustomers(): Promise<Customer[]> {
  const result = (await API.graphql(graphqlOperation(ListZellerCustomers))) as {
    data: ListCustomersResponse;
  };

  return result.data.listZellerCustomers.items ?? [];
}
