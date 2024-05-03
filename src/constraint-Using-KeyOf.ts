{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually written
  const person1: Owner = "car";

  // ----------
  type Owner2 = keyof Vehicle;
  const person2: Owner2 = "ship";

  console.log(person2);
}
