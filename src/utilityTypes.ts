{
  // pick utility type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

//   type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;




    // omit 
    type contactInfo = Omit<Person, "name" | "age">




}
