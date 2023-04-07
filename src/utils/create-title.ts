export const createTitle = (defaultTitle: string, addedData: any[][]): string => {
  return `${defaultTitle} ${addedData
    .map((element) => (element[0] && element[1] ? `${element[0]} ${element[1]}` : ''))
    .join(' ')
    .trim()}`;
};
