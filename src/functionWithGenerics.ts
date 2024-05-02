{
  // Generic
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("BD");

  const resGenericBool = createArrayWithGeneric<boolean>(true);
  const resGenericString = createArrayWithGeneric<string>("BD");
  const resGenericObject = createArrayWithGeneric<{
    id: number;
    name: string;
  }>({
    id: 22,
    name: "X",
  });

  // tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple<string, number>("CTG", 4000);

  /* const resGenericBool = createArrayWithGeneric<boolean>(true);
  const resGenericString = createArrayWithGeneric<string>("BD");
  const resGenericObject = createArrayWithGeneric<{
    id: number;
    name: string;
  }>({
    id: 22,
    name: "X",
  }); */
}
