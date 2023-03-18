export const err = (message: string) => {
  throw new Error(message);
};

export const notFound = (pokemon: string) => {
  alert(`404 : Pokemon "${pokemon}" not found`);
  throw new Error(`404 : Pokemon "${pokemon}" not found`);
};
