import { User, LoginPayload } from "../types/auth";

const users: User[] = [
  { email: "user1@example.com", password: "password1", token: "token1" },
  { email: "user2@example.com", password: "password2", token: "token2" },
];

export const fakeAuth = async ({
  email,
  password,
}: LoginPayload): Promise<string> => {
  // Simulate an asynchronous authentication process with 1 second delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        resolve(user.token);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  // Simulate an asynchronous user creation process with 1 second delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isEmailTaken = users.some((user) => user.email === email);
      if (isEmailTaken) {
        reject(new Error("Email already exists"));
      } else {
        const token = Math.random().toString(36);
        users.push({ email, password, token });
        resolve(token);
      }
    }, 1000);
  });
};
