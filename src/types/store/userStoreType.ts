interface IUserProps {
  users: User[];
}

export interface IUserStore extends IUserProps {
  getUsers: () => User[];
  getUserById: (id: string) => User | undefined;
  addUser: (name: string) => void;
  updateUser: (id: string, newName: string) => void;
  removeUser: (id: string) => void;
}

type User = {
  id: string;
  name: string;
};
