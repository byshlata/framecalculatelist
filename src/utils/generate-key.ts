export const generateKey = (index?: any): string =>
  index ? `${new Date().getTime()}${index}` : `${new Date().getTime()}`;
