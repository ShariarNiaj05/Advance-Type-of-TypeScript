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
  type ContactInfo = Omit<Person, "name" | "age">;

  // require
  type PersonRequireType = Required<Person>;

  // partial

  type PersonPartial = Partial<Person>;

  // readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "X",
    age: 200,

    contactNo: "5464684551",
  };
  //   person1.name = "Y"; //Cannot assign to 'name' because it is a read-only property.
}
