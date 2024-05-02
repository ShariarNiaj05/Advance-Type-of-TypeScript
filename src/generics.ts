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
}
