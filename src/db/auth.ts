export const fakeAuth = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });
};
