{
  const arrayOfNumber: number[] = [1, 4, 5];

  //   const arrayOfString: string[] = ["1", "4", "5"];
  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );

  //   console.log(arrayOfString);

  // ---------

  type AreaNumber = {
    height: number;
    width: number;
  };

  /*  type AreaString = {
    height: string;
    width: string;
    };
     */

  type Height = AreaNumber["height"]; // lookup type

  /* type AreaString = {
    //mapped type
    [key in keyof AreaNumber]: string;
  }; */

  // T => { height: string; width: number }
  type AreaString<T> = {
    //mapped type
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
