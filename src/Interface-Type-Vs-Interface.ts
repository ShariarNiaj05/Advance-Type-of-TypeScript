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

}
