{
  // Generic  Type

  //   const rollNumbers: number[] = [1, 2, 3];
  const rollNumbers: Array<number> = [1, 2, 3];

  //   const mentors: string[] = ["X", "Y", "Z"];
  const mentors: Array<string> = ["X", "Y", "Z"];

  //   const boolArray: boolean[] = [true, false];
  const boolArray: Array<boolean> = [true, false];

  // Dynamic Generic Type
  type GenericArray<T> = Array<T>;
  const rollNumber1: GenericArray<number> = [1, 2, 3];
  const mentor1: GenericArray<string> = ["X", "Y", "Z"];
  const boolArray1: GenericArray<boolean> = [true, false];

  const user: GenericArray<object> = [
    /* Not Recommended!! Cause data type isn't possible to validate   */
    {
      name: "Shariar",
      age: 101,
    },
    {
      name: "Jank",
      age: "110",
    },
  ];

  const user2: GenericArray<{ name: string; age: number }> = [
    /* Recommended!!   */

    {
      name: "Shariar",
      age: 101,
    },
    {
      name: "Jank",
      age: 110,
    },
  ];

  // Generic Tuple
  interface User {
    name: string;
    email: string;
  }

  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["X", "Y"];
  const userWithId: GenericTuple<number, User> = [
    123,
    {
      name: "Shariar",
      email: "email@gmail.com",
    },
  ];
}
