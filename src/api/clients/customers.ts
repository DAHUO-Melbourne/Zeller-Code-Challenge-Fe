import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers } from '../graphql-query/queries';
import { CustomerRole } from 'types/customer';

export interface Customer {
  id: string;
  name: string;
  role: CustomerRole;
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
