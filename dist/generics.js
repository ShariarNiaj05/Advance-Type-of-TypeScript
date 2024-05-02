"use strict";
{
    // Generic  Type
    //   const rollNumbers: number[] = [1, 2, 3];
    const rollNumbers = [1, 2, 3];
    //   const mentors: string[] = ["X", "Y", "Z"];
    const mentors = ["X", "Y", "Z"];
    //   const boolArray: boolean[] = [true, false];
    const boolArray = [true, false];
    const rollNumber1 = [1, 2, 3];
    const mentor1 = ["X", "Y", "Z"];
    const boolArray1 = [true, false];
    const user = [
        /* Not Recommended!! Cause data type isn't possible to validate   */
        {
            name: "Shariar",
            age: 101,
        },
        {
            name: "Jank",
            age: "110",
        },
    ];
    const user2 = [
        /* Recommended!!   */
        {
            name: "Shariar",
            age: 101,
        },
        {
            name: "Jank",
            age: 110,
        },
    ];
    const manush = ["X", "Y"];
    const userWithId = [
        123,
        {
            name: "Shariar",
            email: "email@gmail.com",
        },
    ];
}
