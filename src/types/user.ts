export interface User {
  id: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export interface Users {
  [key: string]: User;
}
