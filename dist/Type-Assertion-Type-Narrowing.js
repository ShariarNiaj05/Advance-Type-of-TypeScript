"use strict";
{
    // Type Assertion
    let anything;
    anything = "Next level developer";
    anything.charAt; // accessible string property
    anything = 245;
    anything.toFixed; // accessible number property
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const resultInNumber = kgToGm(5);
    const resultInString = kgToGm("12");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
