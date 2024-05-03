"use strict";
{
    const arrayOfNumber = [1, 4, 5];
    //   const arrayOfString: string[] = ["1", "4", "5"];
    const arrayOfString = arrayOfNumber.map((number) => number.toString());
    console.log(arrayOfString);
}
