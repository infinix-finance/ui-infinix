export const mockRequest = <T>(
  responsePayload: T,
  timeout: number = 2000
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(responsePayload);
    }, timeout);
  });
};
