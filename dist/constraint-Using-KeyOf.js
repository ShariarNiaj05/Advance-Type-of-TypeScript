"use strict";
{
    const person1 = "car";
    const person2 = "ship";
    //   console.log(person2);
    //   const gerPropertyValue = <X, Y extends "name" | "age" | "address">
    const gerPropertyValue = (obj, key) => {
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
