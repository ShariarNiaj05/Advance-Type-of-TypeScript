{
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
}
