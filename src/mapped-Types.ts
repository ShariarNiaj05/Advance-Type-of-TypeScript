{
  const arrayOfNumber: number[] = [1, 4, 5];

  //   const arrayOfString: string[] = ["1", "4", "5"];
  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );

  console.log(arrayOfString);
}
