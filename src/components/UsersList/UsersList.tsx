import { FC, useEffect, useMemo, useState } from 'react';
import { UserRole } from '../../types/customer';
import { Customer, fetchCustomers } from '../../api/clients/customers';
import { UserCard } from '../UserCard/UserCard';

interface UsersListProps {
  selectedRole: UserRole;
}

export const UsersList: FC<UsersListProps> = ({ selectedRole }) => {
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
        <UserCard name={item.name} role={item.role} key={item.id} />
      ))}
    </>
  );
};
