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
    weight: number;
  };

  /*  type AreaString = {
    height: string;
    weight: string;
    };
     */
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
}
