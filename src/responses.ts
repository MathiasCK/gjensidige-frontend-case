export const err = (e: any) => {
  throw new Error(`${e.status} : ${e.message} `);
};

export const notFound = (pokemon: string) => {
  throw new Error(`404 : Pokemon "${pokemon}" not found`);
};
