import { v4 as uuidv4 } from "uuid";
import { User, Users } from "../types/user";

const idOne = uuidv4();
const idTwo = uuidv4();

let users: Users = {
  [idOne]: {
    id: idOne,
    firstName: "Robin",
    lastName: "Wieruch",
    isAdmin: true,
  },
  [idTwo]: {
    id: idTwo,
    firstName: "Dave",
    lastName: "Davddis",
    isAdmin: false,
  },
};

export const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => reject(new Error("Users not found")), 250);
    }

    setTimeout(() => resolve(Object.values(users)), 250);
  });

// usage (2)
// const doGetUsers = async () => {
//     try {
//       const result = await getUsers();
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const getUser = (id: string) =>
  new Promise((resolve, reject) => {
    const user = users[id];

    if (!user) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    setTimeout(() => resolve(users[id]), 250);
  });

// usage
// const doGetUsers = async (id) => {
//     try {
//       const result = await getUser(id);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   doGetUsers('1');

export const createUser = (data: {
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
}) =>
  new Promise((resolve, reject) => {
    if (!data.firstName || !data.lastName) {
      reject(new Error("Not all information provided"));
    }

    const id = uuidv4();
    const newUser = { id, ...data, isAdmin: !!data.isAdmin };

    users = { ...users, [id]: newUser };

    setTimeout(() => resolve(true), 250);
  });

// usage
// const doCreateUser = async (data: { firstName: string; lastName: string }) => {
//   try {
//     const result = await createUser(data);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// doCreateUser({ firstName: "Liam", lastName: "Wieruch" });

export const updateUser = (
  id: string,
  data: {
    firstName?: string;
    lastName?: string;
    isAdmin?: boolean;
  }
) =>
  new Promise((resolve, reject) => {
    if (!users[id]) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    users[id] = { ...users[id], ...data };

    return setTimeout(() => resolve(true), 250);
  });

// usage
// const doUpdateUser = async (
//   id: string,
//   data: {
//     firstName?: string;
//     lastName?: string;
//     isAdmin?: boolean;
//   }
// ) => {
//   try {
//     const result = await updateUser(id, data);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// doUpdateUser("1", { isAdmin: false });

export const deleteUser = (id: string) =>
  new Promise((resolve, reject) => {
    const { [id]: user, ...rest } = users;

    if (!user) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    users = { ...rest };

    return setTimeout(() => resolve(true), 250);
  });

// usage
// const doDeleteUser = async (id: string) => {
//   try {
//     const result = await deleteUser(id);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// doDeleteUser('1');
