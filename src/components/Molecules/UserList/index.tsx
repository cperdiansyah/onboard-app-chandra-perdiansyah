import { Input } from '@components/ui/input';
import { useUserStore } from '@store/userStore';
import React, { useState } from 'react';
import './index.scss';

const UserList: React.FC = () => {
  const { users, addUser, removeUser } = useUserStore();
  const [userName, setUserName] = useState('');

  return (
    <div className="user-list">
      <div className="search-user">
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Sarch"
        />
      </div>
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
