{
  // conditional type

  // type A1 = null
  type A1 = number;
  type B1 = string;

  // type X = A1 extends null ? true : false // true for type A1 = null
  type X = A1 extends null ? true : false; // false

  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any; // undefined for type B1 = string; and type any for different value rather than undefined

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // check if sheikh have bike or car or ship or tractor
  type CheckValue<T> = T extends keyof Sheikh ? true : false;
  type HasBike = CheckValue<"bike">; //true
  type HasCar = CheckValue<"car">; //true
  type HasShip = CheckValue<"ship">; //true
  type HasTractor = CheckValue<"tractor">; //false
}
