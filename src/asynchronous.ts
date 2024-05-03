{
  //  basic promise

  //simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Data is something";
      //   const data: unknown = null;
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling createPromise function
  const showData = async (): Promise<string> => {
    const data = await createPromise();
    return data;
  };

  //   console.log(showData());

  // promise with non primitive data type

  type Something = { something: string };
  const createPromise1 = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      //   const data: unknown = null;
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling createPromise function
  const showData1 = async (): Promise<Something> => {
    const data: Something = await createPromise1();
    return data;
  };

  // console.log(showData1());

  // asynchronous promise

  type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getToDo = async (): Promise<TodoType> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  console.log(getToDo());
}
