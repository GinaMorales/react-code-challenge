export const getRandomNumberInteger = (min: number, max: number) => (
  Math.floor(Math.random() * ((max + 1) - min)) + min
);

export const getRandomNumberFloat = () => Math.round(Math.random() * 100) / 100;

export const removeDuplicate = (array: Array<any>, nameValue: string) => (
  array.reduce((acc: any, item: any) => {
    if (!acc.find((mineral: any) => mineral[nameValue] === item[nameValue])) {
      acc.push(item);
    }
    return acc;
  }, []));