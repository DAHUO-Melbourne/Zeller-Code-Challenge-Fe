import { FC, useEffect, useMemo, useState } from 'react';
import { CustomerRole } from 'types/customer';
import { Customer, fetchCustomers } from 'api/clients/customers';
import { CustomerCard } from '../CustomerCard/CustomerCard';

interface CustomersListProps {
  selectedRole: CustomerRole;
}

export const CustomersList: FC<CustomersListProps> = ({ selectedRole }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (err) {
        setError('Failed to load customers. Please try again later.');
      }
    };

    load();
  }, []);

  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => c.role === selectedRole);
  }, [customers, selectedRole]);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <>
      {filteredCustomers.map((item) => (
        <CustomerCard name={item.name} role={item.role} key={item.id} />
      ))}
    </>
  );
};
