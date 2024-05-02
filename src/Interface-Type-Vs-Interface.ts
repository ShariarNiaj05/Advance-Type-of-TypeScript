{
  // 2-2: Interface, Type Vs Interface

  /****
   * Difference between Type & Interface
   * Type alias can be used in primitive data type. // type rollNumber = number
   * as interface start as object that's why primitive data type can't be declare in object.
   */

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole = User1 & { role: string };

  interface User2 {
    name: string;
    age: number;
  }
  const user1: UserWithRole = {
    name: "Shariar Islam",
    age: 24,
    role: "Web Developer",
  };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Shariar Islam",
    age: 24,
    role: "Web Developer",
  };

  // js => object, array -> object, function -> object
  type Roll1 = number[];
  const rollNumber1: Roll1 = [1, 2, 3];

  // ----------
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3];
  // --------
  type Add1 = (num1: number, num2: number) => number;
  const add1: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;
}
