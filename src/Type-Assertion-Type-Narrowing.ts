{
  // Type Assertion
  let anything: any;
  anything = "Next level developer";
  (anything as string).charAt; // accessible string property

  anything = 245;
  (anything as number).toFixed; // accessible number property

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const resultInNumber = kgToGm(5) as number;
  console.log(kgToGm("12"));
}
