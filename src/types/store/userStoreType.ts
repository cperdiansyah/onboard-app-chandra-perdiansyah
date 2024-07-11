interface IUserProps {
  users: User[];
}

export interface IUserStore extends IUserProps {
  getUsers: () => User[];
  getUserById: (id: string) => User | undefined;
  addUser: (name: string) => void;
  updateUser: (id: string, newName: string) => void;
  removeUser: (id: string) => void;
  getUsersByName: (name: string) => User[] | undefined;
  getUserByName: (name: string) => User | undefined;
}

type User = {
  id: string;
  name: string;
};
