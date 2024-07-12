import { createSlug } from '@src/lib/helpers';
import { useUserStore } from '@store/userStore';
import React from 'react';
import './index.scss';
import ModalUserList from '@src/components/Molecules/ModalUserList';

const UserList: React.FC = () => {
  const { users } = useUserStore();
  return (
    <div className="user-list">
      <div className="search-user"></div>
      <div className="user-list-card">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <ModalUserList
                buttonSlug={`${createSlug(user.name)}`}
                buttonTitle={user.name}
                userId={user.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
