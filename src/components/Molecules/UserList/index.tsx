import { Button } from '@src/components/ui/button';
import { createSlug } from '@src/lib/helpers';
import { useUserStore } from '@store/userStore';
import React from 'react';
import './index.scss';

const UserList: React.FC = () => {
  const { users } = useUserStore();
  console.log(users);
  return (
    <div className="user-list">
      <div className="search-user"></div>
      <div className="user-list-card">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Button variant="outline" className={`${createSlug(user.name)}`}>
                {user.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
