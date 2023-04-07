export const convertToObj = (array: any[][]): { [key: string]: any } =>
  array.reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});
