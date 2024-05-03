"use strict";
{
    // Generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("BD");
    const resGenericBool = createArrayWithGeneric(true);
    const resGenericString = createArrayWithGeneric("BD");
    const resGenericObject = createArrayWithGeneric({
        id: 22,
        name: "X",
    });
    // tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res2 = createArrayWithTuple("CTG", 4000);
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
