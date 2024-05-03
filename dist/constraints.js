"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 222,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: true,
    });
    //   const student3 = addCourseToStudent({ emni: "emni" });
    // const student3 = addCourseToStudent({ emni: "emni" }); //Object literal may only specify known properties, and 'emni' does not exist in type '{ id: number; name: string; email: string; }'
}
