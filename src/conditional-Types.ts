{
  // conditional type

  // type A1 = null
  type A1 = number;
  type B1 = string;

  // type X = A1 extends null ? true : false // true for type A1 = null
  type X = A1 extends null ? true : false; // false

  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any; // undefined for type B1 = string; and type any for different value rather than undefined
}
