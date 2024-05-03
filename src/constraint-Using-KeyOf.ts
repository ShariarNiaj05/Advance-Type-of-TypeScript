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

  //   console.log(person2);

  //   const gerPropertyValue = <X, Y extends "name" | "age" | "address">
  const gerPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr X",
    age: 26,
    address: "CTG",
  };

  const car = {
    model: "model",
    year: 2026,
    origin: "Japan",
  };

  const result1 = gerPropertyValue(user, "name");
  const result2 = gerPropertyValue(car, "year");

  console.log({ result1 }, { result2 });
}
