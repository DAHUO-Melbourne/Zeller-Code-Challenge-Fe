import styled from 'styled-components';

export interface UserCardProps {
  name: string;
  role: 'Admin' | 'Manager';
  avatarUrl?: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: start;
  padding: 12px 0;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: default;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #dbeafe;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d4ed8;
  font-weight: 600;
  font-size: 16px;
`;

const NameLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #1f2937;
`;

const RoleLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
`;

export const UserCard: React.FC<UserCardProps> = ({ name, role }) => {
  const firstLetter = name[0].toUpperCase();

  return (
    <Card data-testid={`user-card-${name}`}>
      <Avatar>{firstLetter}</Avatar>
      <UserInfo>
        <NameLabel>{name}</NameLabel>
        <RoleLabel>{role}</RoleLabel>
      </UserInfo>
    </Card>
  );
};
